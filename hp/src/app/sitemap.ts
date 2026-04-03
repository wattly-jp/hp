import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/media";

const BASE = "https://wattly.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  const articlePages = articles.map((a) => ({
    url: `${BASE}/column/${a.slug}`,
    lastModified: new Date(a.lastModified || a.date || "2026-03-01"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 静的ページのlastModifiedは最新記事の日付を基準にする
  const latestDate =
    articles.length > 0
      ? new Date(articles[0].lastModified || articles[0].date || "2026-03-01")
      : new Date("2026-03-01");

  return [
    { url: BASE, lastModified: latestDate, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/simulator`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/providers`, lastModified: new Date("2026-04-03"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/column`, lastModified: latestDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/faq`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date("2026-03-01"), changeFrequency: "yearly", priority: 0.4 },
    ...articlePages,
  ];
}
