import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Much Are TikTok Shop Fees? (2026 Seller Fee Breakdown)",
  description:
    "How much does TikTok Shop charge sellers in 2026? Real referral fee and processing costs, with examples of how much you keep per sale.",
  alternates: {
    canonical: "https://tools.slyxup.in/how-much-are-tiktok-shop-fees/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How Much Are TikTok Shop Fees? (2026 Seller Fee Breakdown)",
      description:
        "Real TikTok Shop referral and processing fees for 2026, with examples of how much sellers keep per sale.",
      url: "https://tools.slyxup.in/how-much-are-tiktok-shop-fees/",
      datePublished: "2026-08-15",
      dateModified: "2026-08-15",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/how-much-are-tiktok-shop-fees/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "How much are TikTok Shop fees?",
          item: "https://tools.slyxup.in/how-much-are-tiktok-shop-fees/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does TikTok Shop charge sellers a fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. TikTok Shop charges a referral fee (about 5–6% by category) and a 2.9% + $0.30 payment processing fee on each sale. There's no listing fee.",
          },
        },
        {
          "@type": "Question",
          name: "How much do I keep from a TikTok Shop sale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "After the ~6% referral fee and 2.9% + $0.30 processing, you keep roughly 91–92% of the sale price before shipping and your product cost.",
          },
        },
        {
          "@type": "Question",
          name: "Which TikTok Shop category has the lowest fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Electronics and books carry a lower ~5% referral fee, while most other categories are around 6%.",
          },
        },
      ],
    },
  ],
};

export default function HowMuchAreTikTokShopFeesPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            How Much Are TikTok Shop Fees? (2026)
          </h1>
          <p className="mt-3 text-sm">Updated August 2026 · 5 min read</p>
        </header>

        <p>
          So you found a product, listed it on TikTok Shop, and the first sale
          came in. Feels great. Then you look at what actually landed in your
          account and wonder where the money went. Here&apos;s the breakdown you
          were hoping to find before you priced that listing.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The short answer
        </h2>
        <div className="rounded-lg border bg-muted/40 p-5">
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong className="text-foreground">Referral fee:</strong> about{" "}
              <strong>5–6%</strong> depending on category
            </li>
            <li>
              <strong className="text-foreground">Processing:</strong>{" "}
              <strong>2.9% + $0.30</strong> per sale
            </li>
            <li>
              <strong className="text-foreground">Listing fee:</strong>{" "}
              <strong>$0</strong> — you only pay when you sell
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The two fees that actually matter
        </h2>
        <p>
          Every TikTok Shop sale carries two charges. The{" "}
          <strong className="text-foreground">referral fee</strong> is a
          percentage of the sale that changes by category — most are around 6%,
          with electronics and books a bit lower at 5%. The{" "}
          <strong className="text-foreground">payment processing fee</strong> is
          the same on every sale: 2.9% plus $0.30.
        </p>
        <p>
          On a $50 sale at 6%, that works out to $3 in referral fee and $1.75 in
          processing — so you keep about <strong>$45.25</strong> before shipping
          and your product cost. On a small $12 order the $0.30 flat fee stings
          more proportionally, which is worth remembering when you price
          low-ticket items.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Is there anything else I&apos;m paying?
        </h2>
        <p>
          No listing fees, no monthly seller fee in most regions. If you cover
          shipping yourself, that comes out of your end, and promotions or
          affiliate commissions can trim your take further — but the core cost is
          just referral plus processing. The absence of a listing fee is a big
          reason new sellers test the platform so cheaply.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Run your own numbers
        </h2>
        <p>
          Don&apos;t trust a rule of thumb when your margin is on the line. Plug
          your price, category, and shipping into the{" "}
          <Link
            href="/tiktok-shop-fee-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            TikTok Shop Fee Calculator
          </Link>{" "}
          and it&apos;ll show the exact referral, processing, and net you keep in
          seconds.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">
            The bottom line
          </p>
          <p className="mt-1 text-sm">
            TikTok Shop is cheap to start and keeps roughly 91% of a typical
            sale after fees. The risk isn&apos;t the platform fee — it&apos;s
            pricing without running the math. Do that once and you&apos;re ahead
            of most sellers.
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