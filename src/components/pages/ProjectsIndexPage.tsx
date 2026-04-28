import type { Locale } from "@/content/types";
import type { StandardPageContent } from "@/content/pages/pages";
import { getPage, getPageVisuals } from "@/lib/content/loaders";
import { ProjectPortfolio } from "@/components/sections/ProjectPortfolio";
import { Reveal } from "@/components/motion/Reveal";
import { PageVisualStrip } from "@/components/sections/PageVisualStrip";

export function ProjectsIndexPage({ locale }: { locale: Locale }) {
  const page = getPage("projects", locale);
  const content = page.content as StandardPageContent;
  const visuals = getPageVisuals("projects", locale);

  return (
    <>
      <section className="page-hero">
        <Reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
        </Reveal>
      </section>
      <PageVisualStrip visuals={visuals} />
      <ProjectPortfolio locale={locale} title={content.eyebrow} intro={content.intro} />
      <section className="text-rail">
        {content.sections.map((section, index) => (
          <Reveal key={section.title} delay={index * 70}>
            <article>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
