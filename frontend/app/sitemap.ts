import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";

export const dynamic = "force-static";

const baseUrl = "https://tools.slyxup.in";

type RouteConfig = {
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

const routes: RouteConfig[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/tools", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/tiktok-money-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/instagram-earnings-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/youtube-money-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/youtube-shorts-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/twitch-earnings-calculator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticUrls = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}${article.href}`,
    lastModified: new Date(article.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...articleUrls];
}