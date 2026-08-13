import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Slyxup Tools team.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="font-heading text-4xl font-medium tracking-tight">
        Contact
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Questions, feedback or feature requests? We&apos;d love to hear from
        you.
      </p>
      <Button
        className="mt-8"
        nativeButton={false}
        render={<a href="mailto:hello@slyxup.in" />}
      >
          <Mail className="mr-2 size-4" /> hello@slyxup.in
        </Button>
    </section>
  );
}