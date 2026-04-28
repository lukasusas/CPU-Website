import type { ReactNode } from "react";

type SectionFrameProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  children?: ReactNode;
};

export function SectionFrame({ id, eyebrow, title, intro, className, children }: SectionFrameProps) {
  return (
    <section id={id} className={`section-frame${className ? ` ${className}` : ""}`}>
      <header className="section-frame__head" data-reveal>
        {eyebrow ? <p className="section-frame__eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {intro ? <p className="section-frame__intro">{intro}</p> : null}
      </header>
      {children ? <div className="section-frame__body">{children}</div> : null}
    </section>
  );
}
