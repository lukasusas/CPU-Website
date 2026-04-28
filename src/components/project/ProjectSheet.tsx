import type { ProjectSummary } from "@/content/types";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

type LocalizedProject = Omit<ProjectSummary, "image" | "translations"> & {
  image: { src: string; alt: string };
  content: {
    stageLabel: string;
    typeLabel: string;
    unitsLabel: string;
    shortDescription: string;
    ctaLabel: string;
    meta: string[];
  };
};

export function ProjectSheet({ project, compact = false }: { project: LocalizedProject; compact?: boolean }) {
  return (
    <article className={`project-sheet ${compact ? "project-sheet--compact" : ""}`}>
      <div className="project-sheet__media">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={900}
          height={760}
          sizes={compact ? "120px" : "(min-width: 1120px) 45vw, (min-width: 760px) 50vw, 100vw"}
        />
        <div className="plan-lines" aria-hidden="true" />
      </div>
      <div className="project-sheet__content">
        <div className="project-sheet__meta">
          {project.content.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <h3>{project.name}</h3>
        <p>{project.content.shortDescription}</p>
        <dl>
          <div>
            <dt>{project.content.typeLabel}</dt>
            <dd>{project.projectType}</dd>
          </div>
          <div>
            <dt>{project.content.unitsLabel}</dt>
            <dd>{project.unitCount}</dd>
          </div>
          <div>
            <dt>{project.content.stageLabel}</dt>
            <dd>{project.stage}</dd>
          </div>
        </dl>
        {project.externalUrl ? (
          <ButtonLink href={project.externalUrl} external variant="secondary">
            {project.content.ctaLabel}
          </ButtonLink>
        ) : (
          <span className="project-status">{project.content.ctaLabel}</span>
        )}
      </div>
    </article>
  );
}
