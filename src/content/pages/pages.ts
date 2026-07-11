import type { PageContent, PageSection } from "@/content/types";

export type HomeContent = {
  eyebrow: string;
  headline: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  atlasLabel: string;
  projectsTitle: string;
  projectsIntro: string;
  philosophy: {
    eyebrow: string;
    title: string;
    body: string;
    principles: Array<{ title: string; body: string }>;
  };
  market: {
    eyebrow: string;
    title: string;
    body: string;
    points: Array<{ label: string; value: string }>;
  };
  investorGateway: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  teamPreview: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  contact: {
    title: string;
    body: string;
    cta: string;
  };
};

export type StandardPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: PageSection[];
  cta?: {
    label: string;
    hrefKey: "projects" | "investors" | "contact";
  };
};

export type InvestorsContent = StandardPageContent & {
  disclaimer: string;
  inquiryCta: string;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  intro: string;
  routes: Array<{
    title: string;
    body: string;
    cta: string;
    href: string;
  }>;
  form: {
    title: string;
    body: string;
    nameLabel: string;
    emailLabel: string;
    typeLabel: string;
    messageLabel: string;
    options: string[];
    submitLabel: string;
    successMessage: string;
  };
};

export const homePage: PageContent<HomeContent> = {
  id: "home",
  route: "home",
  seo: {
    ptBR: {
      title: "Construtora P.U. | Habitação acessível em Paracuru",
      description:
        "Site institucional da P.U. Construtora, desenvolvedora de projetos residenciais acessíveis em Paracuru, Ceará."
    },
    en: {
      title: "Construtora P.U. | Accessible housing in Paracuru",
      description:
        "Corporate website for P.U. Construtora, a residential developer focused on accessible housing in Paracuru, Ceará."
    }
  },
  translations: {
    ptBR: {
      eyebrow: "Paracuru, Ceará, Brasil",
      headline: "Habitação acessível com execução local em Paracuru, Ceará.",
      lead:
        "A P.U. Construtora desenvolve projetos residenciais práticos, bem planejados e construídos para entregar valor real em mercados locais.",
      primaryCta: "Ver projetos",
      secondaryCta: "Investidores",
      atlasLabel: "Atlas de desenvolvimento",
      projectsTitle: "Projetos em foco",
      projectsIntro:
        "Esta página mostra o portfólio institucional. Informações comerciais detalhadas ficam nos sites próprios de cada projeto.",
      philosophy: {
        eyebrow: "Como construímos",
        title: "Mais cuidado no desenho, mais disciplina na execução.",
        body:
          "A estratégia é simples: escolher mercados locais com demanda real, controlar o processo de obra e entregar unidades com melhores decisões de layout, acabamento e uso cotidiano.",
        principles: [
          {
            title: "Produto acessível, não genérico",
            body: "Projetos dentro de faixas viáveis para o comprador local, com atenção a proporções, circulação e uso real dos ambientes."
          },
          {
            title: "Execução próxima da obra",
            body: "Acompanhamento local para reduzir ruído, tomar decisões rápidas e manter a qualidade onde ela aparece no dia a dia."
          },
          {
            title: "Portfólio repetível",
            body: "Cada projeto melhora o processo do próximo: dados, fornecedores, custos, comunicação e estrutura de vendas."
          }
        ]
      },
      market: {
        eyebrow: "Mercado",
        title: "Ceará costeiro, demanda habitacional e programa MCMV.",
        body:
          "Paracuru combina crescimento local, interesse costeiro e demanda por moradia bem resolvida. A P.U. atua com foco específico nesse contexto.",
        points: [
          { label: "Foco geográfico", value: "Paracuru, Ceará" },
          { label: "Produto", value: "Apartamentos e casas compactas" },
          { label: "Programa", value: "Minha Casa Minha Vida" }
        ]
      },
      investorGateway: {
        eyebrow: "Investidores",
        title: "Habitação acessível em Paracuru, com execução próxima.",
        body:
          "A página de investidores apresenta contexto de mercado, atuação em Paracuru, projetos alinhados ao Minha Casa Minha Vida e aviso institucional sem promessas públicas de retorno.",
        cta: "Ver informações para investidores"
      },
      teamPreview: {
        eyebrow: "Equipe",
        title: "Capital, obra e relacionamento trabalhando no mesmo eixo.",
        body:
          "A estrutura combina gestão financeira, presença local de obra e comunicação clara com compradores, parceiros e investidores.",
        cta: "Conhecer equipe"
      },
      contact: {
        title: "Fale com a P.U. Construtora",
        body:
          "Escolha o caminho certo para contato institucional, investidores, parcerias ou informações sobre projetos.",
        cta: "Ir para contato"
      }
    },
    en: {
      eyebrow: "Paracuru, Ceará, Brazil",
      headline: "Accessible housing with local execution in Paracuru, Ceará.",
      lead:
        "P.U. Construtora develops practical, well-planned residential projects built to create real value in local markets.",
      primaryCta: "View projects",
      secondaryCta: "Investors",
      atlasLabel: "Development atlas",
      projectsTitle: "Featured projects",
      projectsIntro:
        "This page shows the corporate portfolio. Detailed commercial information belongs on each project's dedicated website.",
      philosophy: {
        eyebrow: "How we build",
        title: "More care in planning, more discipline in execution.",
        body:
          "The strategy is simple: choose local markets with real demand, control construction execution, and deliver homes with better layout, finish, and everyday-use decisions.",
        principles: [
          {
            title: "Accessible, not generic",
            body: "Projects stay within viable local buyer ranges while improving proportions, circulation, and practical use of space."
          },
          {
            title: "Close execution",
            body: "Local construction presence reduces noise, supports faster decisions, and keeps quality visible in daily details."
          },
          {
            title: "Repeatable portfolio",
            body: "Every project improves the next one: data, suppliers, costs, communication, and sales structure."
          }
        ]
      },
      market: {
        eyebrow: "Market",
        title: "Coastal Ceará, housing demand, and the MCMV program.",
        body:
          "Paracuru combines local growth, coastal interest, and demand for well-resolved housing. P.U. operates with a focused view of this context.",
        points: [
          { label: "Geographic focus", value: "Paracuru, Ceará" },
          { label: "Product", value: "Apartments and compact houses" },
          { label: "Program", value: "Minha Casa Minha Vida" }
        ]
      },
      investorGateway: {
        eyebrow: "Investors",
        title: "Affordable housing in Paracuru, with close execution.",
        body:
          "The investor page presents market context, Paracuru operations, Minha Casa Minha Vida-aligned projects, and an institutional notice without public return promises.",
        cta: "View investor information"
      },
      teamPreview: {
        eyebrow: "Team",
        title: "Capital, construction, and relationships aligned.",
        body:
          "The operating structure combines financial management, local site presence, and clear communication with buyers, partners, and investors.",
        cta: "Meet the team"
      },
      contact: {
        title: "Contact P.U. Construtora",
        body:
          "Choose the right path for corporate contact, investors, partnerships, or project information.",
        cta: "Go to contact"
      }
    }
  }
};

