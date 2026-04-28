import { defineField, defineType } from "sanity";

export const homeSection = defineType({
  name: "homeSection",
  title: "Home Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionKey",
      title: "Section Key",
      type: "string",
      options: {
        list: [
          { title: "Manifesto", value: "manifesto" },
          { title: "Execution", value: "execution" },
          { title: "Market", value: "market" },
          { title: "Team Lead", value: "teamLead" },
          { title: "Contact Lead", value: "contactLead" }
        ]
      },
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
      name: "body",
      title: "Body",
      type: "localizedText",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Label",
      type: "localizedString"
    }),
    defineField({
      name: "ctaRouteKey",
      title: "CTA Route Key",
      type: "string",
      options: {
        list: ["projects", "about", "investors", "team", "contact", "legal"]
      }
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (rule) => rule.required().integer().min(0)
    })
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }]
    }
  ],
  preview: {
    select: {
      title: "title.ptBR",
      subtitle: "sectionKey"
    }
  }
});
