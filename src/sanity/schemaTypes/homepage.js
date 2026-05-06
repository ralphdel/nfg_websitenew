import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Internal title", type: "string" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroSubheadline", title: "Hero subheadline", type: "text" }),
    defineField({ name: "proofLine", title: "Proof line", type: "string" }),
    defineField({
      name: "trustBadges",
      title: "Trust badges",
      type: "array",
      of: [{ type: "string" }]
    })
  ]
});
