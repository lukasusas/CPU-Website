import type { SiteDataset } from "./types";

const l = (ptBR: string, en?: string) => ({ ptBR, en: en ?? ptBR });

export const fallbackDataset: SiteDataset = {
  settings: {
    siteName: "P.U. Construtora",
    legalName: "P.U. Construtora Ltda",
    baseUrl: "https://construtorapu.com.br",
    defaultLocale: "ptBR",
    contactEmail: "contato@construtorapu.com.br",
    investorEmail: "invest@construtorapu.com.br",
    coordinatesLabel: l(
      "Paracuru, Ceará, Brasil",
      "Paracuru, Ceará, Brazil"
    ),
    footerSummary: l(
      "Habitação acessível em Paracuru, com foco em acompanhamento próximo de obra, padrão construtivo e crescimento consistente dentro do Minha Casa Minha Vida.",
      "Affordable housing in Paracuru, focused on close construction oversight, building standards, and steady growth within Minha Casa Minha Vida."
    ),
    footerLegal: l(
      "Este site apresenta informações institucionais da P.U. Construtora. Condições comerciais, disponibilidade e atendimento de vendas são tratados nos canais próprios de cada empreendimento.",
      "This website presents institutional information about P.U. Construtora. Commercial terms, availability, and sales support are handled through each development's dedicated channels."
    )
  },
  navigation: [
    { routeKey: "projects", label: l("Projetos", "Projects"), anchorId: "projects", useAnchorOnHome: true, order: 0 },
    { routeKey: "about", label: l("Sobre", "About"), anchorId: "about", useAnchorOnHome: true, order: 1 },
    {
      routeKey: "investors",
      label: l("Investidores", "Investors"),
      anchorId: "investors",
      useAnchorOnHome: true,
      order: 2
    },
    { routeKey: "contact", label: l("Contato", "Contact"), anchorId: "contact", useAnchorOnHome: true, order: 3 }
  ],
  pages: [
    {
      pageKey: "home",
      seo: {
        ptBR: {
          title: "P.U. Construtora | Habitação acessível em Paracuru",
          description:
            "Página institucional da P.U. Construtora: projetos residenciais, execução local e visão de longo prazo em Paracuru, Ceará."
        },
        en: {
          title: "P.U. Construtora | Accessible housing in Paracuru",
          description:
            "Corporate website of P.U. Construtora: residential projects, local execution, and long-term vision in Paracuru, Ceará."
        }
      },
      eyebrow: l("Paracuru, Ceará, Brasil", "Paracuru, Ceará, Brazil"),
      title: l(
        "Habitação acessível com execução local em Paracuru, Ceará.",
        "Accessible housing with local execution in Paracuru, Ceará."
      ),
      intro: l(
        "A P.U. Construtora atua em Paracuru com foco em habitação acessível, incluindo empreendimentos alinhados ao Minha Casa Minha Vida, com planejamento técnico e acompanhamento próximo de obra.",
        "P.U. Construtora develops affordable housing in Paracuru, including projects aligned with Minha Casa Minha Vida, with technical planning and close day-to-day site oversight."
      ),
      sections: [],
      primaryCtaLabel: l("Ver projetos", "View projects"),
      primaryCtaRouteKey: "projects",
      secondaryCtaLabel: l("Investidores", "Investors"),
      secondaryCtaRouteKey: "investors"
    },
    {
      pageKey: "projects",
      seo: {
        ptBR: {
          title: "Projetos | P.U. Construtora",
          description: "Portfólio institucional dos empreendimentos da P.U. Construtora em Paracuru, Ceará."
        },
        en: {
          title: "Projects | P.U. Construtora",
          description: "Institutional portfolio of P.U. Construtora developments in Paracuru, Ceará."
        }
      },
      eyebrow: l("Portfólio", "Portfolio"),
      title: l("Projetos residenciais em Paracuru.", "Residential projects in Paracuru."),
      intro: l(
        "Este site apresenta uma visão institucional dos empreendimentos da P.U. Construtora. Informações comerciais são tratadas nos canais próprios de cada projeto.",
        "This website presents an institutional overview of P.U. Construtora developments. Commercial information is handled through each project's dedicated channels."
      ),
      sections: [
        {
          title: l("Escopo institucional", "Institutional scope"),
          body: l(
            "Sem disponibilidade, preços, reservas ou inventário comercial nesta página institucional.",
            "No availability, pricing, reservations, or sales inventory appears on this corporate page."
          )
        }
      ]
    },
    {
      pageKey: "about",
      seo: {
        ptBR: {
          title: "Sobre | P.U. Construtora",
          description: "Conheça a visão e o método da P.U. Construtora."
        },
        en: {
          title: "About | P.U. Construtora",
          description: "Learn about P.U. Construtora's vision and operating method."
        }
      },
      eyebrow: l("Sobre", "About"),
      title: l(
        "Construtora com atuação local e foco em habitação acessível em Paracuru.",
        "A developer with local operations and a clear focus on affordable housing in Paracuru."
      ),
      intro: l(
        "A P.U. Construtora concentra sua atuação em Paracuru, acompanhando de perto obra, fornecedores e produto para desenvolver moradia acessível com padrão superior ao praticado localmente na mesma faixa de preço.",
        "P.U. Construtora concentrates its operations in Paracuru, staying close to construction, suppliers, and product decisions to deliver affordable housing with stronger quality and layout choices at local price points."
      ),
      sections: [
        {
          title: l("Paracuru como base", "Paracuru as a base"),
          body: l(
            "Paracuru é a base da operação. Atuar em um único município permite acompanhar terreno, obra, fornecedores e a realidade do comprador com mais proximidade.",
            "Paracuru is the company's operating base. Focusing on one municipality allows closer oversight of land, construction, suppliers, and buyer reality."
          )
        },
        {
          title: l("Produto pensado para o dia a dia", "Product designed for daily use"),
          body: l(
            "Os empreendimentos priorizam planta funcional, melhor circulação, ventilação e acabamento acima do padrão local para a mesma faixa de preço.",
            "Projects prioritize practical layouts, better circulation, ventilation, and finishes above the local baseline for the same price range."
          )
        },
        {
          title: l("Crescimento com continuidade", "Growth with continuity"),
          body: l(
            "O DunaMar funciona como referência de entrega e aprendizado operacional. O DunaMar 2 reaproveita essa base e amplia a atuação da empresa no mesmo mercado.",
            "DunaMar serves as the company's first delivery and operating benchmark. DunaMar 2 builds on that base and expands the company's presence in the same market."
          )
        }
      ],
      primaryCtaLabel: l("Ver projetos", "View projects"),
      primaryCtaRouteKey: "projects"
    },
    {
      pageKey: "investors",
      seo: {
        ptBR: {
          title: "Investidores | P.U. Construtora",
          description: "Informações institucionais para investidores nacionais e internacionais."
        },
        en: {
          title: "Investors | P.U. Construtora",
          description: "Institutional information for domestic and international investors."
        }
      },
      eyebrow: l("Investidores", "Investors"),
      title: l(
        "Habitação acessível em Paracuru, com execução próxima e produto repetível.",
        "Affordable housing in Paracuru, with close execution and a repeatable product model."
      ),
      intro: l(
        "A empresa atua em habitação acessível em Paracuru, com foco em empreendimentos alinhados ao Minha Casa Minha Vida, acompanhamento próximo de obra e dois projetos já em curso no mesmo município.",
        "The company operates in affordable housing in Paracuru, focused on developments aligned with Minha Casa Minha Vida, close site oversight, and two projects already underway in the same municipality."
      ),
      sections: [],
      primaryCtaLabel: l("Solicitar contato", "Request contact"),
      primaryCtaRouteKey: "contact",
      disclaimer: l(
        "Conteúdo institucional. Não constitui oferta pública, recomendação financeira, convite à subscrição ou promessa de retorno.",
        "Institutional content. It does not constitute a public offering, financial recommendation, an invitation to subscribe, or a promise of returns."
      )
    },
    {
      pageKey: "team",
      seo: {
        ptBR: {
          title: "Equipe | P.U. Construtora",
          description: "Estrutura de equipe da P.U. Construtora."
        },
        en: {
          title: "Team | P.U. Construtora",
          description: "P.U. Construtora team structure."
        }
      },
      eyebrow: l("Equipe", "Team"),
      title: l("Operação enxuta, presença próxima e decisão disciplinada.", "Lean operation with disciplined decisions."),
      intro: l(
        "A estrutura da empresa integra gestão financeira, acompanhamento de obra e relacionamento institucional, mantendo decisão rápida e presença local no dia a dia.",
        "The company structure integrates financial management, site oversight, and institutional relationships, keeping decisions fast and operations local."
      ),
      sections: [
        {
          title: l("Estrutura operacional", "Operating structure"),
          body: l(
            "Gestão financeira, execução local e relacionamento com parceiros funcionam de forma integrada para manter controle de obra, produto e comunicação.",
            "Financial management, local execution, and partner relationships work together to maintain control over construction, product, and communication."
          )
        }
      ],
      primaryCtaLabel: l("Contato institucional", "Corporate contact"),
      primaryCtaRouteKey: "contact"
    },
    {
      pageKey: "contact",
      seo: {
        ptBR: {
          title: "Contato | P.U. Construtora",
          description: "Canais institucionais de contato da P.U. Construtora."
        },
        en: {
          title: "Contact | P.U. Construtora",
          description: "Corporate contact channels for P.U. Construtora."
        }
      },
      eyebrow: l("Contato", "Contact"),
      title: l("Escolha o canal correto para cada assunto.", "Choose the correct path for each inquiry."),
      intro: l(
        "Os canais abaixo organizam atendimento institucional, oportunidades de parceria e contatos ligados aos empreendimentos. Demandas comerciais seguem para o canal do projeto correspondente.",
        "The channels below organize institutional contact, partnership opportunities, and inquiries related to the developments. Commercial matters should go to the relevant project channel."
      ),
      sections: []
    },
    {
      pageKey: "legal",
      seo: {
        ptBR: {
          title: "Legal | P.U. Construtora",
          description: "Avisos legais e privacidade do site institucional."
        },
        en: {
          title: "Legal | P.U. Construtora",
          description: "Legal notices and privacy for the corporate website."
        }
      },
      eyebrow: l("Legal", "Legal"),
      title: l("Privacidade, LGPD e avisos institucionais.", "Privacy, LGPD, and corporate notices."),
      intro: l(
        "Esta página reúne os avisos de privacidade, uso de dados e limites de publicação do site institucional.",
        "This page contains the site's privacy notices, data-use terms, and publication limits."
      ),
      sections: []
    }
  ],
  homeSections: [
    {
      id: "manifesto",
      sectionKey: "manifesto",
      eyebrow: l("Como construímos", "How we build"),
      title: l(
        "Planejamento técnico para obra previsível.",
        "Technical planning for predictable execution."
      ),
      body: l(
        "Decisão técnica, coordenação local e leitura realista de custos para encurtar resposta e elevar a qualidade percebida pelo morador.",
        "Technical decisions, local coordination, and realistic cost control to shorten response time and raise the quality residents actually perceive."
      ),
      ctaLabel: l("Sobre a empresa", "About the company"),
      ctaRouteKey: "about",
      order: 0
    },
    {
      id: "execution",
      sectionKey: "execution",
      eyebrow: l("Execução", "Execution"),
      title: l(
        "Obra, fornecedores e decisões no mesmo ritmo.",
        "Construction, suppliers, and decisions kept in one operating rhythm."
      ),
      body: l(
        "A presença próxima no canteiro encurta decisões, melhora acompanhamento e ajuda a manter consistência entre projeto, execução e entrega.",
        "Close presence on site shortens decisions, improves oversight, and helps keep consistency between design, execution, and delivery."
      ),
      order: 1
    },
    {
      id: "market",
      sectionKey: "market",
      eyebrow: l("Mercado", "Market"),
      title: l(
        "Paracuru como foco operacional da empresa.",
        "Paracuru as the company's operating focus."
      ),
      body: l(
        "Concentrar atuação em Paracuru permite acompanhar terreno, obra, fornecedores e demanda local com menos dispersão e mais controle.",
        "Concentrating on Paracuru allows the company to stay close to land, construction, suppliers, and local demand with less dispersion and more control."
      ),
      ctaLabel: l("Investidores", "Investors"),
      ctaRouteKey: "investors",
      order: 2
    },
    {
      id: "team-lead",
      sectionKey: "teamLead",
      eyebrow: l("Equipe", "Team"),
      title: l("Capital, obra e relacionamento no mesmo compasso.", "Capital, execution, and relationships in one rhythm."),
      body: l(
        "A operação combina gestão financeira, obra acompanhada de perto e comunicação direta com compradores, parceiros e investidores.",
        "Operations combine financial management, close construction oversight, and direct communication with buyers, partners, and investors."
      ),
      ctaLabel: l("Conhecer equipe", "Meet the team"),
      ctaRouteKey: "team",
      order: 3
    },
    {
      id: "contact-lead",
      sectionKey: "contactLead",
      eyebrow: l("Contato", "Contact"),
      title: l("Canal correto, resposta mais eficiente.", "Correct path, faster response."),
      body: l(
        "Direcionamento claro para investidores, parcerias e contatos institucionais.",
        "Clear routing for investors, partnerships, and corporate inquiries."
      ),
      ctaLabel: l("Falar com a P.U.", "Contact P.U."),
      ctaRouteKey: "contact",
      order: 4
    }
  ],
  projects: [
    {
      id: "dunamar",
      name: l("DunaMar", "DunaMar"),
      location: l("Paracuru, Ceará", "Paracuru, Ceará"),
      projectType: l("Apartamentos", "Apartments"),
      unitCount: "14",
      stage: l("Obra em fase final", "Final construction stage"),
      shortDescription: l(
        "Primeiro empreendimento da P.U. Construtora em Paracuru, com 14 apartamentos e obra em fase final. É a referência inicial de entrega e padrão construtivo da empresa.",
        "The company's first project in Paracuru, with 14 apartments and construction near completion. It serves as P.U. Construtora's first delivery benchmark and quality reference."
      ),
      externalUrl: "https://dunamar.vercel.app",
      externalLabel: l("Abrir site do projeto", "Open project website"),
      image: {
        fallbackSrc: "/projects/dunamar/dunamar-render-front-elevation.jpg",
        alt: l(
          "Imagem do empreendimento DunaMar em Paracuru.",
          "Image of the DunaMar development in Paracuru."
        )
      },
      gallery: [
        {
          fallbackSrc: "/projects/dunamar/dunamar-render-front-elevation.jpg",
          alt: l(
            "Imagem principal do empreendimento DunaMar em Paracuru.",
            "Main image of the DunaMar development in Paracuru."
          )
        },
        {
          fallbackSrc: "/projects/dunamar/dunamar-construction-aerial.jpg",
          alt: l(
            "Vista externa complementar do empreendimento DunaMar.",
            "Secondary exterior view of the DunaMar development."
          )
        },
        {
          fallbackSrc: "/projects/dunamar/dunamar-render-courtyard.jpg",
          alt: l(
            "Ambiente de convivência do empreendimento DunaMar.",
            "Amenity space at the DunaMar development."
          )
        }
      ],
      order: 0
    },
    {
      id: "mcmv2",
      name: l("DunaMar 2", "DunaMar 2"),
      location: l("Paracuru, Ceará", "Paracuru, Ceará"),
      projectType: l("2 blocos de apartamentos e 2 casas", "2 apartment buildings and 2 houses"),
      unitCount: "22",
      stage: l("Obra em fase inicial", "Early construction stage"),
      shortDescription: l(
        "Segundo empreendimento da companhia em Paracuru, com 22 unidades no total entre 2 blocos de apartamentos e 2 casas, atualmente em fase inicial de obra.",
        "The company's second project in Paracuru, with 22 total units across 2 apartment buildings and 2 houses, now in early construction."
      ),
      externalLabel: l("Ver panorama do empreendimento", "View development overview"),
      image: {
        fallbackSrc: "/projects/dunamar-2/dunamar-2-site-aerial-overview.jpg",
        alt: l(
          "Vista aérea do empreendimento DunaMar 2 em fase inicial de obra.",
          "Aerial view of DunaMar 2 in early construction."
        )
      },
      gallery: [
        {
          fallbackSrc: "/projects/dunamar-2/dunamar-2-site-aerial-overview.jpg",
          alt: l(
            "Vista aérea do empreendimento DunaMar 2 em fase inicial de obra.",
            "Aerial view of DunaMar 2 in early construction."
          )
        },
        {
          fallbackSrc: "/projects/dunamar-2/dunamar-2-site-facade-progress.jpg",
          alt: l(
            "Registro de obra do empreendimento DunaMar 2.",
            "Construction progress image of DunaMar 2."
          )
        },
        {
          fallbackSrc: "/projects/dunamar-2/dunamar-2-neighborhood-context.jpg",
          alt: l(
            "Paisagem de Paracuru representando o contexto territorial do empreendimento.",
            "Paracuru landscape representing the territorial context of the development."
          )
        }
      ],
      order: 1
    }
  ],
  investorSections: [
    {
      id: "investor-market",
      sectionKey: "marketThesis",
      title: l("Contexto de mercado", "Market context"),
      body: l(
        "O foco está na habitação acessível em Paracuru, incluindo projetos enquadrados no Minha Casa Minha Vida, programa brasileiro voltado à compra da casa própria por famílias de menor renda.",
        "The focus is affordable housing in Paracuru, including projects within Minha Casa Minha Vida, Brazil's homeownership program for lower-income families."
      ),
      order: 0
    },
    {
      id: "investor-pipeline",
      sectionKey: "pipeline",
      title: l("Projetos em andamento", "Active projects"),
      body: l(
        "O DunaMar, com 14 apartamentos, está em fase final de obra. O DunaMar 2 já começou no mesmo município, com 22 unidades entre apartamentos e casas.",
        "DunaMar, with 14 apartments, is near completion. DunaMar 2 has already started in the same municipality, with 22 total units across apartments and houses."
      ),
      order: 1
    },
    {
      id: "investor-governance",
      sectionKey: "governance",
      title: l("Informações institucionais", "Institutional information"),
      body: l(
        "O site público apresenta apenas visão institucional. Informações financeiras, estrutura societária e materiais de análise são compartilhados em contexto privado e documental.",
        "The public website presents only an institutional overview. Financial information, ownership structure, and diligence materials are shared in private documented contexts."
      ),
      order: 2
    },
    {
      id: "investor-disclaimer",
      sectionKey: "disclaimer",
      title: l("Aviso", "Notice"),
      body: l(
        "Material institucional. Não configura oferta pública, recomendação financeira, convite à subscrição ou promessa de retorno.",
        "Institutional material. It is not a public offering, financial recommendation, invitation to subscribe, or promise of returns."
      ),
      order: 3
    }
  ],
  teamEntries: [
    {
      id: "capital",
      name: l("Gestão financeira e investimentos", "Finance and investment management"),
      role: l("Gestão financeira, análise e planejamento", "Financial management, analysis, and planning"),
      bio: l(
        "Conduz estruturação financeira, controle de custos e análise de viabilidade para cada etapa dos empreendimentos.",
        "Leads financial structuring, cost control, and feasibility analysis for each stage of the developments."
      ),
      image: {
        fallbackSrc: "/places/paracuru-lagoon.jpg",
        alt: l(
          "Lagoa em Paracuru representando leitura territorial e visão de longo prazo.",
          "Lagoon in Paracuru representing territorial reading and long-term vision."
        )
      },
      order: 0
    },
    {
      id: "execution",
      name: l("Execução local", "Local execution"),
      role: l("Obra, fornecedores e operação de campo", "Construction, suppliers, and field operations"),
      bio: l(
        "Coordena obra, cronograma, fornecedores e interface com equipes técnicas a partir da operação local em Paracuru.",
        "Coordinates construction, schedule, suppliers, and the interface with technical teams through the company's local operation in Paracuru."
      ),
      image: {
        fallbackSrc: "/projects/dunamar-2/dunamar-2-site-facade-progress.jpg",
        alt: l(
          "Registro de obra em Paracuru representando acompanhamento local de execução.",
          "Construction view in Paracuru representing close local site oversight."
        )
      },
      order: 1
    },
    {
      id: "relationships",
      name: l("Relacionamento e atendimento", "Relationships and client contact"),
      role: l("Compradores, parceiros e comunicação", "Buyers, partners, and communication"),
      bio: l(
        "Organiza a relação com compradores, parceiros e investidores por meio de comunicação objetiva e canais bem definidos.",
        "Organizes relationships with buyers, partners, and investors through objective communication and clearly defined channels."
      ),
      image: {
        fallbackSrc: "/projects/dunamar/dunamar-render-courtyard.jpg",
        alt: l(
          "Ambiente do DunaMar representando produto, atendimento e relacionamento.",
          "DunaMar amenity image representing product quality and client relationships."
        )
      },
      order: 2
    }
  ],
  contactRoutes: [
    {
      id: "contact-buyers",
      title: l("Projetos e compradores", "Projects and buyers"),
      body: l(
        "Para informações comerciais, andamento de atendimento e detalhes do DunaMar, utilize o site dedicado do empreendimento. O site institucional não centraliza disponibilidade ou condições de venda.",
        "For commercial information, buyer support, and DunaMar project details, use the dedicated project website. The corporate website does not centralize availability or sales terms."
      ),
      ctaLabel: l("Abrir DunaMar", "Open DunaMar"),
      href: "https://dunamar.vercel.app",
      order: 0
    },
    {
      id: "contact-investors",
      title: l("Investidores", "Investors"),
      body: l(
        "Canal dedicado para conversas sobre atuação da empresa em Paracuru, projetos alinhados ao Minha Casa Minha Vida, estágio dos empreendimentos e materiais institucionais para análise privada.",
        "Dedicated channel for conversations about the company's Paracuru operation, Minha Casa Minha Vida-aligned projects, development stages, and institutional materials for private review."
      ),
      ctaLabel: l("Enviar email", "Send email"),
      href: "mailto:invest@construtorapu.com.br",
      order: 1
    },
    {
      id: "contact-partnerships",
      title: l("Parcerias", "Partnerships"),
      body: l(
        "Canal para terrenos, fornecedores, corretores e parcerias operacionais conectadas à atuação da empresa em Paracuru.",
        "Channel for land opportunities, suppliers, brokers, and operating partnerships connected to the company's work in Paracuru."
      ),
      ctaLabel: l("Enviar email", "Send email"),
      href: "mailto:contato@construtorapu.com.br",
      order: 2
    }
  ],
  legalBlocks: [
    {
      id: "legal-data",
      blockKey: "dados-pessoais",
      title: l("Dados pessoais", "Personal data"),
      body: l(
        "Dados enviados por formulários ou email são utilizados apenas para responder ao assunto solicitado e direcionar o contato ao responsável correto.",
        "Data submitted through forms or email is used only to respond to the requested matter and route the contact to the appropriate person."
      ),
      order: 0
    },
    {
      id: "legal-project",
      blockKey: "dados-de-projeto",
      title: l("Informações de projeto", "Project information"),
      body: l(
        "O site institucional apresenta apenas panorama geral dos empreendimentos. Dados de venda, disponibilidade e condições comerciais pertencem aos canais específicos.",
        "The corporate website presents only a general overview of developments. Sales data, availability, and commercial terms belong to dedicated channels."
      ),
      order: 1
    },
    {
      id: "legal-investor",
      blockKey: "aviso-investidor",
      title: l("Aviso para investidores", "Investor notice"),
      body: l(
        "Conteúdo institucional não constitui oferta pública de valores mobiliários, recomendação financeira, convite à subscrição ou promessa de retorno.",
        "Institutional content does not constitute a public securities offering, financial advice, an invitation to subscribe, or a promise of returns."
      ),
      order: 2
    }
  ]
};
