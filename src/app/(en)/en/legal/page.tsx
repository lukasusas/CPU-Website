import { LegalNarrativePage } from "@/components/pages/LegalNarrativePage";
import { PageStructuredData } from "@/components/site/StructuredData";
import { getLegalPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("legal", "en");
}

export default async function Page() {
  const data = await getLegalPageData("en");
  return <><PageStructuredData locale="en" routeKey="legal" page={data.page} /><LegalNarrativePage {...data} /></>;
}
