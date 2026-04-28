import { LegalNarrativePage } from "@/components/pages/LegalNarrativePage";
import { getLegalPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("legal", "ptBR");
}

export default async function Page() {
  const data = await getLegalPageData("ptBR");
  return <LegalNarrativePage {...data} />;
}
