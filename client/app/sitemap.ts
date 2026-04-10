import { MetadataRoute } from "next";
import { API_URL } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.kriscel.com";

  // Static base routes
  const routes = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/clients`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/solutions`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
  ];

  try {
    // Fetch dynamic paths from the SEO Management System
    const res = await fetch(`${API_URL}/seo`, { next: { revalidate: 3600 } });
    const result = await res.json();

    if (result.success && result.data) {
      const dynamicRoutes = result.data
        .filter((item: any) => !item.noIndex && item.pagePath !== '/')
        .map((item: any) => ({
          url: `${baseUrl}${item.pagePath.startsWith('/') ? '' : '/'}${item.pagePath}`,
          lastModified: new Date(item.lastUpdated || Date.now()),
          changeFrequency: "weekly" as const,
          priority: 0.6,
        }));

      return [...routes, ...dynamicRoutes];
    }
  } catch (err) {
    console.error('Sitemap dynamic fetch failed', err);
  }

  return routes;
}
