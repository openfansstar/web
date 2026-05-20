import type { MetadataRoute } from "next"

const siteUrl = "https://blinplin.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/discover",
    "/console",
    "/shop",
    "/profile",
    "/login",
    "/readme",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.7,
  }))

  return routes
}
