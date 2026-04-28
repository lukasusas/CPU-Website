import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "legalName",
      title: "Legal Name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "baseUrl",
      title: "Base URL",
      type: "url",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "defaultLocale",
      title: "Default Locale",
      type: "string",
      options: {
        list: [
          { title: "Portuguese (Brazil)", value: "ptBR" },
          { title: "English", value: "en" }
        ]
      },
      initialValue: "ptBR",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      validation: (rule) => rule.required().email()
    }),
    defineField({
      name: "investorEmail",
      title: "Investor Email",
      type: "string",
      validation: (rule) => rule.required().email()
    }),
    defineField({
      name: "whatsappUrl",
      title: "WhatsApp URL",
      type: "url"
    }),
    defineField({
      name: "coordinatesLabel",
      title: "Coordinates Label",
      type: "localizedString"
    }),
    defineField({
      name: "footerSummary",
      title: "Footer Summary",
      type: "localizedText",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "footerLegal",
      title: "Footer Legal Note",
      type: "localizedText",
      validation: (rule) => rule.required()
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings"
      };
    }
  }
});
