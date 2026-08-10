import { useMemo, useState } from 'react';
import { jsPDF } from 'jspdf';
import { Plus, Trash2, Download } from 'lucide-react';
import { renderDocument, type BusinessInfo, type DocumentItem } from './pdf';

export interface DocumentEditorConfig {
  heading: string;
  accent?: [number, number, number];
  tableHeaders: string[];
  showRate?: boolean;
  showTax?: boolean;
  showDiscount?: boolean;
  showClient?: boolean;
  showDueDate?: boolean;
  clientLabel?: string;
  downloadName: string;
}

interface Props {
  config: DocumentEditorConfig;
}

export default function DocumentEditor({ config }: Props) {
  const [business, setBusiness] = useState<BusinessInfo>({ name: '' });
  const [client, setClient] = useState<BusinessInfo>({ name: '' });
  const [items, setItems] = useState<DocumentItem[]>([{ description: '', quantity: 1, rate: 0 }]);
  const [taxRate, setTaxRate] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [notes, setNotes] = useState('');
  const [docNumber, setDocNumber] = useState(() => String(Math.floor(1000 + Math.random() * 9000)));
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [dueDate, setDueDate] = useState('');

  const addItem = () => setItems((p) => [...p, { description: '', quantity: 1, rate: 0 }]);
  const updateItem = (i: number, patch: Partial<DocumentItem>) =>
    setItems((p) => p.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  const removeItem = (i: number) => setItems((p) => (p.length > 1 ? p.filter((_, idx) => idx !== i) : p));

  const hasError = useMemo(
    () => !business.name.trim() || items.some((it) => !it.description.trim()),
    [business.name, items],
  );

  function download() {
    const doc = new jsPDF();
    renderDocument(doc, {
      heading: config.heading,
      business,
      client: config.showClient ? client : undefined,
      items,
      taxRate: config.showTax ? taxRate : 0,
      discount: config.showDiscount ? discount : 0,
      notes,
      docNumber,
      date,
      dueDate: config.showDueDate ? dueDate : undefined,
      accent: config.accent,
      tableHeaders: config.tableHeaders,
      showRate: config.showRate,
    });
    doc.save(`${config.downloadName}-${docNumber}.pdf`);
  }

  const displayDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="label">Your business name *</label>
            <input className="input" value={business.name} onChange={(e) => setBusiness({ ...business, name: e.target.value })} placeholder="Acme Inc." />
          </div>
          <div>
            <label className="label">Your email</label>
            <input className="input" value={business.email ?? ''} onChange={(e) => setBusiness({ ...business, email: e.target.value })} placeholder="billing@acme.com" />
          </div>
          <div>
            <label className="label">Phone</label>
            <input className="input" value={business.phone ?? ''} onChange={(e) => setBusiness({ ...business, phone: e.target.value })} placeholder="+1 555 000 0000" />
          </div>
          <div>
            <label className="label">Address</label>
            <input className="input" value={business.address ?? ''} onChange={(e) => setBusiness({ ...business, address: e.target.value })} placeholder="123 Main St" />
          </div>
        </div>

        {config.showClient && (
          <div className="rounded-lg border border-slate-200 p-3">
            <p className="mb-2 text-sm font-semibold text-slate-700">{config.clientLabel ?? 'Client'}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <input className="input" value={client.name} onChange={(e) => setClient({ ...client, name: e.target.value })} placeholder="Client name" />
              <input className="input" value={client.email ?? ''} onChange={(e) => setClient({ ...client, email: e.target.value })} placeholder="Client email" />
              <input className="input sm:col-span-2" value={client.address ?? ''} onChange={(e) => setClient({ ...client, address: e.target.value })} placeholder="Client address" />
            </div>
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="label">Document #</label>
            <input className="input" value={docNumber} onChange={(e) => setDocNumber(e.target.value)} />
          </div>
          <div>
            <label className="label">Date</label>
            <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          {config.showDueDate && (
            <div>
              <label className="label">Due date</label>
              <input className="input" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </div>
          )}
        </div>

        <div className="rounded-lg border border-slate-200">
          <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
            Line items
          </div>
          {items.map((it, i) => (
            <div key={i} className="flex items-end gap-2 border-b border-slate-100 p-3 last:border-0">
              <div className="flex-1">
                <label className="label">Description</label>
                <input className="input" value={it.description} onChange={(e) => updateItem(i, { description: e.target.value })} placeholder="Product or service" />
              </div>
              <div className="w-20">
                <label className="label">Qty</label>
                <input className="input" type="number" min="0" value={it.quantity} onChange={(e) => updateItem(i, { quantity: Number(e.target.value) })} />
              </div>
              {config.showRate !== false && (
                <div className="w-28">
                  <label className="label">Rate ($)</label>
                  <input className="input" type="number" min="0" value={it.rate} onChange={(e) => updateItem(i, { rate: Number(e.target.value) })} />
                </div>
              )}
              <button className="mb-0.5 rounded-md p-2 text-slate-400 hover:bg-red-50 hover:text-red-600" onClick={() => removeItem(i)} aria-label="Remove item">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
          <div className="p-3">
            <button className="btn-outline" onClick={addItem}>
              <Plus className="h-4 w-4" /> Add item
            </button>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {config.showTax && (
            <div>
              <label className="label">Tax rate (%)</label>
              <input className="input" type="number" min="0" max="100" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} />
            </div>
          )}
          {config.showDiscount && (
            <div>
              <label className="label">Discount (%)</label>
              <input className="input" type="number" min="0" max="100" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} />
            </div>
          )}
          <div className={config.showTax || config.showDiscount ? 'sm:col-span-2' : ''}>
            <label className="label">Notes / terms</label>
            <textarea className="input min-h-20" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Payment terms, bank details, thank you note..." />
          </div>
        </div>

        <button className="btn-primary w-full" onClick={download} disabled={hasError}>
          <Download className="h-4 w-4" /> Download PDF {config.heading}
        </button>
        {hasError && <p className="text-xs text-red-600">Add your business name and item descriptions to download.</p>}
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="mb-3 text-sm font-semibold text-slate-500">Preview</p>
        <div className="rounded-lg bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between border-b border-slate-200 pb-3">
            <div>
              <p className="text-xl font-bold text-slate-900">{config.heading}</p>
              <p className="text-xs text-slate-500">#{docNumber}</p>
            </div>
            <div className="text-right text-xs text-slate-500">
              <p>{displayDate}</p>
              {config.showDueDate && dueDate && <p>Due: {new Date(dueDate + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-3 text-xs">
            <div>
              <p className="font-semibold text-slate-700">From</p>
              <p className="text-slate-500">{business.name || '—'}</p>
              {business.email && <p className="text-slate-500">{business.email}</p>}
            </div>
            {config.showClient && (
              <div>
                <p className="font-semibold text-slate-700">{config.clientLabel ?? 'Client'}</p>
                <p className="text-slate-500">{client.name || '—'}</p>
                {client.email && <p className="text-slate-500">{client.email}</p>}
              </div>
            )}
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-1.5">Item</th>
                {config.showRate !== false && <th className="py-1.5 text-right">Rate</th>}
                <th className="py-1.5 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {items.map((it, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="py-1.5">{it.description || '—'}</td>
                  {config.showRate !== false && <td className="py-1.5 text-right">${it.rate}</td>}
                  <td className="py-1.5 text-right">${(it.quantity * it.rate).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 space-y-1 text-right text-xs text-slate-600">
            <p>Subtotal: ${items.reduce((s, it) => s + it.quantity * it.rate, 0).toFixed(2)}</p>
            {config.showTax && taxRate > 0 && <p>Tax ({taxRate}%): ${(items.reduce((s, it) => s + it.quantity * it.rate, 0) * taxRate / 100).toFixed(2)}</p>}
            <p className="text-sm font-bold text-slate-900">
              Total: ${(items.reduce((s, it) => s + it.quantity * it.rate, 0) * (1 + (config.showTax ? taxRate : 0) / 100) * (1 - (config.showDiscount ? discount : 0) / 100)).toFixed(2)}
            </p>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">Your data stays in your browser. Nothing is uploaded.</p>
      </div>
    </div>
  );
}
