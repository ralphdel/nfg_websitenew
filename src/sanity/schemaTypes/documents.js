import { defineField, defineType } from "sanity";

const videoAccept = "video/mp4,video/webm,video/ogg,video/quicktime";

const slugField = defineField({
  name: "slug",
  title: "Slug",
  type: "slug",
  options: { source: "title", maxLength: 96 },
  validation: (Rule) => Rule.required()
});

const heroFields = [
  defineField({ name: "hero", title: "Hero", type: "mediaAsset" }),
  defineField({ name: "summary", title: "Summary", type: "text", rows: 4 })
];

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "shortName", title: "Short name", type: "string", initialValue: "NFG" }),
    defineField({ name: "defaultSeoTitle", title: "Default SEO title", type: "string" }),
    defineField({ name: "defaultSeoDescription", title: "Default SEO description", type: "text", rows: 3 }),
    defineField({ name: "logoLight", title: "Logo light", type: "image", options: { hotspot: true } }),
    defineField({ name: "logoDark", title: "Logo dark", type: "image", options: { hotspot: true } }),
    defineField({ name: "favicon", title: "Favicon", type: "image" }),
    defineField({ name: "primaryPhone", title: "Primary phone", type: "string" }),
    defineField({ name: "primaryEmail", title: "Primary email", type: "string" }),
    defineField({ name: "salesEmail", title: "Sales email", type: "string" }),
    defineField({ name: "generalPhones", title: "General phones", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "salesPhones", title: "Sales phones", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "whatsappNumber", title: "WhatsApp number", type: "string" }),
    defineField({ name: "address", title: "Address", type: "text", rows: 3 }),
    defineField({ name: "registeredOffice", title: "Registered office", type: "text", rows: 3 }),
    defineField({ name: "officeHours", title: "Office hours", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" })
          ]
        }
      ]
    }),
    defineField({ name: "defaultOgImage", title: "Default OG image", type: "image", options: { hotspot: true } }),
    defineField({ name: "footerText", title: "Footer text", type: "text", rows: 3 }),
    defineField({ name: "globalCta", title: "Global CTA", type: "cta" })
  ]
});

export const navigationSettings = defineType({
  name: "navigationSettings",
  title: "Navigation settings",
  type: "document",
  fields: [
    defineField({ name: "mainNavigation", title: "Main navigation", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "footerNavigation", title: "Footer navigation", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "mobileNavigation", title: "Mobile navigation", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
    defineField({ name: "ctaLink", title: "CTA link", type: "cta" })
  ]
});

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Internal title", type: "string", initialValue: "Homepage" }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({ name: "heroSlides", title: "Hero slides", type: "array", of: [{ type: "heroSlide" }] }),
    defineField({ name: "trustBadges", title: "Trust badges", type: "array", of: [{ type: "reference", to: [{ type: "certificationOrAward" }] }, { type: "card" }] }),
    defineField({ name: "problemSection", title: "Problem section", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "methodSteps", title: "Method steps", type: "array", of: [{ type: "processStep" }] }),
    defineField({ name: "solutionCards", title: "Solution cards", type: "array", of: [{ type: "reference", to: [{ type: "solutionPage" }] }] }),
    defineField({ name: "industryCards", title: "Industry cards", type: "array", of: [{ type: "reference", to: [{ type: "industryPage" }] }] }),
    defineField({ name: "wearComparison", title: "Wear comparison", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "reverseEngineeringHighlight", title: "Reverse engineering highlight", type: "array", of: [{ type: "processStep" }] }),
    defineField({ name: "nigerianContentSection", title: "Nigerian Content section", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "skillsEducationSection", title: "Skills and education section", type: "array", of: [{ type: "skillsCard" }] }),
    defineField({ name: "vezappSection", title: "Vezapp section", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "certificationsSection", title: "Certifications section", type: "array", of: [{ type: "reference", to: [{ type: "certificationOrAward" }] }] }),
    defineField({ name: "caseStudyReferences", title: "Case study references", type: "array", of: [{ type: "reference", to: [{ type: "caseStudy" }] }] }),
    defineField({ name: "leadershipReferences", title: "Leadership references", type: "array", of: [{ type: "reference", to: [{ type: "leader" }] }] }),
    defineField({ name: "finalCta", title: "Final CTA", type: "cta" })
  ]
});

