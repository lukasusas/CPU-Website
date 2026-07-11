import type { MetadataRoute } from "next";
import { indexableRouteKeys, routeFor } from "@/lib/content/routes";
import { absoluteUrl } from "@/lib/seo/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRouteKeys().flatMap((routeKey) =>
    (["ptBR", "en"] as const).map((locale) => ({
      url: absoluteUrl(routeFor(routeKey, locale)),
      alternates: {
        languages: {
          "pt-BR": absoluteUrl(routeFor(routeKey, "ptBR")),
          en: absoluteUrl(routeFor(routeKey, "en")),
          "x-default": absoluteUrl(routeFor(routeKey, "ptBR"))
        }
      }
    }))
  );
}
