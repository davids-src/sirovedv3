import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://siroved.hu";

// Static content updated dates — do NOT use new Date() to avoid buildtime drift
const CONTENT_DATES: Record<string, string> = {
  "/": "2026-09-22",
  "/ingyenes-felmeres": "2026-09-22",
  "/megoldasok": "2026-09-22",
  "/megoldasok/uj-biztonsagtechnikai-rendszer": "2026-09-22",
  "/megoldasok/rendszerbovites": "2026-09-22",
  "/megoldasok/telephely-biztonsag": "2026-09-22",
  "/megoldasok/csaladi-haz-biztonsag": "2026-09-22",
  "/megoldasok/raktar-csarnok-biztonsag": "2026-09-22",
  "/megoldasok/uzlet-rendelo-biztonsag": "2026-09-22",
  "/szolgaltatasok": "2026-06-01",
  "/szolgaltatasok/kamerarendszerek": "2026-06-01",
  "/szolgaltatasok/riasztorendszerek": "2026-06-01",
  "/szolgaltatasok/tuzjelzo-rendszerek": "2026-06-01",
  "/partneri-egyuttmukodes": "2026-06-01",
  "/blog": "2026-09-22",
  "/kalkulator": "2026-09-22",
  "/kapcsolat": "2026-06-01",
  "/referenciak": "2026-06-01",
  "/rolunk": "2026-06-01",
  "/ajanlat/nyaralo-kamerarendszer": "2026-06-01",
  "/aszf": "2025-01-01",
  "/adatvedelem": "2025-01-01",
};

const routes: Array<{
  path: string;
  priority: number;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}> = [
  // Főoldal
  { path: "/", priority: 1.0, changefreq: "weekly" },

  // Fő aloldalak
  { path: "/ingyenes-felmeres", priority: 0.95, changefreq: "weekly" },

  // Megoldások hub + aloldalak
  { path: "/megoldasok", priority: 0.92, changefreq: "weekly" },
  { path: "/megoldasok/uj-biztonsagtechnikai-rendszer", priority: 0.88, changefreq: "monthly" },
  { path: "/megoldasok/rendszerbovites", priority: 0.88, changefreq: "monthly" },
  { path: "/megoldasok/telephely-biztonsag", priority: 0.87, changefreq: "monthly" },
  { path: "/megoldasok/csaladi-haz-biztonsag", priority: 0.87, changefreq: "monthly" },
  { path: "/megoldasok/raktar-csarnok-biztonsag", priority: 0.86, changefreq: "monthly" },
  { path: "/megoldasok/uzlet-rendelo-biztonsag", priority: 0.86, changefreq: "monthly" },

  // Szolgáltatások
  { path: "/szolgaltatasok", priority: 0.9, changefreq: "weekly" },
  { path: "/szolgaltatasok/kamerarendszerek", priority: 0.85, changefreq: "monthly" },
  { path: "/szolgaltatasok/riasztorendszerek", priority: 0.85, changefreq: "monthly" },
  { path: "/szolgaltatasok/tuzjelzo-rendszerek", priority: 0.85, changefreq: "monthly" },

  // Egyéb
  { path: "/partneri-egyuttmukodes", priority: 0.8, changefreq: "monthly" },
  { path: "/blog", priority: 0.85, changefreq: "weekly" },
  { path: "/kalkulator", priority: 0.85, changefreq: "monthly" },
  { path: "/kapcsolat", priority: 0.8, changefreq: "monthly" },
  { path: "/referenciak", priority: 0.7, changefreq: "monthly" },
  { path: "/rolunk", priority: 0.6, changefreq: "monthly" },

  // Ajánlatok
  { path: "/ajanlat/nyaralo-kamerarendszer", priority: 0.75, changefreq: "weekly" },

  // Jogi oldalak
  { path: "/aszf", priority: 0.4, changefreq: "yearly" },
  { path: "/adatvedelem", priority: 0.4, changefreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = routes.map((route) => ({
    url: `${BASE}${route.path}`,
    lastModified: new Date(CONTENT_DATES[route.path] ?? "2026-01-01"),
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));

  const blogPosts = getAllPosts();
  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
