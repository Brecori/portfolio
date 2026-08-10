import type { MetadataRoute } from "next";
import { siteUrl } from "@/constants/site";

const localizedUrls = {
  "pt-BR": new URL("/pt-BR", siteUrl).toString(),
  en: new URL("/en", siteUrl).toString(),
  "x-default": siteUrl,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [localizedUrls["pt-BR"], localizedUrls.en].map((url) => ({
    url,
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: localizedUrls,
    },
  }));
}
