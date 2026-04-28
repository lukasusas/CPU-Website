import type { HomeContent } from "@/content/pages/pages";
import type { Locale } from "@/content/types";
import type { CSSProperties } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { routeFor } from "@/lib/i18n/routes";
import { ProjectSheet } from "@/components/project/ProjectSheet";
import { getProjects } from "@/lib/content/loaders";
import { Reveal } from "@/components/motion/Reveal";

export function AtlasHero({ content, locale }: { content: HomeContent; locale: Locale }) {
  const projects = getProjects(locale);

  return (
    <section className="hero-section">
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.headline}</h1>
          <p className="hero-lead">{content.lead}</p>
          <div className="hero-actions">
            <ButtonLink href={routeFor("projects", locale)}>{content.primaryCta}</ButtonLink>
            <ButtonLink href={routeFor("investors", locale)} variant="ghost">
              {content.secondaryCta}
            </ButtonLink>
          </div>
        </Reveal>
      </div>

      <Reveal className="hero-atlas" delay={120}>
        <div className="atlas-frame">
          <div className="atlas-topline">
            <span>{content.atlasLabel}</span>
            <span>{"03°24'S · 39°02'W"}</span>
          </div>
          <div className="atlas-map">
            <Image
              src="/assets/paracuru-drone.jpg"
              alt=""
              width={1200}
              height={840}
              priority
              sizes="(min-width: 760px) 42vw, 100vw"
            />
            <div className="atlas-grid" aria-hidden="true" />
          </div>
          <div className="atlas-stack">
            {projects.map((project, index) => (
              <div key={project.id} style={{ "--stack-index": index } as CSSProperties}>
                <ProjectSheet project={project} compact />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
