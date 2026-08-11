import { useEffect, useMemo, useState } from 'react';
import { Check, Copy, Shuffle } from 'lucide-react';

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  const l = (max + min) / 2;
  const d = max - min;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return [h, s, l];
}

function hslToHex(h: number, s: number, l: number): string {
  s = Math.max(0, Math.min(1, s));
  l = Math.max(0, Math.min(1, l));
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let rgb: [number, number, number];
  if (h < 60) rgb = [c, x, 0];
  else if (h < 120) rgb = [x, c, 0];
  else if (h < 180) rgb = [0, c, x];
  else if (h < 240) rgb = [0, x, c];
  else if (h < 300) rgb = [x, 0, c];
  else rgb = [c, 0, x];
  return '#' + rgb
    .map((v) => Math.round((v + m) * 255).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}

function randomHex(): string {
  return '#' + Array.from({ length: 6 }, () => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join('');
}

function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const [r2, g2, b2] = [r, g, b].map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * r2 + 0.7152 * g2 + 0.0722 * b2;
}

function contrastHex(hex: string): string {
  return luminance(hex) > 0.5 ? '#0F172A' : '#FFFFFF';
}

const HARMONIES = [
  { id: 'analogous', label: 'Analogous', count: 5 },
  { id: 'complementary', label: 'Complementary', count: 2 },
  { id: 'triadic', label: 'Triadic', count: 3 },
  { id: 'monochromatic', label: 'Mono', count: 5 },
  { id: 'split', label: 'Split-comp', count: 3 },
  { id: 'tetradic', label: 'Tetradic', count: 4 },
];

function paletteFor(hex: string, harmony: string): string[] {
  const [h, s, l] = hexToHsl(hex);
  const out: string[] = [hex];
  const hshift = (deg: number) => hslToHex(((h + deg) % 360 + 360) % 360, s, l);
  switch (harmony) {
    case 'analogous':
      for (let i = 1; i < 5; i++) out.push(hslToHex(((h + i * 30) % 360 + 360) % 360, s, l));
      break;
    case 'complementary':
      out.push(hshift(180));
      break;
    case 'triadic':
      out.push(hshift(120), hshift(240));
      break;
    case 'monochromatic':
      for (const lv of [0.15, 0.3, 0.6, 0.85]) out.push(hslToHex(h, s, lv));
      break;
    case 'split':
      out.push(hshift(150), hshift(210));
      break;
    case 'tetradic':
      out.push(hshift(90), hshift(180), hshift(270));
      break;
  }
  return out.slice(0, HARMONIES.find((x) => x.id === harmony)?.count ?? 5);
}

export default function ColorPalette(_props: { key?: string }) {
  const [base, setBase] = useState('#6366F1');
  const [harmony, setHarmony] = useState('analogous');
  const [copied, setCopied] = useState<string | null>(null);

  const palette = useMemo(() => paletteFor(base, harmony), [base, harmony]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(null), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg p-1.5" style={{ border: '1px solid var(--ws-input-border)', backgroundColor: 'var(--ws-input-bg)' }}>
          <input
            type="color"
            value={base}
            className="h-8 w-8 cursor-pointer rounded border-0 bg-transparent p-0"
            onChange={(e) => setBase(e.target.value)}
            aria-label="Pick base color"
          />
          <input
            className="input w-28 border-0 focus:ring-0"
            value={base}
            onChange={(e) => {
              const v = e.target.value;
              if (/^#[0-9a-fA-F]{6}$/.test(v)) setBase(v);
            }}
          />
        </div>
        <button className="btn-outline" onClick={() => setBase(randomHex())}>
          <Shuffle className="h-4 w-4" /> Random
        </button>
        <div className="flex flex-wrap gap-1.5">
          {HARMONIES.map((h) => (
            <button
              key={h.id}
              className="rounded-full px-3 py-1.5 text-xs font-medium"
              style={{
                backgroundColor: harmony === h.id ? 'var(--color-volt-400)' : 'var(--ws-bg)',
                color: harmony === h.id ? 'var(--ink-950, #0a0a0d)' : 'var(--ws-text-muted)',
                border: harmony === h.id ? '1px solid transparent' : '1px solid var(--ws-border)',
              }}
              onClick={() => setHarmony(h.id)}
            >
              {h.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {palette.map((hex) => (
          <div
            key={hex}
            className="cursor-pointer overflow-hidden rounded-xl transition-transform hover:-translate-y-0.5 hover:shadow-md"
            style={{ border: '1px solid var(--ws-border)', backgroundColor: 'var(--ws-bg)' }}
            onClick={() => copy(hex)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && copy(hex)}
          >
            <div className="flex h-28 items-end p-3" style={{ backgroundColor: hex }}>
              <span className="rounded bg-white/90 px-1.5 py-0.5 text-xs font-semibold" style={{ color: hex }}>
                {hex}
              </span>
            </div>
            <div className="flex items-center justify-between p-3">
              <div>
                <p className="font-mono text-sm" style={{ color: 'var(--ws-text)' }}>{hex}</p>
                <p className="text-xs" style={{ color: 'var(--ws-text-dim)' }}>
                  RGB {parseInt(hex.slice(1, 3), 16)}, {parseInt(hex.slice(3, 5), 16)}, {parseInt(hex.slice(5, 7), 16)}
                </p>
              </div>
              {copied === hex ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" style={{ color: 'var(--ws-text-dim)' }} />}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg p-3" style={{ border: '1px solid var(--ws-border)' }}>
        <p className="mb-2 text-sm font-semibold" style={{ color: 'var(--ws-text-muted)' }}>Text on this palette</p>
        <div className="flex flex-wrap gap-2">
          {palette.slice(0, 3).map((hex) => (
            <span key={hex} className="rounded-md px-3 py-1.5 text-sm" style={{ backgroundColor: hex, color: contrastHex(hex) }}>
              Sample text on {hex}
            </span>
          ))}
        </div>
      </div>

      <p className="text-center text-xs" style={{ color: 'var(--ws-text-dim)' }}>Click any swatch to copy its HEX code. Everything runs in your browser.</p>
    </div>
  );
}
