import type { Locale } from "@/content/types";
import type { StandardPageContent } from "@/content/pages/pages";
import Image from "next/image";
import { getPage, getPageVisuals, getPeople } from "@/lib/content/loaders";
import { routeFor } from "@/lib/i18n/routes";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/motion/Reveal";
import { PageVisualStrip } from "@/components/sections/PageVisualStrip";

export function TeamPage({ locale }: { locale: Locale }) {
  const page = getPage("team", locale);
  const content = page.content as StandardPageContent;
  const people = getPeople(locale);
  const visuals = getPageVisuals("team", locale);

  return (
    <>
      <section className="page-hero">
        <Reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
        </Reveal>
      </section>
      <PageVisualStrip visuals={visuals} />
      <section className="people-grid">
        {people.map((person, index) => (
          <Reveal key={person.id} delay={index * 70}>
            <article className="person-card">
              <div className="person-card__media">
                <Image
                  src={person.image.src}
                  alt={person.image.alt}
                  width={1200}
                  height={900}
                  sizes="(min-width: 1120px) 24vw, (min-width: 760px) 45vw, 100vw"
                />
                <div className="person-card__mark" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <h2>{person.name}</h2>
              <p className="person-role">{person.role}</p>
              <p>{person.bio}</p>
            </article>
          </Reveal>
        ))}
      </section>
      {content.cta ? (
        <section className="contact-cta contact-cta--compact">
          <ButtonLink href={routeFor(content.cta.hrefKey, locale)}>{content.cta.label}</ButtonLink>
        </section>
      ) : null}
    </>
  );
}
