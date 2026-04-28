import { ContactNarrativePage } from "@/components/pages/ContactNarrativePage";
import { getContactPageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("contact", "en");
}

export default async function Page() {
  const data = await getContactPageData("en");
  return <ContactNarrativePage {...data} />;
}
