import type { ReactNode } from "react";
import { LocaleShell } from "@/components/site/LocaleShell";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <LocaleShell locale="en">{children}</LocaleShell>;
}
