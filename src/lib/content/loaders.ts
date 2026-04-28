import {
  navigationItems,
  pages,
  pageVisuals,
  people,
  projects,
  siteCopy,
  siteSettings
} from "@/content";
import type { Locale, RouteKey } from "@/content/types";
import { isRouteEnabled } from "@/lib/content/site-features";
import { routeFor } from "@/lib/i18n/routes";

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}

export function getSiteSettings() {
  return siteSettings;
}

export function getNavigation(locale: Locale) {
  return navigationItems
    .filter((item) => isRouteEnabled(item.key))
    .map((item) => ({
      key: item.key,
      label: item.label[locale],
      href: routeFor(item.key, locale)
    }));
}

export function getPage<T extends RouteKey>(route: T, locale: Locale) {
  const page = pages[route];

  return {
    id: page.id,
    route: page.route,
    seo: page.seo[locale],
    content: page.translations[locale]
  };
}

export function getProjects(locale: Locale) {
  return projects.map((project) => ({
    ...project,
    image: {
      src: project.image.src,
      alt: project.image.alt[locale]
    },
    content: project.translations[locale]
  }));
}

export function getPeople(locale: Locale) {
  return people.map((person) => ({
    id: person.id,
    image: {
      src: person.image.src,
      alt: person.image.alt[locale]
    },
    ...person.translations[locale]
  }));
}

export function getPageVisuals(route: RouteKey, locale: Locale) {
  const routeVisuals = pageVisuals[route] ?? [];

  return routeVisuals.map((visual) => ({
    id: visual.id,
    src: visual.src,
    alt: visual.alt[locale],
    label: visual.label[locale]
  }));
}
