import type { Localized, RouteKey } from "@/content/types";

export type PageVisual = {
  id: string;
  src: string;
  alt: Localized<string>;
  label: Localized<string>;
};

export const pageVisuals: Partial<Record<RouteKey, PageVisual[]>> = {
  projects: [
    {
      id: "projects-render-day",
      src: "/assets/library/dunamar-render-day.jpg",
      alt: {
        ptBR: "Render diurno de unidades residenciais da P.U. Construtora.",
        en: "Daytime render of P.U. Construtora residential units."
      },
      label: {
        ptBR: "Estudo arquitetônico",
        en: "Architectural study"
      }
    },
    {
      id: "projects-site-drone",
      src: "/assets/library/dunamar-drone-neighborhood.jpg",
      alt: {
        ptBR: "Vista aérea da área do projeto em Paracuru.",
        en: "Aerial view of the project area in Paracuru."
      },
      label: {
        ptBR: "Contexto urbano",
        en: "Urban context"
      }
    },
    {
      id: "projects-render-night",
      src: "/assets/library/dunamar-render-night.jpg",
      alt: {
        ptBR: "Render noturno da linguagem visual residencial.",
        en: "Night render of the residential visual language."
      },
      label: {
        ptBR: "Simulação noturna",
        en: "Night simulation"
      }
    }
  ],
  about: [
    {
      id: "about-aerial",
      src: "/assets/library/paracuru-site-aerial.jpg",
      alt: {
        ptBR: "Mapa aéreo de Paracuru e faixa litorânea.",
        en: "Aerial map of Paracuru and the coastal strip."
      },
      label: {
        ptBR: "Território",
        en: "Territory"
      }
    },
    {
      id: "about-courtyard",
      src: "/assets/library/villa-courtyard.jpg",
      alt: {
        ptBR: "Referência de materialidade e convivência em áreas comuns.",
        en: "Reference for materials and shared-living spaces."
      },
      label: {
        ptBR: "Materialidade",
        en: "Material language"
      }
    },
    {
      id: "about-interior",
      src: "/assets/library/villa-interior.jpg",
      alt: {
        ptBR: "Referência de ambiente interno com integração e ventilação.",
        en: "Interior reference with integrated and ventilated space."
      },
      label: {
        ptBR: "Uso cotidiano",
        en: "Daily use"
      }
    }
  ],
  investors: [
    {
      id: "investors-map",
      src: "/assets/library/paracuru-site-aerial.jpg",
      alt: {
        ptBR: "Mapa de Paracuru com leitura de expansão urbana.",
        en: "Map of Paracuru highlighting urban expansion context."
      },
      label: {
        ptBR: "Base territorial",
        en: "Territorial base"
      }
    },
    {
      id: "investors-site",
      src: "/assets/library/dunamar-drone-site.jpg",
      alt: {
        ptBR: "Obra residencial em execução para representar pipeline ativo.",
        en: "Residential project under construction representing active pipeline."
      },
      label: {
        ptBR: "Pipeline em obra",
        en: "Active pipeline"
      }
    },
    {
      id: "investors-lifestyle",
      src: "/assets/library/leisure-render.jpg",
      alt: {
        ptBR: "Ambiente de lazer usado para representar proposta de valor do produto.",
        en: "Leisure setting used to represent the product value proposition."
      },
      label: {
        ptBR: "Valor do produto",
        en: "Product value"
      }
    }
  ],
  team: [
    {
      id: "team-site",
      src: "/assets/library/dunamar-drone-neighborhood.jpg",
      alt: {
        ptBR: "Visão aérea da vizinhança para representar leitura de campo.",
        en: "Aerial neighborhood view representing field-level context."
      },
      label: {
        ptBR: "Leitura local",
        en: "Local reading"
      }
    },
    {
      id: "team-process",
      src: "/assets/library/dunamar-render-courtyard.jpg",
      alt: {
        ptBR: "Render residencial usado para representar coordenação de entrega.",
        en: "Residential render representing coordinated delivery."
      },
      label: {
        ptBR: "Coordenação",
        en: "Coordination"
      }
    },
    {
      id: "team-quality",
      src: "/assets/library/villa-interior.jpg",
      alt: {
        ptBR: "Referência de acabamento e qualidade de uso.",
        en: "Reference image for finishes and everyday quality."
      },
      label: {
        ptBR: "Qualidade",
        en: "Quality"
      }
    }
  ],
  contact: [
    {
      id: "contact-neighborhood",
      src: "/assets/library/dunamar-drone-neighborhood.jpg",
      alt: {
        ptBR: "Aérea do bairro para representar conexão com parceiros locais.",
        en: "Neighborhood aerial representing connections with local partners."
      },
      label: {
        ptBR: "Parcerias locais",
        en: "Local partnerships"
      }
    },
    {
      id: "contact-region",
      src: "/assets/library/paracuru-dunes-landscape.jpg",
      alt: {
        ptBR: "Paisagem de Paracuru e região litorânea.",
        en: "Paracuru landscape and coastal region."
      },
      label: {
        ptBR: "Região de atuação",
        en: "Operating region"
      }
    },
    {
      id: "contact-product",
      src: "/assets/library/dunamar-render-day.jpg",
      alt: {
        ptBR: "Visual residencial para direcionamento de contatos por projeto.",
        en: "Residential visual used to direct project-related inquiries."
      },
      label: {
        ptBR: "Contato por projeto",
        en: "Project inquiries"
      }
    }
  ]
};
