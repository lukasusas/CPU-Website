import type { Person } from "@/content/types";

export const people: Person[] = [
  {
    id: "investment-management",
    image: {
      src: "/assets/library/paracuru-site-aerial.jpg",
      alt: {
        ptBR: "Vista aérea de Paracuru usada para representar análise territorial e visão de portfólio.",
        en: "Aerial view of Paracuru representing territorial analysis and portfolio vision."
      }
    },
    translations: {
      ptBR: {
        name: "Gestão financeira e investimentos",
        role: "Gestão financeira, análise e planejamento",
        bio: "Responsável por estruturar decisões de investimento, acompanhar custos, organizar informações financeiras e sustentar o planejamento de longo prazo dos empreendimentos."
      },
      en: {
        name: "Finance and investment management",
        role: "Financial management, analysis, and planning",
        bio: "Responsible for structuring investment decisions, monitoring costs, organizing financial information, and sustaining long-term planning across the developments."
      }
    }
  },
  {
    id: "local-execution",
    image: {
      src: "/assets/library/dunamar-drone-site.jpg",
      alt: {
        ptBR: "Registro de obra em execução em Paracuru usado para representar acompanhamento local.",
        en: "Construction progress capture in Paracuru representing local execution oversight."
      }
    },
    translations: {
      ptBR: {
        name: "Execução local",
        role: "Obra, fornecedores e operação em Paracuru",
        bio: "Coordena a execução diária, relações locais, fornecedores e decisões de obra que transformam o planejamento em unidades entregues."
      },
      en: {
        name: "Local execution",
        role: "Construction, suppliers, and operations in Paracuru",
        bio: "Coordinates daily execution, local relationships, suppliers, and construction decisions that turn planning into delivered homes."
      }
    }
  },
  {
    id: "buyer-relationships",
    image: {
      src: "/assets/library/dunamar-render-day.jpg",
      alt: {
        ptBR: "Imagem de apresentação residencial usada para representar comunicação com compradores.",
        en: "Residential presentation render representing communication with buyers."
      }
    },
    translations: {
      ptBR: {
        name: "Relacionamento e vendas",
        role: "Atendimento, parceiros e compradores",
        bio: "Acompanha a jornada comercial, orienta interessados e conecta cada projeto aos canais corretos de informação e atendimento."
      },
      en: {
        name: "Relationships and sales",
        role: "Service, partners, and buyers",
        bio: "Supports the commercial journey, guides inquiries, and connects each project with the right information and service channels."
      }
    }
  }
];