export const solutionPage = defineType({
  name: "solutionPage",
  title: "Solution page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "navTitle", title: "Navigation title", type: "string" }),
    slugField,
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    ...heroFields,
    defineField({ name: "customerProblems", title: "Customer problems", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "solutionDescription", title: "Solution description", type: "portableContent" }),
    defineField({ name: "applications", title: "Applications", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "materials", title: "Materials", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "technologies", title: "Technologies", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "processSteps", title: "Process steps", type: "array", of: [{ type: "processStep" }] }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "mediaAsset" }] }),
    defineField({ name: "relatedIndustries", title: "Related industries", type: "array", of: [{ type: "reference", to: [{ type: "industryPage" }] }] }),
    defineField({ name: "relatedCaseStudies", title: "Related case studies", type: "array", of: [{ type: "reference", to: [{ type: "caseStudy" }] }] }),
    defineField({ name: "downloads", title: "Downloads", type: "array", of: [{ type: "reference", to: [{ type: "downloadAsset" }] }] }),
    defineField({ name: "cta", title: "CTA", type: "cta" })
  ]
});

export const industryPage = defineType({
  name: "industryPage",
  title: "Industry page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({ name: "hero", title: "Hero", type: "mediaAsset" }),
    defineField({ name: "industryPainPoints", title: "Industry pain points", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "nfgSolutions", title: "NFG solutions", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "commonParts", title: "Common parts / applications", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "relevantMaterials", title: "Relevant materials", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "relevantCapabilities", title: "Relevant capabilities", type: "array", of: [{ type: "reference", to: [{ type: "capabilityPage" }] }] }),
    defineField({ name: "relatedSolutions", title: "Related solutions", type: "array", of: [{ type: "reference", to: [{ type: "solutionPage" }] }] }),
    defineField({ name: "relatedCaseStudies", title: "Related case studies", type: "array", of: [{ type: "reference", to: [{ type: "caseStudy" }] }] }),
    defineField({ name: "cta", title: "CTA", type: "cta" })
  ]
});

export const capabilityPage = defineType({
  name: "capabilityPage",
  title: "Capability page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    ...heroFields,
    defineField({ name: "capabilities", title: "Capabilities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "equipment", title: "Equipment", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "processes", title: "Processes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "materials", title: "Materials", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "mediaAsset" }] }),
    defineField({ name: "relatedSolutions", title: "Related solutions", type: "array", of: [{ type: "reference", to: [{ type: "solutionPage" }] }] }),
    defineField({ name: "cta", title: "CTA", type: "cta" })
  ]
});

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({ name: "clientNameDisplay", title: "Client name display", type: "string" }),
    defineField({
      name: "confidentialityStatus",
      title: "Confidentiality status",
      type: "string",
      options: { list: ["confidential", "approved summary only", "approved for publication"] },
      initialValue: "confidential"
    }),
    defineField({ name: "industry", title: "Industry", type: "reference", to: [{ type: "industryPage" }] }),
    defineField({ name: "problem", title: "Problem", type: "text", rows: 4 }),
    defineField({ name: "nfgApproach", title: "NFG approach", type: "text", rows: 4 }),
    defineField({ name: "manufacturingRoute", title: "Manufacturing route", type: "string" }),
    defineField({ name: "materials", title: "Materials", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "result", title: "Result", type: "text", rows: 4 }),
    defineField({ name: "images", title: "Images", type: "array", of: [{ type: "mediaAsset" }] }),
    defineField({ name: "relatedSolutions", title: "Related solutions", type: "array", of: [{ type: "reference", to: [{ type: "solutionPage" }] }] }),
    defineField({ name: "relatedCapabilities", title: "Related capabilities", type: "array", of: [{ type: "reference", to: [{ type: "capabilityPage" }] }] }),
    defineField({ name: "publishDate", title: "Publish date", type: "date" }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: false })
  ]
});

