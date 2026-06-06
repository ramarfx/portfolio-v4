import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ramarfx.my.id/sitemap.xml",
    host: "https://ramarfx.my.id",
  };
}
