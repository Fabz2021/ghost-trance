import type { MetadataRoute } from "next";
import { tracks } from "@/data/tracks";

const siteUrl = "https://ghosttrance.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const rootRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/music`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const trackRoutes: MetadataRoute.Sitemap = tracks.map((track) => ({
    url: `${siteUrl}/music/${track.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return [...rootRoutes, ...trackRoutes, ...staticRoutes];
}
