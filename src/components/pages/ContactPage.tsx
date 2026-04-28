import type { Locale } from "@/content/types";
import type { ContactContent } from "@/content/pages/pages";
import { getPage, getPageVisuals } from "@/lib/content/loaders";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageVisualStrip } from "@/components/sections/PageVisualStrip";

export function ContactPage({ locale }: { locale: Locale }) {
  const page = getPage("contact", locale);
  const content = page.content as ContactContent;
  const visuals = getPageVisuals("contact", locale);

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
      <section className="contact-routes">
        {content.routes.map((route, index) => (
          <Reveal key={route.title} delay={index * 70}>
            <article>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{route.title}</h2>
              <p>{route.body}</p>
              <ButtonLink
                href={route.href}
                external={route.href.startsWith("http")}
                variant="secondary"
              >
                {route.cta}
              </ButtonLink>
            </article>
          </Reveal>
        ))}
      </section>
      <ContactForm content={content.form} />
    </>
  );
}
