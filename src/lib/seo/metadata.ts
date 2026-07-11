import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/content/get-site-data";
import { routeFor } from "@/lib/content/routes";
import type { Locale, RouteKey } from "@/lib/content/types";
import { absoluteUrl, SITE_URL } from "./site-url";

export async function createPageMetadata(routeKey: RouteKey, locale: Locale): Promise<Metadata> {
  const { seo } = await getPageMetadata(locale, routeKey);
  const canonicalPath = routeFor(routeKey, locale);
  const title = seo.title.replaceAll("P.U. Construtora", "Construtora P.U.");
  const canonical = absoluteUrl(canonicalPath);
  const socialImage = seo.socialImage ?? absoluteUrl("/brand/social-card.png");

  return {
    title,
    description: seo.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: {
        "pt-BR": absoluteUrl(routeFor(routeKey, "ptBR")),
        en: absoluteUrl(routeFor(routeKey, "en")),
        "x-default": absoluteUrl(routeFor(routeKey, "ptBR"))
      }
    },
    openGraph: {
      title,
      description: seo.description,
      siteName: "Construtora P.U.",
      type: "website",
      url: canonical,
      locale: locale === "ptBR" ? "pt_BR" : "en_US",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Construtora P.U." }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: seo.description,
      images: [socialImage]
    }
  };
}
