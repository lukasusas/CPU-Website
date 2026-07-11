import Link from "next/link";
import type { Locale } from "@/content/types";
import { getNavigation, getSiteCopy, getSiteSettings } from "@/lib/content/loaders";
import { routeFor } from "@/lib/i18n/routes";

export function Footer({ locale }: { locale: Locale }) {
  const copy = getSiteCopy(locale);
  const settings = getSiteSettings();
  const navigation = getNavigation(locale);

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link className="footer-brand" href={routeFor("home", locale)}>
            Construtora P.U.
          </Link>
          <p>{copy.footerSummary}</p>
        </div>
        <nav aria-label="Rodapé">
          {navigation.map((item) => (
            <Link key={item.key} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href={routeFor("legal", locale)}>Legal</Link>
        </nav>
        <div className="footer-contact">
          <a href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</a>
          {settings.investorEmail ? (
            <a href={`mailto:${settings.investorEmail}`}>{settings.investorEmail}</a>
          ) : null}
        </div>
      </div>
      <div className="footer-bottom">
        <p>{copy.footerLegal}</p>
        <p>© 2026 {settings.legalName}</p>
      </div>
    </footer>
  );
}
