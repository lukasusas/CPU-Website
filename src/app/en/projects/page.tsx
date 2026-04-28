import { ProjectsNarrativePage } from "@/components/pages/ProjectsNarrativePage";
import { getProjectsPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("projects", "en");
}

export default async function Page() {
  const data = await getProjectsPageData("en");
  return <ProjectsNarrativePage locale="en" {...data} />;
}
