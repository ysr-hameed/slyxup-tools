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
      const data = await res.json() as { content?: string; error?: string };
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
            <button className="text-xs text-brand-600 hover:underline" onClick={fillSample} type="button">
              Use sample
            </button>
          </div>
          <textarea
            className="input min-h-64 resize-y font-normal"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
          />
          <p className="mt-1 text-right text-xs text-slate-400">{input.length}/8000 chars</p>
        </div>

        <div>
          <label className="label">Result</label>
          <div className="relative">
            <textarea
              className="input min-h-64 resize-y bg-slate-50 font-normal"
              value={output}
              readOnly
              placeholder={loading ? 'Rewriting...' : hint}
            />
            {output && (
              <button className="absolute right-2 top-2 rounded-md bg-white p-1.5 text-slate-500 shadow ring-1 ring-slate-200 hover:text-slate-800" onClick={copy} aria-label="Copy result">
                {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
      </div>

      {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

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

      <p className="text-center text-xs text-slate-400">Your text is sent to an AI model to be rewritten. We do not store your content.</p>
    </div>
  );
}
