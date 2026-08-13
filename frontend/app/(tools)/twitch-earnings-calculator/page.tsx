import type { Metadata } from "next";
import Link from "next/link";
import { TwitchEarningsCalculator } from "./twitch-earnings-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title:
    "Twitch Earnings Calculator — Estimate Subs, Bits & Ad Revenue (2026)",
  description:
    "Free Twitch Earnings Calculator for 2026. Estimate monthly income from subscriptions (50% split), Bits, ads, and donations. No sign-up.",
  alternates: {
    canonical: "https://tools.slyxup.in/twitch-earnings-calculator/",
  },
  openGraph: {
    title: "Twitch Earnings Calculator — Estimate Subs, Bits & Ad Revenue (2026)",
    description:
      "See how much Twitch streamers earn from subs, Bits, ads, and donations. Free, no sign-up.",
    url: "https://tools.slyxup.in/twitch-earnings-calculator/",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Twitch Earnings Calculator",
      url: "https://tools.slyxup.in/twitch-earnings-calculator/",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      description:
        "Free Twitch Earnings Calculator to estimate monthly income from subscriptions, Bits, ads, and donations.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Estimate subscription income (50% split)",
        "Bits and donation estimates",
        "Ad revenue by CPM",
        "Affiliate and partner tiers",
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
          name: "Twitch Earnings Calculator",
          item: "https://tools.slyxup.in/twitch-earnings-calculator/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much do Twitch streamers make?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most streamers earn $50–$500 per month. Affiliates with steady subs and viewers can earn more, and partner streamers often make thousands.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Twitch pay per subscription?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Twitch uses a 50/50 split on most subscriptions, so a streamer earns about $2.50 for a $4.99 Tier 1 sub, $5 for Tier 2, and $12.50 for Tier 3.",
          },
        },
        {
          "@type": "Question",
          name: "How much is a Bit worth to a streamer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A streamer earns $0.01 per Bit. 1,000 Bits equals $10 to the streamer.",
          },
        },
      ],
    },
  ],
};

const subRevenueTable = [
  ["Tier 1 ($4.99)", "$2.50"],
  ["Tier 2 ($9.99)", "$5.00"],
  ["Tier 3 ($24.99)", "$12.50"],
  ["Prime (free to viewer)", "~$2.50"],
];

export default function TwitchEarningsCalculatorPage() {
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
          Twitch Earnings Calculator
        </h1>
        <p className="mt-4 text-muted-foreground">
          Find out how much Twitch streamers earn from subscriptions, Bits, ads,
          and donations. Enter your stats below for an instant estimate.
        </p>
      </div>

      <TwitchEarningsCalculator />

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="font-medium text-foreground">TL;DR</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>
              Subscriptions are the biggest income source for most streamers,
              paid at a <strong>50/50 split</strong>.
            </li>
            <li>
              Bits pay <strong>$0.01 each</strong> — 1,000 Bits = $10.
            </li>
            <li>
              Ads and donations round out income but are smaller and less
              predictable.
            </li>
            <li>
              You must be an <strong>Affiliate or Partner</strong> to monetize
              subs, Bits, and ads.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            How the calculation works
          </h2>
          <p className="mt-3">
            This calculator sums four income streams: subscription revenue at the
            50/50 split, Bits at $0.01 each, ad revenue from an estimated
            impression count at your category&apos;s CPM, and your donations.
            Subscriptions dominate for most streamers.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            What each sub tier pays you
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Sub tier</th>
                  <th className="py-2 font-medium">Streamer earns</th>
                </tr>
              </thead>
              <tbody>
                {subRevenueTable.map((row) => (
                  <tr key={row[0]} className="border-b">
                    <td className="py-2 pr-4 text-foreground">{row[0]}</td>
                    <td className="py-2">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Realistic earnings examples
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                New Affiliate — 20 avg viewers
              </p>
              <p className="mt-1 text-sm">
                A few subs and occasional Bits. Total roughly{" "}
                <strong>$50–$200/month</strong>.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                Partner — 100 avg viewers
              </p>
              <p className="mt-1 text-sm">
                Steady subs, Bits, and ads. Total roughly{" "}
                <strong>$1,000–$3,000/month</strong>.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                Large Partner — 1,000+ avg viewers
              </p>
              <p className="mt-1 text-sm">
                Heavy subs, gifted sub trains, and sponsorships. Total roughly{" "}
                <strong>$10,000+/month</strong>.
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
                How do I become a Twitch Affiliate?
              </h3>
              <p className="mt-1">
                Reach 50 followers, 500 total minutes streamed, 7 broadcast days,
                and 3 average concurrent viewers in 30 days.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                What is the Twitch Partner split?
              </h3>
              <p className="mt-1">
                Most partners earn a 50/50 split, though top partners can
                negotiate up to 70/30.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                Is this calculator accurate?
              </h3>
              <p className="mt-1">
                It gives a realistic range based on public tier prices and the
                50/50 split. Actual earnings vary by tier, region, and ad rates —
                see methodology below.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Methodology & sources
          </h2>
          <p className="mt-3 text-sm">
            Figures use Twitch&apos;s public subscription prices and 50/50 split,
            the $0.01-per-Bit rate, and typical CPM ranges by category. This
            tool is for informational purposes only and is not affiliated with or
            endorsed by Twitch or Amazon.
          </p>
        </div>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">Related tools & guides</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/tiktok-money-calculator/" />}
            >
              TikTok Money Calculator
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/youtube-money-calculator/" />}
            >
              YouTube Money Calculator
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