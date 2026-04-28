import { defineField, defineType } from "sanity";

export const contactRoute = defineType({
  name: "contactRoute",
  title: "Contact Route",
  type: "document",
  fields: [
    defineField({
      name: "routeKey",
      title: "Route Key",
      type: "string",
      options: {
        list: [
          { title: "Projects / Buyers", value: "buyers" },
          { title: "Investors", value: "investors" },
          { title: "Partnerships", value: "partnerships" },
          { title: "General", value: "general" }
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
      name: "ctaLabel",
      title: "CTA Label",
      type: "localizedString",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "href",
      title: "Destination",
      type: "string",
      description: "Use URL, mailto, or tel URI.",
      validation: (rule) =>
        rule.required().custom((value) => {
          if (typeof value !== "string") return "Destination is required.";
          if (value.startsWith("http://") || value.startsWith("https://")) return true;
          if (value.startsWith("mailto:")) return true;
          if (value.startsWith("tel:")) return true;
          return "Destination must start with https://, mailto:, or tel:.";
        })
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
      subtitle: "routeKey"
    }
  }
});
