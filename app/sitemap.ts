import type { MetadataRoute } from "next";
import { siteUrl } from "../lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["/", "/about", "/programmes", "/research", "/activity", "/contact"].map((path) => ({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.8 }));
}
