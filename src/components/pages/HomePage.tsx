import type { Locale } from "@/content/types";
import { getPage } from "@/lib/content/loaders";
import type { HomeContent } from "@/content/pages/pages";
import { AtlasHero } from "@/components/sections/AtlasHero";
import { ProjectPortfolio } from "@/components/sections/ProjectPortfolio";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { MarketSection } from "@/components/sections/MarketSection";
import { InvestorGateway } from "@/components/sections/InvestorGateway";
import { ContactCta } from "@/components/sections/ContactCta";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { isRouteEnabled } from "@/lib/content/site-features";
import { routeFor } from "@/lib/i18n/routes";
import { Reveal } from "@/components/motion/Reveal";

export function HomePage({ locale }: { locale: Locale }) {
  const page = getPage("home", locale);
  const content = page.content as HomeContent;

  return (
    <>
      <AtlasHero content={content} locale={locale} />
      <ProjectPortfolio locale={locale} title={content.projectsTitle} intro={content.projectsIntro} />
      <PhilosophySection content={content.philosophy} />
      <MarketSection content={content.market} />
      <InvestorGateway content={content.investorGateway} locale={locale} />
      {isRouteEnabled("team") ? (
        <section className="team-preview">
          <Reveal>
            <p className="eyebrow">{content.teamPreview.eyebrow}</p>
            <h2>{content.teamPreview.title}</h2>
            <p>{content.teamPreview.body}</p>
            <ButtonLink href={routeFor("team", locale)} variant="secondary">
              {content.teamPreview.cta}
            </ButtonLink>
          </Reveal>
        </section>
      ) : null}
      <ContactCta content={content.contact} locale={locale} />
    </>
  );
}
