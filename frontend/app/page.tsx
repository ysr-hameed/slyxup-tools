import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Compass,
  Lock,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featured = {
  title: "TikTok Money Calculator",
  href: "/tiktok-money-calculator",
  description:
    "Estimate your TikTok earnings across the Creator Fund, brand deals, and LIVE gifts — free, no sign-up.",
  highlights: ["Creator Fund & RPM", "Brand deal rates", "LIVE gifts"],
};

const tools = [
  {
    title: "TikTok Money Calculator",
    href: "/tiktok-money-calculator",
    description:
      "Estimate earnings from the Creator Fund, brand deals, and LIVE gifts.",
    icon: Calculator,
    featured: true,
  },
];

const perks = [
  {
    icon: Zap,
    title: "Blazing fast",
    description: "Pure client-side tools. No waiting, no page reloads.",
  },
  {
    icon: Lock,
    title: "Privacy-first",
    description: "No accounts, no tracking, no data collection. Ever.",
  },
  {
    icon: ShieldCheck,
    title: "No sign-ups",
    description: "Everything runs right in your browser, instantly.",
  },
];

const steps = [
  {
    icon: MousePointerClick,
    title: "Open a tool",
    description: "Pick from our growing library of free utilities.",
  },
  {
    icon: Calculator,
    title: "Enter your numbers",
    description: "Adjust the inputs to match your situation.",
  },
  {
    icon: Sparkles,
    title: "Get instant results",
    description: "See clear, actionable estimates right away.",
  },
];

const stats = [
  { value: "100%", label: "Free forever" },
  { value: "0", label: "Sign-ups required" },
  { value: "100%", label: "In-browser" },
  { value: "0", label: "Trackers" },
];

export default function Home() {
  return (
    <section className="flex flex-1 flex-col">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="bg-grid mask-fade-b pointer-events-none absolute inset-0"
        />
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 pb-16 pt-20 text-center sm:px-6 sm:pt-28">
          <Badge variant="secondary" className="mb-6">
            <Sparkles className="mr-1 size-3" />
            {featured.title} is live
          </Badge>
          <h1 className="max-w-3xl font-heading text-4xl font-medium leading-tight tracking-tight text-balance sm:text-6xl">
            Free online tools,{" "}
            <span className="text-gradient italic">fast</span> and
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
      </div>

      {/* Stats band */}
      <div className="mx-auto w-full max-w-6xl px-4 pb-4 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center rounded-2xl border bg-card px-6 py-8 text-center"
            >
              <span className="font-heading text-3xl font-semibold text-gradient sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured tools */}
      <div id="tools" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
              Popular right now
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Try our most useful, free browser tools — built for 2026, updated
              often, and ready in your browser in seconds.
            </p>
          </div>
          <Button
            variant="ghost"
            nativeButton={false}
            render={<Link href="/tools" />}
          >
            View all <ArrowRight className="ml-1 size-4" />
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group flex flex-col rounded-xl ring-1 ring-foreground/10 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-primary/40 sm:max-w-xs"
            >
              <Card className="flex flex-1 flex-col rounded-xl">
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <tool.icon className="size-5" />
                  </div>
                  {tool.featured && (
                    <Badge variant="outline" className="mb-2 w-fit">
                      #1 featured
                    </Badge>
                  )}
                  <CardTitle className="font-heading text-lg font-medium">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="flex-1 text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                  {tool.featured && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {featured.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
            How it works
          </h2>
          <p className="mt-3 text-muted-foreground">
            No downloads, no learning curve. Three steps and you&apos;re done.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="rounded-xl border bg-card p-6 text-center ring-1 ring-foreground/10">
                <div className="relative mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="size-5" />
                  <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-primary text-[0.65rem] font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-medium">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Perks */}
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-3xl border bg-muted/30 p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
              Why Slyxup Tools
            </h2>
            <p className="mt-3 text-muted-foreground">
              Built the way free tools should be — fast, private, and honest.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {perks.map((perk) => (
              <div key={perk.title} className="rounded-xl border bg-card p-6">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <perk.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-medium">
                  {perk.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border bg-card p-10 text-center sm:p-16">
          <div
            aria-hidden
            className="bg-grid mask-fade-b pointer-events-none absolute inset-0"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="font-heading text-3xl font-medium tracking-tight sm:text-4xl">
              Start with the{" "}
              <span className="text-gradient">#1 tool</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              See how much TikTok pays per view and what you could earn each
              month — in seconds.
            </p>
            <Button
              size="lg"
              className="mt-8"
              nativeButton={false}
              render={<Link href={featured.href} />}
            >
              Open {featured.title} <ArrowRight className="ml-2 size-4" />
            </Button>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Compass className="size-4" /> Free · No sign-up · Runs in your
              browser
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}