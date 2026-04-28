type InvestorThesisRowProps = {
  index: number;
  title: string;
  body: string;
};

export function InvestorThesisRow({ index, title, body }: InvestorThesisRowProps) {
  return (
    <article className="investor-row" data-reveal>
      <span className="investor-row__index">{String(index + 1).padStart(2, "0")}</span>
      <div className="investor-row__content">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </article>
  );
}
