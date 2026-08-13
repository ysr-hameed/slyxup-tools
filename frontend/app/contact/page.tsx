import type { Metadata } from "next";
import { Mail, MessageSquare, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Slyxup Tools team.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Contact"
        title="We&apos;d love to hear from you"
        description="Questions, feedback or feature requests? Reach out and we&apos;ll get back to you."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex flex-col items-center pt-6 text-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Mail className="size-5" />
            </div>
            <h2 className="mt-3 font-heading text-base font-medium">Email</h2>
            <a
              href="mailto:hello@slyxup.in"
              className="mt-1 text-sm text-muted-foreground hover:text-foreground"
            >
              hello@slyxup.in
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center pt-6 text-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MessageSquare className="size-5" />
            </div>
            <h2 className="mt-3 font-heading text-base font-medium">Feedback</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Feature ideas welcome
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-center pt-6 text-center">
            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Sparkles className="size-5" />
            </div>
            <h2 className="mt-3 font-heading text-base font-medium">Requests</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Suggest a new tool
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}