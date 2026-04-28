import { SectionFrame } from "@/components/primitives/SectionFrame";
import type { LocalizedContactRoute, LocalizedPageData } from "@/lib/content/types";

type ContactNarrativePageProps = {
  page: LocalizedPageData;
  routes: LocalizedContactRoute[];
};

function externalAttrs(href: string) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  return external ? { target: "_blank", rel: "noreferrer" as const } : {};
}

export function ContactNarrativePage({ page, routes }: ContactNarrativePageProps) {
  return (
    <div className="page-stack">
      <SectionFrame eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
        <div className="contact-grid">
          {routes.map((route) => (
            <article className="contact-route" key={route.id} data-reveal>
              <h3>{route.title}</h3>
              <p>{route.body}</p>
              <a className="route-cta route-cta--outline" href={route.href} {...externalAttrs(route.href)}>
                <span>{route.ctaLabel}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </SectionFrame>
    </div>
  );
}
