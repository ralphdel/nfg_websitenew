import { defineField, defineType } from "sanity";

export const industry = defineType({
  name: "industry",
  title: "Industry",
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
    defineField({ name: "pain", title: "Customer pain", type: "text" }),
    defineField({ name: "solution", title: "NFG solution", type: "text" }),
    defineField({ name: "image", title: "Industry image", type: "image", options: { hotspot: true } })
  ]
});
