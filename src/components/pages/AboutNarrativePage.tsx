import { NarrativeBlock } from "@/components/primitives/NarrativeBlock";
import { RouteCTA } from "@/components/primitives/RouteCTA";
import { SectionFrame } from "@/components/primitives/SectionFrame";
import { routeFor } from "@/lib/content/routes";
import type { LocalizedPageData, Locale } from "@/lib/content/types";

type AboutNarrativePageProps = {
  locale: Locale;
  page: LocalizedPageData;
};

export function AboutNarrativePage({ locale, page }: AboutNarrativePageProps) {
  return (
    <div className="page-stack">
      <SectionFrame eyebrow={page.eyebrow} title={page.title} intro={page.intro} headingLevel={1}>
        <div className="narrative-grid">
          {page.sections.map((section, index) => (
            <NarrativeBlock key={section.title} title={section.title} body={section.body} index={index} />
          ))}
        </div>
        {page.primaryCtaLabel && page.primaryCtaRouteKey ? (
          <div className="section-actions" data-reveal>
            <RouteCTA href={routeFor(page.primaryCtaRouteKey, locale)} label={page.primaryCtaLabel} variant="solid" />
          </div>
        ) : null}
      </SectionFrame>
    </div>
  );
}
