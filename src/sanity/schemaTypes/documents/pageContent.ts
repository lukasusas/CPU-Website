import { defineArrayMember, defineField, defineType } from "sanity";

export const pageContent = defineType({
  name: "pageContent",
  title: "Page Content",
  type: "document",
  fields: [
    defineField({
      name: "pageKey",
      title: "Page Key",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "Projects", value: "projects" },
          { title: "About", value: "about" },
          { title: "Investors", value: "investors" },
          { title: "Team", value: "team" },
          { title: "Contact", value: "contact" },
          { title: "Legal", value: "legal" }
        ]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "localizedString",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "localizedText",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "localizedString"
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "localizedString",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "intro",
      title: "Intro",
      type: "localizedText",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "sections",
      title: "Narrative Sections",
      type: "array",
      of: [defineArrayMember({ type: "sectionItem" })]
    }),
    defineField({
      name: "primaryCtaLabel",
      title: "Primary CTA Label",
      type: "localizedString"
    }),
    defineField({
      name: "primaryCtaRouteKey",
      title: "Primary CTA Route Key",
      type: "string",
      options: {
        list: ["projects", "about", "investors", "team", "contact", "legal"]
      }
    }),
    defineField({
      name: "secondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "localizedString"
    }),
    defineField({
      name: "secondaryCtaRouteKey",
      title: "Secondary CTA Route Key",
      type: "string",
      options: {
        list: ["projects", "about", "investors", "team", "contact", "legal"]
      }
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer",
      type: "localizedText"
    })
  ],
  preview: {
    select: {
      title: "title.ptBR",
      subtitle: "pageKey"
    }
  }
});
