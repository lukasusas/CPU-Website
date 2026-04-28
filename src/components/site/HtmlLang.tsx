"use client";

import { useEffect } from "react";
import { localeMeta } from "@/lib/content/routes";
import type { Locale } from "@/lib/content/types";

export function HtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang;
  }, [locale]);

  return null;
}
