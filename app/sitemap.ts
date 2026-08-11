import { MetadataRoute } from "next";

const BASE = "https://siroved.hu";

/**
 * Dinamikus sitemap — Next.js natívan kiszolgálja /sitemap.xml útvonalon.
 * Nincs szükség postbuild scriptre vagy next-sitemap csomagra.
 * Új oldal hozzáadásához egyszerűen add hozzá az alábbi tömbhöz.
 */
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
  { path: "/szolgaltatasok", priority: 0.9, changefreq: "weekly" },
  { path: "/kalkulator", priority: 0.85, changefreq: "monthly" },
  { path: "/kapcsolat", priority: 0.8, changefreq: "monthly" },
  { path: "/referenciak", priority: 0.7, changefreq: "monthly" },
  { path: "/rolunk", priority: 0.6, changefreq: "monthly" },

  // Szolgáltatás aloldalak
  { path: "/szolgaltatasok/kamerarendszerek", priority: 0.85, changefreq: "monthly" },
  { path: "/szolgaltatasok/riasztorendszerek", priority: 0.85, changefreq: "monthly" },
  { path: "/szolgaltatasok/tuzjelzo-rendszerek", priority: 0.85, changefreq: "monthly" },

  // Ajánlatok
  { path: "/ajanlat/nyaralo-kamerarendszer", priority: 0.75, changefreq: "weekly" },

  // Jogi oldalak
  { path: "/aszf", priority: 0.4, changefreq: "yearly" },
  { path: "/adatvedelem", priority: 0.4, changefreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${BASE}${route.path}`,
    lastModified: now,
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));
}
