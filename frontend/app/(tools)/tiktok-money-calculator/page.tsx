import type { Metadata } from "next";
import Link from "next/link";
import { TikTokMoneyCalculator } from "./tiktok-money-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title:
    "TikTok Money Calculator — Estimate Your Earnings Per View & Month (2026)",
  description:
    "Free TikTok Money Calculator for 2026. Estimate Creator Fund and Creativity Program earnings, brand deal rates, and LIVE gifts based on views, followers, niche, and region. No sign-up.",
  alternates: {
    canonical: "https://tools.slyxup.in/tiktok-money-calculator/",
  },
  openGraph: {
    title:
      "TikTok Money Calculator — Estimate Your Earnings Per View & Month (2026)",
    description:
      "See how much TikTok pays per view and estimate your monthly earnings in seconds. Free, no sign-up.",
    url: "https://tools.slyxup.in/tiktok-money-calculator/",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "TikTok Money Calculator",
      url: "https://tools.slyxup.in/tiktok-money-calculator/",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      description:
        "Free TikTok Money Calculator to estimate Creator Fund, Creativity Program, brand deal, and LIVE gift earnings based on views, followers, niche, and region.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Estimate earnings per view and per month",
        "Creator Fund and Creativity Program RPM",
        "Brand deal rate estimates",
        "LIVE gift estimates",
        "Niche, region, and video-length factors",
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
          name: "TikTok Money Calculator",
          item: "https://tools.slyxup.in/tiktok-money-calculator/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does TikTok pay per view?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "TikTok's Creator Fund pays about 2–5 cents per 1,000 views. The Creativity Program for videos over 1 minute pays more, around 30 cents to $1 per 1,000 qualified views depending on niche and region.",
          },
        },
        {
          "@type": "Question",
          name: "How much does TikTok pay for 1 million views?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At the typical Creator Fund rate, 1 million views earns roughly $20–$50. Longer videos on the Creativity Program can earn significantly more.",
          },
        },
        {
          "@type": "Question",
          name: "How do I qualify for the TikTok Creator Fund?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You need at least 10,000 followers, 100,000 video views in the last 30 days, and to be at least 18 years old.",
          },
        },
      ],
    },
  ],
};

const nicheTable = [
  ["Finance", "High", "$1,000–$5,000+", "Brand deals"],
  ["Tech / Education", "High", "$800–$4,000", "Brand deals"],
  ["Beauty", "High", "$800–$3,500", "Brand deals"],
  ["Fitness", "Medium", "$500–$2,500", "Brand deals"],
  ["Lifestyle", "Medium", "$400–$2,000", "Brand deals"],
  ["Food", "Medium", "$300–$1,500", "Brand deals"],
  ["Travel", "Medium", "$300–$1,500", "Brand deals"],
  ["Gaming", "Medium", "$300–$1,500", "Brand deals"],
  ["Entertainment", "Low", "$200–$1,000", "Creativity Program"],
  ["Comedy", "Low", "$150–$800", "Creativity Program"],
  ["Pets", "Low", "$150–$800", "Creativity Program"],
];

export default function TikTokMoneyCalculatorPage() {
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
          TikTok Money Calculator
        </h1>
        <p className="mt-4 text-muted-foreground">
          Find out how much TikTok pays per view and estimate your monthly
          earnings across the Creator Fund, brand deals, and LIVE gifts. Enter
          your stats below for an instant estimate.
        </p>
      </div>

      <TikTokMoneyCalculator />

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="font-medium text-foreground">TL;DR</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>
              The Creator Fund pays about <strong>2–5¢ per 1,000 views</strong>
              .
            </li>
            <li>
              Videos over 1 minute on the <strong>Creativity Program</strong>{" "}
              earn more — up to <strong>$1 per 1,000 views</strong>.
            </li>
            <li>
              Brand deals and LIVE gifts usually earn{" "}
              <strong>10–100× more</strong> than the Creator Fund.
            </li>
            <li>
              You need <strong>10K followers + 100K views/30 days</strong> to
              qualify.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            How the calculation works
          </h2>
          <p className="mt-3">
            The TikTok Creator Fund and Creativity Program pay based on your{" "}
            <strong>RPM</strong> — revenue per mille, or what you earn for every
            1,000 views. The formula is:
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border bg-muted/40 p-4 font-mono text-sm text-foreground">
            Monthly Earnings = (Views ÷ 1,000) × RPM
          </pre>
          <p className="mt-3">
            RPM depends on your <strong>niche</strong> (finance and tech pay
            more), <strong>audience region</strong> (US and UK viewers are more
            valuable), <strong>video length</strong> (1-minute+ videos qualify
            for the higher-paying Creativity Program), and{" "}
            <strong>engagement</strong>. This calculator combines those factors
            into a low–high estimate for the Creator Fund, brand deals, and
            LIVE gifts.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Which niches earn the most?
          </h2>
          <p className="mt-3">
            Advertisers pay more to reach high-value audiences, so some niches
            earn a much higher RPM and command higher brand deal rates.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Niche</th>
                  <th className="py-2 pr-4 font-medium">RPM level</th>
                  <th className="py-2 pr-4 font-medium">Brand deal / post</th>
                  <th className="py-2 font-medium">Best income source</th>
                </tr>
              </thead>
              <tbody>
                {nicheTable.map((row) => (
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
            Realistic earnings examples
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                Nano creator — 8K followers, 50K views/video
              </p>
              <p className="mt-1 text-sm">
                ~$2–$4/month Creator Fund, plus an occasional $50–$150 brand
                post. Total roughly <strong>$60–$250/month</strong> with a few
                deals.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                Mid creator — 200K followers, 500K views/video
              </p>
              <p className="mt-1 text-sm">
                ~$25–$50/month Creator Fund, plus 2–4 brand deals at
                $800–$2,000 each. Total roughly{" "}
                <strong>$2,000–$8,000/month</strong>.
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
                How much does TikTok pay per view?
              </h3>
              <p className="mt-1">
                About 2–5 cents per 1,000 views on the Creator Fund. Longer
                videos on the Creativity Program earn up to $1 per 1,000
                qualified views.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                How much is 1 million TikTok views worth?
              </h3>
              <p className="mt-1">
                Around $20–$50 from the Creator Fund. Stacking brand deals,
                LIVE gifts, and the Creativity Program can push a viral video
                much higher.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                Does TikTok pay for every view?
              </h3>
              <p className="mt-1">
                No — only &ldquo;qualified&rdquo; views from eligible videos
                count. Views from bots or non-qualifying content are excluded.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                How many views to make $1,000 on TikTok?
              </h3>
              <p className="mt-1">
                At 3¢ per 1,000 views you&apos;d need roughly 33 million
                Creator Fund views. Brand deals and the Creativity Program make
                $1,000 reachable far sooner.{" "}
                <Link
                  href="/how-many-views-to-make-1000-on-tiktok/"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  See the full guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Methodology & sources
          </h2>
          <p className="mt-3 text-sm">
            RPM and brand-deal benchmarks are based on reported averages from
            creators and industry sources (Influencer Marketing Hub, TikTok
            Newsroom, Later, Hootsuite). TikTok does not publish exact payout
            formulas, so treat all figures as estimates. This tool is for
            informational purposes only and is not affiliated with or endorsed
            by TikTok.
          </p>
        </div>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">Related guides</p>
          <div className="mt-3 flex flex-wrap gap-3">
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
              render={<Link href="/how-many-views-to-make-1000-on-tiktok/" />}
            >
              Views to make $1,000
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/how-much-does-tiktok-pay-for-1-million-views/" />}
            >
              TikTok pay for 1M views
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