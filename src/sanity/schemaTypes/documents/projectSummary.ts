import { defineField, defineType } from "sanity";

export const projectSummary = defineType({
  name: "projectSummary",
  title: "Project Summary",
  type: "document",
  fields: [
    defineField({
      name: "projectId",
      title: "Project ID",
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
      title: "Project Name",
      type: "localizedString",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "localizedString",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "localizedString",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "unitCount",
      title: "Unit Count",
      type: "string",
      description: "General portfolio count only (no inventory or availability).",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "stage",
      title: "Stage",
      type: "localizedString",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "localizedText",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "externalUrl",
      title: "External Project URL",
      type: "url",
      description: "Dedicated project website URL."
    }),
    defineField({
      name: "externalLabel",
      title: "External Link Label",
      type: "localizedString"
    }),
    defineField({
      name: "image",
      title: "Project Image",
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
      subtitle: "stage.ptBR",
      media: "image"
    }
  }
});
