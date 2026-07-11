import type { Locale, RouteKey } from "./types";

export const localeMeta: Record<Locale, { label: string; shortLabel: string; htmlLang: string }> = {
  ptBR: { label: "Português", shortLabel: "PT", htmlLang: "pt-BR" },
  en: { label: "English", shortLabel: "EN", htmlLang: "en" }
};

type RouteDefinition = {
  paths: Record<Locale, string>;
  enabled: boolean;
  indexable: boolean;
};

/** The only source of truth for public routing, navigation, and crawlability. */
export const routeRegistry: Record<RouteKey, RouteDefinition> = {
  home: { paths: { ptBR: "/", en: "/en" }, enabled: true, indexable: true },
  projects: { paths: { ptBR: "/projetos", en: "/en/projects" }, enabled: true, indexable: true },
  about: { paths: { ptBR: "/sobre", en: "/en/about" }, enabled: true, indexable: true },
  investors: { paths: { ptBR: "/investidores", en: "/en/investors" }, enabled: true, indexable: true },
  team: { paths: { ptBR: "/equipe", en: "/en/team" }, enabled: false, indexable: false },
  contact: { paths: { ptBR: "/contato", en: "/en/contact" }, enabled: true, indexable: true },
  legal: { paths: { ptBR: "/legal", en: "/en/legal" }, enabled: true, indexable: true }
};

export const routeMap = Object.fromEntries(
  Object.entries(routeRegistry).map(([key, definition]) => [key, definition.paths])
) as Record<RouteKey, Record<Locale, string>>;

export function routeFor(routeKey: RouteKey, locale: Locale) {
  return routeRegistry[routeKey].paths[locale];
}

export function isRouteEnabled(routeKey: RouteKey) {
  return routeRegistry[routeKey].enabled;
}

export function isRouteIndexable(routeKey: RouteKey) {
  const route = routeRegistry[routeKey];
  return route.enabled && route.indexable;
}

export function indexableRouteKeys() {
  return (Object.keys(routeRegistry) as RouteKey[]).filter(isRouteIndexable);
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === "ptBR" ? "en" : "ptBR";
}

export function alternatePath(routeKey: RouteKey, locale: Locale) {
  return routeFor(routeKey, oppositeLocale(locale));
}

export function pathToRouteKey(pathname: string): RouteKey {
  const cleanPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const found = (Object.keys(routeRegistry) as RouteKey[]).find((routeKey) =>
    Object.values(routeRegistry[routeKey].paths).includes(cleanPath)
  );
  return found ?? "home";
}

export const routeKeyForPath = pathToRouteKey;

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ptBR";
}