export const projectsPage: PageContent<StandardPageContent> = {
  id: "projects",
  route: "projects",
  seo: {
    ptBR: {
      title: "Projetos | Construtora P.U.",
      description:
        "Resumo institucional dos projetos da P.U. Construtora em Paracuru, Ceará."
    },
    en: {
      title: "Projects | Construtora P.U.",
      description:
        "Corporate summary of P.U. Construtora's projects in Paracuru, Ceará."
    }
  },
  translations: {
    ptBR: {
      eyebrow: "Portfólio",
      title: "Projetos residenciais em Paracuru.",
      intro:
        "Aqui ficam resumos institucionais do portfólio da P.U. Construtora, reunindo habitação acessível e projetos residenciais selecionados em Paracuru. Dados comerciais detalhados permanecem nos canais próprios de cada empreendimento.",
      sections: [
        {
          title: "DunaMar",
          body:
            "Projeto referência da P.U. Construtora, com 14 apartamentos em Paracuru, agora em acabamentos finais e certificação, e site próprio para informações comerciais."
        },
        {
          title: "DunaMar 2",
          body:
            "Segundo empreendimento da empresa em Paracuru, com 22 unidades entre apartamentos e casas. O Bloco 1 está próximo da conclusão, o Bloco 2 já está em construção e as casas integram a terceira fase planejada."
        },
        {
          title: "Residência Privada na Lagoa",
          body:
            "Residência privada de alto padrão em Paracuru, executada para cliente europeu com implantação à beira da lagoa, interiores, mobiliário e materiais coordenados internamente e entrega integral prevista em menos de um ano."
        }
      ]
    },
    en: {
      eyebrow: "Portfolio",
      title: "Residential projects in Paracuru.",
      intro:
        "This page keeps institutional summaries of P.U. Construtora's portfolio, combining affordable housing and selected residential projects in Paracuru. Detailed commercial information remains with each project's dedicated channels.",
      sections: [
        {
          title: "DunaMar",
          body:
            "P.U. Construtora's reference project, with 14 apartments in Paracuru, now in final finishes and certification, and its own website for commercial information."
        },
        {
          title: "DunaMar 2",
          body:
            "Second company project in Paracuru, with 22 units across apartments and houses. Block 1 is nearing completion, Block 2 is already under construction, and the houses form the planned third phase."
        },
        {
          title: "Lakeside Private Residence",
          body:
            "High-end private residence in Paracuru for a European client, built on a lakeside site with in-house interior, furniture, and material coordination and full delivery planned in under one year."
        }
      ]
    }
  }
};

