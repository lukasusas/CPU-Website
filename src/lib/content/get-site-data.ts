import { cache } from "react";
import { normalizeSiteDataset } from "./adapter";
import { fallbackDataset } from "./fallback-data";
import { routeFor } from "./routes";
import { isRouteEnabled } from "./site-features";
import { siteDatasetQuery } from "./sanity-queries";
import type {
  Localized,
  LocalizedContactRoute,
  LocalizedNavigationItem,
  LocalizedPageData,
  LocalizedProjectSummary,
  LocalizedSection,
  LocalizedTeamEntry,
  Locale,
  PageContentVM,
  RouteKey,
  SiteDataset
} from "./types";
import { hasSanityCredentials, sanityClient } from "@/lib/sanity/client";

type SiteContextData = {
  locale: Locale;
  settings: {
    siteName: string;
    legalName: string;
    baseUrl: string;
    coordinatesLabel: string;
    contactEmail: string;
    investorEmail: string;
    whatsappUrl?: string;
    footerSummary: string;
    footerLegal: string;
  };
  navigation: Array<
    LocalizedNavigationItem & {
      routeHref: string;
      homeAnchorHref?: string;
    }
  >;
};

const fetchDataset = cache(async (): Promise<SiteDataset> => {
  if (!hasSanityCredentials || !sanityClient) {
    return fallbackDataset;
  }

  try {
    const raw = await sanityClient.fetch(siteDatasetQuery);
    return normalizeSiteDataset(raw);
  } catch (error) {
    console.error("[content] Falling back to local dataset because CMS fetch failed.", error);
    return fallbackDataset;
  }
});

function localize<T>(field: Localized<T>, locale: Locale): T {
  return field[locale];
}

function findPage(dataset: SiteDataset, pageKey: RouteKey): PageContentVM {
  return dataset.pages.find((page) => page.pageKey === pageKey) ?? fallbackDataset.pages.find((page) => page.pageKey === pageKey)!;
}

function localizePage(dataset: SiteDataset, pageKey: RouteKey, locale: Locale): LocalizedPageData {
  const page = findPage(dataset, pageKey);
  return {
    pageKey,
    seo: page.seo[locale],
    eyebrow: localize(page.eyebrow, locale),
    title: localize(page.title, locale),
    intro: localize(page.intro, locale),
    sections: page.sections.map((section) => ({
      title: localize(section.title, locale),
      body: localize(section.body, locale)
    })),
    primaryCtaLabel: page.primaryCtaLabel ? localize(page.primaryCtaLabel, locale) : undefined,
    primaryCtaRouteKey: page.primaryCtaRouteKey,
    secondaryCtaLabel: page.secondaryCtaLabel ? localize(page.secondaryCtaLabel, locale) : undefined,
    secondaryCtaRouteKey: page.secondaryCtaRouteKey,
    disclaimer: page.disclaimer ? localize(page.disclaimer, locale) : undefined
  };
}

function localizeProjects(dataset: SiteDataset, locale: Locale): LocalizedProjectSummary[] {
  return dataset.projects.map((project) => ({
    id: project.id,
    name: localize(project.name, locale),
    location: localize(project.location, locale),
    projectType: localize(project.projectType, locale),
    unitCount: project.unitCount,
    stage: localize(project.stage, locale),
    shortDescription: localize(project.shortDescription, locale),
    externalUrl: project.externalUrl,
    externalLabel: localize(project.externalLabel, locale),
    image: {
      src: project.image.url ?? project.image.fallbackSrc,
      alt: localize(project.image.alt, locale)
    },
    gallery: (project.gallery ?? [project.image]).map((image) => ({
      src: image.url ?? image.fallbackSrc,
      alt: localize(image.alt, locale)
    }))
  }));
}

function localizeTeam(dataset: SiteDataset, locale: Locale): LocalizedTeamEntry[] {
  return dataset.teamEntries.map((entry) => ({
    id: entry.id,
    name: localize(entry.name, locale),
    role: localize(entry.role, locale),
    bio: localize(entry.bio, locale),
    image: {
      src: entry.image.url ?? entry.image.fallbackSrc,
      alt: localize(entry.image.alt, locale)
    }
  }));
}

function localizeContactRoutes(dataset: SiteDataset, locale: Locale): LocalizedContactRoute[] {
  return dataset.contactRoutes.map((route) => ({
    id: route.id,
    title: localize(route.title, locale),
    body: localize(route.body, locale),
    ctaLabel: localize(route.ctaLabel, locale),
    href: route.href
  }));
}

