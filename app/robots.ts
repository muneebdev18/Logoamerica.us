import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/", "/*.json$"],
      },
    ],
    sitemap: "https://www.logoamerica.us/sitemap.xml",
    host: "https://www.logoamerica.us",
  };
}