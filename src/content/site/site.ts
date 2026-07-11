import type { Localized } from "@/content/types";

export const siteSettings = {
  name: "Construtora P.U.",
  legalName: "P.U. Construtora Ltda",
  baseUrl: "https://construtorapu.com.br",
  defaultLocale: "ptBR",
  contactEmail: "contato@construtorapu.com.br",
  investorEmail: "invest@construtorapu.com.br",
  social: {
    instagram: "",
    linkedin: ""
  }
} as const;

export const siteCopy: Localized<{
  skipLink: string;
  menuLabel: string;
  closeMenu: string;
  languageLabel: string;
  externalLinkLabel: string;
  footerSummary: string;
  footerLegal: string;
}> = {
  ptBR: {
    skipLink: "Ir para o conteúdo principal",
    menuLabel: "Abrir navegação",
    closeMenu: "Fechar navegação",
    languageLabel: "Mudar idioma",
    externalLinkLabel: "abre em uma nova aba",
    footerSummary:
      "Desenvolvimento habitacional com foco em execução local, desenho prático e projetos acessíveis em Paracuru, Ceará.",
    footerLegal:
      "As informações do site institucional são gerais. Detalhes comerciais pertencem aos sites específicos dos projetos."
  },
  en: {
    skipLink: "Skip to main content",
    menuLabel: "Open navigation",
    closeMenu: "Close navigation",
    languageLabel: "Change language",
    externalLinkLabel: "opens in a new tab",
    footerSummary:
      "Housing development focused on local execution, practical design, and accessible projects in Paracuru, Ceará.",
    footerLegal:
      "Corporate website information is general. Detailed commercial information belongs on each project website."
  }
};
