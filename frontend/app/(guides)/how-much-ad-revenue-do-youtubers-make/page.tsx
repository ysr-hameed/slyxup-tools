import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How Much Ad Revenue Does a YouTuber Make? (2026 Breakdown)",
  description:
    "How much ad revenue YouTubers actually make in 2026 — typical monthly earnings by channel size, and how ads compare to sponsorships.",
  alternates: {
    canonical: "https://tools.slyxup.in/how-much-ad-revenue-do-youtubers-make/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How Much Ad Revenue Does a YouTuber Make? (2026 Breakdown)",
      description:
        "Realistic YouTube ad revenue by channel size in 2026, and why sponsorships often pay more than ads.",
      url: "https://tools.slyxup.in/how-much-ad-revenue-do-youtubers-make/",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/how-much-ad-revenue-do-youtubers-make/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "How much ad revenue does a YouTuber make?",
          item: "https://tools.slyxup.in/how-much-ad-revenue-do-youtubers-make/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much ad revenue does a small YouTuber make?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A channel just past the 1,000-subscriber threshold typically earns $100–$500 per month from ads, depending on views and RPM.",
          },
        },
        {
          "@type": "Question",
          name: "What percentage does YouTube take from ad revenue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "YouTube typically takes about 45% of ad revenue, leaving creators with roughly 55%.",
          },
        },
        {
          "@type": "Question",
          name: "Do YouTubers make more from ads or sponsorships?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For most established channels, sponsorships and other income streams beat ad revenue. Ads are the base, not the peak.",
          },
        },
      ],
    },
  ],
};

const revenueTable = [
  ["10K subs", "$100–$500"],
  ["100K subs", "$1,000–$5,000"],
  ["500K subs", "$5,000–$15,000"],
  ["1M subs", "$15,000–$40,000+"],
];

export default function HowMuchAdRevenueDoYouTubersMakePage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            How Much Ad Revenue Does a YouTuber Make?
          </h1>
          <p className="mt-3 text-sm">Updated August 2026 · 6 min read</p>
        </header>

        <p>
          YouTube ad revenue scales with views and RPM, not subscribers. Here
          are typical monthly ad-only figures for channels of different sizes.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Ad revenue by channel size
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Channel size</th>
                <th className="py-2 font-medium">Monthly ad revenue</th>
              </tr>
            </thead>
            <tbody>
              {revenueTable.map((row) => (
                <tr key={row[0]} className="border-b">
                  <td className="py-2 pr-4 text-foreground">{row[0]}</td>
                  <td className="py-2">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm">
          These are ad-only figures. Total income is usually higher once
          sponsorships, memberships, and affiliate links are added.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          YouTube&apos;s cut
        </h2>
        <p>
          YouTube keeps roughly{" "}
          <strong className="text-foreground">45% of ad revenue</strong> and pays
          creators the remaining ~55%. Your RPM already reflects this, so
          it&apos;s the number to watch.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Ads vs. sponsorships
        </h2>
        <p>
          For established channels, a single sponsored video usually pays more
          than a month of ad revenue. Smart creators treat ads as a baseline and
          layer sponsorships, memberships, and affiliate income on top.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Estimate your ad revenue
        </h2>
        <p>
          Use the{" "}
          <Link
            href="/youtube-money-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            YouTube Money Calculator
          </Link>{" "}
          to estimate your full monthly income across ads, sponsorships, and
          memberships.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <Button
            nativeButton={false}
            render={<Link href="/youtube-money-calculator/" />}
          >
            Open YouTube Money Calculator
          </Button>
        </div>
      </article>
    </section>
  );
}