import { AboutNarrativePage } from "@/components/pages/AboutNarrativePage";
import { PageStructuredData } from "@/components/site/StructuredData";
import { getAboutPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("about", "en");
}

export default async function Page() {
  const data = await getAboutPageData("en");
  return <><PageStructuredData locale="en" routeKey="about" page={data.page} /><AboutNarrativePage locale="en" {...data} /></>;
}
