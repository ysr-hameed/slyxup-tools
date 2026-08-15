import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "YouTube RPM: How Much Does YouTube Pay Per 1,000 Views? (2026)",
  description:
    "YouTube RPM in 2026: how much YouTube pays per 1,000 views by niche, what affects your RPM, and why it's lower than you think.",
  alternates: {
    canonical: "https://tools.slyxup.in/how-much-does-youtube-pay-per-1000-views/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "YouTube RPM: How Much Does YouTube Pay Per 1,000 Views? (2026)",
      description:
        "Real YouTube RPM figures for 2026 by niche, plus what drives your revenue per 1,000 views.",
      url: "https://tools.slyxup.in/how-much-does-youtube-pay-per-1000-views/",
      datePublished: "2026-08-13",
      dateModified: "2026-08-13",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/how-much-does-youtube-pay-per-1000-views/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "How much does YouTube pay per 1,000 views?",
          item: "https://tools.slyxup.in/how-much-does-youtube-pay-per-1000-views/",
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
            text: "Most creators earn $2–$10 per 1,000 views depending on niche, audience, and watch time. Finance and tech niches can exceed $10.",
          },
        },
        {
          "@type": "Question",
          name: "What is CPM vs RPM on YouTube?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CPM is what advertisers pay per 1,000 ad impressions. RPM is what you actually earn per 1,000 views after YouTube's cut and when ads are skipped.",
          },
        },
        {
          "@type": "Question",
          name: "Why is my YouTube RPM so low?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RPM drops with lower-CPM regions, short watch times, and niches like gaming or entertainment that attract cheaper ads.",
          },
        },
      ],
    },
  ],
};

const rpmTable = [
  ["Finance", "$10–$15"],
  ["Tech", "$8–$12"],
  ["Education", "$6–$10"],
  ["Beauty", "$5–$8"],
  ["Fitness", "$4–$7"],
  ["Lifestyle", "$3–$6"],
  ["Food", "$3–$6"],
  ["Entertainment", "$2–$5"],
  ["Gaming", "$2–$4"],
];

export default function HowMuchDoesYouTubePayPer1000ViewsPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            YouTube RPM: How Much Does YouTube Pay Per 1,000 Views?
          </h1>
          <p className="mt-3 text-sm">Updated August 2026 · 6 min read</p>
        </header>

        <p>
          So you hit a thousand views on a video and wondered what you actually
          made from it. The number that matters isn&apos;t views — it&apos;s{" "}
          <strong className="text-foreground">RPM</strong>, your revenue per
          1,000 views. For most creators that lands between{" "}
          <strong className="text-foreground">$2–$10</strong>, and the niche you
          pick does a lot of the heavy lifting.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          RPM by niche
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Niche</th>
                <th className="py-2 font-medium">Est. RPM</th>
              </tr>
            </thead>
            <tbody>
              {rpmTable.map((row) => (
                <tr key={row[0]} className="border-b">
                  <td className="py-2 pr-4 text-foreground">{row[0]}</td>
                  <td className="py-2">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          CPM vs RPM
        </h2>
        <p>
          <strong className="text-foreground">CPM</strong> is what advertisers
          pay per 1,000 ad impressions. <strong className="text-foreground">RPM</strong> is
          what you actually keep per 1,000 views after YouTube takes its ~45%
          share and viewers skip past ads. Here&apos;s the thing: your RPM is
          always going to sit below that shiny CPM number.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          What raises your RPM
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li>Longer watch time and higher audience retention</li>
          <li>Audiences in high-CPM regions (US, UK, Germany)</li>
          <li>High-value niches like finance, tech, and education</li>
          <li>Long-form videos over 8 minutes (more ad slots)</li>
        </ul>
        <p>
          Say you run a personal finance channel and most of your audience is in
          the US — a $10–$15 RPM isn&apos;t a pipe dream. A gaming channel with
          a global, younger audience will be lucky to crack $4. Same platform,
          totally different paychecks.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Estimate your own earnings
        </h2>
        <p>
          The takeaway? Don&apos;t chase views for their own sake. A finance
          channel pulling 500K views a month at $10 RPM makes more than an
          entertainment channel doing the same at $3. If you&apos;re picking a
          niche, that&apos;s the leverage you actually have. Use the{" "}
          <Link
            href="/youtube-money-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            YouTube Money Calculator
          </Link>{" "}
          to combine ad revenue, sponsorships, and memberships into a monthly
          estimate for your niche and region.
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