import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ghosttrance.com/sitemap.xml",
    host: "https://ghosttrance.com",
  };
}