export const aboutPage: PageContent<StandardPageContent> = {
  id: "about",
  route: "about",
  seo: {
    ptBR: {
      title: "Sobre | Construtora P.U.",
      description:
        "Conheça a visão da P.U. Construtora para desenvolvimento habitacional acessível em Paracuru."
    },
    en: {
      title: "About | Construtora P.U.",
      description:
        "Learn about P.U. Construtora's view of accessible housing development in Paracuru."
    }
  },
  translations: {
    ptBR: {
      eyebrow: "Sobre a empresa",
      title: "Uma construtora focada em moradia acessível bem resolvida.",
      intro:
        "A P.U. Construtora concentra sua atuação em Paracuru para desenvolver habitação acessível com acompanhamento próximo de obra, melhor leitura de custos e padrão acima do praticado localmente na mesma faixa de preço, além de assumir projetos residenciais privados quando a execução pede coordenação próxima.",
      sections: [
        {
          title: "Foco local",
          body:
            "O trabalho começa em Paracuru, Ceará, onde os projetos podem ser acompanhados de perto e ajustados à realidade do comprador local."
        },
        {
          title: "Qualidade visível",
          body:
            "A ambição não é parecer luxuosa. É construir melhor dentro de um preço acessível: layout, ventilação, circulação, acabamento e entrega."
        },
        {
          title: "Crescimento com continuidade",
          body:
            "O DunaMar consolida o padrão de entrega e aprendizado operacional da empresa. O DunaMar 2 aplica essa base em uma obra de maior escala, com o Bloco 1 próximo da conclusão, o Bloco 2 em execução e as casas previstas para a terceira fase. A residência privada à beira da lagoa demonstra a mesma capacidade de coordenação em um produto mais personalizado."
        }
      ],
      cta: { label: "Ver projetos", hrefKey: "projects" }
    },
    en: {
      eyebrow: "About the company",
      title: "A developer focused on well-resolved accessible housing.",
      intro:
        "P.U. Construtora exists to develop practical housing projects with quality above the local baseline and operations focused on markets the team understands closely.",
      sections: [
        {
          title: "Local focus",
          body:
            "The work starts in Paracuru, Ceará, where projects can be followed closely and adjusted to the reality of the local buyer."
        },
        {
          title: "Visible quality",
          body:
            "The goal is not to look luxurious. It is to build better within accessible price ranges: layout, ventilation, circulation, materiality, and delivery."
        },
        {
          title: "Long-term system",
          body:
            "DunaMar established the company’s delivery benchmark. DunaMar 2 applies that operating base at a larger scale, while the lakeside private residence demonstrates the same close coordination in a more customized product."
        }
      ],
      cta: { label: "View projects", hrefKey: "projects" }
    }
  }
};

