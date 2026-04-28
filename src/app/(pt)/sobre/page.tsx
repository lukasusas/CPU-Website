import { AboutNarrativePage } from "@/components/pages/AboutNarrativePage";
import { getAboutPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("about", "ptBR");
}

export default async function Page() {
  const data = await getAboutPageData("ptBR");
  return <AboutNarrativePage locale="ptBR" {...data} />;
}
