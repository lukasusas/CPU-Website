import { HomeNarrativePage } from "@/components/pages/HomeNarrativePage";
import { getHomePageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("home", "ptBR");
}

export default async function Page() {
  const data = await getHomePageData("ptBR");
  return <HomeNarrativePage locale="ptBR" {...data} />;
}
