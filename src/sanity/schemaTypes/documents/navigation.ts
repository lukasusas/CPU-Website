import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation Item",
  type: "document",
  fields: [
    defineField({
      name: "routeKey",
      title: "Route Key",
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
      name: "label",
      title: "Label",
      type: "localizedString",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "anchorId",
      title: "Home Anchor ID",
      type: "string",
      description:
        "Optional anchor used on homepage navigation (example: projects, investors, team, contact)."
    }),
    defineField({
      name: "useAnchorOnHome",
      title: "Use Home Anchor",
      type: "boolean",
      initialValue: true
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
      title: "label.ptBR",
      subtitle: "routeKey"
    }
  }
});
