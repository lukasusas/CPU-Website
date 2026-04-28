import type { ProjectSummary } from "@/content/types";

export const projects: ProjectSummary[] = [
  {
    id: "dunamar",
    name: "DunaMar",
    location: "Paracuru, Ceará",
    projectType: "Apartamentos",
    unitCount: "14",
    stage: "Obra em fase final",
    externalUrl: "https://dunamar.vercel.app",
    image: {
      src: "/projects/dunamar-hero.jpg",
      alt: {
        ptBR: "Imagem do empreendimento DunaMar em Paracuru",
        en: "Image of the DunaMar development in Paracuru"
      }
    },
    translations: {
      ptBR: {
        stageLabel: "Fase final",
        typeLabel: "Apartamentos",
        unitsLabel: "14 unidades",
        shortDescription:
          "O primeiro projeto da P.U. Construtora em Paracuru, com apartamentos planejados para entregar mais qualidade, desenho e aproveitamento pelo valor local.",
        ctaLabel: "Abrir site do projeto",
        meta: ["Paracuru, Ceará", "Minha Casa Minha Vida", "Projeto referência"]
      },
      en: {
        stageLabel: "Final stage",
        typeLabel: "Apartments",
        unitsLabel: "14 units",
        shortDescription:
          "P.U. Construtora's first project in Paracuru, designed to deliver better quality, planning, and layout value at local accessible price points.",
        ctaLabel: "Open project website",
        meta: ["Paracuru, Ceará", "Minha Casa Minha Vida", "Reference project"]
      }
    }
  },
  {
    id: "mcmv2",
    name: "DunaMar 2",
    location: "Paracuru, Ceará",
    projectType: "2 blocos de apartamentos e 2 casas",
    unitCount: "22",
    stage: "Obra em fase inicial",
    image: {
      src: "/projects/mcmv-paracuru-aerial.jpg",
      alt: {
        ptBR: "Vista aérea do empreendimento DunaMar 2 em fase inicial de obra",
        en: "Aerial view of DunaMar 2 in early construction"
      }
    },
    translations: {
      ptBR: {
        stageLabel: "Fase inicial",
        typeLabel: "2 blocos + 2 casas",
        unitsLabel: "22 unidades",
        shortDescription:
          "Segundo empreendimento da P.U. Construtora em Paracuru, com 22 unidades no total entre 2 blocos de apartamentos e 2 casas, já em fase inicial de obra.",
        ctaLabel: "Ver panorama institucional",
        meta: ["Paracuru, Ceará", "Minha Casa Minha Vida", "Fase inicial"]
      },
      en: {
        stageLabel: "Early stage",
        typeLabel: "2 buildings + 2 houses",
        unitsLabel: "22 units",
        shortDescription:
          "P.U. Construtora's second project in Paracuru, with 22 total units across 2 apartment buildings and 2 houses, already in early construction.",
        ctaLabel: "View institutional overview",
        meta: ["Paracuru, Ceará", "Minha Casa Minha Vida", "Early stage"]
      }
    }
  }
];
