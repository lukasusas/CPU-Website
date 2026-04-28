import type { HomeContent } from "@/content/pages/pages";
import { Reveal } from "@/components/motion/Reveal";

export function MarketSection({ content }: { content: HomeContent["market"] }) {
  return (
    <section className="market-band">
      <Reveal>
        <div className="market-band__copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          <p>{content.body}</p>
        </div>
      </Reveal>
      <div className="market-band__points">
        {content.points.map((point, index) => (
          <Reveal key={point.label} delay={index * 60}>
            <div>
              <span>{point.label}</span>
              <strong>{point.value}</strong>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
