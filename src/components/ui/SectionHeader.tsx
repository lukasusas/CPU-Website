type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "start" | "center";
};

export function SectionHeader({ eyebrow, title, body, align = "start" }: SectionHeaderProps) {
  return (
    <div className={`section-header section-header--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
