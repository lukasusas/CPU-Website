import { defineField, defineType } from "sanity";

export const localizedText = defineType({
  name: "localizedText",
  title: "Localized Text",
  type: "object",
  fields: [
    defineField({
      name: "ptBR",
      title: "Portuguese (Brazil)",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "en",
      title: "English",
      type: "text",
      rows: 5
    })
  ]
});
