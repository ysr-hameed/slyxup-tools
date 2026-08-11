import { useRef, useState } from 'react';
import { Upload, Download, RefreshCw } from 'lucide-react';

interface SizePreset {
  id: string;
  label: string;
  width: number;
  height: number;
}

const PRESETS: SizePreset[] = [
  { id: 'insta-post', label: 'Instagram Post', width: 1080, height: 1080 },
  { id: 'insta-story', label: 'Instagram Story', width: 1080, height: 1920 },
  { id: 'fb-post', label: 'Facebook Post', width: 1200, height: 630 },
  { id: 'fb-cover', label: 'Facebook Cover', width: 1640, height: 856 },
  { id: 'x-post', label: 'X (Twitter) Post', width: 1600, height: 900 },
  { id: 'linkedin-post', label: 'LinkedIn Post', width: 1200, height: 627 },
  { id: 'yt-thumb', label: 'YouTube Thumbnail', width: 1280, height: 720 },
  { id: 'pin', label: 'Pinterest Pin', width: 1000, height: 1500 },
];

const FILL_OPTIONS = [
  { id: 'cover', label: 'Cover (crop)' },
  { id: 'contain', label: 'Contain (fit)' },
  { id: 'stretch', label: 'Stretch' },
];

export default function SocialMediaResizer(_props: { key?: string }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [imgEl, setImgEl] = useState<HTMLImageElement | null>(null);
  const [preset, setPreset] = useState<SizePreset>(PRESETS[0]);
  const [fill, setFill] = useState('cover');
  const [quality, setQuality] = useState(0.9);
  const [fileName, setFileName] = useState('');

  function onFile(file?: File) {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImgSrc(url);
    setFileName(file.name.replace(/\.[^.]+$/, ''));
    const el = new Image();
    el.onload = () => setImgEl(el);
    el.src = url;
  }

  function download() {
    if (!imgEl) return;
    const canvas = document.createElement('canvas');
    canvas.width = preset.width;
    canvas.height = preset.height;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const iw = imgEl.naturalWidth;
    const ih = imgEl.naturalHeight;
    let dw = preset.width;
    let dh = preset.height;
    let dx = 0;
    let dy = 0;

    if (fill === 'contain') {
      const scale = Math.min(preset.width / iw, preset.height / ih);
      dw = iw * scale;
      dh = ih * scale;
      dx = (preset.width - dw) / 2;
      dy = (preset.height - dh) / 2;
    } else if (fill === 'stretch') {
      dw = preset.width;
      dh = preset.height;
    } else {
      const scale = Math.max(preset.width / iw, preset.height / ih);
      dw = iw * scale;
      dh = ih * scale;
      dx = (preset.width - dw) / 2;
      dy = (preset.height - dh) / 2;
    }

    ctx.drawImage(imgEl, dx, dy, dw, dh);
    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${fileName}-${preset.id}-${preset.width}x${preset.height}.jpg`;
        a.click();
      },
      'image/jpeg',
      quality,
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div
          className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center transition-colors"
          style={{ borderColor: 'var(--ws-border-strong)', backgroundColor: 'var(--ws-bg-soft)' }}
          onClick={() => fileRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            onFile(e.dataTransfer.files?.[0]);
          }}
        >
          <Upload className="mb-2 h-8 w-8" style={{ color: 'var(--ws-text-dim)' }} />
          <p className="text-sm font-medium" style={{ color: 'var(--ws-text)' }}>Drop an image here or click to upload</p>
          <p className="mt-1 text-xs" style={{ color: 'var(--ws-text-dim)' }}>PNG, JPG, WEBP — processed entirely in your browser</p>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => onFile(e.target.files?.[0])}
          />
        </div>

        {imgSrc && (
          <div className="flex items-center gap-3 rounded-lg p-2" style={{ border: '1px solid var(--ws-border)', backgroundColor: 'var(--ws-bg)' }}>
            <img src={imgSrc} alt={`${fileName} upload preview`} className="h-12 w-12 rounded object-cover" />
            <p className="flex-1 truncate text-sm" style={{ color: 'var(--ws-text-muted)' }}>{fileName}</p>
            <button
              className="rounded-md p-2 transition-colors hover:opacity-80"
              style={{ color: 'var(--ws-text-dim)' }}
              onClick={() => {
                setImgSrc(null);
                setImgEl(null);
                if (fileRef.current) fileRef.current.value = '';
              }}
              aria-label="Remove image"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        )}

        <div>
          <label className="label">Platform size</label>
          <select className="input" value={preset.id} onChange={(e) => setPreset(PRESETS.find((p) => p.id === e.target.value) ?? PRESETS[0])}>
            {PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label} · {p.width}x{p.height}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label">Fit mode</label>
          <div className="grid grid-cols-3 gap-2">
            {FILL_OPTIONS.map((f) => (
              <button
                key={f.id}
                className="rounded-lg border px-3 py-2 text-sm font-medium transition-colors"
                style={
                  fill === f.id
                    ? { borderColor: 'var(--color-volt-400)', backgroundColor: 'rgba(210,255,63,0.12)', color: 'var(--ws-text)' }
                    : { borderColor: 'var(--ws-border)', backgroundColor: 'var(--ws-bg)', color: 'var(--ws-text-muted)' }
                }
                onClick={() => setFill(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="label">Quality: {Math.round(quality * 100)}%</label>
          <input className="w-full" type="range" min="50" max="100" value={Math.round(quality * 100)} onChange={(e) => setQuality(Number(e.target.value) / 100)} />
        </div>

        <button className="btn-primary w-full" onClick={download} disabled={!imgEl}>
          <Download className="h-4 w-4" /> Download {preset.width}x{preset.height} Image
        </button>
        {!imgEl && <p className="text-xs" style={{ color: 'var(--ws-text-dim)' }}>Upload an image to resize.</p>}
      </div>

      <div className="rounded-xl p-4" style={{ border: '1px solid var(--ws-border)', backgroundColor: 'var(--ws-bg-soft)' }}>
        <p className="mb-3 text-sm font-semibold" style={{ color: 'var(--ws-text-dim)' }}>Preview</p>
        {imgEl ? (
          <div className="flex items-center justify-center overflow-hidden rounded-lg shadow-sm" style={{ height: '320px', backgroundColor: 'var(--ws-bg)', boxShadow: 'var(--ws-shadow)' }}>
            <div style={{ width: preset.width / 4, height: preset.height / 4, overflow: 'hidden', position: 'relative' }}>
              <img
                src={imgSrc!}
                alt={`Resized preview at ${preset.width}x${preset.height}`}
                className="max-w-none"
                loading="lazy"
                style={{
                  width: fill === 'contain' ? 'auto' : '100%',
                  height: fill === 'contain' ? '100%' : '100%',
                  objectFit: fill === 'contain' ? 'contain' : 'cover',
                  position: 'absolute',
                  inset: 0,
                }}
              />
            </div>
          </div>
        ) : (
          <div className="flex h-72 items-center justify-center rounded-lg text-sm shadow-sm" style={{ backgroundColor: 'var(--ws-bg)', color: 'var(--ws-text-dim)', boxShadow: 'var(--ws-shadow)' }}>
            Upload an image to see the preview
          </div>
        )}
        <p className="mt-3 text-center text-xs" style={{ color: 'var(--ws-text-dim)' }}>
          {imgEl && `${imgEl.naturalWidth}x${imgEl.naturalHeight} → ${preset.width}x${preset.height}`} · Your images never leave your browser.
        </p>
      </div>
    </div>
  );
}
