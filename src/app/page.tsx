import { HomeNarrativePage } from "@/components/pages/HomeNarrativePage";
import { LocaleShell } from "@/components/site/LocaleShell";
import { getHomePageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("home", "ptBR");
}

export default async function Page() {
  const data = await getHomePageData("ptBR");

  return (
    <LocaleShell locale="ptBR">
      <HomeNarrativePage locale="ptBR" {...data} />
    </LocaleShell>
  );
}
