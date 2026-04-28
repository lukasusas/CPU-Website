import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/content/get-site-data";
import { routeFor } from "@/lib/content/routes";
import type { Locale, RouteKey } from "@/lib/content/types";

export async function createPageMetadata(routeKey: RouteKey, locale: Locale): Promise<Metadata> {
  const { seo, baseUrl } = await getPageMetadata(locale, routeKey);
  const canonical = routeFor(routeKey, locale);

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
      languages: {
        "pt-BR": routeFor(routeKey, "ptBR"),
        en: routeFor(routeKey, "en")
      }
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: "P.U. Construtora",
      type: "website",
      url: canonical,
      locale: locale === "ptBR" ? "pt_BR" : "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description
    }
  };
}
