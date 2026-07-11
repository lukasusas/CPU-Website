import { fallbackDataset } from "./fallback-data";
import type {
  ContactRouteVM,
  HomeSectionVM,
  InvestorSectionVM,
  LegalBlockVM,
  Localized,
  NavigationItemVM,
  PageContentVM,
  ProjectSummaryVM,
  RouteKey,
  SiteDataset,
  SiteSettingsVM,
  TeamEntryVM
} from "./types";
import { sanityImageUrl } from "@/lib/sanity/image";

type LocalizedInput = {
  ptBR?: unknown;
  en?: unknown;
} | null;

type RawSanityPayload = {
  settings?: Record<string, unknown>;
  navigation?: Array<Record<string, unknown>>;
  pages?: Array<Record<string, unknown>>;
  homeSections?: Array<Record<string, unknown>>;
  projects?: Array<Record<string, unknown>>;
  investorSections?: Array<Record<string, unknown>>;
  teamEntries?: Array<Record<string, unknown>>;
  contactRoutes?: Array<Record<string, unknown>>;
  legalBlocks?: Array<Record<string, unknown>>;
} | null;

const pageKeys: RouteKey[] = ["home", "projects", "about", "investors", "team", "contact", "legal"];
const projectSalesTerms = /availability|inventory|reservation|reservas?|pre[cç]o|pricing|price/i;

function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

