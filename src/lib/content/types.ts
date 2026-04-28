export type Locale = "ptBR" | "en";

export type RouteKey =
  | "home"
  | "projects"
  | "about"
  | "investors"
  | "team"
  | "contact"
  | "legal";

export type Localized<T> = Record<Locale, T>;

export type SeoFields = {
  title: string;
  description: string;
};

export type SiteSettingsVM = {
  siteName: string;
  legalName: string;
  baseUrl: string;
  defaultLocale: Locale;
  contactEmail: string;
  investorEmail: string;
  whatsappUrl?: string;
  coordinatesLabel: Localized<string>;
  footerSummary: Localized<string>;
  footerLegal: Localized<string>;
};

export type NavigationItemVM = {
  routeKey: Exclude<RouteKey, "home">;
  label: Localized<string>;
  anchorId?: string;
  useAnchorOnHome: boolean;
  order: number;
};

export type ImageVM = {
  url?: string;
  fallbackSrc: string;
  alt: Localized<string>;
};

export type GalleryImageVM = ImageVM;

export type ProjectSummaryVM = {
  id: string;
  name: Localized<string>;
  location: Localized<string>;
  projectType: Localized<string>;
  unitCount: string;
  stage: Localized<string>;
  shortDescription: Localized<string>;
  externalUrl?: string;
  externalLabel: Localized<string>;
  image: ImageVM;
  gallery?: GalleryImageVM[];
  order: number;
};

export type TeamEntryVM = {
  id: string;
  name: Localized<string>;
  role: Localized<string>;
  bio: Localized<string>;
  image: ImageVM;
  order: number;
};

export type ContactRouteVM = {
  id: string;
  title: Localized<string>;
  body: Localized<string>;
  ctaLabel: Localized<string>;
  href: string;
  order: number;
};

export type InvestorSectionVM = {
  id: string;
  sectionKey: "marketThesis" | "pipeline" | "governance" | "disclaimer";
  title: Localized<string>;
  body: Localized<string>;
  order: number;
};

export type LegalBlockVM = {
  id: string;
  blockKey: string;
  title: Localized<string>;
  body: Localized<string>;
  order: number;
};

export type HomeSectionVM = {
  id: string;
  sectionKey: "manifesto" | "execution" | "market" | "teamLead" | "contactLead";
  eyebrow: Localized<string>;
  title: Localized<string>;
  body: Localized<string>;
  ctaLabel?: Localized<string>;
  ctaRouteKey?: Exclude<RouteKey, "home">;
  order: number;
};

export type SectionItemVM = {
  title: Localized<string>;
  body: Localized<string>;
};

export type PageContentVM = {
  pageKey: RouteKey;
  seo: Localized<SeoFields>;
  eyebrow: Localized<string>;
  title: Localized<string>;
  intro: Localized<string>;
  sections: SectionItemVM[];
  primaryCtaLabel?: Localized<string>;
  primaryCtaRouteKey?: Exclude<RouteKey, "home">;
  secondaryCtaLabel?: Localized<string>;
  secondaryCtaRouteKey?: Exclude<RouteKey, "home">;
  disclaimer?: Localized<string>;
};

export type SiteDataset = {
  settings: SiteSettingsVM;
  navigation: NavigationItemVM[];
  pages: PageContentVM[];
  homeSections: HomeSectionVM[];
  projects: ProjectSummaryVM[];
  investorSections: InvestorSectionVM[];
  teamEntries: TeamEntryVM[];
  contactRoutes: ContactRouteVM[];
  legalBlocks: LegalBlockVM[];
};

export type LocalizedNavigationItem = Omit<NavigationItemVM, "label"> & {
  label: string;
};

export type LocalizedProjectSummary = {
  id: string;
  name: string;
  location: string;
  projectType: string;
  unitCount: string;
  stage: string;
  shortDescription: string;
  externalUrl?: string;
  externalLabel: string;
  image: {
    src: string;
    alt: string;
  };
  gallery: Array<{
    src: string;
    alt: string;
  }>;
};

export type LocalizedTeamEntry = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: {
    src: string;
    alt: string;
  };
};

export type LocalizedContactRoute = {
  id: string;
  title: string;
  body: string;
  ctaLabel: string;
  href: string;
};

export type LocalizedSection = {
  id: string;
  title: string;
  body: string;
};

export type LocalizedPageData = {
  pageKey: RouteKey;
  seo: SeoFields;
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{ title: string; body: string }>;
  primaryCtaLabel?: string;
  primaryCtaRouteKey?: Exclude<RouteKey, "home">;
  secondaryCtaLabel?: string;
  secondaryCtaRouteKey?: Exclude<RouteKey, "home">;
  disclaimer?: string;
};
