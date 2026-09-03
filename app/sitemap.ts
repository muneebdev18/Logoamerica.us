import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.logoamerica.us";
  const lastMod = new Date("2026-09-04");
  
  return [
    {
      url: base,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/refund-policy`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/terms-conditions`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}