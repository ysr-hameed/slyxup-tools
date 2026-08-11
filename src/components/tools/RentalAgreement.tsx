import { useMemo, useState } from 'react';
import { jsPDF } from 'jspdf';
import { Download } from 'lucide-react';

interface Props {
  accent?: [number, number, number];
  key?: string;
}

export default function RentalAgreement({ accent = [15, 118, 110] as [number, number, number], key: _key }: Props & { key?: string }) {
  const [landlord, setLandlord] = useState({ name: '', email: '', phone: '', address: '' });
  const [tenant, setTenant] = useState({ name: '', email: '', phone: '' });
  const [property, setProperty] = useState({ address: '', type: 'Apartment', monthlyRent: 0, securityDeposit: 0 });
  const [duration, setDuration] = useState({ from: '', to: '', termMonths: 12 });
  const [signedDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [notes, setNotes] = useState('Utilities: Tenant pays electricity and water.');

  const hasError = useMemo(
    () => !landlord.name.trim() || !tenant.name.trim() || !property.address.trim(),
    [landlord.name, tenant.name, property.address],
  );

  function download() {
    const doc = new jsPDF();
    const margin = 18;
    const width = doc.internal.pageSize.getWidth() - margin * 2;

    doc.setFillColor(...accent);
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), 4, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(30, 41, 59);
    doc.text('Residential Rental Agreement', margin, 24);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Date of agreement: ${signedDate}`, margin, 31);

    let y = 42;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59);
    doc.text('1. Parties', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(71, 85, 105);

    const write = (text: string, indent: number) => {
      const lines = doc.splitTextToSize(text, width - indent);
      doc.text(lines, margin + indent, y);
      y += lines.length * 5 + 1;
    };

    y += 4;
    write(`Landlord: ${landlord.name}${landlord.email ? ` (${landlord.email})` : ''}${landlord.phone ? `, ${landlord.phone}` : ''}`, 4);
    write(`Tenant: ${tenant.name}${tenant.email ? ` (${tenant.email})` : ''}${tenant.phone ? `, ${tenant.phone}` : ''}`, 4);

    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('2. Property', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    y += 5;
    write(`Address: ${property.address}`, 4);
    write(`Property type: ${property.type}`, 4);

    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('3. Term', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    y += 5;
    write(`Lease term: ${duration.termMonths} month(s)`, 4);
    if (duration.from && duration.to) write(`From ${duration.from} to ${duration.to}`, 4);

    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('4. Rent & Security Deposit', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    y += 5;
    write(`Monthly rent: $${property.monthlyRent.toFixed(2)}`, 4);
    if (property.securityDeposit > 0) write(`Security deposit: $${property.securityDeposit.toFixed(2)}`, 4);

    y += 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('5. Additional Terms', margin, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    y += 5;
    const notesLines = doc.splitTextToSize(notes || 'None', width);
    doc.text(notesLines, margin, y);
    y += notesLines.length * 5 + 4;

    y += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    const footer = doc.splitTextToSize(
      'This is a basic template intended as a general guide. It is not a substitute for professional legal advice. Both parties should verify compliance with local laws.',
      width,
    );
    doc.text(footer, margin, y);

    y += footer.length * 5 + 10;
    if (y > 220) {
      doc.addPage();
      y = 30;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(30, 41, 59);
    doc.text('Signatures', margin, y);
    y += 8;
    doc.setDrawColor(148, 163, 184);
    doc.line(margin, y, margin + width / 2 - 10, y);
    doc.line(margin + width / 2 + 10, y, margin + width, y);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text(landlord.name || 'Landlord', margin, y + 5);
    doc.text(tenant.name || 'Tenant', margin + width / 2 + 10, y + 5);

    doc.save(`rental-agreement-${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  const input = 'input';
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <div className="rounded-lg p-3" style={{ border: '1px solid var(--ws-border)' }}>
          <p className="mb-2 text-sm font-semibold" style={{ color: 'var(--ws-text-muted)' }}>Landlord</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <input className={input} value={landlord.name} onChange={(e) => setLandlord({ ...landlord, name: e.target.value })} placeholder="Landlord name *" />
            <input className={input} value={landlord.phone ?? ''} onChange={(e) => setLandlord({ ...landlord, phone: e.target.value })} placeholder="Phone" />
            <input className={`${input} sm:col-span-2`} value={landlord.email ?? ''} onChange={(e) => setLandlord({ ...landlord, email: e.target.value })} placeholder="Email" />
            <input className={`${input} sm:col-span-2`} value={landlord.address ?? ''} onChange={(e) => setLandlord({ ...landlord, address: e.target.value })} placeholder="Landlord address" />
          </div>
        </div>

        <div className="rounded-lg p-3" style={{ border: '1px solid var(--ws-border)' }}>
          <p className="mb-2 text-sm font-semibold" style={{ color: 'var(--ws-text-muted)' }}>Tenant</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <input className={input} value={tenant.name} onChange={(e) => setTenant({ ...tenant, name: e.target.value })} placeholder="Tenant name *" />
            <input className={input} value={tenant.phone ?? ''} onChange={(e) => setTenant({ ...tenant, phone: e.target.value })} placeholder="Phone" />
            <input className={`${input} sm:col-span-2`} value={tenant.email ?? ''} onChange={(e) => setTenant({ ...tenant, email: e.target.value })} placeholder="Email" />
          </div>
        </div>

        <div className="rounded-lg p-3" style={{ border: '1px solid var(--ws-border)' }}>
          <p className="mb-2 text-sm font-semibold" style={{ color: 'var(--ws-text-muted)' }}>Property</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <input className={`${input} sm:col-span-2`} value={property.address} onChange={(e) => setProperty({ ...property, address: e.target.value })} placeholder="Property address *" />
            <select className={input} value={property.type} onChange={(e) => setProperty({ ...property, type: e.target.value })}>
              <option>Apartment</option>
              <option>House</option>
              <option>Condominium</option>
              <option>Studio</option>
              <option>Commercial space</option>
              <option>Other</option>
            </select>
            <div>
              <label className="label">Monthly rent ($)</label>
              <input className={input} type="number" min="0" value={property.monthlyRent} onChange={(e) => setProperty({ ...property, monthlyRent: Number(e.target.value) })} />
            </div>
            <div>
              <label className="label">Security deposit ($)</label>
              <input className={input} type="number" min="0" value={property.securityDeposit} onChange={(e) => setProperty({ ...property, securityDeposit: Number(e.target.value) })} />
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <label className="label">Term (months)</label>
            <input className={input} type="number" min="1" value={duration.termMonths} onChange={(e) => setDuration({ ...duration, termMonths: Number(e.target.value) })} />
          </div>
          <div>
            <label className="label">Start date</label>
            <input className={input} type="date" value={duration.from} onChange={(e) => setDuration({ ...duration, from: e.target.value })} />
          </div>
          <div>
            <label className="label">End date</label>
            <input className={input} type="date" value={duration.to} onChange={(e) => setDuration({ ...duration, to: e.target.value })} />
          </div>
        </div>

        <div>
          <label className="label">Additional terms</label>
          <textarea className="input min-h-20" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>

        <button className="btn-primary w-full" onClick={download} disabled={hasError}>
          <Download className="h-4 w-4" /> Download PDF Agreement
        </button>
        {hasError && <p className="text-xs" style={{ color: '#f87171' }}>Add landlord, tenant, and property address to download.</p>}
      </div>

      <div className="rounded-xl p-4" style={{ border: '1px solid var(--ws-border)', backgroundColor: 'var(--ws-bg-soft)' }}>
        <p className="mb-3 text-sm font-semibold" style={{ color: 'var(--ws-text-dim)' }}>Preview</p>
        <div className="rounded-lg p-5 text-xs shadow-sm" style={{ backgroundColor: 'var(--ws-bg)', color: 'var(--ws-text-muted)', boxShadow: 'var(--ws-shadow)' }}>
          <p className="text-lg font-bold" style={{ color: 'var(--ws-text)' }}>Residential Rental Agreement</p>
          <p style={{ color: 'var(--ws-text-dim)' }}>Date: {signedDate}</p>
          <div className="mt-3 space-y-2">
            <p><span className="font-semibold">Landlord:</span> {landlord.name || '—'}</p>
            <p><span className="font-semibold">Tenant:</span> {tenant.name || '—'}</p>
            <p><span className="font-semibold">Property:</span> {property.address || '—'} ({property.type})</p>
            <p><span className="font-semibold">Term:</span> {duration.termMonths} month(s)</p>
            <p><span className="font-semibold">Rent:</span> ${property.monthlyRent.toFixed(2)}/month</p>
            {property.securityDeposit > 0 && <p><span className="font-semibold">Deposit:</span> ${property.securityDeposit.toFixed(2)}</p>}
            <p className="pt-2" style={{ borderTop: '1px solid var(--ws-border)', color: 'var(--ws-text-dim)' }}>This template is a general guide, not legal advice.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
