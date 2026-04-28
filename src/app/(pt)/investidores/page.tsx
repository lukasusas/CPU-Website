import { InvestorsNarrativePage } from "@/components/pages/InvestorsNarrativePage";
import { getInvestorsPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("investors", "ptBR");
}

export default async function Page() {
  const data = await getInvestorsPageData("ptBR");
  return <InvestorsNarrativePage locale="ptBR" {...data} />;
}
