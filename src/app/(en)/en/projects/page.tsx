import { ProjectsNarrativePage } from "@/components/pages/ProjectsNarrativePage";
import { PageStructuredData } from "@/components/site/StructuredData";
import { getProjectsPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("projects", "en");
}

export default async function Page() {
  const data = await getProjectsPageData("en");
  return <><PageStructuredData locale="en" routeKey="projects" page={data.page} projects={data.projects} /><ProjectsNarrativePage locale="en" {...data} /></>;
}
