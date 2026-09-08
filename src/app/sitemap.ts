import type { MetadataRoute } from "next";
import { products, services } from "@/lib/data";

const BASE_URL = "https://www.brandmarkprintmedia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/shop`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...productRoutes];
}
