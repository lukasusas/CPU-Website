import type { LocalizedPageData, LocalizedProjectSummary, Locale, PublicAddress } from "@/lib/content/types";
import { absoluteUrl, SITE_URL } from "@/lib/seo/site-url";
import { routeFor } from "@/lib/content/routes";

type PublicSettings = {
  siteName: string;
  contactEmail: string;
  businessPhone?: string;
  publicAddress?: PublicAddress;
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function HomeStructuredData({ locale, settings }: { locale: Locale; settings: PublicSettings }) {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: settings.siteName,
    url: SITE_URL,
    email: settings.contactEmail,
    logo: absoluteUrl("/brand/logo-horizontal.svg")
  };

  const graph: Record<string, unknown>[] = [
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: settings.siteName, url: SITE_URL, inLanguage: locale === "ptBR" ? "pt-BR" : "en" },
    organization
  ];

  if (settings.businessPhone && settings.publicAddress) {
    graph.push({
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: settings.siteName,
      url: SITE_URL,
      email: settings.contactEmail,
      telephone: settings.businessPhone,
      address: { "@type": "PostalAddress", ...settings.publicAddress },
      parentOrganization: { "@id": `${SITE_URL}/#organization` }
    });
  }

  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />;
}

export function PageStructuredData({
  locale,
  routeKey,
  page,
  projects
}: {
  locale: Locale;
  routeKey: LocalizedPageData["pageKey"];
  page: LocalizedPageData;
  projects?: LocalizedProjectSummary[];
}) {
  const url = absoluteUrl(routeFor(routeKey, locale));
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.seo.title,
      description: page.seo.description,
      inLanguage: locale === "ptBR" ? "pt-BR" : "en",
      isPartOf: { "@id": `${SITE_URL}/#website` }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Construtora P.U.", item: absoluteUrl(routeFor("home", locale)) },
        { "@type": "ListItem", position: 2, name: page.title, item: url }
      ]
    }
  ];

  if (projects) {
    graph.push({
      "@type": "ItemList",
      name: locale === "ptBR" ? "Portfólio de empreendimentos" : "Development portfolio",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: { "@type": "CreativeWork", name: project.name, description: project.shortDescription }
      }))
    });
  }

  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