function readString(value: unknown, fallback: string) {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

function readOptionalString(value: unknown) {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function readNumber(value: unknown, fallback: number) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function readLocalized(raw: LocalizedInput, fallback: Localized<string>): Localized<string> {
  const ptBR = readString(raw?.ptBR, fallback.ptBR);
  const en = readString(raw?.en, fallback.en);
  return { ptBR, en };
}

function readSectionArray(
  input: unknown,
  fallback: Array<{ title: Localized<string>; body: Localized<string> }>
) {
  if (!Array.isArray(input) || input.length === 0) return fallback;

  const sections = input
    .map((section, index): { title: Localized<string>; body: Localized<string> } | null => {
      if (!section || typeof section !== "object") return null;
      const record = section as Record<string, unknown>;
      return {
        title: readLocalized(record.title as LocalizedInput, fallback[index]?.title ?? fallback[0]?.title ?? { ptBR: "", en: "" }),
        body: readLocalized(record.body as LocalizedInput, fallback[index]?.body ?? fallback[0]?.body ?? { ptBR: "", en: "" })
      };
    })
    .filter(isDefined);

  return sections.length > 0 ? sections : fallback;
}

function sanitizeProjectDescription(value: Localized<string>): Localized<string> {
  if (projectSalesTerms.test(value.ptBR) || projectSalesTerms.test(value.en)) {
    return {
      ptBR: "Panorama institucional do empreendimento. Informações comerciais ficam no canal dedicado do projeto.",
      en: "Institutional project overview. Commercial details remain on the project's dedicated channel."
    };
  }

  return value;
}

function mapLocalizedGalleryImages(input: unknown, fallback: ProjectSummaryVM["gallery"] = []) {
  if (!Array.isArray(input) || input.length === 0) return fallback;

  const mapped = input
    .map((entry, index) => {
      if (!entry || typeof entry !== "object") return null;
      const record = entry as Record<string, unknown>;
      const asset = record.asset as Parameters<typeof sanityImageUrl>[0];
      const fallbackImage = fallback[index] ?? fallback[0];
      if (!fallbackImage) return null;
      return {
        url: sanityImageUrl(asset, 1800) ?? fallbackImage.url,
        fallbackSrc: fallbackImage.fallbackSrc,
        alt: readLocalized(record.alt as LocalizedInput, fallbackImage.alt)
      };
    })
    .filter(isDefined);

  return mapped.length > 0 ? mapped : fallback;
}

function mapSettings(raw: RawSanityPayload): SiteSettingsVM {
  const fallback = fallbackDataset.settings;
  const settings = raw?.settings ?? {};
  const addressFields = ["streetAddress", "addressLocality", "addressRegion", "postalCode", "addressCountry"] as const;
  const address = Object.fromEntries(
    addressFields.map((field) => [field, readOptionalString(settings[field])])
  ) as Record<(typeof addressFields)[number], string | undefined>;
  const hasAnyAddressField = addressFields.some((field) => Boolean(address[field]));
  const hasCompleteAddress = addressFields.every((field) => Boolean(address[field]));

  if (hasAnyAddressField && !hasCompleteAddress) {
    throw new Error("Sanity site settings include an incomplete public business address.");
  }

  return {
    siteName: readString(settings.siteName, fallback.siteName),
    legalName: readString(settings.legalName, fallback.legalName),
    baseUrl: readString(settings.baseUrl, fallback.baseUrl),
    defaultLocale: readString(settings.defaultLocale, fallback.defaultLocale) === "en" ? "en" : "ptBR",
    contactEmail: readString(settings.contactEmail, fallback.contactEmail),
    investorEmail: readString(settings.investorEmail, fallback.investorEmail),
    whatsappUrl: readOptionalString(settings.whatsappUrl) ?? fallback.whatsappUrl,
    businessPhone: readOptionalString(settings.businessPhone),
    publicAddress: hasCompleteAddress
      ? {
          streetAddress: address.streetAddress!,
          addressLocality: address.addressLocality!,
          addressRegion: address.addressRegion!,
          postalCode: address.postalCode!,
          addressCountry: address.addressCountry!
        }
      : undefined,
    coordinatesLabel: readLocalized(settings.coordinatesLabel as LocalizedInput, fallback.coordinatesLabel),
    footerSummary: readLocalized(settings.footerSummary as LocalizedInput, fallback.footerSummary),
    footerLegal: readLocalized(settings.footerLegal as LocalizedInput, fallback.footerLegal)
  };
}

function mapNavigation(raw: RawSanityPayload): NavigationItemVM[] {
  if (!Array.isArray(raw?.navigation) || raw.navigation.length === 0) return fallbackDataset.navigation;

  const fallbackByRoute = new Map(fallbackDataset.navigation.map((item) => [item.routeKey, item]));
  const mapped = raw.navigation
    .map((item): NavigationItemVM | null => {
      const routeKey = readString(item.routeKey, "");
      const fallback = fallbackByRoute.get(routeKey as NavigationItemVM["routeKey"]);
      if (!fallback) return null;
      return {
        routeKey: fallback.routeKey,
        label: readLocalized(item.label as LocalizedInput, fallback.label),
        anchorId: readOptionalString(item.anchorId) ?? fallback.anchorId,
        useAnchorOnHome:
          typeof item.useAnchorOnHome === "boolean" ? item.useAnchorOnHome : fallback.useAnchorOnHome,
        order: readNumber(item.order, fallback.order)
      };
    })
    .filter(isDefined)
    .sort((a, b) => a.order - b.order);

  return mapped.length > 0 ? mapped : fallbackDataset.navigation;
}

function mapPages(raw: RawSanityPayload): PageContentVM[] {
  if (!Array.isArray(raw?.pages) || raw.pages.length === 0) return fallbackDataset.pages;

  const fallbackByKey = new Map(fallbackDataset.pages.map((page) => [page.pageKey, page]));
  const mapped = raw.pages
    .map((item): PageContentVM | null => {
      const pageKey = readString(item.pageKey, "") as RouteKey;
      const fallback = fallbackByKey.get(pageKey);
      if (!fallback) return null;

      return {
        pageKey,
        seo: {
          ptBR: {
            title: readString((item.seoTitle as LocalizedInput)?.ptBR, fallback.seo.ptBR.title),
            description: readString((item.seoDescription as LocalizedInput)?.ptBR, fallback.seo.ptBR.description),
            socialImage: sanityImageUrl(((item.seoSocialImage as Record<string, unknown>)?.asset as Parameters<typeof sanityImageUrl>[0]), 1200)
          },
          en: {
            title: readString((item.seoTitle as LocalizedInput)?.en, fallback.seo.en.title),
            description: readString((item.seoDescription as LocalizedInput)?.en, fallback.seo.en.description),
            socialImage: sanityImageUrl(((item.seoSocialImage as Record<string, unknown>)?.asset as Parameters<typeof sanityImageUrl>[0]), 1200)
          }
        },
        eyebrow: readLocalized(item.eyebrow as LocalizedInput, fallback.eyebrow),
        title: readLocalized(item.title as LocalizedInput, fallback.title),
        intro: readLocalized(item.intro as LocalizedInput, fallback.intro),
        sections: readSectionArray(item.sections, fallback.sections),
        primaryCtaLabel: item.primaryCtaLabel
          ? readLocalized(item.primaryCtaLabel as LocalizedInput, fallback.primaryCtaLabel ?? fallback.title)
          : fallback.primaryCtaLabel,
        primaryCtaRouteKey: (readOptionalString(item.primaryCtaRouteKey) as PageContentVM["primaryCtaRouteKey"]) ??
          fallback.primaryCtaRouteKey,
        secondaryCtaLabel: item.secondaryCtaLabel
          ? readLocalized(item.secondaryCtaLabel as LocalizedInput, fallback.secondaryCtaLabel ?? fallback.title)
          : fallback.secondaryCtaLabel,
        secondaryCtaRouteKey: (readOptionalString(item.secondaryCtaRouteKey) as PageContentVM["secondaryCtaRouteKey"]) ??
          fallback.secondaryCtaRouteKey,
        disclaimer: item.disclaimer
          ? readLocalized(item.disclaimer as LocalizedInput, fallback.disclaimer ?? fallback.intro)
          : fallback.disclaimer
      };
    })
    .filter(isDefined);

  const hasAllPages = pageKeys.every((key) => mapped.some((page) => page.pageKey === key));
  if (!hasAllPages) return fallbackDataset.pages;

  return mapped;
}

function mapHomeSections(raw: RawSanityPayload): HomeSectionVM[] {
  if (!Array.isArray(raw?.homeSections) || raw.homeSections.length === 0) return fallbackDataset.homeSections;
  const fallbackByKey = new Map(fallbackDataset.homeSections.map((section) => [section.sectionKey, section]));
  const mapped = raw.homeSections
    .map((section): HomeSectionVM | null => {
      const sectionKey = readString(section.sectionKey, "") as HomeSectionVM["sectionKey"];
      const fallback = fallbackByKey.get(sectionKey);
      if (!fallback) return null;
      return {
        id: readString(section._id, fallback.id),
        sectionKey,
        eyebrow: readLocalized(section.eyebrow as LocalizedInput, fallback.eyebrow),
        title: readLocalized(section.title as LocalizedInput, fallback.title),
        body: readLocalized(section.body as LocalizedInput, fallback.body),
        ctaLabel: section.ctaLabel
          ? readLocalized(section.ctaLabel as LocalizedInput, fallback.ctaLabel ?? fallback.title)
          : fallback.ctaLabel,
        ctaRouteKey: (readOptionalString(section.ctaRouteKey) as HomeSectionVM["ctaRouteKey"]) ?? fallback.ctaRouteKey,
        order: readNumber(section.order, fallback.order)
      };
    })
    .filter(isDefined)
    .sort((a, b) => a.order - b.order);

  return mapped.length > 0 ? mapped : fallbackDataset.homeSections;
}

function mapProjects(raw: RawSanityPayload): ProjectSummaryVM[] {
  if (!Array.isArray(raw?.projects) || raw.projects.length === 0) return fallbackDataset.projects;

  const fallbackById = new Map(fallbackDataset.projects.map((project) => [project.id, project]));
  const mapped = raw.projects
    .map((project): ProjectSummaryVM | null => {
      const id = readString(project.projectId, "");
      const fallback = fallbackById.get(id);
      if (!fallback) return null;

      const imageRecord = (project.image as Record<string, unknown>) ?? {};
      const imageSource = imageRecord.asset as Parameters<typeof sanityImageUrl>[0];
      const description = sanitizeProjectDescription(
        readLocalized(project.shortDescription as LocalizedInput, fallback.shortDescription)
      );

      return {
        id,
        name: readLocalized(project.name as LocalizedInput, fallback.name),
        location: readLocalized(project.location as LocalizedInput, fallback.location),
        projectType: readLocalized(project.projectType as LocalizedInput, fallback.projectType),
        unitCount: readString(project.unitCount, fallback.unitCount),
        stage: readLocalized(project.stage as LocalizedInput, fallback.stage),
        shortDescription: description,
        externalUrl: readOptionalString(project.externalUrl) ?? fallback.externalUrl,
        externalLabel: readLocalized(project.externalLabel as LocalizedInput, fallback.externalLabel),
        image: {
          url: sanityImageUrl(imageSource, 1800) ?? fallback.image.url,
          fallbackSrc: fallback.image.fallbackSrc,
          alt: readLocalized(imageRecord.alt as LocalizedInput, fallback.image.alt)
        },
        gallery: mapLocalizedGalleryImages(project.gallery, fallback.gallery ?? [fallback.image]),
        order: readNumber(project.order, fallback.order)
      };
    })
    .filter(isDefined)
    .sort((a, b) => a.order - b.order);

  return mapped.length > 0 ? mapped : fallbackDataset.projects;
}

function mapInvestorSections(raw: RawSanityPayload): InvestorSectionVM[] {
  if (!Array.isArray(raw?.investorSections) || raw.investorSections.length === 0) {
    return fallbackDataset.investorSections;
  }
  const fallbackByKey = new Map(fallbackDataset.investorSections.map((section) => [section.sectionKey, section]));
  const mapped = raw.investorSections
    .map((section): InvestorSectionVM | null => {
      const sectionKey = readString(section.sectionKey, "") as InvestorSectionVM["sectionKey"];
      const fallback = fallbackByKey.get(sectionKey);
      if (!fallback) return null;
      return {
        id: readString(section._id, fallback.id),
        sectionKey,
        title: readLocalized(section.title as LocalizedInput, fallback.title),
        body: readLocalized(section.body as LocalizedInput, fallback.body),
        order: readNumber(section.order, fallback.order)
      };
    })
    .filter(isDefined)
    .sort((a, b) => a.order - b.order);

  return mapped.length > 0 ? mapped : fallbackDataset.investorSections;
}

function mapTeamEntries(raw: RawSanityPayload): TeamEntryVM[] {
  if (!Array.isArray(raw?.teamEntries) || raw.teamEntries.length === 0) return fallbackDataset.teamEntries;
  const fallbackById = new Map(fallbackDataset.teamEntries.map((entry) => [entry.id, entry]));
  const mapped = raw.teamEntries
    .map((entry): TeamEntryVM | null => {
      const id = readString(entry.entryId, "");
      const fallback = fallbackById.get(id);
      if (!fallback) return null;
      const imageRecord = (entry.image as Record<string, unknown>) ?? {};
      const imageSource = imageRecord.asset as Parameters<typeof sanityImageUrl>[0];

      return {
        id,
        name: readLocalized(entry.name as LocalizedInput, fallback.name),
        role: readLocalized(entry.role as LocalizedInput, fallback.role),
        bio: readLocalized(entry.bio as LocalizedInput, fallback.bio),
        image: {
          url: sanityImageUrl(imageSource, 1200) ?? fallback.image.url,
          fallbackSrc: fallback.image.fallbackSrc,
          alt: readLocalized(imageRecord.alt as LocalizedInput, fallback.image.alt)
        },
        order: readNumber(entry.order, fallback.order)
      };
    })
    .filter(isDefined)
    .sort((a, b) => a.order - b.order);
  return mapped.length > 0 ? mapped : fallbackDataset.teamEntries;
}

function mapContactRoutes(raw: RawSanityPayload): ContactRouteVM[] {
  if (!Array.isArray(raw?.contactRoutes) || raw.contactRoutes.length === 0) return fallbackDataset.contactRoutes;
  const fallbackById = new Map(fallbackDataset.contactRoutes.map((route) => [route.id, route]));
  const mapped = raw.contactRoutes
    .map((route): ContactRouteVM | null => {
      const routeId = `contact-${readString(route.routeKey, "")}`;
      const fallback = fallbackById.get(routeId) ?? fallbackById.get("contact-partnerships");
      if (!fallback) return null;
      return {
        id: routeId,
        title: readLocalized(route.title as LocalizedInput, fallback.title),
        body: readLocalized(route.body as LocalizedInput, fallback.body),
        ctaLabel: readLocalized(route.ctaLabel as LocalizedInput, fallback.ctaLabel),
        href: readString(route.href, fallback.href),
        order: readNumber(route.order, fallback.order)
      };
    })
    .filter(isDefined)
    .sort((a, b) => a.order - b.order);
  return mapped.length > 0 ? mapped : fallbackDataset.contactRoutes;
}

function mapLegalBlocks(raw: RawSanityPayload): LegalBlockVM[] {
  if (!Array.isArray(raw?.legalBlocks) || raw.legalBlocks.length === 0) return fallbackDataset.legalBlocks;
  const fallbackByKey = new Map(fallbackDataset.legalBlocks.map((block) => [block.blockKey, block]));
  const mapped = raw.legalBlocks
    .map((block): LegalBlockVM | null => {
      const key = readString(block.blockKey, "");
      const fallback = fallbackByKey.get(key);
      if (!fallback) return null;
      return {
        id: readString(block._id, fallback.id),
        blockKey: key,
        title: readLocalized(block.title as LocalizedInput, fallback.title),
        body: readLocalized(block.body as LocalizedInput, fallback.body),
        order: readNumber(block.order, fallback.order)
      };
    })
    .filter(isDefined)
    .sort((a, b) => a.order - b.order);
  return mapped.length > 0 ? mapped : fallbackDataset.legalBlocks;
}

export function normalizeSiteDataset(rawPayload: unknown): SiteDataset {
  const raw = (rawPayload ?? null) as RawSanityPayload;

  return {
    settings: mapSettings(raw),
    navigation: mapNavigation(raw),
    pages: mapPages(raw),
    homeSections: mapHomeSections(raw),
    projects: mapProjects(raw),
    investorSections: mapInvestorSections(raw),
    teamEntries: mapTeamEntries(raw),
    contactRoutes: mapContactRoutes(raw),
    legalBlocks: mapLegalBlocks(raw)
  };
}
