import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Slyxup Tools.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="Terms and conditions for using Slyxup Tools."
      />
      <div className="space-y-6 text-muted-foreground">
        <div className="space-y-2">
          <h2 className="font-heading text-lg font-medium text-foreground">
            Acceptance of terms
          </h2>
          <p>
            By using Slyxup Tools you agree to use the tools responsibly and in
            compliance with all applicable laws.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-heading text-lg font-medium text-foreground">
            As-is basis
          </h2>
          <p>
            The tools are provided &quot;as is&quot; without warranties of any
            kind. You are solely responsible for the content you process and
            how you use the output.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="font-heading text-lg font-medium text-foreground">
            Acceptable use
          </h2>
          <p>
            You may not use the tools for any unlawful purpose or to harm,
            exploit, or mislead others. Tools are for legitimate, personal and
            professional use.
          </p>
        </div>
        <p className="text-sm text-muted-foreground/70">
          Last updated: August 2026.
        </p>
      </div>
    </section>
  );
}