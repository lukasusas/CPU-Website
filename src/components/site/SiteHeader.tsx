"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { siteBrand } from "@/lib/content/brand-assets";
import { localeMeta, oppositeLocale, pathToRouteKey, routeFor } from "@/lib/content/routes";
import type { Locale, RouteKey } from "@/lib/content/types";

type HeaderNavigationItem = {
  routeKey: Exclude<RouteKey, "home">;
  label: string;
  routeHref: string;
  homeAnchorHref?: string;
};

type SiteHeaderProps = {
  locale: Locale;
  siteName: string;
  navigation: HeaderNavigationItem[];
};

export function SiteHeader({ locale, siteName, navigation }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const homePath = routeFor("home", locale);
  const isHome = pathname === homePath;

  const languageHref = useMemo(() => {
    const currentRoute = pathToRouteKey(pathname);
    return routeFor(currentRoute, oppositeLocale(locale));
  }, [locale, pathname]);

  return (
    <header className="site-header">
      <Link className="brand" href={homePath} onClick={() => setOpen(false)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="brand-logo"
          src={siteBrand.headerLogo.src}
          alt={siteBrand.headerLogo.alt}
          width={siteBrand.headerLogo.width}
          height={siteBrand.headerLogo.height}
        />
        <span className="sr-only">{siteName}</span>
      </Link>

      <nav className="desktop-nav" aria-label={locale === "ptBR" ? "Navegação principal" : "Main navigation"}>
        {navigation.map((item) => (
          <Link
            key={item.routeKey}
            href={isHome && item.homeAnchorHref ? item.homeAnchorHref : item.routeHref}
            aria-current={pathToRouteKey(pathname) === item.routeKey ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <Link className="language-switch" href={languageHref}>
          {localeMeta[oppositeLocale(locale)].shortLabel}
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <aside className="mobile-panel" id="mobile-nav-panel" data-open={open}>
        <div className="mobile-panel__header">
          <span className="sr-only">{siteName}</span>
          <button type="button" onClick={() => setOpen(false)}>
            {locale === "ptBR" ? "Fechar" : "Close"}
          </button>
        </div>
        <nav aria-label={locale === "ptBR" ? "Navegação móvel" : "Mobile navigation"}>
          {navigation.map((item) => (
            <Link
              key={item.routeKey}
              href={isHome && item.homeAnchorHref ? item.homeAnchorHref : item.routeHref}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href={languageHref} onClick={() => setOpen(false)}>
            {localeMeta[oppositeLocale(locale)].label}
          </Link>
        </nav>
      </aside>
    </header>
  );
}
