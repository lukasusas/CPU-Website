import type { Locale, RouteKey } from "@/content/types";

export const localeMeta: Record<
  Locale,
  { htmlLang: string; label: string; shortLabel: string }
> = {
  ptBR: { htmlLang: "pt-BR", label: "Português", shortLabel: "PT" },
  en: { htmlLang: "en", label: "English", shortLabel: "EN" }
};

export const routeMap: Record<RouteKey, Record<Locale, string>> = {
  home: { ptBR: "/", en: "/en" },
  projects: { ptBR: "/projetos", en: "/en/projects" },
  about: { ptBR: "/sobre", en: "/en/about" },
  investors: { ptBR: "/investidores", en: "/en/investors" },
  team: { ptBR: "/equipe", en: "/en/team" },
  contact: { ptBR: "/contato", en: "/en/contact" },
  legal: { ptBR: "/legal", en: "/en/legal" }
};

export function routeFor(route: RouteKey, locale: Locale) {
  return routeMap[route][locale];
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === "ptBR" ? "en" : "ptBR";
}

export function alternatePath(route: RouteKey, locale: Locale) {
  return routeFor(route, oppositeLocale(locale));
}

export function routeKeyForPath(pathname: string): RouteKey {
  const normalized = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const match = (Object.keys(routeMap) as RouteKey[]).find((key) =>
    Object.values(routeMap[key]).includes(normalized)
  );

  return match ?? "home";
}
