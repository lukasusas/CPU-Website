import { HomeNarrativePage } from "@/components/pages/HomeNarrativePage";
import { HomeStructuredData } from "@/components/site/StructuredData";
import { getHomePageData, getSiteContext } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("home", "ptBR");
}

export default async function Page() {
  const [data, context] = await Promise.all([getHomePageData("ptBR"), getSiteContext("ptBR")]);

  return (
    <>
      <HomeStructuredData locale="ptBR" settings={context.settings} />
      <HomeNarrativePage locale="ptBR" {...data} />
    </>
  );
}
