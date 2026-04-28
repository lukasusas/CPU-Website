import type { ReactNode } from "react";
import { LocaleShell } from "@/components/site/LocaleShell";

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <LocaleShell locale="ptBR">{children}</LocaleShell>;
}
