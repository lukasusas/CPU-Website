import type { Localized, RouteKey } from "@/content/types";

export const navigationItems: Array<{ key: RouteKey; label: Localized<string> }> = [
  { key: "projects", label: { ptBR: "Projetos", en: "Projects" } },
  { key: "about", label: { ptBR: "Sobre", en: "About" } },
  { key: "investors", label: { ptBR: "Investidores", en: "Investors" } },
  { key: "contact", label: { ptBR: "Contato", en: "Contact" } }
];
