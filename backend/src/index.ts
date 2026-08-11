import { Hono } from 'hono';
import { cors } from 'hono/cors';

interface Env {
  ROUTER_API_KEY?: string;
  ROUTER_BASE_URL?: string;
  ROUTER_MODEL?: string;
  ENVIRONMENT?: string;
}

interface RouterEnvelope {
  type?: string;
  error?: { message?: string };
  message?: string;
  choices?: Array<{ message?: { content?: string }; finish_reason?: string }>;
  usage?: { total_tokens?: number };
  model?: string;
}

const DEFAULT_ROUTER_BASE_URL = 'https://router.slyxup.online/v1';
const DEFAULT_ROUTER_MODEL = 'oc/deepseek-v4-flash-free';

function extractContent(bodyText: string): string {
  const s = bodyText.trim();
  const start = s.indexOf('{');
  if (start === -1) throw new Error('No JSON in router response');
  let depth = 0;
  let inString = false;
  for (let i = start; i < s.length; i++) {
    const ch = s[i];
    if (ch === '\\') { i++; continue; }
    if (ch === '"') inString = !inString;
    else if (!inString) {
      if (ch === '{') depth++;
      else if (ch === '}') {
        depth--;
        if (depth === 0) {
          const data = JSON.parse(s.slice(start, i + 1)) as RouterEnvelope;
          const content = data?.choices?.[0]?.message?.content;
          if (typeof content === 'string' && content.length > 0) return content;
          throw new Error(`Empty response (finish: ${data?.choices?.[0]?.finish_reason})`);
        }
      }
    }
  }
  throw new Error('Unclosed JSON in router response');
}

const app = new Hono<{ Bindings: Env }>();

app.use(
  '/api/ai/*',
  cors({
    origin: (origin) => {
      if (!origin) return 'https://tools.slyxup.in';
      return ['https://tools.slyxup.in', 'http://localhost:4321', 'http://localhost:8789'].includes(origin)
        ? origin
        : 'https://tools.slyxup.in';
    },
    allowMethods: ['POST', 'OPTIONS'],
    allowHeaders: ['Content-Type'],
  }),
);

app.get('/api/health', (c) => c.json({ ok: true, env: c.env.ENVIRONMENT ?? 'dev' }));

