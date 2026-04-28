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
            P.U. Construtora
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
          <a href={settings.whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{copy.footerLegal}</p>
        <p>© 2026 {settings.legalName}</p>
      </div>
    </footer>
  );
}
