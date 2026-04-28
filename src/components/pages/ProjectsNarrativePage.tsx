import { ProjectPortfolioCard } from "@/components/project/ProjectPortfolioCard";
import { SectionFrame } from "@/components/primitives/SectionFrame";
import type { LocalizedPageData, LocalizedProjectSummary, Locale } from "@/lib/content/types";

type ProjectsNarrativePageProps = {
  locale: Locale;
  page: LocalizedPageData;
  projects: LocalizedProjectSummary[];
};

export function ProjectsNarrativePage({ locale, page, projects }: ProjectsNarrativePageProps) {
  return (
    <div className="page-stack">
      <SectionFrame eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
        <div className="narrative-grid">
          {page.sections.map((section, index) => (
            <article className="narrative-block" key={section.title} data-reveal>
              <div className="narrative-block__meta">{String(index + 1).padStart(2, "0")}</div>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </SectionFrame>

      <SectionFrame
        title={locale === "ptBR" ? "Resumo por projeto" : "Project summary"}
        intro={locale === "ptBR" ? "Portfólio institucional, sem dados comerciais." : "Corporate portfolio, without commercial fields."}
      >
        <div className="project-window-grid">
          {projects.map((project, index) => (
            <ProjectPortfolioCard key={project.id} locale={locale} project={project} index={index} />
          ))}
        </div>
      </SectionFrame>
    </div>
  );
}
