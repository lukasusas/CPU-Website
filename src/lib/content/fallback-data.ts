import type { SiteDataset } from "./types";

const l = (ptBR: string, en?: string) => ({ ptBR, en: en ?? ptBR });

export const fallbackDataset: SiteDataset = {
  settings: {
    siteName: "Construtora P.U.",
    legalName: "Construtora P.U. Ltda",
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
      "Este site apresenta informações institucionais da Construtora P.U. Condições comerciais, disponibilidade e atendimento de vendas são tratados nos canais próprios de cada empreendimento.",
      "This website presents institutional information about Construtora P.U. Commercial terms, availability, and sales support are handled through each development's dedicated channels."
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
          title: "Construtora P.U. | Habitação acessível em Paracuru",
          description:
            "Página institucional da Construtora P.U.: projetos residenciais, execução local e visão de longo prazo em Paracuru, Ceará."
        },
        en: {
          title: "Construtora P.U. | Accessible housing in Paracuru",
          description:
            "Corporate website of Construtora P.U.: residential projects, local execution, and long-term vision in Paracuru, Ceará."
        }
      },
      eyebrow: l("Paracuru, Ceará, Brasil", "Paracuru, Ceará, Brazil"),
      title: l(
        "Habitação acessível com execução local em Paracuru, Ceará.",
        "Accessible housing with local execution in Paracuru, Ceará."
      ),
      intro: l(
        "A Construtora P.U. atua em Paracuru com foco em habitação acessível e projetos residenciais selecionados, incluindo empreendimentos alinhados ao Minha Casa Minha Vida, com planejamento técnico e acompanhamento próximo de obra.",
        "Construtora P.U. develops affordable housing and selected residential projects in Paracuru, including developments aligned with Minha Casa Minha Vida, with technical planning and close day-to-day site oversight."
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
          title: "Projetos | Construtora P.U.",
          description: "Portfólio institucional dos empreendimentos da Construtora P.U. em Paracuru, Ceará."
        },
        en: {
          title: "Projects | Construtora P.U.",
          description: "Institutional portfolio of Construtora P.U. developments in Paracuru, Ceará."
        }
      },
      eyebrow: l("Portfólio", "Portfolio"),
      title: l("Projetos residenciais em Paracuru.", "Residential projects in Paracuru."),
      intro: l(
        "Este site apresenta uma visão institucional do portfólio da Construtora P.U., reunindo habitação acessível e projetos residenciais selecionados em Paracuru. Informações comerciais seguem os canais próprios de cada projeto.",
        "This website presents an institutional overview of Construtora P.U.'s portfolio, combining affordable housing and selected residential projects in Paracuru. Commercial information remains with each project's dedicated channels."
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
          title: "Sobre | Construtora P.U.",
          description: "Conheça a visão e o método da Construtora P.U."
        },
        en: {
          title: "About | Construtora P.U.",
          description: "Learn about Construtora P.U.'s vision and operating method."
        }
      },
      eyebrow: l("Sobre", "About"),
      title: l(
        "Construtora com atuação local e foco em habitação acessível em Paracuru.",
        "A developer with local operations and a clear focus on affordable housing in Paracuru."
      ),
      intro: l(
        "A Construtora P.U. concentra sua atuação em Paracuru, acompanhando de perto obra, fornecedores e produto para desenvolver habitação acessível com padrão superior ao praticado localmente na mesma faixa de preço, além de assumir projetos residenciais privados quando a execução pede coordenação próxima.",
        "Construtora P.U. concentrates its operations in Paracuru, staying close to construction, suppliers, and product decisions to deliver affordable housing with stronger quality and layout choices at local price points, while also taking on selected private residences when execution benefits from close coordination."
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
            "O DunaMar consolida o padrão de entrega e aprendizado operacional da empresa. O DunaMar 2 aplica essa base em uma obra de maior escala, com o Bloco 1 próximo da conclusão, o Bloco 2 em execução e as casas previstas para a terceira fase. A residência privada à beira da lagoa demonstra a mesma capacidade de coordenação em um produto mais personalizado.",
            "DunaMar consolidates the company's delivery standard and operating learning. DunaMar 2 applies that base at a larger scale, with Block 1 nearing completion, Block 2 under construction, and the houses planned for the third phase. The lakeside private residence demonstrates the same coordination capability in a more customized product."
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
          title: "Investidores | Construtora P.U.",
          description: "Informações institucionais para investidores nacionais e internacionais."
        },
        en: {
          title: "Investors | Construtora P.U.",
          description: "Institutional information for domestic and international investors."
        }
      },
      eyebrow: l("Investidores", "Investors"),
      title: l(
        "Habitação acessível em Paracuru, com execução próxima e produto repetível.",
        "Affordable housing in Paracuru, with close execution and a repeatable product model."
      ),
      intro: l(
        "A empresa atua em Paracuru com base em habitação acessível alinhada ao Minha Casa Minha Vida e, em paralelo, executa projetos residenciais selecionados que se beneficiam do mesmo backbone local de obra, fornecedores e acompanhamento técnico.",
        "The company operates in Paracuru with affordable housing aligned to Minha Casa Minha Vida as its base and, in parallel, delivers selected residential projects that benefit from the same local backbone of construction, suppliers, and technical oversight."
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
          title: "Equipe | Construtora P.U.",
          description: "Estrutura de equipe da Construtora P.U."
        },
        en: {
          title: "Team | Construtora P.U.",
          description: "Construtora P.U. team structure."
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
          title: "Contato | Construtora P.U.",
          description: "Canais institucionais de contato da Construtora P.U."
        },
        en: {
          title: "Contact | Construtora P.U.",
          description: "Corporate contact channels for Construtora P.U."
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
          title: "Legal | Construtora P.U.",
          description: "Avisos legais e privacidade do site institucional."
        },
        en: {
          title: "Legal | Construtora P.U.",
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
      stage: l("Acabamentos finais e certificação", "Final finishes and certification"),
      shortDescription: l(
        "Primeiro empreendimento da Construtora P.U. em Paracuru, com 14 apartamentos. Está em acabamentos finais e certificação, consolidando a referência inicial de entrega e padrão construtivo da empresa.",
        "The company's first project in Paracuru, with 14 apartments. It is in final finishes and certification, consolidating Construtora P.U.'s first delivery and quality benchmark."
      ),
      externalUrl: "https://dunamar.construtorapu.com.br",
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
      stage: l("Obra em andamento", "Active construction"),
      shortDescription: l(
        "Segundo empreendimento da companhia em Paracuru, com 22 unidades entre 2 blocos de apartamentos e 2 casas. O Bloco 1 está próximo da conclusão, o Bloco 2 já está em construção e as casas compõem a terceira fase planejada.",
        "The company's second project in Paracuru, with 22 units across 2 apartment buildings and 2 houses. Block 1 is nearing completion, Block 2 is already under construction, and the houses form the planned third phase."
      ),
      externalUrl: "https://dunamar2.construtorapu.com.br/",
      externalLabel: l("Abrir site do projeto", "Open project website"),
      image: {
        fallbackSrc: "/projects/dunamar-2/dunamar-2-site-aerial-overview.jpg",
        alt: l(
          "Vista aérea do empreendimento DunaMar 2 em obra.",
          "Aerial view of DunaMar 2 under construction."
        )
      },
      gallery: [
        {
          fallbackSrc: "/projects/dunamar-2/dunamar-2-site-aerial-overview.jpg",
          alt: l(
            "Vista aérea do empreendimento DunaMar 2 em obra.",
            "Aerial view of DunaMar 2 under construction."
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
    },
    {
      id: "private-house",
      name: l("Residência Privada na Lagoa", "Lakeside Private Residence"),
      location: l("Paracuru, Ceará", "Paracuru, Ceará"),
      projectType: l("Residência privativa de alto padrão", "High-end private residence"),
      unitCount: "1",
      stage: l("Obra em andamento", "Construction in progress"),
      shortDescription: l(
        "Residência privada em Paracuru para cliente europeu, com cerca de 400 m² de área coberta e implantação à beira da lagoa. O projeto inclui coordenação interna de interiores, mobiliário e materiais, com entrega integral, incluindo documentação, prevista em menos de um ano.",
        "Private residence in Paracuru for a European client, with roughly 400 square meters of covered area on a lakeside site. The project includes in-house interior, furniture, and material coordination, with full delivery, including documentation, planned in under one year."
      ),
      externalLabel: l("Solicitar panorama do projeto", "Request project overview"),
      image: {
        fallbackSrc: "/projects/private-house/private-house-main-residence-view.jpg",
        alt: l(
          "Vista principal da residência privada em construção em Paracuru.",
          "Main view of the private residence under construction in Paracuru."
        )
      },
      gallery: [
        {
          fallbackSrc: "/projects/private-house/private-house-main-residence-view.jpg",
          alt: l(
            "Vista principal da residência privada em construção em Paracuru.",
            "Main view of the private residence under construction in Paracuru."
          )
        },
        {
          fallbackSrc: "/projects/private-house/private-house-lakeside-site-overview.jpg",
          alt: l(
            "Vista geral do terreno à beira da lagoa onde a residência privada está sendo construída.",
            "Wide view of the lakeside site where the private residence is being built."
          )
        },
        {
          fallbackSrc: "/projects/private-house/private-house-foundation-waterfront.jpg",
          alt: l(
            "Etapa inicial de fundação da residência privada junto à água.",
            "Early foundation stage of the private residence next to the water."
          )
        },
        {
          fallbackSrc: "/projects/private-house/private-house-masonry-progress.jpg",
          alt: l(
            "Avanço da alvenaria da residência privada em Paracuru.",
            "Masonry progress of the private residence in Paracuru."
          )
        },
        {
          fallbackSrc: "/projects/private-house/private-house-covered-terrace-structure.jpg",
          alt: l(
            "Estrutura coberta da varanda da residência privada.",
            "Covered terrace structure of the private residence."
          )
        }
      ],
      order: 2
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
        "O DunaMar, com 14 apartamentos, está em acabamentos finais e certificação. No DunaMar 2, o Bloco 1 está próximo da conclusão, o Bloco 2 já está em construção e as duas casas permanecem previstas para a terceira fase. Em paralelo, a empresa conduz uma residência privada de alto padrão à beira da lagoa, com interiores, mobiliário e materiais coordenados internamente.",
        "DunaMar, with 14 apartments, is in final finishes and certification. At DunaMar 2, Block 1 is nearing completion, Block 2 is already under construction, and the two houses remain planned for the third phase. In parallel, the company is delivering a high-end lakeside private residence with interiors, furniture, and materials coordinated in-house."
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
        "Para informações comerciais, andamento de atendimento e detalhes do DunaMar ou DunaMar 2, utilize o site dedicado de cada empreendimento. O site institucional não centraliza disponibilidade ou condições de venda.",
        "For commercial information, buyer support, and details about DunaMar or DunaMar 2, use each development's dedicated website. The corporate website does not centralize availability or sales terms."
      ),
      ctaLabel: l("Ver projetos", "View projects"),
      href: "/projetos",
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
