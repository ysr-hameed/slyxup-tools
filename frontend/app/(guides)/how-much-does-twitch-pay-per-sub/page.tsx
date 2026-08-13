import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Much Does Twitch Pay Per Sub? (2026 Sub Split Guide)",
  description:
    "How much Twitch pays per subscription in 2026 — the 50/50 split, Tier 1/2/3 payouts, Prime subs, and gifted subs.",
  alternates: {
    canonical: "https://tools.slyxup.in/how-much-does-twitch-pay-per-sub/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How Much Does Twitch Pay Per Sub? (2026 Sub Split Guide)",
      description:
        "Twitch subscription payouts for 2026: Tier 1/2/3 splits, Prime subs, and gifted subs.",
      url: "https://tools.slyxup.in/how-much-does-twitch-pay-per-sub/",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/how-much-does-twitch-pay-per-sub/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "How much does Twitch pay per sub?",
          item: "https://tools.slyxup.in/how-much-does-twitch-pay-per-sub/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a streamer make per sub?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A streamer earns about $2.50 for a $4.99 Tier 1 sub, $5 for Tier 2, and $12.50 for Tier 3 under the 50/50 split.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Twitch pay for Prime subs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Twitch pays streamers roughly $2.50 for each Prime sub, since the viewer doesn't pay directly.",
          },
        },
        {
          "@type": "Question",
          name: "Are gifted subs worth the same?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, gifted subs pay the same rate as regular subs of the same tier.",
          },
        },
      ],
    },
  ],
};

export default function HowMuchDoesTwitchPayPerSubPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            How Much Does Twitch Pay Per Sub?
          </h1>
          <p className="mt-3 text-sm">Updated August 2026 · 5 min read</p>
        </header>

        <p>
          Under Twitch&apos;s standard{" "}
          <strong className="text-foreground">50/50 split</strong>, a streamer
          keeps half of each subscription. Here&apos;s what that means for every
          tier.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Payout by sub tier
        </h2>
        <div className="rounded-lg border bg-muted/40 p-5">
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>
              <strong className="text-foreground">Tier 1 ($4.99):</strong> $2.50
            </li>
            <li>
              <strong className="text-foreground">Tier 2 ($9.99):</strong> $5.00
            </li>
            <li>
              <strong className="text-foreground">Tier 3 ($24.99):</strong> $12.50
            </li>
            <li>
              <strong className="text-foreground">Prime sub:</strong> ~$2.50
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Gifted subs pay the same
        </h2>
        <p>
          Whether a viewer subscribes or gifts a sub to someone else, the
          streamer earns the same per-tier payout. Gift sub trains can be a major
          income source during events.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Top partners earn more
        </h2>
        <p>
          High-performing partners can negotiate better splits (down to a 30%
          Twitch cut), significantly raising per-sub earnings.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Estimate your sub income
        </h2>
        <p>
          Use the{" "}
          <Link
            href="/twitch-earnings-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            Twitch Earnings Calculator
          </Link>{" "}
          to estimate your monthly subscription revenue across all tiers.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <Button
            nativeButton={false}
            render={<Link href="/twitch-earnings-calculator/" />}
          >
            Open Twitch Earnings Calculator
          </Button>
        </div>
      </article>
    </section>
  );
}