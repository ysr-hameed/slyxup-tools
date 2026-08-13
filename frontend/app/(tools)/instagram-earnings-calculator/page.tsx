import type { Metadata } from "next";
import Link from "next/link";
import { InstagramEarningsCalculator } from "./instagram-earnings-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title:
    "Instagram Earnings Calculator — Estimate Reels, Brand Deals & Affiliate Income (2026)",
  description:
    "Free Instagram Earnings Calculator for 2026. Estimate Reels bonus payouts, brand deal rates, and affiliate income based on followers, niche, engagement, and region. No sign-up.",
  alternates: {
    canonical: "https://tools.slyxup.in/instagram-earnings-calculator/",
  },
  openGraph: {
    title:
      "Instagram Earnings Calculator — Estimate Reels, Brand Deals & Affiliate Income (2026)",
    description:
      "See how much Instagram creators can earn per Reel, per sponsored post, and per month. Free, no sign-up.",
    url: "https://tools.slyxup.in/instagram-earnings-calculator/",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Instagram Earnings Calculator",
      url: "https://tools.slyxup.in/instagram-earnings-calculator/",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      description:
        "Free Instagram Earnings Calculator to estimate Reels bonuses, brand deal rates, and affiliate income based on followers, niche, engagement, and region.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Estimate Reels bonus payouts",
        "Brand deal rate estimates per post",
        "Affiliate income estimates",
        "Niche, account type, and region factors",
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
          name: "Instagram Earnings Calculator",
          item: "https://tools.slyxup.in/instagram-earnings-calculator/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much do Instagram creators make?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It varies widely by follower count and niche. Nano creators may earn $50–$250 per sponsored post, while million-follower creators can charge $1,000–$5,000+. Reels bonuses and affiliate income add on top.",
          },
        },
        {
          "@type": "Question",
          name: "How much does Instagram pay per view on Reels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Instagram's Reels Play bonus pays based on qualified plays, roughly a fraction of a cent per view, and is invite-only. Most creators earn far more from brand deals and affiliate marketing than from the bonus.",
          },
        },
        {
          "@type": "Question",
          name: "How much should I charge for an Instagram sponsored post?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A common benchmark is around $10–$20 per 1,000 followers for creators under 100K, scaling to $100+ per 1,000 for large accounts. Niche and engagement also matter.",
          },
        },
      ],
    },
  ],
};

const nicheTable = [
  ["Finance", "High", "$1,000–$5,000+", "Brand deals"],
  ["Tech", "High", "$800–$4,000", "Brand deals"],
  ["Fashion", "High", "$800–$3,500", "Brand deals"],
  ["Beauty", "High", "$800–$3,500", "Brand deals"],
  ["Fitness", "Medium", "$500–$2,500", "Brand deals"],
  ["Education", "Medium", "$400–$2,000", "Brand deals"],
  ["Lifestyle", "Medium", "$400–$2,000", "Brand deals"],
  ["Food", "Medium", "$300–$1,500", "Brand deals"],
  ["Travel", "Medium", "$300–$1,500", "Brand deals"],
  ["Gaming", "Low", "$250–$1,200", "Affiliate / Reels"],
  ["Entertainment", "Low", "$200–$1,000", "Affiliate / Reels"],
];

export default function InstagramEarningsCalculatorPage() {
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
          Instagram Earnings Calculator
        </h1>
        <p className="mt-4 text-muted-foreground">
          Find out how much Instagram creators can earn from Reels bonuses,
          brand deals, and affiliate income. Enter your stats below for an
          instant estimate.
        </p>
      </div>

      <InstagramEarningsCalculator />

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="font-medium text-foreground">TL;DR</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>
              <strong>Reels bonus</strong> is invite-only and pays a small
              amount per qualified view.
            </li>
            <li>
              <strong>Brand deals</strong> are the biggest earner — roughly{" "}
              <strong>$10–$20 per 1,000 followers</strong> for smaller creators.
            </li>
            <li>
              <strong>Affiliate income</strong> and shoutouts round out most
              creators&apos; revenue.
            </li>
            <li>
              High-value niches (finance, fashion, beauty) earn{" "}
              <strong>2–3× more</strong> than entertainment or gaming.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            How the calculation works
          </h2>
          <p className="mt-3">
            This calculator combines the three main ways Instagram creators
            earn: <strong>Reels bonuses</strong>, <strong>brand deals</strong>,
            and <strong>affiliate income</strong>. Your total estimate scales
            with followers, Reels views, post frequency, niche, account type,
            and audience region.
          </p>
          <p className="mt-3">
            Brand deals use a per-post rate based on your follower tier, then
            apply multipliers for niche, account type, and region. Reels bonuses
            are estimated from your monthly Reels views. Affiliate income is
            modeled as a share of the monthly sales you generate through your
            links.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Which niches earn the most?
          </h2>
          <p className="mt-3">
            Advertisers pay a premium to reach high-value audiences, so finance,
            fashion, beauty, and tech niches command the highest brand-deal
            rates.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Niche</th>
                  <th className="py-2 pr-4 font-medium">Brand deal / post</th>
                  <th className="py-2 pr-4 font-medium">Best income source</th>
                </tr>
              </thead>
              <tbody>
                {nicheTable.map((row) => (
                  <tr key={row[0]} className="border-b">
                    <td className="py-2 pr-4 text-foreground">{row[0]}</td>
                    <td className="py-2 pr-4">{row[1]}</td>
                    <td className="py-2">{row[2]}</td>
                    <td className="py-2">{row[3]}</td>
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
                Nano creator — 8K followers
              </p>
              <p className="mt-1 text-sm">
                Occasional $50–$150 sponsored posts plus a small Reels bonus.
                Total roughly <strong>$100–$400/month</strong>.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                Micro creator — 60K followers, beauty niche
              </p>
              <p className="mt-1 text-sm">
                2–4 brand deals at $200–$600 each, plus affiliate income. Total
                roughly <strong>$800–$2,500/month</strong>.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                Mid creator — 500K followers, finance niche
              </p>
              <p className="mt-1 text-sm">
                Multiple $1,000+ brand deals and strong affiliate commissions.
                Total roughly <strong>$8,000–$25,000/month</strong>.
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
                Does Instagram pay creators?
              </h3>
              <p className="mt-1">
                Yes. Instagram runs the Reels Play bonus (invite-only),
                subscriptions, Gifts, and supports monetization tools. Most
                creators still earn the majority from brand deals and affiliate
                marketing.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                How much do 10K followers pay on Instagram?
              </h3>
              <p className="mt-1">
                A creator with 10K followers can typically charge roughly
                $50–$250 per sponsored post, more in high-value niches with
                strong engagement.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                How much does Instagram pay per 1,000 views on Reels?
              </h3>
              <p className="mt-1">
                The Reels bonus pays a small amount per qualified view and is
                invite-only, so rates aren&apos;t public. It&apos;s best treated
                as a bonus on top of brand deals and affiliate income.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Methodology & sources
          </h2>
          <p className="mt-3 text-sm">
            Brand-deal and Reels-bonus benchmarks are based on reported averages
            from creators and industry sources (Influencer Marketing Hub, Hootsuite,
            Later). Instagram does not publish exact payout formulas, so treat all
            figures as estimates. This tool is for informational purposes only and
            is not affiliated with or endorsed by Instagram or Meta.
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
              render={<Link href="/how-much-does-tiktok-pay/" />}
            >
              How much does TikTok pay?
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