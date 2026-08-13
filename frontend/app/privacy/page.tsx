import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Slyxup Tools handles your data.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Slyxup Tools handles your data."
      />
      <div className="space-y-6 text-muted-foreground">
        <div className="space-y-2">
          <h2 className="font-heading text-lg font-medium text-foreground">
            Your privacy matters
          </h2>
          <p>
            Slyxup Tools is designed to be privacy-friendly. Most tools run
            entirely in your browser and never send your content to a server.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-heading text-lg font-medium text-foreground">
            What we collect
          </h2>
          <p>
            We do not sell your data. We do not run invasive trackers. Where
            server-side features are used, minimal data is processed solely to
            provide the requested functionality.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-heading text-lg font-medium text-foreground">
            Local processing
          </h2>
          <p>
            Everything you enter into our tools stays on your device whenever
            possible. Nothing is uploaded, logged, or shared unless you
            explicitly use a feature that requires it.
          </p>
        </div>
        <p className="text-sm text-muted-foreground/70">
          Last updated: August 2026.
        </p>
      </div>
    </section>
  );
}