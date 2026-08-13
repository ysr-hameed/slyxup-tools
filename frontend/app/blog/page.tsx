import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { articles } from "@/lib/articles";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and resources on TikTok, YouTube, Instagram and creator earnings — plus how to get the most from Slyxup's free tools.",
};

function formatDate(date: string) {
  return new Date(date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-16 sm:px-6">
      <PageHeader
        eyebrow="Blog"
        title="Guides & resources"
        description="In-depth guides on creator earnings and online tools — written for 2026 and updated as rates change."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={article.href}
            className="group flex flex-col rounded-xl ring-1 ring-foreground/10 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:ring-primary/40"
          >
            <Card className="flex flex-1 flex-col rounded-xl">
              <CardContent className="flex flex-1 flex-col pt-5">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-4 text-primary" />
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {article.category}
                  </span>
                </div>
                <h2 className="mt-3 font-heading text-lg font-medium leading-snug text-foreground group-hover:text-primary">
                  {article.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {article.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {formatDate(article.datePublished)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}