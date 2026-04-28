"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import type { Locale, RouteKey } from "@/content/types";
import { alternatePath, localeMeta, routeKeyForPath, routeFor } from "@/lib/i18n/routes";

type HeaderProps = {
  locale: Locale;
  navigation: Array<{ key: RouteKey; label: string; href: string }>;
  menuLabel: string;
  closeMenu: string;
  languageLabel: string;
};

export function Header({
  locale,
  navigation,
  menuLabel,
  closeMenu,
  languageLabel
}: HeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const routeKey = routeKeyForPath(pathname);
  const languageHref = alternatePath(routeKey, locale);
  const otherLocale = locale === "ptBR" ? "en" : "ptBR";

  useEffect(() => {
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand" href={routeFor("home", locale)} aria-label="P.U. Construtora">
        <span className="brand-mark" aria-hidden="true">
          PU
        </span>
        <span className="brand-text">P.U. Construtora</span>
      </Link>

      <nav className="desktop-nav" aria-label="Principal">
        {navigation.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            aria-current={routeKey === item.key ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <Link className="language-link" href={languageHref} aria-label={languageLabel}>
          {localeMeta[otherLocale].shortLabel}
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? closeMenu : menuLabel}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-panel" id="mobile-navigation" data-open={open}>
        <div className="mobile-panel__inner">
          <div className="mobile-panel__top">
            <span>P.U. Construtora</span>
            <button type="button" onClick={() => setOpen(false)}>
              {closeMenu}
            </button>
          </div>
          <nav aria-label="Mobile">
            {navigation.map((item, index) => (
              <Link
            key={item.key}
            href={item.href}
            style={{ "--item-index": index } as CSSProperties}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
            <Link
              href={languageHref}
              style={{ "--item-index": navigation.length } as CSSProperties}
              onClick={() => setOpen(false)}
            >
              {localeMeta[otherLocale].label}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