export const certificationOrAward = defineType({
  name: "certificationOrAward",
  title: "Certification or award",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "issuingBody", title: "Issuing body", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "certificateImage", title: "Certificate image", type: "image", options: { hotspot: true } }),
    defineField({ name: "certificatePdf", title: "Certificate PDF", type: "file" }),
    defineField({
      name: "verificationStatus",
      title: "Verification status",
      type: "string",
      options: { list: ["verified", "pending", "internal only"] },
      initialValue: "pending"
    }),
    defineField({ name: "displayOnHomepage", title: "Display on homepage", type: "boolean", initialValue: false }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" })
  ]
});

export const partner = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "relationshipType", title: "Relationship type", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "relatedSolution", title: "Related solution", type: "reference", to: [{ type: "solutionPage" }] }),
    defineField({ name: "websiteUrl", title: "Website URL", type: "url" }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" })
  ]
});

export const leader = defineType({
  name: "leader",
  title: "Leader",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "shortBio", title: "Short bio", type: "text", rows: 3 }),
    defineField({ name: "fullBio", title: "Full bio", type: "portableContent" }),
    defineField({ name: "areaOfResponsibility", title: "Area of responsibility", type: "string" }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 2 }),
    defineField({ name: "linkedIn", title: "LinkedIn", type: "url" }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" }),
    defineField({ name: "featuredOnHomepage", title: "Featured on homepage", type: "boolean", initialValue: false })
  ]
});

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Foundry knowledge", "Wear solutions", "Corrosion protection", "Reverse engineering", "Nigerian Content", "Digital transformation", "Industrial skills", "Additive manufacturing"] }
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "bodyPortableText", title: "Body", type: "portableContent" }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "publishDate", title: "Publish date", type: "date" }),
    defineField({ name: "relatedSolutions", title: "Related solutions", type: "array", of: [{ type: "reference", to: [{ type: "solutionPage" }] }] }),
    defineField({ name: "relatedIndustries", title: "Related industries", type: "array", of: [{ type: "reference", to: [{ type: "industryPage" }] }] })
  ]
});

export const downloadAsset = defineType({
  name: "downloadAsset",
  title: "Download asset",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "file", title: "File", type: "file", validation: (Rule) => Rule.required() }),
    defineField({ name: "thumbnail", title: "Thumbnail", type: "image", options: { hotspot: true } }),
    defineField({
      name: "gatedOrUngated",
      title: "Gated or ungated",
      type: "string",
      options: { list: ["gated", "ungated"] },
      initialValue: "ungated"
    }),
    defineField({ name: "relatedPage", title: "Related page", type: "reference", to: [{ type: "solutionPage" }, { type: "industryPage" }, { type: "capabilityPage" }] })
  ]
});

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", rows: 4 }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["RFQ process", "Reverse engineering", "Municipal castings", "Wear parts", "Corrosion protection", "3D printing", "Facility visits", "Delivery and quotations"] }
    }),
    defineField({ name: "relatedPage", title: "Related page", type: "reference", to: [{ type: "solutionPage" }, { type: "industryPage" }, { type: "capabilityPage" }] }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" })
  ]
});

export const educationPage = defineType({
  name: "educationPage",
  title: "Education page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({ name: "heroHeadline", title: "Hero headline", type: "string" }),
    defineField({ name: "heroSubheadline", title: "Hero subheadline", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "heroVideoOptional",
      title: "Hero video optional",
      type: "file",
      options: { accept: videoAccept }
    }),
    defineField({ name: "introSection", title: "Intro section", type: "portableContent" }),
    defineField({ name: "skillsCards", title: "Homepage skills cards", type: "array", of: [{ type: "skillsCard" }] }),
    defineField({ name: "universityPartnershipsReference", title: "University partnerships", type: "array", of: [{ type: "reference", to: [{ type: "universityPartnership" }] }] }),
    defineField({ name: "industrialTrainingSection", title: "Industrial training section", type: "portableContent" }),
    defineField({ name: "foundationSection", title: "Foundation section", type: "portableContent" }),
    defineField({ name: "tvetSection", title: "TVET section", type: "reference", to: [{ type: "tvetDevelopment" }] }),
    defineField({ name: "talentPipelineSection", title: "Talent pipeline section", type: "array", of: [{ type: "card" }] }),
    defineField({ name: "finalCta", title: "Final CTA", type: "cta" })
  ]
});

