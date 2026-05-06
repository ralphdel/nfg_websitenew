import { defineField, defineType } from "sanity";

export const leadershipProfile = defineType({
  name: "leadershipProfile",
  title: "Leadership Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "summary", title: "Summary", type: "text" }),
    defineField({ name: "portrait", title: "Portrait", type: "image", options: { hotspot: true } })
  ]
});
