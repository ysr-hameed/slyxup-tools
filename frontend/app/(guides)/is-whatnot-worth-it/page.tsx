import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Is Whatnot Worth It? Fees vs. Profit for Sellers (2026)",
  description:
    "Is Whatnot worth selling on in 2026? Real fee math, the low-ticket trap, and the items and live formats that actually keep a healthy margin.",
  alternates: {
    canonical: "https://tools.slyxup.in/is-whatnot-worth-it/",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Is Whatnot Worth It? Fees vs. Profit for Sellers (2026)",
      description:
        "Whether Whatnot is worth it for sellers in 2026, based on real fee math, margin, and which live formats keep sellers profitable.",
      url: "https://tools.slyxup.in/is-whatnot-worth-it/",
      datePublished: "2026-08-15",
      dateModified: "2026-08-15",
      author: { "@type": "Organization", name: "Slyxup Tools" },
      publisher: { "@type": "Organization", name: "Slyxup Tools" },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://tools.slyxup.in/is-whatnot-worth-it/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://tools.slyxup.in/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Is Whatnot worth it?",
          item: "https://tools.slyxup.in/is-whatnot-worth-it/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is Whatnot profitable for sellers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes for most, because there's no listing fee and you keep ~89% of each sale after fees. The caveat is low-ticket items and shipping costs, which can wipe out thin margins.",
          },
        },
        {
          "@type": "Question",
          name: "What sells best on Whatnot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Collectibles, trading cards, sneakers, luxury goods, and mystery bundles do well because they fit the live-auction energy and hold value at higher price points.",
          },
        },
        {
          "@type": "Question",
          name: "Do you need to pay to sell on Whatnot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No upfront cost. You only pay the ~8% seller commission and 2.9% processing when you make a sale.",
          },
        },
      ],
    },
  ],
};

export default function IsWhatnotWorthItPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="space-y-6 text-muted-foreground">
        <header>
          <h1 className="font-heading text-4xl font-medium tracking-tight text-foreground">
            Is Whatnot Worth It? (2026)
          </h1>
          <p className="mt-3 text-sm">Updated August 2026 · 6 min read</p>
        </header>

        <p>
          Whatnot has that irresistible pitch: sell your stuff live, auction it
          to a room of engaged buyers, and move inventory faster than any listing
          ever will. It&apos;s free to start, which makes it dangerously easy to
          dive in without checking the math. Here&apos;s the honest read on
          whether it&apos;s worth your time.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The fee math you can&apos;t ignore
        </h2>
        <p>
          On a typical sale you keep about 89%. That number holds at every price
          — but your real profit depends on what&apos;s underneath it. A $60 card
          lot with a $30 cost and combined shipping leaves you roughly $23. A $10
          trinket with a $7 cost and a label? The margin basically vanishes once
          the commission and shipping hit.
        </p>
        <p>
          Whatnot isn&apos;t one business — it&apos;s a margin and volume game. The
          commission is fair, but it only works when your product cost and
          shipping leave you room under that 11% drag.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          What the fees actually are
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong className="text-foreground">Seller commission:</strong> ~8%
            per sale
          </li>
          <li>
            <strong className="text-foreground">Processing:</strong> 2.9% per
            sale
          </li>
          <li>
            <strong className="text-foreground">Listing:</strong> $0 — no
            upfront cost
          </li>
        </ul>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          The real edge is speed and energy
        </h2>
        <p>
          You&apos;re not paying for Whatnot&apos;s fee — you&apos;re paying for
          what it does: selling in minutes, not weeks. A live auction creates
          urgency, and mystery bundles and rares get competitive. That
          time-to-sale is the whole point. If you have inventory that moves on
          camera, the 11% is a bargain compared to sitting on stock.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Who should skip it
        </h2>
        <p>
          If you sell cheap, heavy, or hard-to-ship items, the shipping cost
          will eat you faster than the commission. Same if you can&apos;t run an
          engaging stream — Whatnot runs on live energy, not listings. It&apos;s
          for collectibles, cards, sneakers, and goods that hold value and
          photograph well on camera.
        </p>

        <h2 className="font-heading text-2xl font-medium text-foreground">
          Check your margins before you go live
        </h2>
        <p>
          Don&apos;t guess. Drop your price, commission, and shipping into the{" "}
          <Link
            href="/whatnot-fee-calculator/"
            className="text-primary underline-offset-4 hover:underline"
          >
            Whatnot Fee Calculator
          </Link>{" "}
          and see the net per sale. If the number still clears your target after
          product cost, it&apos;s genuinely worth a shot — the platform is cheap
          to test and fast to move stock.
        </p>

        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="font-medium text-foreground">The bottom line</p>
          <p className="mt-1 text-sm">
            Whatnot is worth it for collectibles and higher-value items with
            real margin, thanks to free listing, ~89% take-home, and unbeatable
            speed. It&apos;s a poor fit for cheap, heavy, or low-margin goods. Run
            the fee math first, then let the live auction do the selling.
          </p>
          <Button
            className="mt-4"
            nativeButton={false}
            render={<Link href="/whatnot-fee-calculator/" />}
          >
            Open Whatnot Fee Calculator
          </Button>
        </div>
      </article>
    </section>
  );
}