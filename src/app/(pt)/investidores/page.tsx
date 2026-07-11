import { InvestorsNarrativePage } from "@/components/pages/InvestorsNarrativePage";
import { PageStructuredData } from "@/components/site/StructuredData";
import { getInvestorsPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("investors", "ptBR");
}

export default async function Page() {
  const data = await getInvestorsPageData("ptBR");
  return <><PageStructuredData locale="ptBR" routeKey="investors" page={data.page} /><InvestorsNarrativePage locale="ptBR" {...data} /></>;
}
