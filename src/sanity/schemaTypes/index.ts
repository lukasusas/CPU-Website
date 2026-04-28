import { contactRoute } from "./documents/contactRoute";
import { homeSection } from "./documents/homeSection";
import { investorSection } from "./documents/investorSection";
import { legalBlock } from "./documents/legalBlock";
import { navigation } from "./documents/navigation";
import { pageContent } from "./documents/pageContent";
import { projectSummary } from "./documents/projectSummary";
import { siteSettings } from "./documents/siteSettings";
import { teamEntry } from "./documents/teamEntry";
import { localizedString } from "./objects/localizedString";
import { localizedText } from "./objects/localizedText";
import { sectionItem } from "./objects/sectionItem";

export const schemaTypes = [
  localizedString,
  localizedText,
  sectionItem,
  siteSettings,
  navigation,
  pageContent,
  homeSection,
  projectSummary,
  investorSection,
  teamEntry,
  contactRoute,
  legalBlock
];
