// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rh-anand.vercel.app/",
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://rh-anand.vercel.app/projects",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://rh-anand.vercel.app/blog",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://rh-anand.vercel.app/skills",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://rh-anand.vercel.app/resume",
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
