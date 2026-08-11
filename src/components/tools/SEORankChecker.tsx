import { useState } from 'react';
import { Search, Loader2, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function SEORankChecker(_props: { key?: string }) {
  const [keyword, setKeyword] = useState('');
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<null | { rank: number | null; matchedUrl: string | null; totalResults: number; keyword: string; domain: string }>(null);
  const [history, setHistory] = useState<Array<{ keyword: string; domain: string; rank: number | null; at: string }>>([]);

  async function check() {
    if (!keyword.trim() || !domain.trim()) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/seo/rank', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword, domain }),
      });
      const data = await res.json() as { rank: number | null; matchedUrl: string | null; totalResults: number; keyword: string; domain: string; error?: string };
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong');
      setResult(data);
      setHistory((h) => [
        { keyword, domain, rank: data.rank, at: new Date().toLocaleTimeString() },
        ...h.slice(0, 9),
      ]);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
        <div>
          <label className="label">Keyword</label>
          <input
            className="input"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && check()}
            placeholder="e.g. free invoice generator"
          />
        </div>
        <div>
          <label className="label">Your domain</label>
          <input
            className="input"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && check()}
            placeholder="example.com"
          />
        </div>
        <div className="flex items-end">
          <button className="btn-primary w-full sm:w-auto" onClick={check} disabled={loading || !keyword.trim() || !domain.trim()}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            Check Rank
          </button>
        </div>
      </div>

      {error && <p className="rounded-lg px-3 py-2 text-sm" style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: '#f87171' }}>{error}</p>}

      {result && (
        <div className="rounded-xl p-5" style={{ border: '1px solid var(--ws-border)', backgroundColor: 'var(--ws-bg)' }}>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold text-white" style={{ backgroundColor: result.rank ? (result.rank <= 3 ? '#059669' : result.rank <= 10 ? '#d97706' : '#dc2626') : '#64748b' }}>
              {result.rank ?? 'N/A'}
            </div>
            <div>
              <p className="font-semibold" style={{ color: 'var(--ws-text)' }}>
                "{result.keyword}" on {result.domain}
              </p>
              <p className="text-sm" style={{ color: 'var(--ws-text-dim)' }}>
                {result.rank
                  ? result.rank <= 3 ? 'Excellent — you are on the first page!'
                  : result.rank <= 10 ? 'Good — on the first page.'
                  : 'Ranking on page ' + Math.ceil(result.rank / 10) + '.'
                  : 'Not found in the top 20 results.'}
              </p>
              {result.matchedUrl &&               <p className="mt-1 truncate text-xs" style={{ color: 'var(--ws-text-dim)' }}>{result.matchedUrl}</p>}
            </div>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div className="rounded-xl" style={{ border: '1px solid var(--ws-border)', backgroundColor: 'var(--ws-bg)' }}>
          <p className="px-4 py-2 text-sm font-semibold" style={{ color: 'var(--ws-text-muted)', borderBottom: '1px solid var(--ws-border)' }}>Recent checks (this session)</p>
          <ul>
            {history.map((h, i) => {
              const prev = history[i + 1];
              const trend = prev ? (h.rank === null ? 0 : prev.rank === null ? 0 : prev.rank - h.rank) : 0;
              return (
                <li key={i} className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm" style={{ borderBottom: i < history.length - 1 ? '1px solid var(--ws-border)' : 'none' }}>
                  <div className="min-w-0">
                    <p className="truncate font-medium" style={{ color: 'var(--ws-text)' }}>{h.keyword}</p>
                    <p className="truncate text-xs" style={{ color: 'var(--ws-text-dim)' }}>{h.domain} · {h.at}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {trend > 0 && <span className="flex items-center gap-0.5 text-green-500"><TrendingUp className="h-3.5 w-3.5" />+{trend}</span>}
                    {trend < 0 && <span className="flex items-center gap-0.5 text-red-500"><TrendingDown className="h-3.5 w-3.5" />{trend}</span>}
                    {trend === 0 && <Minus className="h-3.5 w-3.5" style={{ color: 'var(--ws-text-dim)' }} />}
                    <span className="w-8 text-right font-bold" style={{ color: 'var(--ws-text)' }}>{h.rank ?? '—'}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <p className="text-center text-xs" style={{ color: 'var(--ws-text-dim)' }}>
        Checks live search results (Bing, DuckDuckGo, or Google fallback). Rankings are an approximation and vary by
        location and device.
      </p>
    </div>
  );
}
