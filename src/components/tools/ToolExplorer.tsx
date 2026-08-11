import { useState, useEffect } from 'react';
import {
  ReceiptText,
  ScrollText,
  Quote,
  Receipt,
  FileSignature,
  Image,
  Palette,
  Sparkles,
  RefreshCw,
  TrendingUp,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';
import { tools, categories } from '../../data/tools';

const ICONS: Record<string, LucideIcon> = {
  'invoice-generator': ReceiptText,
  'bill-of-sale-generator': ScrollText,
  'quote-generator': Quote,
  'receipt-generator': Receipt,
  'rental-agreement-generator': FileSignature,
  'social-media-image-resizer': Image,
  'color-palette-generator': Palette,
  'ai-humanizer': Sparkles,
  'ai-paraphraser': RefreshCw,
  'seo-ranking-checker': TrendingUp,
};

const GRADIENTS: Record<string, string> = {
  Document: 'from-sky-400 to-blue-600',
  Image: 'from-fuchsia-400 to-purple-600',
  Design: 'from-amber-300 to-orange-500',
  AI: 'from-violet-400 to-indigo-600',
  SEO: 'from-volt-300 to-lime-600',
};

const FILTERS = ['All', ...categories];

function parseInitialFilter(): string {
  const raw = window.location.hash || window.location.search;
  const match = raw.match(/[?&#]cat=([^&#]*)/);
  return match ? decodeURIComponent(match[1]) : 'All';
}

export default function ToolExplorer() {
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    setFilter(parseInitialFilter());
  }, []);

  const visible = filter === 'All' ? tools : tools.filter((t) => t.category === filter);
  const counts = (c: string) => (c === 'All' ? tools.length : tools.filter((t) => t.category === c).length);

  function select(c: string) {
    setFilter(c);
    const cat = c === 'All' ? '' : `?cat=${encodeURIComponent(c)}`;
    window.history.replaceState(null, '', `/#tools${cat}`);
  }

  return (
    <div id="tools">
      <div className="flex flex-wrap items-center gap-2">
        {FILTERS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => select(c)}
            className="group inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em] transition-all duration-300"
            style={
              filter === c
                ? { borderColor: 'var(--color-volt-400)', backgroundColor: 'var(--color-volt-400)', color: '#0a0a0d' }
                : { borderColor: 'var(--chrome-border-strong)', backgroundColor: 'var(--chrome-surface)', color: 'var(--chrome-text-muted)' }
            }
          >
            {c}
            <span className="text-[10px]" style={{ color: filter === c ? 'rgba(10,10,13,0.6)' : 'var(--chrome-text-dim)' }}>
              {String(counts(c)).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>

      <div key={filter} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((t, i) => {
          const Icon = ICONS[t.slug] ?? Sparkles;
          return (
            <a
              key={t.slug}
              href={`/${t.slug}`}
              className="tool-card card-in"
              style={{ animationDelay: `${Math.min(i, 8) * 45}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className={`icon-chip bg-gradient-to-br ${GRADIENTS[t.category] ?? GRADIENTS.Document}`}>
                  <Icon className="h-5 w-5 text-ink-950" strokeWidth={2.2} />
                </span>
                <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: 'var(--chrome-text-dim)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div>
                <p className="mono-label !text-[10px]" style={{ color: 'var(--chrome-text-dim)' }}>{t.category}</p>
                <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-volt-300" style={{ color: 'var(--chrome-text)' }}>
                  {t.shortTitle}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed" style={{ color: 'var(--chrome-text-muted)' }}>{t.description}</p>
              </div>

              <div className="mt-auto flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--chrome-border)' }}>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: 'var(--chrome-text-dim)' }}>Free · No signup</span>
                <span className="inline-flex items-center gap-1 text-xs font-medium transition-all duration-300 group-hover:gap-2 group-hover:text-volt-300" style={{ color: 'var(--chrome-text-muted)' }}>
                  Open tool <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
