import { defineField, defineType } from "sanity";

export const sectionItem = defineType({
  name: "sectionItem",
  title: "Section Item",
  type: "object",
  fields: [
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
    })
  ],
  preview: {
    select: {
      title: "title.ptBR",
      subtitle: "title.en"
    }
  }
});
