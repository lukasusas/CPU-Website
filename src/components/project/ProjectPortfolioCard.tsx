"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { DataLine } from "@/components/primitives/DataLine";
import { MonoMediaWindow } from "@/components/primitives/MonoMediaWindow";
import { RouteCTA } from "@/components/primitives/RouteCTA";
import { routeFor } from "@/lib/content/routes";
import type { LocalizedProjectSummary, Locale } from "@/lib/content/types";

type ProjectPortfolioCardProps = {
  locale: Locale;
  project: LocalizedProjectSummary;
  index: number;
  variant?: "grid" | "rail";
};

function openExternalHref(href: string) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  return external ? { target: "_blank", rel: "noreferrer" as const } : {};
}

export function ProjectPortfolioCard({
  locale,
  project,
  index,
  variant = "grid"
}: ProjectPortfolioCardProps) {
  const gallery = useMemo(
    () => (project.gallery.length > 0 ? project.gallery : [project.image]),
    [project.gallery, project.image]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = gallery[activeIndex] ?? gallery[0];

  return (
    <article className={`project-window project-window--${variant}`} data-reveal>
      <header className="project-window__header">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{project.stage}</span>
      </header>

      <div className="project-window__media-stack">
        <MonoMediaWindow
          src={activeImage.src}
          alt={activeImage.alt}
          aspect="16/10"
          className="project-window__feature"
          priority={index === 0 && activeIndex === 0}
        />

        {gallery.length > 1 ? (
          <div className="project-window__thumbs" aria-label={locale === "ptBR" ? "Galeria do projeto" : "Project gallery"}>
            {gallery.map((image, imageIndex) => {
              const selected = imageIndex === activeIndex;
              return (
                <button
                  key={`${project.id}-thumb-${imageIndex}`}
                  className="project-window__thumb"
                  type="button"
                  data-active={selected}
                  aria-pressed={selected}
                  aria-label={locale === "ptBR" ? `Vista ${imageIndex + 1}` : `View ${imageIndex + 1}`}
                  onClick={() => setActiveIndex(imageIndex)}
                >
                  <span className="project-window__thumb-media">
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="88px"
                    />
                  </span>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="project-window__body">
        <h3>{project.name}</h3>
        <p>{project.shortDescription}</p>
        <dl>
          <DataLine label={locale === "ptBR" ? "Local" : "Location"} value={project.location} />
          <DataLine label={locale === "ptBR" ? "Tipologia" : "Type"} value={project.projectType} />
          <DataLine label={locale === "ptBR" ? "Status" : "Stage"} value={project.stage} />
        </dl>
        {project.externalUrl ? (
          <a className="route-cta route-cta--outline" href={project.externalUrl} {...openExternalHref(project.externalUrl)}>
            <span>{project.externalLabel}</span>
            <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <RouteCTA
            href={routeFor("contact", locale)}
            label={locale === "ptBR" ? "Solicitar informações" : "Request information"}
          />
        )}
      </div>
    </article>
  );
}
