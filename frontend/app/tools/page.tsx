import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Browse the full collection of free, browser-based tools from Slyxup.",
};

const availableTools = [
  {
    title: "TikTok Money Calculator",
    href: "/tiktok-money-calculator",
    description:
      "Estimate your TikTok earnings across the Creator Fund, brand deals, and LIVE gifts based on views, followers, niche, and region.",
  },
];

const guides = [
  {
    title: "How Much Does TikTok Pay Per View?",
    href: "/how-much-does-tiktok-pay",
    description:
      "Real Creator Fund and Creativity Program RPM rates for 2026, with per-1,000-views earnings.",
  },
  {
    title: "How Many Views to Make $1,000 on TikTok?",
    href: "/how-many-views-to-make-1000-on-tiktok",
    description:
      "The Creator Fund math for $1,000, and why brand deals and longer videos get you there faster.",
  },
];

export default function ToolsPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-16 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-heading text-4xl font-medium tracking-tight sm:text-5xl">
          All tools
        </h1>
        <p className="mt-4 text-muted-foreground">
          Free, fast and privacy-friendly — everything runs right in your
          browser.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {availableTools.map((tool) => (
          <Card
            key={tool.href}
            className="flex flex-col transition-colors hover:bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="font-heading text-lg font-medium">
                {tool.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="flex-1 text-sm text-muted-foreground">
                {tool.description}
              </p>
              <Button
                className="mt-4"
                variant="outline"
                size="sm"
                nativeButton={false}
                render={<Link href={tool.href} />}
              >
                Open tool
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
          Guides & resources
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <Card
              key={guide.href}
              className="flex flex-col transition-colors hover:bg-muted/50"
            >
              <CardHeader>
                <CardTitle className="font-heading text-lg font-medium">
                  {guide.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="flex-1 text-sm text-muted-foreground">
                  {guide.description}
                </p>
                <Button
                  className="mt-4"
                  variant="outline"
                  size="sm"
                  nativeButton={false}
                  render={<Link href={guide.href} />}
                >
                  Read guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}