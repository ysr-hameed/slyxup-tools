import type { Metadata } from "next";
import Link from "next/link";
import { YouTubeMoneyCalculator } from "./youtube-money-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title:
    "YouTube Money Calculator — Estimate Ad Revenue, RPM & Sponsorships (2026)",
  description:
    "Free YouTube Money Calculator for 2026. Estimate monthly ad revenue from CPM/RPM, sponsorships, and memberships based on views, niche, and region. No sign-up.",
  alternates: {
    canonical: "https://tools.slyxup.in/youtube-money-calculator/",
  },
  openGraph: {
    title:
      "YouTube Money Calculator — Estimate Ad Revenue, RPM & Sponsorships (2026)",
    description:
      "See how much YouTube pays per 1,000 views and what your channel could earn each month. Free, no sign-up.",
    url: "https://tools.slyxup.in/youtube-money-calculator/",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "YouTube Money Calculator",
      url: "https://tools.slyxup.in/youtube-money-calculator/",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      description:
        "Free YouTube Money Calculator to estimate ad revenue, RPM, sponsorships, and memberships based on views, niche, and region.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Estimate monthly ad revenue",
        "CPM and RPM breakdown",
        "Sponsorship rate estimates",
        "Channel membership income",
        "Niche and region factors",
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
          name: "YouTube Money Calculator",
          item: "https://tools.slyxup.in/youtube-money-calculator/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does YouTube pay per 1,000 views?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ad revenue (RPM) typically ranges from $2–$10 per 1,000 views depending on niche, audience, and watch time. Finance and tech niches earn the most.",
          },
        },
        {
          "@type": "Question",
          name: "How much money can a YouTuber make a month?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It varies widely by views and monetization. Small channels may earn $100–$500/month from ads, while established channels with sponsorships can earn thousands.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good RPM for YouTube?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A good RPM is around $4–$8 per 1,000 views. High-value niches like finance and tech can exceed $10, while entertainment and gaming are often lower.",
          },
        },
      ],
    },
  ],
};

const rpmTable = [
  ["Finance", "$10–$15", "Highest ad rates"],
  ["Tech", "$8–$12", "High-value audience"],
  ["Education", "$6–$10", "Strong, focused viewers"],
  ["Beauty", "$5–$8", "Solid ad rates"],
  ["Fitness", "$4–$7", "Good engagement"],
  ["Lifestyle", "$3–$6", "Broad audience"],
  ["Food", "$3–$6", "Broad audience"],
  ["Travel", "$3–$6", "Broad audience"],
  ["Entertainment", "$2–$5", "Lower per-view"],
  ["Gaming", "$2–$4", "Lower per-view"],
  ["Comedy", "$2–$4", "Lower per-view"],
];

export default function YouTubeMoneyCalculatorPage() {
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
          YouTube Money Calculator
        </h1>
        <p className="mt-4 text-muted-foreground">
          Find out how much your YouTube channel can earn from ad revenue,
          sponsorships, and memberships. Enter your stats below for an instant
          estimate.
        </p>
      </div>

      <YouTubeMoneyCalculator />

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="font-medium text-foreground">TL;DR</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>
              Ad revenue is driven by <strong>RPM</strong> — what you earn per
              1,000 monetized views.
            </li>
            <li>
              Finance and tech niches earn <strong>2–4× more</strong> per view
              than entertainment or gaming.
            </li>
            <li>
              Sponsorships and memberships often <strong>beat ad revenue</strong>{" "}
              for established channels.
            </li>
            <li>
              YouTube takes a ~45% cut; you keep ~55% of ad revenue.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            How the calculation works
          </h2>
          <p className="mt-3">
            This calculator estimates ad revenue from your monthly views using a
            niche- and region-adjusted RPM. It also models sponsorship income
            based on subscribers and niche, plus channel memberships from your
            subscriber base.
          </p>
          <p className="mt-3">
            <strong className="text-foreground">RPM</strong> (revenue per 1,000
            views) is the key figure. It&apos;s your estimated ad revenue after
            YouTube&apos;s share, and it changes with audience, watch time, and
            ad rates. Long-form videos earn far more per view than Shorts.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            RPM by niche
          </h2>
          <p className="mt-3">
            Your niche is the single biggest factor in ad rates. High-value
            audiences attract more expensive ads.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Niche</th>
                  <th className="py-2 pr-4 font-medium">Est. RPM</th>
                  <th className="py-2 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {rpmTable.map((row) => (
                  <tr key={row[0]} className="border-b">
                    <td className="py-2 pr-4 text-foreground">{row[0]}</td>
                    <td className="py-2 pr-4">{row[1]}</td>
                    <td className="py-2">{row[2]}</td>
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
                New channel — 1,000 subs, 50K views/month
              </p>
              <p className="mt-1 text-sm">
                Early ad revenue of $150–$400/month before sponsorships kick in
                consistently.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                Mid channel — 100K subs, 500K views/month, finance niche
              </p>
              <p className="mt-1 text-sm">
                Ad revenue of $2,500–$6,000 plus regular sponsorships. Total
                roughly <strong>$4,000–$12,000/month</strong>.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                Large channel — 1M subs, 5M views/month
              </p>
              <p className="mt-1 text-sm">
                Strong ad revenue, high-ticket sponsorships, and memberships.
                Total roughly <strong>$30,000–$80,000/month</strong>.
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
                Do you need 1,000 subscribers to make money on YouTube?
              </h3>
              <p className="mt-1">
                Yes. To join the YouTube Partner Program you need 1,000
                subscribers and 4,000 watch hours (or 10M Shorts views).
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                How much does YouTube pay for Shorts?
              </h3>
              <p className="mt-1">
                Shorts pay a lower RPM than long-form video. Revenue is based on
                engagement with the Shorts feed and typically falls well below
                long-form rates.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                Is this calculator accurate?
              </h3>
              <p className="mt-1">
                It gives a realistic range based on reported averages. Exact
                earnings depend on your audience, ad rates, and retention — see
                the methodology below.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Methodology & sources
          </h2>
          <p className="mt-3 text-sm">
            RPM figures are based on reported averages from creators and industry
            sources (Google/YouTube AdSense benchmarks, Influencer Marketing Hub).
            YouTube does not publish exact RPMs, so treat all figures as
            estimates. This tool is for informational purposes only and is not
            affiliated with or endorsed by YouTube or Google.
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
              render={<Link href="/instagram-earnings-calculator/" />}
            >
              Instagram Earnings Calculator
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