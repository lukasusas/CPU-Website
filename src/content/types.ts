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

export type SeoContent = {
  title: string;
  description: string;
};

export type ImageAsset = {
  src: string;
  alt: Localized<string>;
};

export type ProjectSummary = {
  id: string;
  name: string;
  location: string;
  projectType: string;
  unitCount: string;
  stage: string;
  externalUrl?: string;
  image: ImageAsset;
  translations: Localized<{
    stageLabel: string;
    typeLabel: string;
    unitsLabel: string;
    shortDescription: string;
    ctaLabel: string;
    meta: string[];
  }>;
};

export type Person = {
  id: string;
  image: ImageAsset;
  translations: Localized<{
    name: string;
    role: string;
    bio: string;
  }>;
};

export type PageSection = {
  title: string;
  body: string;
  items?: string[];
};

export type PageContent<T> = {
  id: RouteKey;
  route: RouteKey;
  seo: Localized<SeoContent>;
  translations: Localized<T>;
};
