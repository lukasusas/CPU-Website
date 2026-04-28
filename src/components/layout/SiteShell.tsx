import type { ReactNode } from "react";
import type { Locale } from "@/content/types";
import { getNavigation, getSiteCopy } from "@/lib/content/loaders";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LangSetter } from "./LangSetter";

export function SiteShell({ children, locale }: { children: ReactNode; locale: Locale }) {
  const copy = getSiteCopy(locale);
  const navigation = getNavigation(locale);

  return (
    <>
      <LangSetter locale={locale} />
      <a className="skip-link" href="#main-content">
        {copy.skipLink}
      </a>
      <Header
        locale={locale}
        navigation={navigation}
        menuLabel={copy.menuLabel}
        closeMenu={copy.closeMenu}
        languageLabel={copy.languageLabel}
      />
      <main id="main-content">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
