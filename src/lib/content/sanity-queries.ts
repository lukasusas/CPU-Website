import groq from "groq";

export const siteDatasetQuery = groq`{
  "settings": *[_type == "siteSettings"][0]{
    siteName,
    legalName,
    baseUrl,
    defaultLocale,
    contactEmail,
    investorEmail,
    whatsappUrl,
    businessPhone,
    streetAddress,
    addressLocality,
    addressRegion,
    postalCode,
    addressCountry,
    coordinatesLabel,
    footerSummary,
    footerLegal
  },
  "navigation": *[_type == "navigation"] | order(order asc) {
    _id,
    routeKey,
    label,
    anchorId,
    useAnchorOnHome,
    order
  },
  "pages": *[_type == "pageContent"] {
    _id,
    pageKey,
    seoTitle,
    seoDescription,
    seoSocialImage{
      asset->
    },
    eyebrow,
    title,
    intro,
    sections[]{
      title,
      body
    },
    primaryCtaLabel,
    primaryCtaRouteKey,
    secondaryCtaLabel,
    secondaryCtaRouteKey,
    disclaimer
  },
  "homeSections": *[_type == "homeSection"] | order(order asc) {
    _id,
    sectionKey,
    eyebrow,
    title,
    body,
    ctaLabel,
    ctaRouteKey,
    order
  },
  "projects": *[_type == "projectSummary"] | order(order asc) {
    _id,
    projectId,
    name,
    location,
    projectType,
    unitCount,
    stage,
    shortDescription,
    externalUrl,
    externalLabel,
    image{
      alt,
      asset->
    },
    gallery[]{
      alt,
      asset->
    },
    order
  },
  "investorSections": *[_type == "investorSection"] | order(order asc) {
    _id,
    sectionKey,
    title,
    body,
    order
  },
  "teamEntries": *[_type == "teamEntry"] | order(order asc) {
    _id,
    entryId,
    name,
    role,
    bio,
    image{
      alt,
      asset->
    },
    order
  },
  "contactRoutes": *[_type == "contactRoute"] | order(order asc) {
    _id,
    routeKey,
    title,
    body,
    ctaLabel,
    href,
    order
  },
  "legalBlocks": *[_type == "legalBlock"] | order(order asc) {
    _id,
    blockKey,
    title,
    body,
    order
  }
}`;
