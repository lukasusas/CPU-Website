import { defineField, defineType } from "sanity";

export const localizedString = defineType({
  name: "localizedString",
  title: "Localized String",
  type: "object",
  fields: [
    defineField({
      name: "ptBR",
      title: "Portuguese (Brazil)",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "en",
      title: "English",
      type: "string"
    })
  ]
});
