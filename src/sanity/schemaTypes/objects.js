import { defineField, defineType } from "sanity";

const videoAccept = "video/mp4,video/webm,video/ogg,video/quicktime";
const videoFieldHidden = ({ parent }) => parent?.mediaType !== "video";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "metaTitle", title: "Meta title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta description", type: "text", rows: 3 }),
    defineField({ name: "ogImage", title: "Open Graph image", type: "image", options: { hotspot: true } }),
    defineField({ name: "canonicalUrl", title: "Canonical URL", type: "url" }),
    defineField({ name: "noIndex", title: "No index", type: "boolean", initialValue: false })
  ]
});

export const mediaAsset = defineType({
  name: "mediaAsset",
  title: "Media asset",
  type: "object",
  fields: [
    defineField({
      name: "mediaType",
      title: "Media type",
      type: "string",
      options: { list: ["image", "video"] },
      initialValue: "image"
    }),
    defineField({
      name: "image",
      title: "Desktop image",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType === "video"
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile image",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.mediaType === "video"
    }),
    defineField({
      name: "video",
      title: "Mux Video",
      type: "mux.video",
      hidden: videoFieldHidden
    }),
    defineField({
      name: "posterImage",
      title: "Video poster image",
      type: "image",
      options: { hotspot: true },
      hidden: videoFieldHidden
    }),
    defineField({
      name: "videoAspectRatio",
      title: "Video display ratio",
      type: "string",
      options: {
        list: [
          { title: "Wide 16:9", value: "16 / 9" },
          { title: "Standard 4:3", value: "4 / 3" },
          { title: "Square 1:1", value: "1 / 1" },
          { title: "Vertical 9:16", value: "9 / 16" }
        ]
      },
      initialValue: "16 / 9",
      hidden: videoFieldHidden
    }),
    defineField({
      name: "videoObjectFit",
      title: "Video fit",
      type: "string",
      options: {
        list: [
          { title: "Cover frame", value: "cover" },
          { title: "Show full video", value: "contain" }
        ]
      },
      initialValue: "cover",
      hidden: videoFieldHidden
    }),
    defineField({
      name: "videoMaxWidth",
      title: "Video max width",
      type: "number",
      description: "Optional display width in pixels for page media. Leave empty to use the layout default.",
      validation: (Rule) => Rule.min(240).max(1600),
      hidden: videoFieldHidden
    }),
    defineField({
      name: "videoAutoplay",
      title: "Autoplay when used as hero/background",
      type: "boolean",
      initialValue: true,
      hidden: videoFieldHidden
    }),
    defineField({ name: "altText", title: "Alt text", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "caption",
      title: "Caption / internal media note",
      type: "string",
      description: "For videos, this displays as an optional caption overlay. Leave empty for full clean media."
    }),
    defineField({
      name: "theme",
      title: "Visual theme",
      type: "string",
      options: { list: ["foundry", "scan", "wear", "marine", "digital"] },
      initialValue: "foundry"
    }),
    defineField({
      name: "overlayOpacity",
      title: "Overlay opacity",
      type: "number",
      initialValue: 0.68,
      validation: (Rule) => Rule.min(0).max(1)
    }),
    defineField({ name: "focalPoint", title: "Focal point note", type: "string" })
  ]
});

export const cta = defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "href",
      title: "Site path or URL",
      type: "string",
      description: "Use this for site paths such as /rfq, /contact, or /resources/downloads."
    }),
    defineField({
      name: "linkType",
      title: "Link type",
      type: "string",
      options: { list: ["internal", "external", "file", "anchor", "whatsapp", "email"] },
      initialValue: "internal"
    }),
    defineField({ name: "internalReference", title: "Internal reference", type: "reference", to: [{ type: "solutionPage" }, { type: "industryPage" }, { type: "capabilityPage" }, { type: "blogPost" }] }),
    defineField({ name: "externalUrl", title: "External URL", type: "url" }),
    defineField({ name: "fileReference", title: "File reference", type: "file" }),
    defineField({ name: "anchor", title: "Anchor", type: "string" }),
    defineField({ name: "emailAddress", title: "Email address", type: "string" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp number", type: "string" }),
    defineField({
      name: "style",
      title: "Style",
      type: "string",
      options: { list: ["primary", "secondary", "ghost", "dark"] },
      initialValue: "primary"
    })
  ]
});

export const card = defineType({
  name: "card",
  title: "Card",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "icon", title: "Icon name", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "link", title: "Link", type: "cta" }),
    defineField({ name: "tag", title: "Tag", type: "string" }),
    defineField({ name: "details", title: "Details", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "useCases", title: "Use cases", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" })
  ]
});

export const skillsCard = defineType({
  name: "skillsCard",
  title: "Skills card",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "shortDescription", title: "Short description", type: "text", rows: 3 }),
    defineField({ name: "points", title: "Key points", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "icon", title: "Icon name", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "link", title: "Link", type: "cta" }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" }),
    defineField({ name: "active", title: "Active", type: "boolean", initialValue: true })
  ]
});

export const processStep = defineType({
  name: "processStep",
  title: "Process step",
  type: "object",
  fields: [
    defineField({ name: "stepNumber", title: "Step number", type: "number" }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "icon", title: "Icon name", type: "string" }),
    defineField({ name: "details", title: "Details", type: "array", of: [{ type: "string" }] })
  ]
});

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero slide",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 3 }),
    defineField({ name: "supportText", title: "Support text", type: "text", rows: 3 }),
    defineField({ name: "media", title: "Media", type: "mediaAsset" }),
    defineField({ name: "primaryCta", title: "Primary CTA", type: "cta" }),
    defineField({ name: "secondaryCta", title: "Secondary CTA", type: "cta" }),
    defineField({ name: "featureCards", title: "Feature cards", type: "array", of: [{ type: "card" }] }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" })
          ]
        }
      ]
    }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" }),
    defineField({ name: "active", title: "Active", type: "boolean", initialValue: true })
  ]
});

export const portableContent = defineType({
  name: "portableContent",
  title: "Portable content",
  type: "array",
  of: [
    { type: "block" },
    { type: "image", options: { hotspot: true } },
    { type: "file" }
  ]
});
