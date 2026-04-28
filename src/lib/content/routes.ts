import type { Locale, RouteKey } from "./types";

export const localeMeta: Record<Locale, { label: string; shortLabel: string; htmlLang: string }> = {
  ptBR: {
    label: "Português",
    shortLabel: "PT",
    htmlLang: "pt-BR"
  },
  en: {
    label: "English",
    shortLabel: "EN",
    htmlLang: "en"
  }
};

export const routeMap: Record<RouteKey, Record<Locale, string>> = {
  home: {
    ptBR: "/",
    en: "/en"
  },
  projects: {
    ptBR: "/projetos",
    en: "/en/projects"
  },
  about: {
    ptBR: "/sobre",
    en: "/en/about"
  },
  investors: {
    ptBR: "/investidores",
    en: "/en/investors"
  },
  team: {
    ptBR: "/equipe",
    en: "/en/team"
  },
  contact: {
    ptBR: "/contato",
    en: "/en/contact"
  },
  legal: {
    ptBR: "/legal",
    en: "/en/legal"
  }
};

export function routeFor(routeKey: RouteKey, locale: Locale) {
  return routeMap[routeKey][locale];
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === "ptBR" ? "en" : "ptBR";
}

export function pathToRouteKey(pathname: string): RouteKey {
  const cleanPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

  const found = (Object.keys(routeMap) as RouteKey[]).find((routeKey) =>
    Object.values(routeMap[routeKey]).includes(cleanPath)
  );

  return found ?? "home";
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ptBR";
}
