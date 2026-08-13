import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "YouTube Shorts RPM: How Much Do Shorts Pay Per View? (2026)",
  description:
    "YouTube Shorts RPM in 2026: how much Shorts pay per 1,000 views, why it's lower than long-form, and how bonuses add up.",
  alternates: {
    canonical: "https://tools.slyxup.in/youtube-shorts-rpm-per-1000-views/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "YouTube Shorts RPM: How Much Do Shorts Pay Per View? (2026)",
      description:
        "Real YouTube Shorts RPM figures for 2026, how Shorts payouts work, and why Shorts earn less per view than long-form.",
      url: "https://tools.slyxup.in/youtube-shorts-rpm-per-1000-views/",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/youtube-shorts-rpm-per-1000-views/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "YouTube Shorts RPM: how much do Shorts pay per view?",
          item: "https://tools.slyxup.in/youtube-shorts-rpm-per-1000-views/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does YouTube pay per 1,000 Shorts views?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shorts RPM is typically $0.05–$0.20 per 1,000 views before bonuses, far lower than long-form video.",
          },
        },
        {
          "@type": "Question",
          name: "Why do Shorts pay less than long-form videos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shorts have fewer ad slots and shorter watch times, which lowers the revenue YouTube can generate per view.",
          },
        },
        {
          "@type": "Question",
          name: "How do Shorts bonuses work in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "YouTube offers bonus incentives based on Shorts engagement and milestones, paid on top of the standard ad revenue share.",
          },
        },
      ],
    },
  ],
};

export default function YouTubeShortsRpmPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            YouTube Shorts RPM: How Much Do Shorts Pay Per View?
          </h1>
          <p className="mt-3 text-sm">Updated August 2026 · 5 min read</p>
        </header>

        <p>
          YouTube Shorts pay a{" "}
          <strong className="text-foreground">lower RPM than long-form</strong>.
          A typical Shorts RPM is{" "}
          <strong className="text-foreground">$0.05–$0.20 per 1,000 views</strong>{" "}
          before bonus incentives.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Why Shorts pay less
        </h2>
        <p>
          Shorts have fewer ad slots and much shorter watch times, so YouTube
          generates less ad revenue per view. Long-form videos with multiple ad
          breaks earn 5–10× more per 1,000 views.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Shorts RPM by niche
        </h2>
        <div className="rounded-lg border bg-muted/40 p-5">
          <ul className="list-inside list-disc space-y-1 text-sm">
            <li>
              <strong className="text-foreground">Finance / Tech:</strong>{" "}
              $0.06–$0.20
            </li>
            <li>
              <strong className="text-foreground">Beauty / Fitness:</strong>{" "}
              $0.04–$0.12
            </li>
            <li>
              <strong className="text-foreground">Entertainment / Gaming:</strong>{" "}
              $0.03–$0.08
            </li>
          </ul>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Bonuses add to the base
        </h2>
        <p>
          On top of the ad share, YouTube runs Shorts bonus programs tied to
          engagement and milestones. These can meaningfully boost your payouts
          but vary by region and eligibility.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Estimate your Shorts earnings
        </h2>
        <p>
          Use the{" "}
          <Link
            href="/youtube-shorts-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            YouTube Shorts Money Calculator
          </Link>{" "}
          to combine Shorts ad revenue and bonuses into a monthly estimate for
          your niche and region.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <Button
            nativeButton={false}
            render={<Link href="/youtube-shorts-calculator/" />}
          >
            Open YouTube Shorts Calculator
          </Button>
        </div>
      </article>
    </section>
  );
}