type DataLineProps = {
  label: string;
  value: string;
};

export function DataLine({ label, value }: DataLineProps) {
  return (
    <div className="data-line">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