interface GoogleResult {
  position: number;
  url: string;
  title: string;
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function parseGoogleResults(html: string): GoogleResult[] {
  const results: GoogleResult[] = [];
  const anchorRe = /<a[^>]*href="\/url\?q=([^&"]+)[^"]*"[^>]*>(.*?)<\/a>/g;
  let m: RegExpExecArray | null;
  while ((m = anchorRe.exec(html)) !== null && results.length < 20) {
    const url = decodeEntities(m[1]);
    if (!/^https?:\/\//.test(url)) continue;
    const title = decodeEntities(m[2].replace(/<[^>]+>/g, '')).trim();
    results.push({ position: results.length + 1, url, title });
  }
  return results;
}

function parseDuckDuckGoResults(html: string): GoogleResult[] {
  const results: GoogleResult[] = [];
  const anchorRe = /<a[^>]*class="result__a"[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g;
  let m: RegExpExecArray | null;
  while ((m = anchorRe.exec(html)) !== null && results.length < 20) {
    const url = decodeEntities(m[1]);
    if (!/^https?:\/\//.test(url)) continue;
    const title = decodeEntities(m[2].replace(/<[^>]+>/g, '')).trim();
    results.push({ position: results.length + 1, url, title });
  }
  return results;
}

function parseBingRssResults(xml: string): GoogleResult[] {
  const results: GoogleResult[] = [];
  const itemRe = /<item>[\s\S]*?<\/item>/g;
  let m: RegExpExecArray | null;
  while ((m = itemRe.exec(xml)) !== null && results.length < 20) {
    const item = m[0];
    const titleM = item.match(/<title>(.*?)<\/title>/);
    const linkM = item.match(/<link>(.*?)<\/link>/);
    const url = linkM ? decodeEntities(linkM[1].trim()) : '';
    if (!/^https?:\/\//.test(url)) continue;
    const title = titleM ? decodeEntities(titleM[1].replace(/<[^>]+>/g, '')).trim() : '';
    results.push({ position: results.length + 1, url, title });
  }
  return results;
}

const SEARCH_PROVIDERS = ['bing', 'duckduckgo', 'google'] as const;
const SEARCH_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36';

async function fetchSearchResults(provider: (typeof SEARCH_PROVIDERS)[number], keyword: string): Promise<GoogleResult[]> {
  const q = encodeURIComponent(keyword);
  let url: string;
  if (provider === 'bing') url = `https://www.bing.com/search?q=${q}&format=rss&count=20&setlang=en`;
  else if (provider === 'duckduckgo') url = `https://html.duckduckgo.com/html/?q=${q}`;
  else url = `https://www.google.com/search?q=${q}&num=20&hl=en&gbv=1`;

  const res = await fetch(url, {
    headers: { 'User-Agent': SEARCH_UA, 'Accept-Language': 'en-US,en;q=0.9' },
  });
  if (!res.ok) throw new Error(`${provider} status ${res.status}`);
  const body = await res.text();

  let results: GoogleResult[];
  if (provider === 'bing') results = parseBingRssResults(body);
  else if (provider === 'duckduckgo') results = parseDuckDuckGoResults(body);
  else results = parseGoogleResults(body);

  if (results.length === 0) throw new Error(`${provider} returned no results`);
  return results;
}

app.post('/api/seo/rank', async (c) => {
  const body = await c.req.json().catch(() => null);
  const keyword = (body?.keyword ?? '').toString().trim();
  const domain = (body?.domain ?? '').toString().trim();
  if (!keyword || !domain) return c.json({ error: 'keyword and domain are required' }, 400);

  let results: GoogleResult[] = [];
  let providerUsed = '';
  const errors: string[] = [];
  for (let attempt = 0; attempt < 3 && results.length === 0; attempt++) {
    for (const provider of SEARCH_PROVIDERS) {
      try {
        results = await fetchSearchResults(provider, keyword);
        providerUsed = provider;
        break;
      } catch (err) {
        const msg = `${provider}: ${(err as Error).message}`;
        console.warn(`[seo/rank] attempt ${attempt + 1} ${msg}`);
        errors.push(msg);
      }
    }
  }
  if (results.length === 0) return c.json({ error: 'Search provider unavailable', details: errors }, 502);

  const domainNorm = domain.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '').toLowerCase();

  let rank: number | null = null;
  let matchedUrl: string | null = null;
  results.forEach((r) => {
    const host = r.url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '').toLowerCase();
    if (host === domainNorm && rank === null) {
      rank = r.position;
      matchedUrl = r.url;
    }
  });

  return c.json({ keyword, domain: domainNorm, rank, matchedUrl, totalResults: results.length, provider: providerUsed });
});

app.post('/api/ai/rewrite', async (c) => {
  const apiKey = c.env.ROUTER_API_KEY;
  if (!apiKey) return c.json({ error: 'Server not configured for AI' }, 500);

  const body = await c.req.json().catch(() => null);
  const text = (body?.text ?? '').toString().trim();
  const mode = (body?.mode ?? 'humanize').toString();
  if (!text) return c.json({ error: 'text is required' }, 400);
  if (text.length > 8000) return c.json({ error: 'Text too long (max 8000 chars)' }, 400);

  const baseUrl = c.env.ROUTER_BASE_URL ?? DEFAULT_ROUTER_BASE_URL;
  const model = c.env.ROUTER_MODEL ?? DEFAULT_ROUTER_MODEL;

  const systemPrompt =
    mode === 'humanize'
      ? 'You are a skilled humanizer. Rewrite the given AI-generated text so it sounds natural, conversational, and human-written. Vary sentence length, remove robotic phrasing, clichés and repetitive structures, keep the original meaning and facts intact, and do not add new claims. Output only the rewritten text.'
      : 'You are a professional paraphraser. Rewrite the given text with different vocabulary and sentence structure while preserving the exact meaning, tone, and factual content. Output only the rewritten text.';

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: text },
      ],
      temperature: 0.8,
      top_p: 0.95,
      max_tokens: 2048,
      stream: false,
      enable_thinking: false,
    }),
  });

  const bodyText = await res.text();
  if (!res.ok) {
    return c.json({ error: `AI service error (${res.status})` }, 502);
  }

  try {
    const content = extractContent(bodyText);
    return c.json({ content });
  } catch (err) {
    return c.json({ error: (err as Error).message }, 502);
  }
});

export default app;
