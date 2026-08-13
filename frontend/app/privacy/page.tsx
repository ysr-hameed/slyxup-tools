import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Slyxup Tools handles your data.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-24 sm:px-6">
      <h1 className="font-heading text-4xl font-medium tracking-tight">
        Privacy Policy
      </h1>
      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>
          Slyxup Tools is designed to be privacy-friendly. Most tools run
          entirely in your browser and never send your content to a server.
        </p>
        <p>
          We do not sell your data. We do not run invasive trackers. Where
          server-side features are used, minimal data is processed solely to
          provide the requested functionality.
        </p>
        <p>Last updated: August 2026.</p>
      </div>
    </section>
  );
}