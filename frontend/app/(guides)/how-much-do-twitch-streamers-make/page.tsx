import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Much Do Twitch Streamers Make? (2026 Income Breakdown)",
  description:
    "How much Twitch streamers make in 2026 — subscription split, Bits, ads, and donations by follower and viewer count.",
  alternates: {
    canonical: "https://tools.slyxup.in/how-much-do-twitch-streamers-make/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How Much Do Twitch Streamers Make? (2026 Income Breakdown)",
      description:
        "Real Twitch income figures for 2026 across subscriptions, Bits, ads, and donations.",
      url: "https://tools.slyxup.in/how-much-do-twitch-streamers-make/",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/how-much-do-twitch-streamers-make/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "How much do Twitch streamers make?",
          item: "https://tools.slyxup.in/how-much-do-twitch-streamers-make/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does the average Twitch streamer make?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most streamers earn $50–$500 per month. Only a small share of partners earn full-time incomes.",
          },
        },
        {
          "@type": "Question",
          name: "How does Twitch pay streamers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Twitch pays through subscriptions (50/50 split), Bits ($0.01 each), and ad revenue, with donations going directly to streamers.",
          },
        },
        {
          "@type": "Question",
          name: "What percentage does Twitch take from subs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Twitch typically takes 50% of subscription revenue, though top partners can negotiate up to a 30% cut.",
          },
        },
      ],
    },
  ],
};

const incomeTable = [
  ["Affiliate (small)", "$50–$200"],
  ["Partner (mid)", "$1,000–$3,000"],
  ["Partner (large)", "$10,000–$30,000"],
  ["Top streamers", "$50,000+"],
];

export default function HowMuchDoTwitchStreamersMakePage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            How Much Do Twitch Streamers Make?
          </h1>
          <p className="mt-3 text-sm">Updated August 2026 · 6 min read</p>
        </header>

        <p>
          Most Twitch streamers earn{" "}
          <strong className="text-foreground">$50–$500 per month</strong>. Income
          comes from subscriptions, Bits, ads, and donations, and scales sharply
          with viewer count.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Income by streamer size
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Streamer tier</th>
                <th className="py-2 font-medium">Typical monthly income</th>
              </tr>
            </thead>
            <tbody>
              {incomeTable.map((row) => (
                <tr key={row[0]} className="border-b">
                  <td className="py-2 pr-4 text-foreground">{row[0]}</td>
                  <td className="py-2">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The 50/50 sub split
        </h2>
        <p>
          A streamer earns about{" "}
          <strong className="text-foreground">$2.50 for a $4.99 Tier 1 sub</strong>,{" "}
          $5 for Tier 2, and $12.50 for Tier 3. Twitch keeps the other half,
          though top partners can negotiate better rates.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Bits, ads, and donations
        </h2>
        <p>
          Bits pay <strong className="text-foreground">$0.01 each</strong> — 1,000
          Bits is $10. Ads pay a per-thousand rate based on viewership. Donations
          go straight to the streamer but are unpredictable.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Estimate your earnings
        </h2>
        <p>
          Use the{" "}
          <Link
            href="/twitch-earnings-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            Twitch Earnings Calculator
          </Link>{" "}
          to combine subs, Bits, ads, and donations into a personalized monthly
          estimate.
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