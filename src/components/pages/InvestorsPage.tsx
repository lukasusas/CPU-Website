import type { Locale } from "@/content/types";
import type { InvestorsContent } from "@/content/pages/pages";
import { getPage, getPageVisuals } from "@/lib/content/loaders";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { routeFor } from "@/lib/i18n/routes";
import { PageVisualStrip } from "@/components/sections/PageVisualStrip";

export function InvestorsPage({ locale }: { locale: Locale }) {
  const page = getPage("investors", locale);
  const content = page.content as InvestorsContent;
  const visuals = getPageVisuals("investors", locale);

  return (
    <>
      <section className="investor-page-hero">
        <Reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
          <ButtonLink href={routeFor("contact", locale)} variant="dark">
            {content.inquiryCta}
          </ButtonLink>
        </Reveal>
      </section>
      <PageVisualStrip visuals={visuals} />
      <section className="investor-thesis">
        {content.sections.map((section, index) => (
          <Reveal key={section.title} delay={index * 80}>
            <article>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          </Reveal>
        ))}
      </section>
      <section className="disclaimer-band">
        <Reveal>
          <p>{content.disclaimer}</p>
        </Reveal>
      </section>
    </>
  );
}
