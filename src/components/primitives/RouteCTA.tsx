import Link from "next/link";

type RouteCTAProps = {
  href: string;
  label: string;
  variant?: "solid" | "outline";
};

export function RouteCTA({ href, label, variant = "outline" }: RouteCTAProps) {
  return (
    <Link className={`route-cta route-cta--${variant}`} href={href}>
      <span>{label}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
