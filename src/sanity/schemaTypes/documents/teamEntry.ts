import { defineField, defineType } from "sanity";

export const teamEntry = defineType({
  name: "teamEntry",
  title: "Team Entry",
  type: "document",
  fields: [
    defineField({
      name: "entryId",
      title: "Entry ID",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .regex(/^[a-z0-9-]+$/, {
            name: "slug"
          })
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "localizedString",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "localizedString",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "localizedText",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "localizedString",
          validation: (rule) => rule.required()
        })
      ]
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
      title: "name.ptBR",
      subtitle: "role.ptBR",
      media: "image"
    }
  }
});