export const universityPartnership = defineType({
  name: "universityPartnership",
  title: "University partnership",
  type: "document",
  fields: [
    defineField({ name: "universityName", title: "University name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "universityName", maxLength: 96 },
      validation: (Rule) => Rule.required()
    }),
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "yearSigned", title: "Year signed", type: "string" }),
    defineField({
      name: "mouStatus",
      title: "MOU status",
      type: "string",
      options: { list: ["draft", "signed", "active", "inactive", "expired"] },
      initialValue: "draft"
    }),
    defineField({
      name: "collaborationType",
      title: "Collaboration type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          "Student industrial visits",
          "Industrial training placement",
          "Joint research interest",
          "Foundry awareness",
          "Engineering project support",
          "Additive manufacturing exposure",
          "Manufacturing problem-solving",
          "Guest lectures / technical sessions"
        ]
      }
    }),
    defineField({ name: "shortDescription", title: "Short description", type: "text", rows: 3 }),
    defineField({ name: "fullDescription", title: "Full description", type: "portableContent" }),
    defineField({ name: "photos", title: "Photos", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "relatedActivities", title: "Related activities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "relatedDownloads", title: "Related downloads", type: "array", of: [{ type: "reference", to: [{ type: "downloadAsset" }] }] }),
    defineField({ name: "displayOnHomepage", title: "Display on homepage", type: "boolean", initialValue: false }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" }),
    defineField({
      name: "verificationStatus",
      title: "Verification status",
      type: "string",
      options: { list: ["verified", "pending", "internalOnly"] },
      initialValue: "pending"
    })
  ]
});

export const industrialTrainingProgram = defineType({
  name: "industrialTrainingProgram",
  title: "Industrial training program",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "eligibleStudents", title: "Eligible students", type: "text", rows: 3 }),
    defineField({ name: "trainingAreas", title: "Training areas", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "durationOptions", title: "Duration options", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "requiredDocuments", title: "Required documents", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "applicationInstructions", title: "Application instructions", type: "text", rows: 4 }),
    defineField({ name: "contactEmail", title: "Contact email", type: "string" }),
    defineField({ name: "contactPhone", title: "Contact phone", type: "string" }),
    defineField({ name: "active", title: "Active", type: "boolean", initialValue: true }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] })
  ]
});

export const foundationInitiative = defineType({
  name: "foundationInitiative",
  title: "Foundation initiative",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    slugField,
    defineField({
      name: "initiativeStatus",
      title: "Initiative status",
      type: "string",
      options: { list: ["active", "planned", "completed"] },
      initialValue: "planned"
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "focusArea", title: "Focus area", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "beneficiaries", title: "Beneficiaries", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({ name: "images", title: "Images", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "documents", title: "Documents", type: "array", of: [{ type: "file" }] }),
    defineField({ name: "displayOnFoundationPage", title: "Display on foundation page", type: "boolean", initialValue: true }),
    defineField({ name: "displayOrder", title: "Display order", type: "number" })
  ]
});

export const tvetDevelopment = defineType({
  name: "tvetDevelopment",
  title: "TVET development",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "currentStatus",
      title: "Current status",
      type: "string",
      options: { list: ["planning", "applicationSubmitted", "accreditationInProgress", "accredited"] },
      initialValue: "planning"
    }),
    defineField({ name: "accreditationBody", title: "Accreditation body", type: "string" }),
    defineField({ name: "publicStatusText", title: "Public status text", type: "string", initialValue: "TVET development journey" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "skillAreas", title: "Skill areas", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "documents", title: "Documents", type: "array", of: [{ type: "file" }] }),
    defineField({ name: "images", title: "Images", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "managementApprovedForPublicDisplay", title: "Management approved for public display", type: "boolean", initialValue: false }),
    defineField({ name: "lastUpdated", title: "Last updated", type: "date" })
  ]
});
