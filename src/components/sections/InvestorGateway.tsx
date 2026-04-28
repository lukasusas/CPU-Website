import type { HomeContent } from "@/content/pages/pages";
import type { Locale } from "@/content/types";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { routeFor } from "@/lib/i18n/routes";

export function InvestorGateway({
  content,
  locale
}: {
  content: HomeContent["investorGateway"];
  locale: Locale;
}) {
  return (
    <section className="investor-gateway">
      <Reveal>
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <div className="investor-card">
          <span className="atlas-label">Pipeline</span>
          <strong>DunaMar / DunaMar 2</strong>
          <p>Paracuru, Ceará · Minha Casa Minha Vida</p>
          <ButtonLink href={routeFor("investors", locale)} variant="dark">
            {content.cta}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
