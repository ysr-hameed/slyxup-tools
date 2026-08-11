export interface ContentSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
  tips?: string[];
}

export interface ToolDef {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  keywords: string[];
  category: string;
  difficulty: string;
  volume: string;
  faqs: { question: string; answer: string }[];
  content: ContentSection[];
}

export const tools: ToolDef[] = [
  {
    slug: 'invoice-generator',
    title: 'Free Invoice Generator',
    shortTitle: 'Invoice Generator',
    description:
      'Create professional PDF invoices instantly. Add your business info, line items, tax and download a ready-to-send invoice. 100% free, no signup, no watermark.',
    keywords: ['invoice generator', 'free invoice generator', 'make invoice online', 'create invoice pdf'],
    category: 'Document',
    difficulty: 'Medium',
    volume: '14K/mo',
    faqs: [
      { question: 'Is this invoice generator really free?', answer: 'Yes. Create and download unlimited PDF invoices at no cost, with no signup and no watermark. There are no hidden limits or premium tiers.' },
      { question: 'Can I add my logo to the invoice?', answer: 'Yes. Upload your logo image using the logo upload field and it will be placed at the top of the generated PDF invoice alongside your business details.' },
      { question: 'What payment methods can I list on the invoice?', answer: 'You can add your bank details, UPI ID, PayPal link, Wise transfer info, or any custom payment instructions in the notes or terms section at the bottom.' },
      { question: 'Can I edit an invoice after downloading it?', answer: 'The PDF itself is not editable once downloaded, but you can go back to the generator, make your changes, and re-download a new copy as many times as you need.' },
      { question: 'Does it automatically calculate totals and tax?', answer: 'Yes. Subtotals, tax amounts, discounts, and the final grand total are all calculated automatically as you add line items and rates.' },
      { question: 'Is there a limit on how many invoices I can create?', answer: 'No. There is no daily or monthly limit. Create as many invoices as you need, forever free.' },
    ],
    content: [
      {
        heading: 'Create professional invoices in under a minute',
        paragraphs: [
          'Sending a clean, well-formatted invoice is one of the fastest ways to look professional and get paid on time. Whether you are a freelancer, a small business owner, or a contractor, this free invoice generator lets you create a polished PDF invoice directly in your browser — no signup, no account, no limits.',
          'Everything you need is built in: your business details, client information, unlimited line items with quantity and rate, tax calculation, discounts, and a notes section for payment terms or bank details. The live preview updates instantly so you can see exactly what the final PDF will look like before you download it.',
        ],
      },
      {
        heading: 'How to create an invoice with this tool',
        paragraphs: [
          'Follow these simple steps to generate your first invoice:',
        ],
        list: [
          'Enter your business name, email, phone, and address in the "Your Business" section.',
          'Add your client details — name, email, and billing address.',
          'Set the invoice number and date. A random invoice number is pre-filled for you.',
          'Add line items: description, quantity, and rate. Click "Add item" for additional rows.',
          'Optionally add a tax rate percentage and a discount percentage.',
          'Write any payment terms, bank details, or thank-you notes in the notes field.',
          'Check the live preview on the right, then click "Download Invoice PDF".',
        ],
      },
      {
        heading: 'Why a good invoice matters for getting paid faster',
        paragraphs: [
          'A clear invoice reduces back-and-forth, sets clear payment expectations, and makes it easy for your client accounts team to process your payment. Studies show that invoices with clear payment terms and itemized breakdowns get paid significantly faster than vague requests for money.',
          'Using a consistent, professional format also builds trust with new clients and reinforces your brand every time you send a bill. This generator gives you that polished look without needing design skills or expensive software like FreshBooks or QuickBooks.',
        ],
        tips: [
          'Always include a due date and late-payment policy in the notes section.',
          'Itemize your work rather than billing a single lump sum — clients prefer transparency.',
          'Save copies of every invoice for your own records and tax filing.',
          'Use a consistent invoice numbering system (for example INV-001, INV-002).',
        ],
      },
    ],
  },
  {
    slug: 'bill-of-sale-generator',
    title: 'Free Bill of Sale Generator',
    shortTitle: 'Bill of Sale Generator',
    description:
      'Generate a free bill of sale PDF online. Fill in buyer, seller and item details to create a printable proof-of-sale document instantly. No signup required.',
    keywords: ['bill of sale', 'bill of sale generator', 'free bill of sale template'],
    category: 'Document',
    difficulty: 'Medium',
    volume: '10K/mo',
    faqs: [
      { question: 'What is a bill of sale?', answer: 'A bill of sale is a legal document that records the transfer of ownership of an item from a seller to a buyer. It captures the item details, sale price, date, and signatures of both parties.' },
      { question: 'Is a bill of sale legally binding?', answer: 'A signed bill of sale serves as a record of the transaction and proof of transfer of ownership. The legal enforceability depends on your state or country laws, so check local requirements for high-value items.' },
      { question: 'Can I use this for selling a car or vehicle?', answer: 'Yes. Select the vehicle option and fill in the make, model, year, VIN, and odometer reading. For vehicle sales, always verify your state DMV requirements for title transfer.' },
      { question: 'What information goes on a bill of sale?', answer: 'Typically: seller name and contact, buyer name and contact, item description, sale price, date of sale, condition of the item, and signatures of both parties.' },
      { question: 'Do I need a notary?', answer: 'For most private sales a notary is not required, but some states require notarization for vehicle or high-value asset transfers. Check your local regulations.' },
    ],
    content: [
      {
        heading: 'What a bill of sale protects you from',
        paragraphs: [
          'A bill of sale is more than just paperwork — it is your proof that a transaction took place. Without it, you have no record of the sale price, the date, or the condition of the item at the time of handover. That matters when disputes arise, when you need to prove ownership transfer for tax purposes, or when a buyer claims the item was damaged before they received it.',
          'For sellers, a signed bill of sale releases you from liability after the item changes hands. For buyers, it is your proof of ownership and your receipt. Whether you are selling a used car, furniture, electronics, or equipment, having a written bill of sale protects both sides.',
        ],
      },
      {
        heading: 'How to fill out a bill of sale',
        paragraphs: [
          'Creating a complete bill of sale is straightforward if you have the details ready:',
        ],
        list: [
          'Write the full legal names and contact details of both the seller and the buyer.',
          'Describe the item being sold — include make, model, serial number, color, and any identifying marks.',
          'State the sale price clearly in numbers and, for formal documents, also in words.',
          'Note the condition of the item and whether it is sold "as-is" or with any warranties.',
          'Include the date of the transaction and the date of transfer of possession.',
          'Both parties should sign and keep a copy for their records.',
        ],
        tips: [
          'For vehicle sales, always include the VIN and current odometer reading.',
          'Keep a signed copy for your records even after the sale is complete.',
          'If the item has a title (like a car), the title transfer is separate from the bill of sale.',
          'Take photos of the item at the time of sale as additional evidence.',
        ],
      },
    ],
  },
  {
    slug: 'quote-generator',
    title: 'Free Quote & Proposal Generator',
    shortTitle: 'Quote Generator',
    description:
      'Create professional quote or proposal PDFs online. Add your services, pricing and terms then download and send to clients. Free forever, no signup.',
    keywords: ['quote generator', 'proposal generator', 'free quote template', 'make a quote online'],
    category: 'Document',
    difficulty: 'Medium',
    volume: '5K/mo',
    faqs: [
      { question: 'What is the difference between a quote and a proposal?', answer: 'A quote states a fixed price for defined work. A proposal adds scope, timeline, methodology, and terms to persuade a client to choose you. Use a quote for straightforward jobs and a proposal for complex projects.' },
      { question: 'Can I customize the quote with my branding?', answer: 'Yes. Add your business name, logo, colors, and contact details. The generated PDF reflects your branding so it looks professional and consistent.' },
      { question: 'Can I save quotes and edit them later?', answer: 'The tool works in your browser. You can keep the tab open and edit before downloading. For re-use, save the PDF and recreate a new version when needed.' },
      { question: 'Is this suitable for freelance work?', answer: 'Absolutely. Freelancers use this daily to send clear, itemized quotes to clients for design, development, writing, consulting, and other services.' },
    ],
    content: [
      {
        heading: 'Why sending a professional quote wins you more work',
        paragraphs: [
          'A well-written quote does more than state a price — it shows the client you understand the scope, you are organized, and you are serious about delivering. Many freelancers and small businesses still send quotes as plain text emails or messy Word documents. That costs them jobs to competitors who present their pricing clearly.',
          'This generator helps you produce a clean, itemized PDF quote in minutes. Each service or product gets its own line with quantity, rate, and total. Tax and discount fields are built in. The result is a document that answers every question a client might have before they even ask it.',
        ],
        tips: [
          'Always include a validity period (for example "Valid for 30 days").',
          'Break work into phases with separate line items so clients can see what they are paying for.',
          'Add a short scope summary at the top to avoid misunderstandings later.',
          'Include your payment terms: due date, accepted methods, and late fees.',
        ],
      },
    ],
  },
  {
    slug: 'receipt-generator',
    title: 'Free Receipt Generator',
    shortTitle: 'Receipt Generator',
    description:
      'Make a free receipt PDF online. Add your business info, payment details and amount to create a printable receipt for customers instantly. No signup.',
    keywords: ['receipt generator', 'free receipt template', 'make a receipt online'],
    category: 'Document',
    difficulty: 'Medium',
    volume: '6K/mo',
    faqs: [
      { question: 'What is a receipt used for?', answer: 'A receipt is proof of payment. It is used for expense tracking, tax deductions, returns and exchanges, warranties, and customer records.' },
      { question: 'Can I add tax and tip to the receipt?', answer: 'Yes. Enter the subtotal, add a tax percentage or amount, and include a tip if applicable. The total updates automatically.' },
      { question: 'Do I need to sign the receipt?', answer: 'A signature is not always required, but for higher-value transactions a signed receipt adds authenticity. You can add a signature line in the notes field.' },
      { question: 'Can customers use this receipt for tax purposes?', answer: 'It depends on your local tax authority requirements. For formal tax invoices, use the dedicated Invoice Generator which includes all required business and tax fields.' },
    ],
    content: [
      {
        heading: 'When and why you need to issue a receipt',
        paragraphs: [
          'A receipt is your customer proof that a transaction happened. For small businesses, market sellers, freelancers, and service providers, issuing a receipt builds trust and gives customers documentation for their own records, expense claims, or warranty claims.',
          'This generator lets you create a clean receipt in seconds. Add your business name, the items or services provided, payment method, amount received, and any notes. Download a professional PDF that you can email or hand to your customer.',
        ],
        tips: [
          'Always issue a receipt for cash transactions — it protects both you and the customer.',
          'Include the payment method (cash, card, UPI, bank transfer) for clear record-keeping.',
          'Keep a copy of every receipt for your own bookkeeping and tax filing.',
          'Number your receipts sequentially for easy reference later.',
        ],
      },
    ],
  },
  {
    slug: 'rental-agreement-generator',
    title: 'Free Rental Agreement Generator',
    shortTitle: 'Rental Agreement Generator',
    description:
      'Create a simple rental or lease agreement PDF online. Fill in landlord, tenant, property and rent details to generate a printable agreement. No signup.',
    keywords: ['rental agreement', 'rental agreement generator', 'lease agreement template'],
    category: 'Document',
    difficulty: 'Medium',
    volume: '5K/mo',
    faqs: [
      { question: 'What is a rental agreement?', answer: 'A rental agreement is a contract between a landlord and tenant that states the terms for renting a property: rent amount, due date, deposit, duration, and rules.' },
      { question: 'Is this a legal lease agreement?', answer: 'This generates a basic template covering standard terms. For complex, long-term, or high-value leases, have a qualified legal professional review the document.' },
      { question: 'What details do I need to fill in?', answer: 'Landlord and tenant names and contact, property address, monthly rent, security deposit, lease start and end dates, and any additional terms or rules.' },
      { question: 'Can I add custom terms and rules?', answer: 'Yes. Use the additional terms section to add rules about pets, maintenance, subletting, late fees, or any other conditions you need.' },
    ],
    content: [
      {
        heading: 'Why every landlord should use a written rental agreement',
        paragraphs: [
          'A written rental agreement is not just bureaucracy — it is the foundation of a good landlord-tenant relationship. It sets clear expectations around rent, deposit, maintenance responsibilities, and house rules before anyone moves in. When both parties sign the same document, disputes become far easier to resolve.',
          'This tool generates a straightforward lease agreement covering the essentials: parties, property details, rent amount, deposit, duration, and additional terms. Fill in the fields, review the live preview, and download a PDF that both landlord and tenant can sign.',
        ],
        tips: [
          'Always inspect the property together with the tenant before signing and note any existing damage.',
          'Collect the security deposit before handing over the keys.',
          'Check your local tenant-landlord laws — some jurisdictions require specific clauses or limit deposit amounts.',
          'Keep signed copies in a safe place for the duration of the lease.',
        ],
      },
    ],
  },
  {
    slug: 'social-media-image-resizer',
    title: 'Free Social Media Image Resizer',
    shortTitle: 'Social Media Resizer',
    description:
      'Resize and crop images to exact social media sizes for Instagram, Facebook, X, LinkedIn and YouTube. Download in one click. Free, no signup.',
    keywords: ['social media image resizer', 'instagram photo size', 'resize image for social media'],
    category: 'Image',
    difficulty: 'Medium',
    volume: '8K/mo',
    faqs: [
      { question: 'What sizes are supported?', answer: 'Instagram post 1080x1080, story 1080x1920, reel cover 1080x1920, Facebook post 1200x630, cover 1640x856, X post 1600x900, LinkedIn 1200x627, YouTube thumbnail 1280x720, Pinterest pin 1000x1500, and custom sizes.' },
      { question: 'Where are my images processed?', answer: 'Everything happens locally in your browser. Your images are never uploaded to any server, so your content stays completely private.' },
      { question: 'What fit modes are available?', answer: 'Cover (crop to fill the exact dimensions), Contain (fit inside with letterboxing), and Stretch (force to exact size). Cover is recommended for most social posts.' },
      { question: 'What file formats can I download?', answer: 'You can download the resized image as PNG or JPEG. PNG preserves quality and transparency; JPEG produces smaller files for faster uploads.' },
    ],
    content: [
      {
        heading: 'Get the right dimensions for every platform',
        paragraphs: [
          'Each social media platform has its own preferred image dimensions, and uploading the wrong size leads to awkward cropping, blurry stretching, or rejected posts. Instagram wants square 1:1 for feed posts and 9:16 for stories. Facebook prefers 1.91:1 for link posts. X, LinkedIn, YouTube, and Pinterest each have their own requirements too.',
          'This tool gives you every major preset in one place. Pick your platform, upload your image, choose a fit mode, and download a perfectly sized image in one click. No design software needed, no account required.',
        ],
        list: [
          'Instagram Post: 1080 x 1080 px (1:1 square)',
          'Instagram Story / Reel: 1080 x 1920 px (9:16 vertical)',
          'Facebook Post: 1200 x 630 px (1.91:1 landscape)',
          'Facebook Cover: 1640 x 856 px',
          'X (Twitter) Post: 1600 x 900 px (16:9)',
          'LinkedIn Post: 1200 x 627 px',
          'YouTube Thumbnail: 1280 x 720 px',
          'Pinterest Pin: 1000 x 1500 px (2:3)',
        ],
        tips: [
          'Use "Cover" mode for feed posts where the image fills the frame with no empty space.',
          'Use "Contain" mode when you need the full image visible, such as product photos.',
          'Export as PNG for graphics with text or transparency; use JPEG for photographs.',
          'Always check the latest platform guidelines — social media sizes change occasionally.',
        ],
      },
    ],
  },
  {
    slug: 'color-palette-generator',
    title: 'Free Color Palette Generator',
    shortTitle: 'Color Palette Generator',
    description:
      'Generate beautiful color palettes instantly. Pick a base color to get matching harmonies, copy HEX and RGB values. Free, no signup, no limits.',
    keywords: ['color palette generator', 'color palette from image', 'hex color palette generator'],
    category: 'Design',
    difficulty: 'Medium',
    volume: '7K/mo',
    faqs: [
      { question: 'How are color palettes generated?', answer: 'The tool applies classic color theory harmonies — complementary, analogous, triadic, split-complementary, tetradic, and monochromatic — to your chosen base color.' },
      { question: 'Can I copy HEX and RGB values?', answer: 'Yes. Click any swatch to copy its HEX code to your clipboard. RGB values are displayed below each swatch for easy reference.' },
      { question: 'What color harmony should I use?', answer: 'Complementary for high contrast, analogous for harmony, triadic for vibrant balance, monochromatic for subtle elegance. Try each to see what fits your project.' },
      { question: 'Can I use these palettes commercially?', answer: 'Yes. The generated color codes are free to use in any personal or commercial project with no attribution required.' },
    ],
    content: [
      {
        heading: 'How to choose colors that work together',
        paragraphs: [
          'Color is one of the most powerful design tools, but choosing combinations that look good together is harder than it seems. Randomly picking colors usually results in clashing, muddy, or unbalanced designs. The solution is color theory — time-tested rules about how colors relate to each other on the color wheel.',
          'This generator applies those rules for you. Pick any base color and instantly see six different harmonies: analogous (neighbors on the wheel), complementary (opposite), triadic (evenly spaced), split-complementary, tetradic, and monochromatic. Each harmony creates a different mood and works for different use cases.',
        ],
        tips: [
          'Start with your brand or primary color, then use the harmonies to find supporting colors.',
          'Use the 60-30-10 rule: 60% dominant color, 30% secondary, 10% accent.',
          'Check contrast ratios if you are placing text over colored backgrounds.',
          'Monochromatic palettes are the safest choice for beginners — they always look cohesive.',
        ],
      },
    ],
  },
  {
    slug: 'ai-humanizer',
    title: 'Free AI Text Humanizer',
    shortTitle: 'AI Humanizer',
    description:
      'Make AI-generated text sound natural and human. Rewrite ChatGPT, Claude and Gemini output with a conversational tone. Free to use, no signup.',
    keywords: ['ai humanizer', 'ai text humanizer', 'humanize ai text', 'make ai text sound human'],
    category: 'AI',
    difficulty: 'Medium',
    volume: '49K/mo',
    faqs: [
      { question: 'What does an AI humanizer do?', answer: 'It rewrites AI-generated text to sound more natural and human. It reduces robotic phrasing, repetitive sentence patterns, and overly formal language while preserving the original meaning and facts.' },
      { question: 'Will this bypass AI detection tools?', answer: 'It significantly reduces common AI writing patterns, which may help with some detection tools. However, no tool can guarantee a zero AI-detection score, and detection algorithms change frequently.' },
      { question: 'Is my text stored or shared?', answer: 'Your text is sent only to process the rewrite request. It is not stored, logged, or shared with any third party. Once the response is returned, the text is discarded.' },
      { question: 'What types of text work best?', answer: 'Blog posts, marketing copy, emails, essays, reports, and social media content all humanize well. Highly technical or code-heavy text may need manual review after rewriting.' },
      { question: 'How is this different from a paraphraser?', answer: 'A paraphraser focuses on changing wording and structure. A humanizer goes further — it changes the tone, rhythm, and flow to match how a real person writes, with varied sentence lengths and natural phrasing.' },
      { question: 'Is there a word limit?', answer: 'You can process text up to 8,000 characters per request. For longer documents, break them into sections and process each one separately.' },
    ],
    content: [
      {
        heading: 'Why AI-generated text sounds robotic and how to fix it',
        paragraphs: [
          'Tools like ChatGPT, Claude, and Gemini are powerful, but they share a set of telltale writing patterns that give them away: uniform sentence length, overuse of transition words like "furthermore" and "moreover", overly balanced paragraph structure, and a tendency to hedge every claim with qualifiers. These patterns make the writing feel formulaic and impersonal.',
          'An AI humanizer restructures that output the way a skilled editor would — varying sentence rhythm, cutting filler phrases, replacing stiff constructions with natural alternatives, and adding the subtle imperfections that make writing feel genuinely human. The result reads like a knowledgeable person wrote it, not a language model.',
        ],
      },
      {
        heading: 'When to use an AI humanizer',
        paragraphs: [
          'AI writing detection is increasingly used by schools, publishers, clients, and platforms. Whether you use AI as a starting point for your own writing or generate first drafts to polish, running the output through a humanizer helps ensure the final piece reflects your voice and passes both human and automated scrutiny.',
        ],
        list: [
          'Blog posts and articles you draft with AI and want to publish under your name.',
          'Marketing emails and landing pages that need to sound personal and persuasive.',
          'Academic or professional writing where AI detection could cause problems.',
          'Social media content that should feel casual and conversational.',
          'Client deliverables where you use AI as a productivity aid but want a human voice.',
        ],
        tips: [
          'Always review the humanized output — the tool preserves meaning but may adjust nuance.',
          'Combine short and long sentences yourself after humanizing for the most natural rhythm.',
          'Avoid running AI-generated facts through without verification — humanizing changes style, not accuracy.',
          'For best results, use the tool on AI drafts that are already factually correct and well-structured.',
        ],
      },
    ],
  },
  {
    slug: 'ai-paraphraser',
    title: 'Free AI Paraphraser',
    shortTitle: 'AI Paraphraser',
    description:
      'Rewrite any sentence or paragraph with a free AI paraphraser. Rephrase text in different tones, keep the meaning and avoid plagiarism. No signup.',
    keywords: ['paraphrasing tool', 'paraphrase generator', 'free paraphraser', 'ai rewriter'],
    category: 'AI',
    difficulty: 'Medium',
    volume: '30K/mo',
    faqs: [
      { question: 'How does the AI paraphraser work?', answer: 'It uses a language model to restructure your sentences with different vocabulary and phrasing while preserving the original meaning, tone, and factual content.' },
      { question: 'Is paraphrasing the same as plagiarism?', answer: 'Paraphrasing rewording existing text. Whether it counts as plagiarism depends on context and whether you cite the original source. Always attribute ideas to their original authors.' },
      { question: 'What tones are available?', answer: 'Choose from Standard (balanced), More concise (shorter and tighter), or More detailed (expanded with additional clarity) depending on your needs.' },
      { question: 'Can I paraphrase academic or technical content?', answer: 'Yes, but review the output carefully. Technical terms and precise definitions may need to stay unchanged — the tool aims to preserve meaning but always verify critical content.' },
      { question: 'Is there a word limit?', answer: 'You can paraphrase text up to 8,000 characters per request. For longer documents, split into sections and paraphrase each one.' },
    ],
    content: [
      {
        heading: 'When and why you need to paraphrase text',
        paragraphs: [
          'Paraphrasing is the skill of expressing someone else ideas or existing text in your own words. It is essential for avoiding plagiarism, simplifying complex explanations, adapting content for different audiences, and repurposing your own writing across formats.',
          'Doing it well is hard. Simple synonym swapping often produces awkward or inaccurate sentences. Good paraphrasing requires restructuring sentences, changing voice, adjusting tone, and sometimes reorganizing ideas — all while keeping the original meaning intact. This tool handles that heavy lifting for you.',
        ],
        tips: [
          'Always cite the original source even when you paraphrase — rewording does not eliminate the need for attribution.',
          'Use "More concise" tone for executive summaries, social media, or emails where brevity matters.',
          'Use "More detailed" tone for educational content where clarity is more important than brevity.',
          'After paraphrasing, read the output aloud to catch any unnatural phrasing the model may have produced.',
        ],
      },
    ],
  },
  {
    slug: 'seo-ranking-checker',
    title: 'Free SEO Keyword Ranking Checker',
    shortTitle: 'SEO Ranking Checker',
    description:
      'Check where your website ranks on Google for any keyword. Get instant position, matched URL and search result data. Free, no signup, no limits.',
    keywords: ['seo ranking checker', 'google rank checker', 'keyword position checker', 'rank tracker'],
    category: 'SEO',
    difficulty: 'Medium',
    volume: '2.4K/mo',
    faqs: [
      { question: 'How accurate is the rank checker?', answer: 'It queries live Google search results at the moment you check. Positions reflect the current state of the index but may vary slightly based on location, personalization, and search history.' },
      { question: 'How many keywords can I check?', answer: 'As many as you like. There is no daily or monthly limit. Enter a keyword and domain, click check, and get instant results.' },
      { question: 'Why is my site not in the top 20 results?', answer: 'New sites and recently indexed pages often rank beyond position 20. Focus on on-page SEO, quality content, and backlinks to improve over time. The tool checks the top 20 results.' },
      { question: 'Can I track rankings over time?', answer: 'The tool shows current position per check. For ongoing tracking, check your key keywords regularly and log the positions yourself or use a dedicated rank-tracking service.' },
    ],
    content: [
      {
        heading: 'Why checking your Google ranking matters',
        paragraphs: [
          'You cannot improve what you do not measure. If you have a website, knowing where it appears in Google search results for your target keywords tells you whether your SEO efforts are working. A rank checker gives you that snapshot instantly, without needing expensive tools like Ahrefs, SEMrush, or Moz.',
          'This free rank checker queries live Google results for any keyword and domain combination. It shows your exact position, the URL that is ranking, and how many results were scanned. Use it to track your progress after publishing new content, to monitor competitors, or to identify quick-win keywords where you already rank on page two or three.',
        ],
        tips: [
          'Check rankings regularly but not obsessively — positions fluctuate day to day.',
          'Focus on keywords where you rank positions 4 to 15 — small improvements push you to page one.',
          'Combine ranking data with Google Search Console for the most accurate picture.',
          'After checking, optimize title tags and meta descriptions for keywords just outside the top 3.',
        ],
      },
    ],
  },
];

export function getTool(slug: string): ToolDef | undefined {
  return tools.find((t) => t.slug === slug);
}

export const categories = [...new Set(tools.map((t) => t.category))];
