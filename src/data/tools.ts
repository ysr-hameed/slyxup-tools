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
}

export const tools: ToolDef[] = [
  {
    slug: 'invoice-generator',
    title: 'Free Invoice Generator',
    shortTitle: 'Invoice Generator',
    description:
      'Create a professional PDF invoice online in seconds. Add your business details, line items, tax, and download a ready-to-send invoice. 100% free, no signup, no watermark.',
    keywords: ['invoice generator', 'free invoice generator', 'make invoice online', 'create invoice pdf'],
    category: 'Document',
    difficulty: 'Medium',
    volume: '14K/mo',
    faqs: [
      {
        question: 'Is this invoice generator really free?',
        answer:
          'Yes. Create and download unlimited PDF invoices at no cost, with no signup and no watermark.',
      },
      {
        question: 'Can I add my logo to the invoice?',
        answer:
          'Yes. Upload your logo image and it will be placed at the top of the generated PDF invoice.',
      },
      {
        question: 'What payment methods can I list on the invoice?',
        answer:
          'You can add your bank details, payment link, or any custom payment instructions in the notes section.',
      },
    ],
  },
  {
    slug: 'bill-of-sale-generator',
    title: 'Free Bill of Sale Generator',
    shortTitle: 'Bill of Sale Generator',
    description:
      'Generate a free bill of sale document online. Fill in buyer, seller, and item details to instantly create a printable PDF bill of sale. No signup required.',
    keywords: ['bill of sale', 'bill of sale generator', 'free bill of sale template'],
    category: 'Document',
    difficulty: 'Medium',
    volume: '10K/mo',
    faqs: [
      {
        question: 'What is a bill of sale?',
        answer:
          'A bill of sale is a legal document that records the transfer of ownership of an item from a seller to a buyer.',
      },
      {
        question: 'Is a bill of sale legally binding?',
        answer:
          'A signed bill of sale serves as a record of the transaction and proof of transfer of ownership. Laws vary by jurisdiction.',
      },
      {
        question: 'Can I use this for selling a car?',
        answer:
          'Yes. Select the vehicle option and fill in the make, model, VIN, and odometer details.',
      },
    ],
  },
  {
    slug: 'quote-generator',
    title: 'Free Quote & Proposal Generator',
    shortTitle: 'Quote Generator',
    description:
      'Create a professional quote or proposal PDF in minutes. Add your services, pricing, and terms, then download and send to your client. Free forever.',
    keywords: ['quote generator', 'proposal generator', 'free quote template', 'make a quote online'],
    category: 'Document',
    difficulty: 'Medium',
    volume: '5K/mo',
    faqs: [
      {
        question: 'What is a quote / proposal?',
        answer:
          'A quote is a document listing the price for services or goods. A proposal adds project scope and terms to help win the job.',
      },
      {
        question: 'Can I customize the quote?',
        answer:
          'Yes. Edit every section: company details, line items, pricing, terms, and notes.',
      },
    ],
  },
  {
    slug: 'receipt-generator',
    title: 'Free Receipt Generator',
    shortTitle: 'Receipt Generator',
    description:
      'Make a free receipt PDF online. Add your business info, payment details, and amount to instantly create a printable receipt for your customer.',
    keywords: ['receipt generator', 'free receipt template', 'make a receipt online'],
    category: 'Document',
    difficulty: 'Medium',
    volume: '6K/mo',
    faqs: [
      {
        question: 'What is a receipt?',
        answer:
          'A receipt is a document acknowledging that payment has been received for goods or services.',
      },
      {
        question: 'Can I add tax to the receipt?',
        answer:
          'Yes. Enter the subtotal and tax amount, and the total will be calculated automatically.',
      },
    ],
  },
  {
    slug: 'rental-agreement-generator',
    title: 'Free Rental Agreement Generator',
    shortTitle: 'Rental Agreement Generator',
    description:
      'Create a simple rental / lease agreement PDF online. Fill in landlord, tenant, property, rent, and duration details to generate a printable agreement.',
    keywords: ['rental agreement', 'rental agreement generator', 'lease agreement template'],
    category: 'Document',
    difficulty: 'Medium',
    volume: '5K/mo',
    faqs: [
      {
        question: 'What is a rental agreement?',
        answer:
          'A rental agreement is a contract between landlord and tenant stating the terms for renting a property.',
      },
      {
        question: 'Is this a legal lease agreement?',
        answer:
          'This generates a basic template. For complex or high-value leases, have a legal professional review it.',
      },
    ],
  },
  {
    slug: 'social-media-image-resizer',
    title: 'Free Social Media Image Resizer',
    shortTitle: 'Social Media Resizer',
    description:
      'Resize and crop images to perfect social media sizes for Instagram, Facebook, X (Twitter), LinkedIn, and YouTube. Download in one click.',
    keywords: ['social media image resizer', 'instagram photo size', 'resize image for social media'],
    category: 'Image',
    difficulty: 'Medium',
    volume: '8K/mo',
    faqs: [
      {
        question: 'What sizes are available?',
        answer:
          'Instagram post 1080x1080, story 1080x1920, Facebook post 1200x630, X post 1600x900, LinkedIn 1200x627, YouTube thumbnail 1280x720, and more.',
      },
      {
        question: 'Where are my images processed?',
        answer:
          'Everything happens in your browser. Images are never uploaded to a server.',
      },
    ],
  },
  {
    slug: 'color-palette-generator',
    title: 'Free Color Palette Generator',
    shortTitle: 'Color Palette Generator',
    description:
      'Generate beautiful color palettes instantly. Pick a base color to get matching harmonies, copy HEX and RGB values, and download your palette.',
    keywords: ['color palette generator', 'color palette from image', 'hex color palette generator'],
    category: 'Design',
    difficulty: 'Medium',
    volume: '7K/mo',
    faqs: [
      {
        question: 'How are color palettes generated?',
        answer:
          'The tool applies classic color theory harmonies such as complementary, analogous, triadic, and monochromatic to your base color.',
      },
      {
        question: 'Can I copy HEX codes?',
        answer:
          'Yes. Click any swatch or copy button to copy the HEX or RGB value to your clipboard.',
      },
    ],
  },
  {
    slug: 'ai-humanizer',
    title: 'Free AI Text Humanizer',
    shortTitle: 'AI Humanizer',
    description:
      'Make AI-generated text sound more natural and human. Rewrite ChatGPT, Claude, and Gemini content with a more conversational, human tone — free to use.',
    keywords: ['ai humanizer', 'ai text humanizer', 'humanize ai text', 'make ai text sound human'],
    category: 'AI',
    difficulty: 'Medium',
    volume: '49K/mo',
    faqs: [
      {
        question: 'What does an AI humanizer do?',
        answer:
          'It rewrites AI-generated text to sound more natural and human, reducing robotic phrasing while keeping the meaning.',
      },
      {
        question: 'Is my text stored?',
        answer:
          'Text is sent only to process your request and is not stored or shared.',
      },
    ],
  },
  {
    slug: 'ai-paraphraser',
    title: 'Free AI Paraphraser',
    shortTitle: 'AI Paraphraser',
    description:
      'Rewrite any sentence or paragraph with our free AI paraphraser. Rephrase text with different tones, keep the meaning, and avoid plagiarism.',
    keywords: ['paraphrasing tool', 'paraphrase generator', 'free paraphraser', 'ai rewriter'],
    category: 'AI',
    difficulty: 'Medium',
    volume: '30K/mo',
    faqs: [
      {
        question: 'How does the AI paraphraser work?',
        answer:
          'It uses a language model to restructure your sentences with different vocabulary and phrasing while preserving the original meaning.',
      },
      {
        question: 'Is paraphrasing considered plagiarism?',
        answer:
          'Paraphrasing helps with rewording, but always cite your sources for published or copyrighted content.',
      },
    ],
  },
  {
    slug: 'seo-ranking-checker',
    title: 'Free SEO Keyword Ranking Checker',
    shortTitle: 'SEO Ranking Checker',
    description:
      'Check where your website ranks on Google for any keyword. Get instant position, URL, and search results data — free, no signup.',
    keywords: ['seo ranking checker', 'google rank checker', 'keyword position checker', 'rank tracker'],
    category: 'SEO',
    difficulty: 'Medium',
    volume: '2.4K/mo',
    faqs: [
      {
        question: 'How accurate is the rank checker?',
        answer:
          'It queries live Google search results, so positions reflect the current state of the search engine at the time of the check.',
      },
      {
        question: 'How many keywords can I check?',
        answer:
          'You can check as many keywords as you like. Results are returned instantly per keyword.',
      },
    ],
  },
];

export function getTool(slug: string): ToolDef | undefined {
  return tools.find((t) => t.slug === slug);
}

export const categories = [...new Set(tools.map((t) => t.category))];
