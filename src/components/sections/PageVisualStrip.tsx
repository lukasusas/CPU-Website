import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

type PageVisual = {
  id: string;
  src: string;
  alt: string;
  label: string;
};

export function PageVisualStrip({ visuals }: { visuals: PageVisual[] }) {
  if (!visuals.length) {
    return null;
  }

  return (
    <section className="page-visual-strip">
      {visuals.map((visual, index) => (
        <Reveal key={visual.id} delay={index * 70}>
          <article className="visual-card">
            <Image
              src={visual.src}
              alt={visual.alt}
              width={1400}
              height={900}
              sizes="(min-width: 1120px) 30vw, (min-width: 760px) 33vw, 100vw"
            />
            <span className="visual-card__label">{visual.label}</span>
          </article>
        </Reveal>
      ))}
    </section>
  );
}