export const investorsPage: PageContent<InvestorsContent> = {
  id: "investors",
  route: "investors",
  seo: {
    ptBR: {
      title: "Investidores | Construtora P.U.",
      description:
        "Informações institucionais para investidores sobre a atuação da P.U. Construtora em habitação acessível no Ceará."
    },
    en: {
      title: "Investors | Construtora P.U.",
      description:
        "Institutional investor information about P.U. Construtora's accessible housing work in Ceará."
    }
  },
  translations: {
    ptBR: {
      eyebrow: "Investidores",
      title: "Habitação acessível em Paracuru, com execução próxima e produto repetível.",
      intro:
        "A P.U. Construtora atua em Paracuru com base em habitação acessível alinhada ao Minha Casa Minha Vida e, em paralelo, executa projetos residenciais selecionados que se beneficiam do mesmo backbone local de obra, fornecedores e acompanhamento técnico.",
      sections: [
        {
          title: "Contexto de mercado",
          body:
            "O foco está na habitação acessível em Paracuru, incluindo projetos enquadrados no Minha Casa Minha Vida, programa brasileiro voltado à compra da casa própria por famílias de menor renda."
        },
        {
          title: "Projetos em andamento",
          body:
            "O DunaMar, com 14 apartamentos, está em acabamentos finais e certificação. No DunaMar 2, o Bloco 1 está próximo da conclusão, o Bloco 2 já está em construção e as duas casas permanecem previstas para a terceira fase. Em paralelo, a empresa conduz uma residência privada de alto padrão à beira da lagoa, com interiores, mobiliário e materiais coordenados internamente."
        },
        {
          title: "Informações institucionais",
          body:
            "O site público apresenta apenas visão institucional. Informações financeiras, estrutura societária e materiais de análise devem ser compartilhados em contexto privado e documental."
        }
      ],
      disclaimer:
        "Este conteúdo é institucional e não constitui oferta pública, recomendação financeira, convite à subscrição ou promessa de retorno. Informações financeiras detalhadas devem ser avaliadas em contexto privado e documental.",
      inquiryCta: "Solicitar contato de investidores"
    },
    en: {
      eyebrow: "Investors",
      title: "Affordable housing in Paracuru, with close execution and a repeatable product model.",
      intro:
        "P.U. Construtora operates in Paracuru with affordable housing aligned to Minha Casa Minha Vida as its base and, in parallel, delivers selected residential projects that benefit from the same local backbone of construction, suppliers, and technical oversight.",
      sections: [
        {
          title: "Market context",
          body:
            "The focus is affordable housing in Paracuru, including projects within Minha Casa Minha Vida, Brazil's subsidized homeownership program for lower-income families."
        },
        {
          title: "Active projects",
          body:
            "DunaMar, with 14 apartments, is in final finishes and certification. At DunaMar 2, Block 1 is nearing completion, Block 2 is already under construction, and the two houses remain planned for the third phase. In parallel, the company is delivering a high-end lakeside private residence with interiors, furniture, and materials coordinated in-house."
        },
        {
          title: "Institutional information",
          body:
            "The public website presents an institutional overview only. Financial information, ownership structure, and diligence materials should be shared in private documented contexts."
        }
      ],
      disclaimer:
        "This content is institutional and does not constitute a public offering, financial recommendation, invitation to subscribe, or a promise of returns. Detailed financial information should be evaluated in a private documented context.",
      inquiryCta: "Request investor contact"
    }
  }
};

