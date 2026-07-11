import { MonoMediaWindow } from "@/components/primitives/MonoMediaWindow";
import { RouteCTA } from "@/components/primitives/RouteCTA";
import { SectionFrame } from "@/components/primitives/SectionFrame";
import { routeFor } from "@/lib/content/routes";
import type { LocalizedPageData, LocalizedTeamEntry, Locale } from "@/lib/content/types";

type TeamNarrativePageProps = {
  locale: Locale;
  page: LocalizedPageData;
  team: LocalizedTeamEntry[];
};

export function TeamNarrativePage({ locale, page, team }: TeamNarrativePageProps) {
  return (
    <div className="page-stack">
      <SectionFrame eyebrow={page.eyebrow} title={page.title} intro={page.intro} headingLevel={1}>
        {page.sections.length > 0 ? (
          <div className="narrative-grid">
            {page.sections.map((section, index) => (
              <article className="narrative-block" key={section.title} data-reveal>
                <div className="narrative-block__meta">{String(index + 1).padStart(2, "0")}</div>
                <h3>{section.title}</h3>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        ) : null}
        <div className="team-grid">
          {team.map((entry) => (
            <article className="team-entry" key={entry.id} data-reveal>
              <MonoMediaWindow src={entry.image.src} alt={entry.image.alt} aspect="4/3" />
              <h3>{entry.name}</h3>
              <p className="team-entry__role">{entry.role}</p>
              <p>{entry.bio}</p>
            </article>
          ))}
        </div>
        <div className="section-actions" data-reveal>
          <RouteCTA href={routeFor("contact", locale)} label={locale === "ptBR" ? "Falar com a equipe" : "Contact the team"} />
        </div>
      </SectionFrame>
    </div>
  );
}
