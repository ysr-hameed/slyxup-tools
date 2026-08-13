import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const placeholders = [
  "AI Writer & Paraphraser",
  "Document Editor",
  "SEO Rank Checker",
  "PDF Toolkit",
  "Color Palette Generator",
  "Social Media Resizer",
];

const featured = {
  title: "TikTok Money Calculator",
  href: "/tiktok-money-calculator",
  description:
    "Estimate your TikTok earnings across the Creator Fund, brand deals, and LIVE gifts — free, no sign-up.",
};

export default function Home() {
  return (
    <section className="flex flex-1 flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
        <Badge variant="secondary" className="mb-6">
          <Sparkles className="mr-1 size-3" />
          {featured.title} is live
        </Badge>
        <h1 className="max-w-3xl font-heading text-4xl font-medium leading-tight tracking-tight text-balance sm:text-6xl">
          Free online tools, <span className="italic">fast</span> and
          privacy-first.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Slyxup Tools is a growing suite of free utilities — no sign-ups, no
          bloat, no tracking. Everything runs right in your browser.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href={featured.href} />}
          >
            Try {featured.title} <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href="#tools" />}
          >
            Explore tools
          </Button>
        </div>
      </div>

      <div
        id="tools"
        className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6"
      >
        <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
          Popular right now
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col transition-colors hover:bg-muted/50">
            <CardHeader>
              <CardTitle className="font-heading text-lg font-medium">
                {featured.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="flex-1 text-sm text-muted-foreground">
                {featured.description}
              </p>
              <Button
                className="mt-4"
                variant="outline"
                size="sm"
                nativeButton={false}
                render={<Link href={featured.href} />}
              >
                Open tool
              </Button>
            </CardContent>
          </Card>
        </div>

        <h2 className="mt-12 font-heading text-2xl font-medium tracking-tight sm:text-3xl">
          Coming soon
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((tool) => (
            <Card key={tool} className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <CardTitle className="font-heading text-lg font-medium">
                  {tool}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This tool is under construction and will be available soon.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}