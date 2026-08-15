import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Much Do You Keep From a Whatnot Sale? (2026)",
  description:
    "How much of a Whatnot sale you actually keep after commission and processing, with per-price examples and a profit trick.",
  alternates: {
    canonical: "https://tools.slyxup.in/how-much-do-you-keep-from-a-whatnot-sale/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How Much Do You Keep From a Whatnot Sale? (2026)",
      description:
        "Net you keep per Whatnot live sale after seller commission and processing, with examples by price point.",
      url: "https://tools.slyxup.in/how-much-do-you-keep-from-a-whatnot-sale/",
      datePublished: "2026-08-15",
      dateModified: "2026-08-15",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/how-much-do-you-keep-from-a-whatnot-sale/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "How much do you keep from a Whatnot sale?",
          item: "https://tools.slyxup.in/how-much-do-you-keep-from-a-whatnot-sale/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much do I keep from a $25 Whatnot sale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At the standard 8% commission plus 2.9% processing, you keep about $22.27 before shipping and product cost.",
          },
        },
        {
          "@type": "Question",
          name: "What percent of a Whatnot sale does the seller keep?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sellers keep roughly 89% of the sale price before shipping and product cost.",
          },
        },
        {
          "@type": "Question",
          name: "Why do small Whatnot items feel less profitable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The fixed 8% commission and any shipping eat a bigger share of small orders, so low-ticket items need a higher margin to stay profitable.",
          },
        },
      ],
    },
  ],
};

const keepTable = [
  ["$10", "−$0.80", "−$0.29", "$8.91"],
  ["$25", "−$2.00", "−$0.73", "$22.27"],
  ["$50", "−$4.00", "−$1.45", "$44.55"],
  ["$100", "−$8.00", "−$2.90", "$89.10"],
];

export default function HowMuchDoYouKeepFromWhatnotSalePage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            How Much Do You Keep From a Whatnot Sale?
          </h1>
          <p className="mt-3 text-sm">Updated August 2026 · 5 min read</p>
        </header>

        <p>
          The auction hammer drops, the chat cheers, and you&apos;ve made a sale.
          Before you start mentally spending it, remember Whatnot doesn&apos;t
          hand over the full hammer price. Here&apos;s the number you actually
          keep, and why it favors bigger lots.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The math in plain terms
        </h2>
        <p>
          Take your sale price, subtract the seller commission (about 8% for most
          categories), then subtract 2.9% for payment processing. What&apos;s left
          is yours before shipping and product cost. No listing fee, no monthly
          fee — you pay only when an item sells live.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          How much you keep at common prices
        </h2>
        <p>
          Here&apos;s the net at the standard 8% rate (before shipping and product
          cost):
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Sale price</th>
                <th className="py-2 pr-4 font-medium">Commission</th>
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
          Why big lots win
        </h2>
        <p>
          Watch what happens as prices climb. On $100 you keep about $89. On $10
          you keep about $8.91 — the same 89%, but now a single shipping label
          and a thin product margin can swallow the whole thing. Whatnot sellers
          do best when they bundle several items into one lot, because the 8%
          commission and shipping cost are absorbed across a bigger sale.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Price backward instead
        </h2>
        <p>
          Pick your target profit, add the ~8% commission, 2.9% processing, and
          shipping, then back into a starting bid. Skip the guesswork and let the{" "}
          <Link
            href="/whatnot-fee-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            Whatnot Fee Calculator
          </Link>{" "}
          do it — change the price until the &ldquo;you keep&rdquo; number hits
          your margin.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">The bottom line</p>
          <p className="mt-1 text-sm">
            You keep roughly 89% of a typical Whatnot sale after fees. It&apos;s a
            solid deal for moving inventory fast — as long as you bundle into
            bigger lots and run the math before you set the opening bid.
          </p>
          <Button
            className="mt-4"
            nativeButton={false}
            render={<Link href="/whatnot-fee-calculator/" />}
          >
            Open Whatnot Fee Calculator
          </Button>
        </div>
      </article>
    </section>
  );
}