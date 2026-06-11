import type { ProjectSummary } from "@/content/types";

export const projects: ProjectSummary[] = [
  {
    id: "dunamar",
    name: "DunaMar",
    location: "Paracuru, Ceará",
    projectType: "Apartamentos",
    unitCount: "14",
    stage: "Obra em fase final",
    externalUrl: "https://dunamar.construtorapu.com.br",
    image: {
      src: "/projects/dunamar/dunamar-render-front-elevation.jpg",
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
    externalUrl: "https://dunamar2.construtorapu.com.br/",
    image: {
      src: "/projects/dunamar-2/dunamar-2-site-aerial-overview.jpg",
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
  },
  {
    id: "private-house",
    name: "Residência Privada na Lagoa",
    location: "Paracuru, Ceará",
    projectType: "Residência privativa de alto padrão",
    unitCount: "1",
    stage: "Obra em andamento",
    image: {
      src: "/projects/private-house/private-house-main-residence-view.jpg",
      alt: {
        ptBR: "Vista principal da residência privada em construção em Paracuru",
        en: "Main view of the private residence under construction in Paracuru"
      }
    },
    translations: {
      ptBR: {
        stageLabel: "Em andamento",
        typeLabel: "Residência privativa",
        unitsLabel: "1 residência",
        shortDescription:
          "Residência privada em Paracuru para cliente europeu, com cerca de 400 m² de área coberta, implantação à beira da lagoa, interiores coordenados internamente e cronograma de entrega enxuto.",
        ctaLabel: "Solicitar panorama do projeto",
        meta: ["Paracuru, Ceará", "Cliente europeu", "Residência privativa"]
      },
      en: {
        stageLabel: "In progress",
        typeLabel: "Private residence",
        unitsLabel: "1 residence",
        shortDescription:
          "Private residence in Paracuru for a European client, with roughly 400 square meters of covered area, a lakeside site, interiors coordinated in-house, and an accelerated delivery schedule.",
        ctaLabel: "Request project overview",
        meta: ["Paracuru, Ceará", "European client", "Private residence"]
      }
    }
  }
];
