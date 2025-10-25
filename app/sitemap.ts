import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kodewave-solutions.com"

  const routes = [
    { path: "/", changefreq: "weekly" as const, priority: 1.0 },
    { path: "/contacto", changefreq: "monthly" as const, priority: 0.8 },
    { path: "/#servicios", changefreq: "monthly" as const, priority: 0.7 },
    { path: "/#casos", changefreq: "monthly" as const, priority: 0.6 },
    { path: "/#demos", changefreq: "monthly" as const, priority: 0.6 },
    { path: "/#recursos", changefreq: "monthly" as const, priority: 0.6 },
    { path: "/#nosotros", changefreq: "monthly" as const, priority: 0.6 },
    { path: "/#faq", changefreq: "monthly" as const, priority: 0.5 },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changefreq,
    priority: route.priority,
  }))
}
