import type { ReactNode } from "react";
import { MotionLayer } from "@/components/motion/MotionLayer";
import { getSiteContext } from "@/lib/content/get-site-data";
import type { Locale } from "@/lib/content/types";
import { HtmlLang } from "./HtmlLang";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type LocaleShellProps = {
  locale: Locale;
  children: ReactNode;
};

export async function LocaleShell({ locale, children }: LocaleShellProps) {
  const context = await getSiteContext(locale);

  return (
    <>
      <HtmlLang locale={locale} />
      <MotionLayer />
      <a className="skip-link" href="#main-content">
        {locale === "ptBR" ? "Ir para conteúdo" : "Skip to content"}
      </a>
      <SiteHeader
        locale={locale}
        siteName={context.settings.siteName}
        navigation={context.navigation.map((item) => ({
          routeKey: item.routeKey,
          label: item.label,
          routeHref: item.routeHref,
          homeAnchorHref: item.homeAnchorHref
        }))}
      />
      <main id="main-content">{children}</main>
      <SiteFooter
        locale={locale}
        footerSummary={context.settings.footerSummary}
        footerLegal={context.settings.footerLegal}
        contactEmail={context.settings.contactEmail}
        investorEmail={context.settings.investorEmail}
      />
    </>
  );
}
