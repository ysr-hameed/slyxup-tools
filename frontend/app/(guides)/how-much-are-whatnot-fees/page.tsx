import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Much Are Whatnot Fees? (2026 Seller Fee Breakdown)",
  description:
    "How much does Whatnot charge sellers in 2026? Real commission and processing costs, with examples of how much you keep per live sale.",
  alternates: {
    canonical: "https://tools.slyxup.in/how-much-are-whatnot-fees/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How Much Are Whatnot Fees? (2026 Seller Fee Breakdown)",
      description:
        "Real Whatnot seller commission and processing fees for 2026, with examples of how much sellers keep per live sale.",
      url: "https://tools.slyxup.in/how-much-are-whatnot-fees/",
      datePublished: "2026-08-15",
      dateModified: "2026-08-15",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/how-much-are-whatnot-fees/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "How much are Whatnot fees?",
          item: "https://tools.slyxup.in/how-much-are-whatnot-fees/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Whatnot charge sellers a fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Whatnot charges about an 8% seller commission plus 2.9% payment processing on each live sale. There's no listing fee.",
          },
        },
        {
          "@type": "Question",
          name: "How much do I keep from a Whatnot sale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After the ~8% commission and 2.9% processing, you keep roughly 89% of the sale price before shipping and your product cost.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Whatnot seller fee the same for every category?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The commission is around 8% for most categories, though it can vary slightly by category and region. Processing is a flat 2.9%.",
          },
        },
      ],
    },
  ],
};

export default function HowMuchAreWhatnotFeesPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            How Much Are Whatnot Fees? (2026)
          </h1>
          <p className="mt-3 text-sm">Updated August 2026 · 5 min read</p>
        </header>

        <p>
          You&apos;ve got a stack of cards or clothes ready to auction live on
          Whatnot, and the plan is simple: turn on the stream, let the bids roll
          in, and pocket the cash. Simple until you check what actually lands in
          your account. Here&apos;s the fee math before you hit &ldquo;Go
          Live&rdquo;.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The short answer
        </h2>
        <div className="rounded-lg border bg-muted/40 p-5">
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Seller commission:</strong>{" "}
              about <strong>8%</strong> per sale
            </li>
            <li>
              <strong className="text-foreground">Processing:</strong>{" "}
              <strong>2.9%</strong> per sale
            </li>
            <li>
              <strong className="text-foreground">Listing fee:</strong>{" "}
              <strong>$0</strong> — you only pay when you sell
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The two costs on every sale
        </h2>
        <p>
          The <strong className="text-foreground">seller commission</strong> is a
          percentage of each sale — around 8% for most categories. On top of
          that, the <strong className="text-foreground">payment processing</strong>{" "}
          fee is 2.9% on every sale. On a $50 item that&apos;s $4 in commission
          and $1.45 in processing, leaving you about{" "}
          <strong>$44.55</strong> before shipping and your product cost.
        </p>
        <p>
          There&apos;s no listing fee and no monthly fee to stream, which is why
          Whatnot attracts so many casual sellers. You only pay when something
          actually sells in your auction.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Where the cost sneaks up
        </h2>
        <p>
          The percentage bites hardest on low-ticket items. Sell a $10 item and
          you keep about $8.91 before shipping — fine until you add a label and
          a thin margin. Whatnot rewards higher-value and bulk lots precisely
          because the 8% feels lighter when the sale is bigger. It&apos;s a
          volume-and-value game, not a nickels-and-dimes one.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Run your own numbers
        </h2>
        <p>
          Don&apos;t eyeball it when your margin is on the line. Plug your price,
          commission, and shipping into the{" "}
          <Link
            href="/whatnot-fee-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            Whatnot Fee Calculator
          </Link>{" "}
          and it&apos;ll show the exact commission, processing, and net you keep
          in seconds.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">The bottom line</p>
          <p className="mt-1 text-sm">
            Whatnot keeps roughly 11% of a typical sale across commission and
            processing — you take home about 89%. That&apos;s a fair trade for a
            platform that moves inventory live and fast. The risk is pricing
            small items without running the math.
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