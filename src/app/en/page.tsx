import { HomeNarrativePage } from "@/components/pages/HomeNarrativePage";
import { getHomePageData } from "@/lib/content/get-site-data";
import { createPageMetadata } from "@/lib/seo/metadata";

export async function generateMetadata() {
  return createPageMetadata("home", "en");
}

export default async function Page() {
  const data = await getHomePageData("en");
  return <HomeNarrativePage locale="en" {...data} />;
}
