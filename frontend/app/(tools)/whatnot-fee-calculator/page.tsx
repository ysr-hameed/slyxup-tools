import type { Metadata } from "next";
import Link from "next/link";
import { WhatnotFeeCalculator } from "./whatnot-fee-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Whatnot Fee Calculator — See How Much You Keep Per Live Sale (2026)",
  description:
    "Free Whatnot Fee Calculator for 2026. See the seller commission, 2.9% processing, and net you keep per live sale. No sign-up.",
  alternates: {
    canonical: "https://tools.slyxup.in/whatnot-fee-calculator/",
  },
  openGraph: {
    title:
      "Whatnot Fee Calculator — See How Much You Keep Per Live Sale (2026)",
    description:
      "Work out your Whatnot seller commission and processing costs, and how much of each live sale you actually keep. Free, no sign-up.",
    url: "https://tools.slyxup.in/whatnot-fee-calculator/",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Whatnot Fee Calculator",
      url: "https://tools.slyxup.in/whatnot-fee-calculator/",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      description:
        "Free Whatnot Fee Calculator to estimate seller commission, payment processing, and net profit per live sale.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Seller commission",
        "2.9% payment processing",
        "Optional shipping costs",
        "Net profit and % kept per sale",
        "No sign-up required",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Whatnot Fee Calculator",
          item: "https://tools.slyxup.in/whatnot-fee-calculator/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does Whatnot charge sellers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whatnot charges a seller commission of about 8% plus a 2.9% payment processing fee on each live sale. So on a $25 sale you keep roughly $22.27 before shipping and your product cost.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Whatnot seller fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The seller fee is about an 8% commission on each sale, plus 2.9% payment processing. It can vary slightly by category and region.",
          },
        },
        {
          "@type": "Question",
          name: "How much do you keep from a Whatnot sale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After the ~8% commission and 2.9% processing, you keep roughly 89% of the sale price before shipping and your product cost.",
          },
        },
      ],
    },
  ],
};

const exampleTable = [
  ["$10", "−$0.80", "−$0.29", "$8.91"],
  ["$25", "−$2.00", "−$0.73", "$22.27"],
  ["$50", "−$4.00", "−$1.45", "$44.55"],
  ["$100", "−$8.00", "−$2.90", "$89.10"],
];

export default function WhatnotFeeCalculatorPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <Badge variant="secondary" className="mb-6">
          Updated for 2026
        </Badge>
        <h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl">
          Whatnot Fee Calculator
        </h1>
        <p className="mt-4 text-muted-foreground">
          Whatnot&apos;s live-auction format moves inventory fast — but the
          commission adds up just as fast. This tool shows the seller fee,
          processing, and exactly how much you keep per sale.
        </p>
      </div>

      <WhatnotFeeCalculator />

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="font-medium text-foreground">TL;DR</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>
              Whatnot takes about an <strong>8% seller commission</strong> on
              each live sale, plus <strong>2.9%</strong> for payment processing.
            </li>
            <li>
              On a $25 sale you keep about <strong>$22.27</strong> before
              shipping and your product cost — roughly <strong>89%</strong>.
            </li>
            <li>
              No listing fee — you pay only when an item sells in your stream.
            </li>
            <li>
              Price items so your <strong>target margin</strong> still holds
              after the commission, not before.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            How the calculation works
          </h2>
          <p className="mt-3">
            Your net is the sale price minus two things: the{" "}
            <strong>seller commission</strong> (a percentage of each sale) and
            the <strong>payment processing fee</strong> (2.9%). Add any{" "}
            <strong>shipping</strong> you cover yourself and you have your true
            take:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border bg-muted/40 p-4 font-mono text-sm text-foreground">
            Net = Price − Commission (≈8%) − Processing (2.9%) − Shipping
          </pre>
          <p className="mt-3">
            Tune the commission rate for your category, add shipping if you pay
            it, and the calculator breaks out every fee plus the percent of the
            sale you keep.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            What you keep at common prices
          </h2>
          <p className="mt-3">
            Net kept at the standard 8% commission (before shipping and product
            cost):
          </p>
          <div className="mt-4 overflow-x-auto">
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
                {exampleTable.map((row) => (
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
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Realistic example
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                $60 collectible card lot
              </p>
              <p className="mt-1 text-sm">
                $4.80 commission (8%) + $1.74 processing. You keep about{" "}
                <strong>$53.46</strong> before shipping and your cost — roughly
                89%.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                $15 low-ticket item
              </p>
              <p className="mt-1 text-sm">
                $1.20 commission + $0.44 processing. The fixed percentage means
                you keep <strong>$13.36</strong> — but add shipping and a thin
                margin and small items get tight.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-medium text-foreground">
                Is Whatnot worth it for sellers?
              </h3>
              <p className="mt-1">
                Mostly yes. The ~89% you keep after fees is standard, and the
                live-auction format can move bulk inventory far faster than
                listings. It&apos;s best for higher-ticket or bulk items where
                the percentage doesn&apos;t eat the margin.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                Does Whatnot charge a listing fee?
              </h3>
              <p className="mt-1">
                No. There&apos;s no upfront fee to list or go live — you only pay
                the commission and processing when something sells.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                How do I price Whatnot items for a profit?
              </h3>
              <p className="mt-1">
                Start from your target profit, add the ~8% commission, 2.9%
                processing, and shipping, then back into a starting bid. This
                calculator does that math for you.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Methodology & sources
          </h2>
          <p className="mt-3 text-sm">
            Fee rates are based on Whatnot&apos;s published seller fee schedule
            and standard payment processing rates, as reported by Whatnot and
            industry sources. Fees can vary by category and region, so treat all
            figures as estimates. This tool is for informational purposes only
            and is not affiliated with or endorsed by Whatnot.
          </p>
        </div>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">Related tools & guides</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/how-much-are-whatnot-fees/" />}
            >
              How much are Whatnot fees?
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/tiktok-shop-fee-calculator/" />}
            >
              TikTok Shop Fee Calculator
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/tools" />}
            >
              Browse all tools
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}