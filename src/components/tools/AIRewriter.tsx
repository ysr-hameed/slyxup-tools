import { useState } from 'react';
import { Copy, Check, Wand2, Loader2 } from 'lucide-react';

interface Props {
  mode: 'humanize' | 'paraphrase';
  heading: string;
  placeholder: string;
  hint: string;
}

export default function AIRewriter({ mode, heading, placeholder, hint }: Props) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [chars, setChars] = useState(100);

  async function run() {
    const text = input.trim();
    if (!text) return;
    setLoading(true);
    setError('');
    setOutput('');
    try {
      const res = await fetch('/api/ai/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, mode }),
      });
      const raw = await res.text();
      let data: { content?: string; error?: string } = {};
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        throw new Error(raw.slice(0, 120) || 'Invalid response from server');
      }
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong');
      if (!data.content) throw new Error('Empty response');
      setOutput(data.content);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Network error');
    } finally {
      setLoading(false);
    }
  }

  async function copy() {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  }

  function fillSample() {
    setInput(
      'In today\'s fast-paced digital landscape, leveraging cutting-edge AI technology can significantly enhance your productivity and streamline your workflow processes, thereby enabling you to achieve optimal results in a more efficient manner.',
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="label mb-0">Your text</label>
            <button className="text-xs font-medium hover:underline" style={{ color: 'var(--color-volt-400)' }} onClick={fillSample} type="button">
              Use sample
            </button>
          </div>
          <textarea
            className="input min-h-64 resize-y font-normal"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
          />
          <p className="mt-1 text-right text-xs" style={{ color: 'var(--ws-text-dim)' }}>{input.length}/8000 chars</p>
        </div>

        <div>
          <label className="label">Result</label>
          <div className="relative">
            <textarea
              className="input min-h-64 resize-y font-normal"
              style={{ backgroundColor: 'var(--ws-bg-soft)' }}
              value={output}
              readOnly
              placeholder={loading ? 'Rewriting...' : hint}
            />
            {output && (
              <button className="absolute right-2 top-2 rounded-md p-1.5 shadow" style={{ backgroundColor: 'var(--ws-bg)', color: 'var(--ws-text-muted)', border: '1px solid var(--ws-border)' }} onClick={copy} aria-label="Copy result">
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {error && (
        <p className="rounded-lg px-3 py-2 text-sm" style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#f87171' }}>
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <label className="label mb-0">Tone / length</label>
        <select className="input w-48" value={chars} onChange={(e) => setChars(Number(e.target.value))}>
          <option value={100}>Standard</option>
          <option value={70}>More concise</option>
          <option value={130}>More detailed</option>
        </select>
        <button className="btn-primary ml-auto" onClick={run} disabled={loading || !input.trim()}>
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
          {loading ? 'Rewriting...' : `${heading} Now`}
        </button>
      </div>

      <p className="text-center text-xs" style={{ color: 'var(--ws-text-dim)' }}>Your text is sent to an AI model to be rewritten. We do not store your content.</p>
    </div>
  );
}
