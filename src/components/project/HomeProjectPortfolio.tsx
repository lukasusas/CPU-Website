"use client";

import { useMemo, useState } from "react";
import { ProjectPortfolioCard } from "@/components/project/ProjectPortfolioCard";
import type { LocalizedProjectSummary, Locale } from "@/lib/content/types";

type HomeProjectPortfolioProps = {
  locale: Locale;
  projects: LocalizedProjectSummary[];
};

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function HomeProjectPortfolio({ locale, projects }: HomeProjectPortfolioProps) {
  const [startIndex, setStartIndex] = useState(0);
  const hasDesktopSwitcher = projects.length > 2;
  const lastStartIndex = Math.max(0, projects.length - 2);

  const desktopProjects = useMemo(
    () => (hasDesktopSwitcher ? projects.slice(startIndex, startIndex + 2) : projects),
    [hasDesktopSwitcher, projects, startIndex]
  );

  const mobileHelperText =
    locale === "ptBR"
      ? "Deslize para percorrer os empreendimentos em destaque."
      : "Swipe to move through the featured developments.";
  const desktopHelperText =
    locale === "ptBR"
      ? "Use as setas para percorrer os empreendimentos em destaque."
      : "Use the arrows to move through the featured developments.";

  const mobileLabel = `${pad(Math.min(projects.length, 1))} / ${pad(projects.length)}`;
  const desktopLabel = `${pad(startIndex + 1)}-${pad(Math.min(startIndex + 2, projects.length))} / ${pad(projects.length)}`;

  return (
    <div className={`project-window-home${hasDesktopSwitcher ? " project-window-home--switcher" : ""}`}>
      <div className="project-window-rail-meta" data-reveal>
        <div className="project-window-rail-meta__copy">
          <p className="project-window-rail-meta__copy-mobile">{mobileHelperText}</p>
          <p className="project-window-rail-meta__copy-desktop">{desktopHelperText}</p>
        </div>
        <div className="project-window-rail-meta__status">
          <span className="project-window-rail-meta__status-mobile">{mobileLabel}</span>
          <span className="project-window-rail-meta__status-desktop">{desktopLabel}</span>
          {hasDesktopSwitcher ? (
            <div
              className="project-window-carousel-controls"
              aria-label={locale === "ptBR" ? "Navegação de projetos" : "Project navigation"}
            >
              <button
                type="button"
                className="project-window-carousel-controls__button"
                onClick={() => setStartIndex((value) => Math.max(0, value - 1))}
                disabled={startIndex === 0}
                aria-label={locale === "ptBR" ? "Projeto anterior" : "Previous project"}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                className="project-window-carousel-controls__button"
                onClick={() => setStartIndex((value) => Math.min(lastStartIndex, value + 1))}
                disabled={startIndex >= lastStartIndex}
                aria-label={locale === "ptBR" ? "Próximo projeto" : "Next project"}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="project-window-grid project-window-grid--home project-window-grid--home-mobile">
        {projects.map((project, index) => (
          <div key={project.id} className="project-window-grid__item">
            <ProjectPortfolioCard locale={locale} project={project} index={index} variant="rail" />
          </div>
        ))}
      </div>

      <div className="project-window-grid project-window-grid--home-desktop">
        {desktopProjects.map((project, index) => (
          <div key={project.id} className="project-window-grid__item">
            <ProjectPortfolioCard
              locale={locale}
              project={project}
              index={hasDesktopSwitcher ? startIndex + index : index}
              variant="rail"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
