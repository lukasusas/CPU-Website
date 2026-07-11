import { ProjectsNarrativePage } from "@/components/pages/ProjectsNarrativePage";
import { PageStructuredData } from "@/components/site/StructuredData";
import { getProjectsPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("projects", "ptBR");
}

export default async function Page() {
  const data = await getProjectsPageData("ptBR");
  return <><PageStructuredData locale="ptBR" routeKey="projects" page={data.page} projects={data.projects} /><ProjectsNarrativePage locale="ptBR" {...data} /></>;
}
