import { ContactNarrativePage } from "@/components/pages/ContactNarrativePage";
import { PageStructuredData } from "@/components/site/StructuredData";
import { getContactPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("contact", "ptBR");
}

export default async function Page() {
  const data = await getContactPageData("ptBR");
  return <><PageStructuredData locale="ptBR" routeKey="contact" page={data.page} /><ContactNarrativePage {...data} /></>;
}
