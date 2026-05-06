import { defineField, defineType } from "sanity";

export const partnership = defineType({
  name: "partnership",
  title: "Partnership",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } })
  ]
});