export const teamPage: PageContent<StandardPageContent> = {
  id: "team",
  route: "team",
  seo: {
    ptBR: {
      title: "Equipe | Construtora P.U.",
      description:
        "Estrutura de equipe da P.U. Construtora: investimento, execução local e relacionamento."
    },
    en: {
      title: "Team | Construtora P.U.",
      description:
        "P.U. Construtora team structure: investment, local execution, and relationships."
    }
  },
  translations: {
    ptBR: {
      eyebrow: "Equipe",
      title: "Uma operação pequena, próxima e disciplinada.",
      intro:
        "A estrutura da empresa integra gestão financeira, acompanhamento de obra e relacionamento institucional, mantendo decisão rápida e presença local no dia a dia.",
      sections: [
        {
          title: "Estrutura",
          body:
            "A empresa organiza suas decisões em três frentes integradas: gestão financeira, execução local e relacionamento com compradores, parceiros e investidores."
        }
      ],
      cta: { label: "Entrar em contato", hrefKey: "contact" }
    },
    en: {
      eyebrow: "Team",
      title: "A small, close, and disciplined operation.",
      intro:
        "The company structure integrates financial management, construction oversight, and institutional relationships, keeping decisions fast and operations local.",
      sections: [
        {
          title: "Structure",
          body:
            "The company organizes decisions across three integrated fronts: financial management, local execution, and relationships with buyers, partners, and investors."
        }
      ],
      cta: { label: "Contact us", hrefKey: "contact" }
    }
  }
};

export const contactPage: PageContent<ContactContent> = {
  id: "contact",
  route: "contact",
  seo: {
    ptBR: {
      title: "Contato | Construtora P.U.",
      description:
        "Entre em contato com a P.U. Construtora para assuntos institucionais, investidores, parcerias ou projetos."
    },
    en: {
      title: "Contact | Construtora P.U.",
      description:
        "Contact P.U. Construtora for corporate matters, investors, partnerships, or projects."
    }
  },
  translations: {
    ptBR: {
      eyebrow: "Contato",
      title: "Escolha o caminho certo para falar com a P.U.",
      intro:
        "Os canais abaixo organizam atendimento institucional, oportunidades de parceria e contatos ligados aos empreendimentos. Demandas comerciais seguem para o canal do projeto correspondente.",
      routes: [
        {
          title: "Projetos e compradores",
          body: "Para informações comerciais, andamento de atendimento e detalhes do DunaMar, utilize o site dedicado do empreendimento. O site institucional não centraliza disponibilidade ou condições de venda.",
          cta: "Abrir DunaMar",
          href: "https://dunamar.construtorapu.com.br"
        },
        {
          title: "Investidores",
          body: "Canal dedicado para conversas sobre atuação da empresa em Paracuru, projetos alinhados ao Minha Casa Minha Vida, estágio dos empreendimentos e materiais institucionais para análise privada.",
          cta: "Enviar email",
          href: "mailto:invest@construtorapu.com.br"
        },
        {
          title: "Parcerias",
        body: "Canal para terrenos, fornecedores, corretores e parcerias operacionais conectadas à atuação da empresa em Paracuru.",
          cta: "Enviar email",
          href: "mailto:contato@construtorapu.com.br"
        }
      ],
      form: {
        title: "Mensagem institucional",
        body: "Use este canal para apresentar o assunto com clareza e facilitar o direcionamento interno correto.",
        nameLabel: "Nome",
        emailLabel: "Email",
        typeLabel: "Tipo de assunto",
        messageLabel: "Mensagem",
        options: ["Investidores", "Parcerias", "Institucional", "Projetos"],
        submitLabel: "Preparar mensagem",
        successMessage:
          "Mensagem preparada para envio ao canal escolhido."
      }
    },
    en: {
      eyebrow: "Contact",
      title: "Choose the right path to reach P.U.",
      intro:
        "The channels below organize corporate contact, partnership opportunities, and inquiries related to the developments. Commercial matters should go through the relevant project channel.",
      routes: [
        {
          title: "Projects and buyers",
          body: "For commercial information, buyer support, and DunaMar project details, use the dedicated project website. The corporate website does not centralize availability or sales terms.",
          cta: "Open DunaMar",
          href: "https://dunamar.construtorapu.com.br"
        },
        {
          title: "Investors",
          body: "Dedicated channel for conversations about the company's Paracuru operation, Minha Casa Minha Vida-aligned projects, development stages, and institutional materials for private review.",
          cta: "Send email",
          href: "mailto:invest@construtorapu.com.br"
        },
        {
          title: "Partnerships",
          body: "Channel for land opportunities, suppliers, brokers, and operating partnerships connected to the company's work in Paracuru.",
          cta: "Send email",
          href: "mailto:contato@construtorapu.com.br"
        }
      ],
      form: {
        title: "Corporate message",
        body: "Use this channel to describe the matter clearly and support the correct internal routing.",
        nameLabel: "Name",
        emailLabel: "Email",
        typeLabel: "Inquiry type",
        messageLabel: "Message",
        options: ["Investors", "Partnerships", "Corporate", "Projects"],
        submitLabel: "Prepare message",
        successMessage:
          "Message prepared for the selected contact path."
      }
    }
  }
};

