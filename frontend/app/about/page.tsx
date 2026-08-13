import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Slyxup and the story behind Slyxup Tools.",
};

const values = [
  {
    title: "Fast by default",
    description:
      "Every tool is engineered to run instantly in your browser. No waiting, no spin-up, no lag.",
  },
  {
    title: "Private by design",
    description:
      "No accounts, no trackers, no data collection. Your content never leaves your device.",
  },
  {
    title: "Simple to use",
    description:
      "One focused job per tool. No clutter, no paywalls, no watermarks.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="About"
        title="Slyxup Tools"
        description="An independent collection of free online utilities designed to be fast, simple and respectful of your privacy."
      />

      <div className="space-y-4 text-muted-foreground">
        <p>
          Slyxup Tools is built by a small independent team with one goal: make
          useful utilities that just work — without the sign-ups, ads and
          tracking that plague most &quot;free&quot; tool sites.
        </p>
        <p>
          No accounts, no watermarks, no data collection — just tools that do
          the job and get out of the way.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {values.map((value) => (
          <Card key={value.title}>
            <CardContent className="pt-5">
              <h2 className="font-heading text-base font-medium">
                {value.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}