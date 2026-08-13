import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Slyxup and the story behind Slyxup Tools.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-24 sm:px-6">
      <h1 className="font-heading text-4xl font-medium tracking-tight">
        About
      </h1>
      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>
          Slyxup Tools is an independent collection of free online utilities
          designed to be fast, simple and respectful of your privacy.
        </p>
        <p>
          No accounts, no watermarks, no data collection — just tools that do
          the job and get out of the way.
        </p>
      </div>
    </section>
  );
}