export const legalPage: PageContent<StandardPageContent> = {
  id: "legal",
  route: "legal",
  seo: {
    ptBR: {
      title: "Legal e privacidade | Construtora P.U.",
      description:
        "Informações de privacidade, LGPD e avisos legais do site institucional da P.U. Construtora."
    },
    en: {
      title: "Legal and privacy | Construtora P.U.",
      description:
        "Privacy, LGPD, and legal information for the P.U. Construtora corporate website."
    }
  },
  translations: {
    ptBR: {
      eyebrow: "Legal",
      title: "Privacidade, LGPD e avisos institucionais.",
      intro:
        "Esta página reúne avisos de privacidade, uso de dados e limites de publicação do site institucional.",
      sections: [
        {
          title: "Dados pessoais",
          body:
            "Dados enviados por formulários ou email devem ser usados apenas para responder ao assunto solicitado e encaminhar o contato ao responsável correto."
        },
        {
          title: "Informações de projetos",
          body:
            "O site institucional apresenta resumos gerais. Dados comerciais detalhados pertencem aos sites de projeto ou sistemas comerciais."
        },
        {
          title: "Investidores",
          body:
            "Conteúdo institucional não constitui oferta pública de valores mobiliários, recomendação financeira, convite à subscrição ou promessa de retorno."
        }
      ]
    },
    en: {
      eyebrow: "Legal",
      title: "Privacy, LGPD, and corporate notices.",
      intro:
        "This page contains the site's privacy notices, data-use terms, and publication limits.",
      sections: [
        {
          title: "Personal data",
          body:
            "Data submitted through forms or email should be used only to respond to the requested matter and route the contact to the appropriate person."
        },
        {
          title: "Project information",
          body:
            "The corporate website presents general summaries. Detailed commercial data belongs on project websites or commercial systems."
        },
        {
          title: "Investors",
          body:
            "Institutional content does not constitute a public securities offering, financial advice, an invitation to subscribe, or a promise of returns."
        }
      ]
    }
  }
};

export const pages = {
  home: homePage,
  projects: projectsPage,
  about: aboutPage,
  investors: investorsPage,
  team: teamPage,
  contact: contactPage,
  legal: legalPage
} as const;
