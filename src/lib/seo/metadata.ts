import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/content/get-site-data";
import { routeFor } from "@/lib/content/routes";
import type { Locale, RouteKey } from "@/lib/content/types";

export async function createPageMetadata(routeKey: RouteKey, locale: Locale): Promise<Metadata> {
  const { seo, baseUrl } = await getPageMetadata(locale, routeKey);
  const canonical = routeFor(routeKey, locale);
  const title = seo.title.replaceAll("P.U. Construtora", "Construtora P.U.");

  return {
    title,
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
      title,
      description: seo.description,
      siteName: "Construtora P.U.",
      type: "website",
      url: canonical,
      locale: locale === "ptBR" ? "pt_BR" : "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description
    }
  };
}
