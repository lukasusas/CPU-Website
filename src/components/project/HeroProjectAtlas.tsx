"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { DataLine } from "@/components/primitives/DataLine";
import { MonoMediaWindow } from "@/components/primitives/MonoMediaWindow";
import type { LocalizedProjectSummary, Locale } from "@/lib/content/types";

type HeroProjectAtlasProps = {
  locale: Locale;
  projects: LocalizedProjectSummary[];
  rowSeconds?: number;
};

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function HeroProjectAtlas({
  locale,
  projects,
  rowSeconds = 7.5
}: HeroProjectAtlasProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const shouldLoop = projects.length > 2;
  const renderedProjects = useMemo(
    () => (shouldLoop && !prefersReducedMotion ? [...projects, ...projects] : projects),
    [prefersReducedMotion, projects, shouldLoop]
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    if (!shouldLoop || prefersReducedMotion) {
      gsap.set(track, { clearProps: "transform" });
      return;
    }

    let tween: gsap.core.Tween | null = null;

    const buildTween = () => {
      tween?.kill();
      gsap.set(track, { y: 0 });

      const singleTrackHeight = track.scrollHeight / 2;
      if (singleTrackHeight <= 0) return;

      tween = gsap.to(track, {
        y: -singleTrackHeight,
        duration: projects.length * rowSeconds,
        ease: "none",
        repeat: -1
      });
    };

    const handlePause = () => tween?.pause();
    const handleResume = () => tween?.play();
    const handleFocusOut = () => {
      window.requestAnimationFrame(() => {
        if (!viewport.contains(document.activeElement)) {
          tween?.play();
        }
      });
    };

    const resizeObserver = new ResizeObserver(() => buildTween());
    resizeObserver.observe(track);
    resizeObserver.observe(viewport);

    viewport.addEventListener("mouseenter", handlePause);
    viewport.addEventListener("mouseleave", handleResume);
    viewport.addEventListener("focusin", handlePause);
    viewport.addEventListener("focusout", handleFocusOut);

    buildTween();

    return () => {
      tween?.kill();
      resizeObserver.disconnect();
      viewport.removeEventListener("mouseenter", handlePause);
      viewport.removeEventListener("mouseleave", handleResume);
      viewport.removeEventListener("focusin", handlePause);
      viewport.removeEventListener("focusout", handleFocusOut);
    };
  }, [prefersReducedMotion, projects.length, rowSeconds, shouldLoop]);

  return (
    <div className="hero-brutal__atlas" data-reveal>
      <p className="hero-brutal__atlas-label">
        {locale === "ptBR" ? "Atlas de Projetos" : "Project Atlas"}
      </p>
      <div
        ref={viewportRef}
        className={`hero-brutal__atlas-viewport${
          prefersReducedMotion && shouldLoop ? " hero-brutal__atlas-viewport--scrollable" : ""
        }`}
        tabIndex={shouldLoop ? 0 : undefined}
        aria-label={
          locale === "ptBR"
            ? "Prévia rotativa dos projetos em destaque"
            : "Rotating preview of featured projects"
        }
      >
        <div ref={trackRef} className="hero-brutal__atlas-track">
          {renderedProjects.map((project, index) => {
            const sourceIndex = index % projects.length;

            return (
              <article className="atlas-row" key={`${project.id}-${index}`}>
                <div className="atlas-row__index">{pad(sourceIndex + 1)}</div>
                <div className="atlas-row__meta">
                  <h3>{project.name}</h3>
                  <p>{project.shortDescription}</p>
                  <dl>
                    <DataLine
                      label={locale === "ptBR" ? "Local" : "Location"}
                      value={project.location}
                    />
                    <DataLine
                      label={locale === "ptBR" ? "Tipologia" : "Type"}
                      value={project.projectType}
                    />
                    <DataLine
                      label={locale === "ptBR" ? "Unidades" : "Units"}
                      value={project.unitCount}
                    />
                  </dl>
                </div>
                <MonoMediaWindow
                  src={project.image.src}
                  alt={project.image.alt}
                  aspect="3/2"
                  priority={sourceIndex === 0 && index === 0}
                />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
