import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://vriddhri-ai-yh23.vercel.app/sitemap.xml",
    host: "https://vriddhri-ai-yh23.vercel.app",
  };
}
