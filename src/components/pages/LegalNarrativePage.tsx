import { SectionFrame } from "@/components/primitives/SectionFrame";
import type { LocalizedPageData, LocalizedSection } from "@/lib/content/types";

type LegalNarrativePageProps = {
  page: LocalizedPageData;
  blocks: LocalizedSection[];
};

export function LegalNarrativePage({ page, blocks }: LegalNarrativePageProps) {
  return (
    <div className="page-stack">
      <SectionFrame eyebrow={page.eyebrow} title={page.title} intro={page.intro} headingLevel={1}>
        <div className="narrative-grid">
          {blocks.map((block, index) => (
            <article className="narrative-block" key={block.id} data-reveal>
              <div className="narrative-block__meta">{String(index + 1).padStart(2, "0")}</div>
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </article>
          ))}
        </div>
      </SectionFrame>
    </div>
  );
}
