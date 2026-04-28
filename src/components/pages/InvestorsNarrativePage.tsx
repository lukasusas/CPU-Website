import { InvestorThesisRow } from "@/components/primitives/InvestorThesisRow";
import { RouteCTA } from "@/components/primitives/RouteCTA";
import { SectionFrame } from "@/components/primitives/SectionFrame";
import { routeFor } from "@/lib/content/routes";
import type { LocalizedPageData, Locale } from "@/lib/content/types";

type InvestorsNarrativePageProps = {
  locale: Locale;
  page: LocalizedPageData;
  rows: Array<{ id: string; title: string; body: string }>;
  disclaimer: string;
};

export function InvestorsNarrativePage({ locale, page, rows, disclaimer }: InvestorsNarrativePageProps) {
  return (
    <div className="page-stack">
      <SectionFrame eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
        <div className="investor-rows">
          {rows.map((row, index) => (
            <InvestorThesisRow key={row.id} index={index} title={row.title} body={row.body} />
          ))}
        </div>
        <p className="disclaimer-band">{disclaimer || page.disclaimer}</p>
        <div className="section-actions" data-reveal>
          <RouteCTA
            href={routeFor("contact", locale)}
            label={locale === "ptBR" ? "Solicitar contato institucional" : "Request institutional contact"}
            variant="solid"
          />
        </div>
      </SectionFrame>
    </div>
  );
}
