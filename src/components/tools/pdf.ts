import { jsPDF } from 'jspdf';

export interface DocumentItem {
  description: string;
  quantity: number;
  rate: number;
}

export interface BusinessInfo {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
}

export interface DocumentSettings {
  business: BusinessInfo;
  client?: BusinessInfo;
  items: DocumentItem[];
  taxRate: number;
  discount?: number;
  notes?: string;
  docNumber: string;
  date: string;
  dueDate?: string;
}

export function money(n: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);
}

export function subtotal(items: DocumentItem[]): number {
  return items.reduce((sum, it) => sum + it.quantity * it.rate, 0);
}

export function totals(s: Pick<DocumentSettings, 'items' | 'taxRate' | 'discount'>): {
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
} {
  const st = subtotal(s.items);
  const discount = s.discount ? (st * s.discount) / 100 : 0;
  const tax = ((st - discount) * s.taxRate) / 100;
  return { subtotal: st, tax, discount, total: st - discount + tax };
}

const FONT = 'helvetica';

function wrapText(doc: jsPDF, text: string, x: number, y: number, maxWidth: number): number {
  const lines = doc.splitTextToSize(text || '', maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * 5;
}

export function renderDocument(
  doc: jsPDF,
  opts: {
    heading: string;
    business: BusinessInfo;
    client?: BusinessInfo;
    items: DocumentItem[];
    taxRate: number;
    discount?: number;
    notes?: string;
    docNumber: string;
    date: string;
    dueDate?: string;
    accent?: [number, number, number];
    tableHeaders: string[];
    showRate?: boolean;
  },
): void {
  const accent = opts.accent ?? [79, 70, 229];
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  doc.setFillColor(...accent);
  doc.rect(0, 0, pageWidth, 4, 'F');

  doc.setFont(FONT, 'bold');
  doc.setFontSize(24);
  doc.setTextColor(30, 41, 59);
  doc.text(opts.heading, margin, 22);

  doc.setFont(FONT, 'normal');
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text(`# ${opts.docNumber}`, pageWidth - margin, 16, { align: 'right' });
  doc.text(`Date: ${opts.date}`, pageWidth - margin, 22, { align: 'right' });
  if (opts.dueDate) doc.text(`Due: ${opts.dueDate}`, pageWidth - margin, 28, { align: 'right' });

  doc.setFont(FONT, 'bold');
  doc.setFontSize(10);
  doc.setTextColor(51, 65, 85);
  doc.text('From', margin, 38);
  doc.setFont(FONT, 'normal');
  doc.setTextColor(71, 85, 105);
  let y = wrapText(doc, opts.business.name, margin, 43, contentWidth / 2 - 10);
  if (opts.business.email) y = wrapText(doc, opts.business.email, margin, y + 2, contentWidth / 2 - 10);
  if (opts.business.phone) y = wrapText(doc, opts.business.phone, margin, y + 2, contentWidth / 2 - 10);
  if (opts.business.address) wrapText(doc, opts.business.address, margin, y + 2, contentWidth / 2 - 10);

  if (opts.client) {
    doc.setFont(FONT, 'bold');
    doc.setFontSize(10);
    doc.setTextColor(51, 65, 85);
    doc.text('Bill To', margin + contentWidth / 2, 38);
    doc.setFont(FONT, 'normal');
    doc.setTextColor(71, 85, 105);
    let cy = wrapText(doc, opts.client.name, margin + contentWidth / 2, 43, contentWidth / 2 - 10);
    if (opts.client.email) cy = wrapText(doc, opts.client.email, margin + contentWidth / 2, cy + 2, contentWidth / 2 - 10);
    if (opts.client.phone) cy = wrapText(doc, opts.client.phone, margin + contentWidth / 2, cy + 2, contentWidth / 2 - 10);
    if (opts.client.address) wrapText(doc, opts.client.address, margin + contentWidth / 2, cy + 2, contentWidth / 2 - 10);
  }

  let tableY = 78;
  doc.setFillColor(...accent);
  doc.rect(margin, tableY - 6, contentWidth, 12, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont(FONT, 'bold');
  doc.setFontSize(9);
  const colWidth = contentWidth / opts.tableHeaders.length;
  opts.tableHeaders.forEach((h, i) => {
    doc.text(h, margin + i * colWidth + 4, tableY);
  });

  doc.setTextColor(71, 85, 105);
  doc.setFont(FONT, 'normal');
  doc.setFontSize(10);
  opts.items.forEach((it, i) => {
    tableY += 12;
    if (tableY > 270) {
      doc.addPage();
      tableY = 20;
      doc.setTextColor(100, 116, 139);
      doc.setFont(FONT, 'italic');
      doc.setFontSize(9);
      doc.text(`${opts.heading} (continued)`, margin, tableY - 6);
      doc.setTextColor(71, 85, 105);
      doc.setFont(FONT, 'normal');
      doc.setFontSize(10);
    }
    if (i % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(margin, tableY - 4, contentWidth, 12, 'F');
    }
    doc.text(doc.splitTextToSize(it.description || '—', colWidth - 8)[0], margin + 4, tableY);
    if (opts.showRate !== false) {
      doc.text(String(it.quantity), margin + colWidth * 1 + 4, tableY);
      doc.text(money(it.rate), margin + colWidth * 2 + 4, tableY);
    }
    doc.text(money(it.quantity * it.rate), margin + colWidth * (opts.showRate === false ? 1 : 3) + 4, tableY);
  });

  const t = totals(opts);
  const summaryX = pageWidth - margin - 70;
  let sy = tableY + 14;

  doc.setFont(FONT, 'normal');
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text('Subtotal', summaryX, sy);
  doc.text(money(t.subtotal), pageWidth - margin, sy, { align: 'right' });
  sy += 7;
  if (t.discount > 0) {
    doc.text(`Discount (${opts.discount}%)`, summaryX, sy);
    doc.text(`-${money(t.discount)}`, pageWidth - margin, sy, { align: 'right' });
    sy += 7;
  }
  if (t.tax > 0) {
    doc.text(`Tax (${opts.taxRate}%)`, summaryX, sy);
    doc.text(money(t.tax), pageWidth - margin, sy, { align: 'right' });
    sy += 7;
  }

  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.4);
  doc.line(summaryX, sy - 4, pageWidth - margin, sy - 4);
  doc.setFont(FONT, 'bold');
  doc.setFontSize(12);
  doc.setTextColor(30, 41, 59);
  doc.text('Total', summaryX, sy + 1);
  doc.text(money(t.total), pageWidth - margin, sy + 1, { align: 'right' });

  if (opts.notes) {
    doc.setFont(FONT, 'bold');
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    doc.text('Notes', margin, sy + 18);
    doc.setFont(FONT, 'normal');
    doc.setTextColor(100, 116, 139);
    wrapText(doc, opts.notes, margin, sy + 23, contentWidth);
  }
}

export function getDocumentSettings(): DocumentSettings {
  return {
    business: { name: '' },
    items: [{ description: '', quantity: 1, rate: 0 }],
    taxRate: 0,
    docNumber: String(Math.floor(1000 + Math.random() * 9000)),
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
  };
}
