"use client";

import { useEffect } from "react";
import type { Locale } from "@/content/types";
import { localeMeta } from "@/lib/i18n/routes";

export function LangSetter({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = localeMeta[locale].htmlLang;
  }, [locale]);

  return null;
}
