import { defineField, defineType } from "sanity";

export const capability = defineType({
  name: "capability",
  title: "Capability",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "image", title: "Capability image", type: "image", options: { hotspot: true } })
  ]
});
