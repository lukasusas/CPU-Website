import { defineField, defineType } from "sanity";

export const legalBlock = defineType({
  name: "legalBlock",
  title: "Legal Block",
  type: "document",
  fields: [
    defineField({
      name: "blockKey",
      title: "Block Key",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .regex(/^[a-z0-9-]+$/, {
            name: "slug"
          })
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
      subtitle: "blockKey"
    }
  }
});
