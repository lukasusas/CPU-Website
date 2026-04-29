import Link from "next/link";
import { ProjectPortfolioCard } from "@/components/project/ProjectPortfolioCard";
import { DataLine } from "@/components/primitives/DataLine";
import { InvestorThesisRow } from "@/components/primitives/InvestorThesisRow";
import { MonoMediaWindow } from "@/components/primitives/MonoMediaWindow";
import { NarrativeBlock } from "@/components/primitives/NarrativeBlock";
import { RouteCTA } from "@/components/primitives/RouteCTA";
import { SectionFrame } from "@/components/primitives/SectionFrame";
import { routeFor } from "@/lib/content/routes";
import type { LocalizedContactRoute, LocalizedPageData, LocalizedProjectSummary, Locale } from "@/lib/content/types";

type HomeNarrativePageProps = {
  locale: Locale;
  page: LocalizedPageData;
  sections: Array<{ id: string; title: string; body: string }>;
  projects: LocalizedProjectSummary[];
  investorRows: Array<{ id: string; title: string; body: string }>;
  investorDisclaimer: string;
  contactRoutes: LocalizedContactRoute[];
};

function openExternalHref(href: string) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  return external ? { target: "_blank", rel: "noreferrer" as const } : {};
}

export function HomeNarrativePage({
  locale,
  page,
  sections,
  projects,
  investorRows,
  investorDisclaimer,
  contactRoutes
}: HomeNarrativePageProps) {
  const coordinates = locale === "ptBR" ? "-3.4126° S · -39.0250° O" : "-3.4126° S · -39.0250° W";

  return (
    <>
      <section className="hero-brutal">
        <div className="hero-brutal__copy" data-reveal>
          <p>{page.eyebrow}</p>
          <p className="hero-brutal__coordinates">{coordinates}</p>
          <h1>{page.title}</h1>
          <p className="hero-brutal__lead">{page.intro}</p>
          <div className="hero-brutal__actions">
            {page.primaryCtaLabel && page.primaryCtaRouteKey ? (
              <RouteCTA href={routeFor(page.primaryCtaRouteKey, locale)} label={page.primaryCtaLabel} variant="solid" />
            ) : null}
            {page.secondaryCtaLabel && page.secondaryCtaRouteKey ? (
              <RouteCTA href={routeFor(page.secondaryCtaRouteKey, locale)} label={page.secondaryCtaLabel} />
            ) : null}
          </div>
        </div>

        <div className="hero-brutal__atlas" data-reveal>
          <p className="hero-brutal__atlas-label">{locale === "ptBR" ? "Atlas de Projetos" : "Project Atlas"}</p>
          <div className="hero-brutal__atlas-list">
            {projects.slice(0, 2).map((project, index) => (
              <article className="atlas-row" key={project.id} data-atlas-row>
                <div className="atlas-row__index">{String(index + 1).padStart(2, "0")}</div>
                <div className="atlas-row__meta">
                  <h3>{project.name}</h3>
                  <p>{project.shortDescription}</p>
                  <dl>
                    <DataLine label={locale === "ptBR" ? "Local" : "Location"} value={project.location} />
                    <DataLine label={locale === "ptBR" ? "Tipologia" : "Type"} value={project.projectType} />
                    <DataLine label={locale === "ptBR" ? "Unidades" : "Units"} value={project.unitCount} />
                  </dl>
                </div>
                <MonoMediaWindow src={project.image.src} alt={project.image.alt} aspect="3/2" priority={index === 0} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionFrame
        id="projects"
        eyebrow={locale === "ptBR" ? "Projetos" : "Projects"}
        title={locale === "ptBR" ? "Portfólio de empreendimentos" : "Development portfolio"}
        intro={locale === "ptBR" ? "Panorama institucional com foco em contexto, produto e estágio de obra." : "Institutional overview focused on context, product, and construction stage."}
      >
        <div className="project-window-grid">
          {projects.map((project, index) => (
            <ProjectPortfolioCard key={project.id} locale={locale} project={project} index={index} />
          ))}
        </div>
      </SectionFrame>

      <SectionFrame
        id="about"
        eyebrow={locale === "ptBR" ? "Método" : "Method"}
        title={locale === "ptBR" ? "Execução com narrativa curta e objetiva." : "Execution with short and precise narrative."}
      >
        <div className="narrative-grid">
          {sections.slice(0, 3).map((section, index) => (
            <NarrativeBlock key={section.id} title={section.title} body={section.body} index={index} />
          ))}
        </div>
      </SectionFrame>

      <SectionFrame
        id="investors"
        className="section-frame--contrast"
        eyebrow={locale === "ptBR" ? "Investidores" : "Investors"}
        title={locale === "ptBR" ? "Tese institucional em três linhas." : "Institutional thesis in three lines."}
      >
        <div className="investor-rows">
          {investorRows.map((row, index) => (
            <InvestorThesisRow key={row.id} index={index} title={row.title} body={row.body} />
          ))}
        </div>
        <p className="disclaimer-band">{investorDisclaimer}</p>
        <div className="section-actions" data-reveal>
          <RouteCTA href={routeFor("investors", locale)} label={locale === "ptBR" ? "Página de investidores" : "Investor page"} />
        </div>
      </SectionFrame>

      <SectionFrame
        id="contact"
        className="section-frame--contrast-soft"
        eyebrow={locale === "ptBR" ? "Contato" : "Contact"}
        title={locale === "ptBR" ? "Rotas diretas para cada tipo de assunto." : "Direct routes for each inquiry type."}
      >
        <div className="contact-grid">
          {contactRoutes.map((route, index) => (
            <article className="contact-route" key={route.id} data-reveal>
              <p className="contact-route__index">{String(index + 1).padStart(2, "0")}</p>
              <h3>{route.title}</h3>
              <p>
                {route.id === "contact-buyers"
                  ? locale === "ptBR"
                    ? "Use a seção de projetos acima para escolher o empreendimento desejado. O site institucional não centraliza disponibilidade ou condições de venda."
                    : "Use the projects section above to choose the development you want. The corporate website does not centralize availability or sales terms."
                  : route.body}
              </p>
              <a
                className="route-cta route-cta--outline"
                href={route.id === "contact-buyers" ? "#projects" : route.href}
                {...openExternalHref(route.id === "contact-buyers" ? "#projects" : route.href)}
              >
                <span>
                  {route.id === "contact-buyers"
                    ? locale === "ptBR"
                      ? "Escolher projeto"
                      : "Choose project"
                    : route.ctaLabel}
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <div className="section-actions" data-reveal>
          <Link className="route-cta route-cta--solid" href={routeFor("contact", locale)}>
            <span>{locale === "ptBR" ? "Abrir página de contato" : "Open contact page"}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </SectionFrame>
    </>
  );
}
