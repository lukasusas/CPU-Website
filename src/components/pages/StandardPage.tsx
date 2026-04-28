import type { Locale, RouteKey } from "@/content/types";
import type { StandardPageContent } from "@/content/pages/pages";
import { getPage, getPageVisuals } from "@/lib/content/loaders";
import { routeFor } from "@/lib/i18n/routes";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PageVisualStrip } from "@/components/sections/PageVisualStrip";

export function StandardPage({ locale, routeKey }: { locale: Locale; routeKey: RouteKey }) {
  const page = getPage(routeKey, locale);
  const content = page.content as StandardPageContent;
  const visuals = getPageVisuals(routeKey, locale);

  return (
    <>
      <section className="page-hero">
        <Reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
          {content.cta ? (
            <ButtonLink href={routeFor(content.cta.hrefKey, locale)}>{content.cta.label}</ButtonLink>
          ) : null}
        </Reveal>
      </section>
      <PageVisualStrip visuals={visuals} />
      <section className="text-rail text-rail--wide">
        {content.sections.map((section, index) => (
          <Reveal key={section.title} delay={index * 70}>
            <article>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
