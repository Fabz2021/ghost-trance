import type { MetadataRoute } from "next";
import { tracks } from "@/data/tracks";
import { siteUrl } from "@/data/site";

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
      url: `${siteUrl}/tracks`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const trackRoutes: MetadataRoute.Sitemap = tracks.map((track) => ({
    url: `${siteUrl}/tracks/${track.slug}`,
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