function localizeHomeSections(dataset: SiteDataset, locale: Locale): LocalizedSection[] {
  return dataset.homeSections.map((section) => ({
    id: section.id,
    title: localize(section.title, locale),
    body: localize(section.body, locale)
  }));
}

function localizeInvestorSections(
  dataset: SiteDataset,
  locale: Locale
): Array<{ id: string; sectionKey: string; title: string; body: string }> {
  return dataset.investorSections.map((section) => ({
    id: section.id,
    sectionKey: section.sectionKey,
    title: localize(section.title, locale),
    body: localize(section.body, locale)
  }));
}

function localizeLegalBlocks(dataset: SiteDataset, locale: Locale): LocalizedSection[] {
  return dataset.legalBlocks.map((section) => ({
    id: section.id,
    title: localize(section.title, locale),
    body: localize(section.body, locale)
  }));
}

export async function getSiteContext(locale: Locale): Promise<SiteContextData> {
  const dataset = await fetchDataset();
  return {
    locale,
    settings: {
      siteName: dataset.settings.siteName,
      legalName: dataset.settings.legalName,
      baseUrl: dataset.settings.baseUrl,
      coordinatesLabel: localize(dataset.settings.coordinatesLabel, locale),
      contactEmail: dataset.settings.contactEmail,
      investorEmail: dataset.settings.investorEmail,
      whatsappUrl: dataset.settings.whatsappUrl,
      footerSummary: localize(dataset.settings.footerSummary, locale),
      footerLegal: localize(dataset.settings.footerLegal, locale)
    },
    navigation: dataset.navigation
      .filter((item) => isRouteEnabled(item.routeKey))
      .map((item) => ({
        routeKey: item.routeKey,
        label: localize(item.label, locale),
        anchorId: item.anchorId,
        useAnchorOnHome: item.useAnchorOnHome,
        order: item.order,
        routeHref: routeFor(item.routeKey, locale),
        homeAnchorHref: item.useAnchorOnHome && item.anchorId ? `${routeFor("home", locale)}#${item.anchorId}` : undefined
      }))
  };
}

export async function getPageMetadata(locale: Locale, pageKey: RouteKey) {
  const dataset = await fetchDataset();
  const page = findPage(dataset, pageKey);
  return {
    seo: page.seo[locale],
    baseUrl: dataset.settings.baseUrl
  };
}

export async function getHomePageData(locale: Locale) {
  const dataset = await fetchDataset();
  return {
    page: localizePage(dataset, "home", locale),
    sections: localizeHomeSections(dataset, locale),
    projects: localizeProjects(dataset, locale),
    investorRows: localizeInvestorSections(dataset, locale).filter((section) => section.sectionKey !== "disclaimer"),
    investorDisclaimer:
      localizeInvestorSections(dataset, locale).find((section) => section.sectionKey === "disclaimer")?.body ??
      localizePage(dataset, "investors", locale).disclaimer ??
      "",
    contactRoutes: localizeContactRoutes(dataset, locale)
  };
}

export async function getProjectsPageData(locale: Locale) {
  const dataset = await fetchDataset();
  return {
    page: localizePage(dataset, "projects", locale),
    projects: localizeProjects(dataset, locale)
  };
}

export async function getAboutPageData(locale: Locale) {
  const dataset = await fetchDataset();
  return {
    page: localizePage(dataset, "about", locale)
  };
}

export async function getInvestorsPageData(locale: Locale) {
  const dataset = await fetchDataset();
  const investorSections = localizeInvestorSections(dataset, locale);
  return {
    page: localizePage(dataset, "investors", locale),
    rows: investorSections.filter((section) => section.sectionKey !== "disclaimer"),
    disclaimer:
      investorSections.find((section) => section.sectionKey === "disclaimer")?.body ??
      localizePage(dataset, "investors", locale).disclaimer ??
      ""
  };
}

export async function getTeamPageData(locale: Locale) {
  const dataset = await fetchDataset();
  return {
    page: localizePage(dataset, "team", locale),
    team: localizeTeam(dataset, locale)
  };
}

export async function getContactPageData(locale: Locale) {
  const dataset = await fetchDataset();
  return {
    page: localizePage(dataset, "contact", locale),
    routes: localizeContactRoutes(dataset, locale)
  };
}

export async function getLegalPageData(locale: Locale) {
  const dataset = await fetchDataset();
  return {
    page: localizePage(dataset, "legal", locale),
    blocks: localizeLegalBlocks(dataset, locale)
  };
}

export async function getAllCanonicalRoutes() {
  const dataset = await fetchDataset();
  return {
    baseUrl: dataset.settings.baseUrl
  };
}
