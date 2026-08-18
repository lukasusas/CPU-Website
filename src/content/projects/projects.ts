import type { ProjectSummary } from "@/content/types";

export const projects: ProjectSummary[] = [
  {
    id: "dunamar",
    name: "DunaMar",
    location: "Paracuru, Ceará",
    projectType: "Apartamentos",
    unitCount: "14",
    stage: "Projeto concluído",
    externalUrl: "https://dunamar.construtorapu.com.br",
    image: {
      src: "/projects/dunamar/dunamar-final-facade.jpg",
      alt: {
        ptBR: "Fachada e entrada concluídas do empreendimento DunaMar em Paracuru",
        en: "Completed facade and entrance of the DunaMar development in Paracuru"
      }
    },
    translations: {
      ptBR: {
        stageLabel: "Projeto concluído",
        typeLabel: "Apartamentos",
        unitsLabel: "14 unidades",
        shortDescription:
          "Primeiro empreendimento da Construtora P.U. em Paracuru, com 14 apartamentos, agora concluído. Edificações, acessos e áreas comuns estão finalizados, e todas as unidades possuem matrícula individual.",
        ctaLabel: "Abrir site do projeto",
        meta: ["Paracuru, Ceará", "Minha Casa Minha Vida", "Projeto concluído"]
      },
      en: {
        stageLabel: "Completed project",
        typeLabel: "Apartments",
        unitsLabel: "14 units",
        shortDescription:
          "Construtora P.U.'s first project in Paracuru, with 14 apartments, is now completed. The buildings, access, and common areas are finished, and every unit has its own property registration.",
        ctaLabel: "Open project website",
        meta: ["Paracuru, Ceará", "Minha Casa Minha Vida", "Completed project"]
      }
    }
  },
  {
    id: "mcmv2",
    name: "DunaMar 2",
    location: "Paracuru, Ceará",
    projectType: "2 blocos de apartamentos e 2 casas",
    unitCount: "22",
    stage: "Obra em andamento",
    externalUrl: "https://dunamar2.construtorapu.com.br/",
    image: {
      src: "/projects/dunamar-2/dunamar-2-bloco-1-aerial-progress-overview.jpg",
      alt: {
        ptBR: "Vista aérea do empreendimento DunaMar 2 em obra",
        en: "Aerial view of DunaMar 2 under construction"
      }
    },
    translations: {
      ptBR: {
        stageLabel: "Obra em andamento",
        typeLabel: "2 blocos + 2 casas",
        unitsLabel: "22 unidades",
        shortDescription:
          "Segundo empreendimento da Construtora P.U. em Paracuru, com 22 unidades entre 2 blocos de apartamentos e 2 casas. O Bloco 1 está próximo da conclusão, o Bloco 2 já está em construção e as casas compõem a terceira fase planejada.",
        ctaLabel: "Abrir site do projeto",
        meta: ["Paracuru, Ceará", "Minha Casa Minha Vida", "Obra em andamento"]
      },
      en: {
        stageLabel: "Active construction",
        typeLabel: "2 buildings + 2 houses",
        unitsLabel: "22 units",
        shortDescription:
          "Construtora P.U.'s second project in Paracuru, with 22 units across 2 apartment buildings and 2 houses. Block 1 is nearing completion, Block 2 is already under construction, and the houses form the planned third phase.",
        ctaLabel: "Open project website",
        meta: ["Paracuru, Ceará", "Minha Casa Minha Vida", "Active construction"]
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
          "Residência privada em Paracuru para cliente europeu, com cerca de 400 m² de área coberta à beira da lagoa. O projeto inclui interiores, mobiliário e materiais coordenados internamente, com entrega integral prevista em menos de um ano.",
        ctaLabel: "Solicitar panorama do projeto",
        meta: ["Paracuru, Ceará", "Cliente europeu", "Residência privativa"]
      },
      en: {
        stageLabel: "In progress",
        typeLabel: "Private residence",
        unitsLabel: "1 residence",
        shortDescription:
          "Private residence in Paracuru for a European client, with roughly 400 square meters of covered area on a lakeside site. The project includes in-house interiors, furniture, and material coordination, with full delivery planned in under one year.",
        ctaLabel: "Request project overview",
        meta: ["Paracuru, Ceará", "European client", "Private residence"]
      }
    }
  }
];
