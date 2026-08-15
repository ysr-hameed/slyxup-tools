import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Much Do You Keep From a TikTok Shop Sale? (2026)",
  description:
    "How much of a TikTok Shop sale you actually keep after referral fees and processing, with per-price examples and a margin trick.",
  alternates: {
    canonical: "https://tools.slyxup.in/how-much-do-you-keep-from-a-tiktok-shop-sale/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How Much Do You Keep From a TikTok Shop Sale? (2026)",
      description:
        "Net you keep per TikTok Shop sale after referral and processing fees, with examples by price point.",
      url: "https://tools.slyxup.in/how-much-do-you-keep-from-a-tiktok-shop-sale/",
      datePublished: "2026-08-15",
      dateModified: "2026-08-15",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/how-much-do-you-keep-from-a-tiktok-shop-sale/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "How much do you keep from a TikTok Shop sale?",
          item: "https://tools.slyxup.in/how-much-do-you-keep-from-a-tiktok-shop-sale/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much do I keep from a $50 TikTok Shop sale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At the standard 6% referral fee plus 2.9% + $0.30 processing, you keep about $45.25 before shipping and product cost.",
          },
        },
        {
          "@type": "Question",
          name: "What percent of a TikTok Shop sale does the seller keep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sellers keep roughly 91–92% of the sale price before shipping and product cost, depending on category.",
          },
        },
        {
          "@type": "Question",
          name: "Why do low-price TikTok Shop items feel unprofitable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The $0.30 flat processing fee and any shipping eat a bigger share of small orders, so low-ticket items need a higher markup to stay profitable.",
          },
        },
      ],
    },
  ],
};

const keepTable = [
  ["$12", "−$0.72", "−$0.65", "$10.63"],
  ["$20", "−$1.20", "−$0.88", "$17.92"],
  ["$50", "−$3.00", "−$1.75", "$45.25"],
  ["$100", "−$6.00", "−$3.20", "$90.80"],
  ["$120", "−$6.00", "−$3.78", "$110.22"],
];

export default function HowMuchDoYouKeepFromTikTokShopSalePage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            How Much Do You Keep From a TikTok Shop Sale?
          </h1>
          <p className="mt-3 text-sm">Updated August 2026 · 5 min read</p>
        </header>

        <p>
          Someone just bought your product. Great. But before you celebrate,
          remember TikTok Shop doesn&apos;t hand over the sticker price. Here&apos;s
          the real number you keep — and why it matters more on cheap items than
          expensive ones.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The math in plain terms
        </h2>
        <p>
          Take your sale price, subtract the referral fee (about 6% for most
          categories, 5% for electronics and books), then subtract 2.9% plus
          $0.30 for processing. What&apos;s left is yours before shipping and
          product cost. That&apos;s it — no listing fee, no monthly seller fee.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          How much you keep at common price points
        </h2>
        <p>
          Here&apos;s the net at the standard 6% rate (before shipping and product
          cost):
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Sale price</th>
                <th className="py-2 pr-4 font-medium">Referral</th>
                <th className="py-2 pr-4 font-medium">Processing</th>
                <th className="py-2 font-medium">You keep</th>
              </tr>
            </thead>
            <tbody>
              {keepTable.map((row) => (
                <tr key={row[0]} className="border-b">
                  <td className="py-2 pr-4 text-foreground">{row[0]}</td>
                  <td className="py-2 pr-4">{row[1]}</td>
                  <td className="py-2 pr-4">{row[2]}</td>
                  <td className="py-2">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Why cheap items are the trap
        </h2>
        <p>
          Watch the percentages. On a $120 electronics item you keep about 92%.
          On a $12 item the fixed $0.30 processing plus shipping eats a bigger
          slice, so you might keep only 88% — and if your product cost is high,
          the margin disappears fast. The classic mistake is pricing a low-ticket
          item with a markup that looks fine until you subtract the flat fee.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Price backward instead
        </h2>
        <p>
          Pick your target profit first, add the ~6% referral, 2.9% + $0.30, and
          shipping, then back into a price. Skip the guesswork and let the{" "}
          <Link
            href="/tiktok-shop-fee-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            TikTok Shop Fee Calculator
          </Link>{" "}
          do it — change the price until the &ldquo;you keep&rdquo; number hits
          your margin.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">The bottom line</p>
          <p className="mt-1 text-sm">
            You keep roughly 91–92% of a typical TikTok Shop sale after fees.
            It&apos;s a fair deal — as long as you price with the flat $0.30 in
            mind and run the math before you commit to a margin.
          </p>
          <Button
            className="mt-4"
            nativeButton={false}
            render={<Link href="/tiktok-shop-fee-calculator/" />}
          >
            Open TikTok Shop Fee Calculator
          </Button>
        </div>
      </article>
    </section>
  );
}