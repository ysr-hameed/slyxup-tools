import type { Metadata } from "next";
import Link from "next/link";
import { YouTubeShortsCalculator } from "./youtube-shorts-calculator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title:
    "YouTube Shorts Money Calculator — Estimate Shorts RPM & Earnings (2026)",
  description:
    "Free YouTube Shorts Money Calculator for 2026. Estimate Shorts ad revenue and bonus payouts per 1,000 views based on niche and region. No sign-up.",
  alternates: {
    canonical: "https://tools.slyxup.in/youtube-shorts-calculator/",
  },
  openGraph: {
    title:
      "YouTube Shorts Money Calculator — Estimate Shorts RPM & Earnings (2026)",
    description:
      "See how much YouTube Shorts pay per 1,000 views and what your Shorts channel could earn. Free, no sign-up.",
    url: "https://tools.slyxup.in/youtube-shorts-calculator/",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "YouTube Shorts Money Calculator",
      url: "https://tools.slyxup.in/youtube-shorts-calculator/",
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      description:
        "Free YouTube Shorts Money Calculator to estimate Shorts ad revenue and bonus payouts based on views, niche, and region.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Estimate Shorts ad revenue",
        "Shorts RPM per 1,000 views",
        "Shorts bonus incentive",
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
          name: "YouTube Shorts Money Calculator",
          item: "https://tools.slyxup.in/youtube-shorts-calculator/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does YouTube pay for Shorts views?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shorts pay a lower RPM than long-form video — typically $0.05–$0.20 per 1,000 views depending on niche and audience, plus bonus incentives.",
          },
        },
        {
          "@type": "Question",
          name: "How much can you make from YouTube Shorts with 1 million views?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Around $50–$200 for 1 million Shorts views from ad revenue, with bonuses potentially adding more.",
          },
        },
        {
          "@type": "Question",
          name: "Do YouTube Shorts need 1,000 subscribers to monetize?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, to join the YouTube Partner Program you need 1,000 subscribers and 10 million public Shorts views in 90 days (or 4,000 watch hours on long-form).",
          },
        },
      ],
    },
  ],
};

const shortsRpmTable = [
  ["Finance", "$0.06–$0.20"],
  ["Tech", "$0.05–$0.18"],
  ["Education", "$0.05–$0.16"],
  ["Beauty", "$0.04–$0.12"],
  ["Fitness", "$0.04–$0.12"],
  ["Entertainment", "$0.03–$0.08"],
  ["Gaming", "$0.03–$0.08"],
  ["Comedy", "$0.03–$0.08"],
];

export default function YouTubeShortsCalculatorPage() {
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
          YouTube Shorts Money Calculator
        </h1>
        <p className="mt-4 text-muted-foreground">
          Find out how much YouTube Shorts pay per 1,000 views. Enter your Shorts
          views below for an instant monthly estimate.
        </p>
      </div>

      <YouTubeShortsCalculator />

      <div className="mx-auto mt-16 max-w-3xl space-y-8 text-muted-foreground">
        <div className="rounded-lg border bg-muted/40 p-5">
          <p className="font-medium text-foreground">TL;DR</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            <li>
              Shorts pay a <strong>much lower RPM</strong> than long-form video.
            </li>
            <li>
              Typical Shorts RPM is <strong>$0.05–$0.20</strong> per 1,000
              views before bonuses.
            </li>
            <li>
              High-value niches like finance and tech earn more, but still far
              below long-form.
            </li>
            <li>
              Shorts are best used to <strong>grow an audience</strong> that you
              funnel to long-form content and sponsorships.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            How the calculation works
          </h2>
          <p className="mt-3">
            Shorts revenue is based on views in the Shorts feed, paid at a lower
            RPM than long-form. This calculator applies a niche- and
            region-adjusted Shorts RPM to your monthly views, then adds a bonus
            incentive on top.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Shorts RPM by niche
          </h2>
          <p className="mt-3">
            Shorts ad rates are lower overall, but high-value niches still lead
            the pack.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Niche</th>
                  <th className="py-2 font-medium">Est. RPM</th>
                </tr>
              </thead>
              <tbody>
                {shortsRpmTable.map((row) => (
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
            Shorts vs. long-form
          </h2>
          <p className="mt-3">
            Long-form videos earn 5–10× more per 1,000 views than Shorts because
            they have more ad slots and higher watch time. Many creators use
            Shorts as a discovery engine that drives viewers to their monetized
            long-form videos.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Realistic earnings examples
          </h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                1M Shorts views/month
              </p>
              <p className="mt-1 text-sm">
                Ad revenue of <strong>$50–$200/month</strong> plus bonuses.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <p className="font-medium text-foreground">
                10M Shorts views/month, finance niche
              </p>
              <p className="mt-1 text-sm">
                Ad revenue of <strong>$600–$2,000/month</strong> plus bonuses.
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
                Is YouTube Shorts worth it for money?
              </h3>
              <p className="mt-1">
                Direct Shorts payouts are modest, but Shorts are excellent for
                rapid audience growth that you can convert to long-form and
                sponsor income.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-foreground">
                How do Shorts bonuses work?
              </h3>
              <p className="mt-1">
                YouTube offers bonus incentives for Shorts engagement and
                milestones, paid on top of the standard ad share.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Methodology & sources
          </h2>
          <p className="mt-3 text-sm">
            Shorts RPM figures are based on reported averages from creators and
            industry sources. YouTube does not publish exact Shorts payouts, so
            treat all figures as estimates. This tool is for informational
            purposes only and is not affiliated with or endorsed by YouTube or
            Google.
          </p>
        </div>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">Related tools & guides</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/youtube-shorts-rpm-per-1000-views/" />}
            >
              Shorts RPM per 1,000 views
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href="/how-much-do-1-million-shorts-views-pay/" />}
            >
              Pay for 1M Shorts views
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