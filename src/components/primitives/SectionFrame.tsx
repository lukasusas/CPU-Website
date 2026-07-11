import type { ReactNode } from "react";

type SectionFrameProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  headingLevel?: 1 | 2;
  children?: ReactNode;
};

export function SectionFrame({ id, eyebrow, title, intro, className, headingLevel = 2, children }: SectionFrameProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id={id} className={`section-frame${className ? ` ${className}` : ""}`}>
      <header className="section-frame__head" data-reveal>
        {eyebrow ? <p className="section-frame__eyebrow">{eyebrow}</p> : null}
        <Heading>{title}</Heading>
        {intro ? <p className="section-frame__intro">{intro}</p> : null}
      </header>
      {children ? <div className="section-frame__body">{children}</div> : null}
    </section>
  );
}
