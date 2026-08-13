import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tools.slyxup.in";
  const routes = [
    "",
    "/tools",
    "/about",
    "/privacy",
    "/terms",
    "/contact",
    "/tiktok-money-calculator",
    "/how-much-does-tiktok-pay",
    "/how-many-views-to-make-1000-on-tiktok",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}