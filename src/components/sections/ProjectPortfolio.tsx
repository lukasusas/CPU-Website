import type { Locale } from "@/content/types";
import { getProjects } from "@/lib/content/loaders";
import { ProjectSheet } from "@/components/project/ProjectSheet";
import { Reveal } from "@/components/motion/Reveal";

export function ProjectPortfolio({
  locale,
  title,
  intro
}: {
  locale: Locale;
  title: string;
  intro: string;
}) {
  const projects = getProjects(locale);

  return (
    <section className="section section--projects">
      <Reveal>
        <div className="portfolio-heading">
          <p className="section-index">01</p>
          <div>
            <p className="eyebrow">{title}</p>
            <h2>{title}</h2>
            <p className="portfolio-heading__intro">{intro}</p>
          </div>
        </div>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 80}>
            <ProjectSheet project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
