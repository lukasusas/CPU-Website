type NarrativeBlockProps = {
  title: string;
  body: string;
  index?: number;
};

export function NarrativeBlock({ title, body, index }: NarrativeBlockProps) {
  return (
    <article className="narrative-block" data-reveal>
      <div className="narrative-block__meta">{typeof index === "number" ? String(index + 1).padStart(2, "0") : "—"}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
