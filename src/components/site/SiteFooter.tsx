import Link from "next/link";
import { siteBrand } from "@/lib/content/brand-assets";
import { routeFor } from "@/lib/content/routes";
import type { Locale } from "@/lib/content/types";

type SiteFooterProps = {
  locale: Locale;
  footerSummary: string;
  footerLegal: string;
  contactEmail: string;
  investorEmail: string;
};

export function SiteFooter({
  locale,
  footerSummary,
  footerLegal,
  contactEmail,
  investorEmail
}: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <div className="site-footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteBrand.headerLogo.src}
              alt={siteBrand.headerLogo.alt}
              width={siteBrand.headerLogo.width}
              height={siteBrand.headerLogo.height}
            />
          </div>
          <p>{footerSummary}</p>
        </div>
        <nav aria-label={locale === "ptBR" ? "Links legais" : "Legal links"}>
          <Link href={routeFor("projects", locale)}>{locale === "ptBR" ? "Projetos" : "Projects"}</Link>
          <Link href={routeFor("investors", locale)}>{locale === "ptBR" ? "Investidores" : "Investors"}</Link>
          <Link href={routeFor("legal", locale)}>{locale === "ptBR" ? "Legal" : "Legal"}</Link>
        </nav>
        <div className="site-footer__contacts">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href={`mailto:${investorEmail}`}>{investorEmail}</a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>{footerLegal}</p>
        <p>© {new Date().getFullYear()} Construtora P.U. Ltda</p>
      </div>
    </footer>
  );
}
