import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using Slyxup Tools.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-24 sm:px-6">
      <h1 className="font-heading text-4xl font-medium tracking-tight">
        Terms of Service
      </h1>
      <div className="mt-6 space-y-4 text-muted-foreground">
        <p>
          By using Slyxup Tools you agree to use the tools responsibly and in
          compliance with all applicable laws.
        </p>
        <p>
          The tools are provided &quot;as is&quot; without warranties of any
          kind. You are solely responsible for the content you process and how
          you use the output.
        </p>
        <p>Last updated: August 2026.</p>
      </div>
    </section>
  );
}