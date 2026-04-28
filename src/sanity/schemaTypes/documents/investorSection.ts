import { defineField, defineType } from "sanity";

export const investorSection = defineType({
  name: "investorSection",
  title: "Investor Section",
  type: "document",
  fields: [
    defineField({
      name: "sectionKey",
      title: "Section Key",
      type: "string",
      options: {
        list: [
          { title: "Market Thesis", value: "marketThesis" },
          { title: "Pipeline", value: "pipeline" },
          { title: "Governance", value: "governance" },
          { title: "Disclaimer", value: "disclaimer" }
        ]
      },
      validation: (rule) => rule.required()
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
