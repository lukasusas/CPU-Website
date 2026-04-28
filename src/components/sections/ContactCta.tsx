import type { HomeContent } from "@/content/pages/pages";
import type { Locale } from "@/content/types";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { routeFor } from "@/lib/i18n/routes";
import { Reveal } from "@/components/motion/Reveal";

export function ContactCta({ content, locale }: { content: HomeContent["contact"]; locale: Locale }) {
  return (
    <section className="contact-cta">
      <Reveal>
        <h2>{content.title}</h2>
        <p>{content.body}</p>
        <ButtonLink href={routeFor("contact", locale)}>{content.cta}</ButtonLink>
      </Reveal>
    </section>
  );
}
