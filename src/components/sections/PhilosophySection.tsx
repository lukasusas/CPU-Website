import type { HomeContent } from "@/content/pages/pages";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PhilosophySection({ content }: { content: HomeContent["philosophy"] }) {
  return (
    <section className="section section--philosophy">
      <Reveal>
        <SectionHeader eyebrow={content.eyebrow} title={content.title} body={content.body} />
      </Reveal>
      <div className="principle-grid">
        {content.principles.map((principle, index) => (
          <Reveal key={principle.title} delay={index * 70}>
            <article className="principle-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
