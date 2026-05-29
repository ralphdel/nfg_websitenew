import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@sanity/client";
import {
  AlertTriangle,
  Anchor,
  Award,
  BadgeCheck,
  Bolt,
  BookOpen,
  Boxes,
  Building2,
  CalendarDays,
  CircleCheck,
  ClipboardCheck,
  Clock3,
  Cog,
  Download,
  Factory,
  FileQuestion,
  FileSearch,
  FileText,
  Flame,
  GraduationCap,
  Hammer,
  HardHat,
  HelpCircle,
  Landmark,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Pickaxe,
  Radar,
  Route,
  ScanLine,
  Send,
  Settings,
  ShieldCheck,
  Ship,
  Upload,
  Users,
  Waves,
  Wrench,
  Zap
} from "lucide-react";
import * as content from "../src/data/siteContent.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const replaceExisting = process.argv.includes("--replace");

loadEnvFile(path.join(rootDir, ".env.local"));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "3hx8h0xy";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-06";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN. Create a Sanity token with write access, add it to .env.local, then rerun npm run sanity:seed.");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const iconNames = new Map(
  Object.entries({
    AlertTriangle,
    Anchor,
    Award,
    BadgeCheck,
    Bolt,
    BookOpen,
    Boxes,
    Building2,
    CalendarDays,
    CircleCheck,
    ClipboardCheck,
    Clock3,
    Cog,
    Download,
    Factory,
    FileQuestion,
    FileSearch,
    FileText,
    Flame,
    GraduationCap,
    Hammer,
    HardHat,
    HelpCircle,
    Landmark,
    Layers3,
    Mail,
    MapPin,
    MessageCircle,
    Microscope,
    Phone,
    Pickaxe,
    Radar,
    Route,
    ScanLine,
    Send,
    Settings,
    ShieldCheck,
    Ship,
    Upload,
    Users,
    Waves,
    Wrench,
    Zap
  }).map(([name, icon]) => [icon, name])
);

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  for (const line of fs.readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function key(prefix, index) {
  return `${prefix}-${String(index + 1).padStart(2, "0")}`;
}

function iconName(icon) {
  return iconNames.get(icon);
}

function ref(type, slug, keyValue) {
  return {
    _key: keyValue,
    _type: "reference",
    _ref: `${type}.${slug}`
  };
}

function toCta(cta) {
  if (!cta) return undefined;
  const href = cta.href || cta.externalUrl || "";

  return {
    _type: "cta",
    label: cta.label || "Learn more",
    href,
    linkType: href.startsWith("mailto:") ? "email" : href.startsWith("https://wa.me") ? "whatsapp" : href.startsWith("#") ? "anchor" : "internal",
    style: cta.style || "primary"
  };
}

function toMedia(media) {
  if (!media) return undefined;

  return {
    _type: "mediaAsset",
    mediaType: media.mediaType || "image",
    altText: media.altText || media.caption || "NFG media",
    caption: media.caption,
    theme: media.theme || "foundry",
    overlayOpacity: media.overlayOpacity ?? 0.68,
    focalPoint: media.focalPoint
  };
}

function toSpecificationTable(table) {
  if (!table) return undefined;
  return {
    title: table.title,
    rows: (table.rows || []).map((row, rowIndex) => ({
      _key: `row-${rowIndex + 1}`,
      label: row.label,
      value: row.value
    }))
  };
}

function toHeroSlide(slide, keyValue, index = 0) {
  return {
    _key: keyValue,
    _type: "heroSlide",
    eyebrow: slide.eyebrow,
    headline: slide.headline,
    subheadline: slide.subheadline,
    supportText: slide.supportText,
    media: toMedia(slide.media),
    primaryCta: toCta(slide.primaryCta),
    secondaryCta: toCta(slide.secondaryCta),
    featureCards: (slide.featureCards || []).map((card, cardIndex) => toCard(card, key("feature", cardIndex))),
    stats: slide.stats,
    specificationTable: toSpecificationTable(slide.specificationTable),
    displayOrder: slide.displayOrder || index + 1,
    active: slide.active ?? true
  };
}

function toCard(card, keyValue) {
  if (typeof card === "string") {
    return { _key: keyValue, _type: "card", title: card, description: card };
  }

  return {
    _key: keyValue,
    _type: "card",
    title: card.title || card.label || "Content card",
    subtitle: card.subtitle,
    description: card.description || card.body || card.detail || card.summary,
    icon: iconName(card.icon),
    tag: card.tag || card.label,
    details: card.details,
    useCases: card.useCases,
    link: toCta(card.link || (card.href ? { label: card.cta || "Learn more", href: card.href } : undefined)),
    displayOrder: card.displayOrder
  };
}

function toHomepageSupportCard(card) {
  return {
    title: card?.title,
    subtitle: card?.subtitle,
    body: card?.body,
    bullets: card?.bullets,
    cta: toCta(card?.cta)
  };
}

function toSignatureUptimeSection(section) {
  if (!section) return undefined;

  return {
    _type: "signatureUptimeSection",
    conceptName: section.conceptName,
    anchorId: section.anchorId,
    eyebrow: section.eyebrow,
    headline: section.headline,
    introText: section.introText,
    positioningStatement: section.positioningStatement,
    strategicMessage: section.strategicMessage,
    primaryCta: toCta(section.primaryCta),
    secondaryCta: toCta(section.secondaryCta),
    plannedSupportTitle: section.plannedSupportTitle,
    plannedSupportSubtitle: section.plannedSupportSubtitle,
    plannedSupportBody: section.plannedSupportBody,
    plannedSupportBullets: section.plannedSupportBullets,
    plannedSupportCta: toCta(section.plannedSupportCta),
    emergencySupportTitle: section.emergencySupportTitle,
    emergencySupportSubtitle: section.emergencySupportSubtitle,
    emergencySupportBody: section.emergencySupportBody,
    emergencySupportBullets: section.emergencySupportBullets,
    emergencySupportCta: toCta(section.emergencySupportCta),
    hiddenCostHeadline: section.hiddenCostHeadline,
    hiddenCostBody: section.hiddenCostBody,
    stockingHeadline: section.stockingHeadline,
    stockingBody: section.stockingBody,
    stockingBullets: section.stockingBullets,
    stockingCta: toCta(section.stockingCta),
    homepage: section.homepage
      ? {
          sectionId: section.homepage.sectionId,
          eyebrow: section.homepage.eyebrow,
          headline: section.homepage.headline,
          body: section.homepage.body,
          plannedCard: toHomepageSupportCard(section.homepage.plannedCard),
          emergencyCard: toHomepageSupportCard(section.homepage.emergencyCard)
        }
      : undefined,
    routesBanner: section.routesBanner
      ? {
          headline: section.routesBanner.headline,
          body: section.routesBanner.body
        }
      : undefined,
    strip: section.strip
      ? {
          title: section.strip.title,
          body: section.strip.body,
          primaryCta: toCta(section.strip.primaryCta),
          secondaryCta: toCta(section.strip.secondaryCta)
        }
      : undefined,
    displayOnHomepage: section.displayOnHomepage,
    displayOnSolutionsPage: section.displayOnSolutionsPage,
    displayOnSolutionPages: section.displayOnSolutionPages
  };
}

function toRtqFormConfig(config) {
  if (!config) return undefined;

  return {
    _type: "rtqFormConfig",
    enableQueryParameterPrefill: config.enableQueryParameterPrefill,
    supportTypeOptions: (config.supportTypeOptions || []).map((option, index) => ({
      _key: key("support-type", index),
      label: option.label,
      value: option.value,
      description: option.description,
      defaultGuidance: option.defaultGuidance
    })),
    plannedSupportFields: config.plannedSupportFields,
    emergencySupportFields: config.emergencySupportFields
  };
}

function toProcessStep(step, keyValue, index) {
  if (typeof step === "string") {
    return {
      _key: keyValue,
      _type: "processStep",
      stepNumber: index + 1,
      title: `Step ${index + 1}`,
      description: step
    };
  }

  return {
    _key: keyValue,
    _type: "processStep",
    stepNumber: step.stepNumber || index + 1,
    title: step.title || `Step ${index + 1}`,
    description: step.description || step.body,
    icon: iconName(step.icon),
    details: step.details
  };
}

function toSkillCard(card, keyValue, index) {
  return {
    _key: keyValue,
    _type: "skillsCard",
    title: card.title,
    shortDescription: card.shortDescription || card.body,
    points: card.points,
    icon: iconName(card.icon),
    link: toCta(card.href ? { label: card.cta || "Learn more", href: card.href } : undefined),
    displayOrder: card.displayOrder || index + 1,
    active: card.active ?? true
  };
}

function slugField(slug) {
  return { _type: "slug", current: slug };
}

const solutionDocs = content.solutions.map((item) => ({
  _id: `solutionPage.${item.slug}`,
  _type: "solutionPage",
  title: item.title,
  navTitle: item.navTitle,
  slug: slugField(item.slug),
  summary: item.summary,
  customerProblems: (item.customerProblems || []).map((problem, index) => toCard(problem, key("problem", index))),
  applications: item.applications,
  materials: item.materials,
  technologies: item.technologies,
  processSteps: (item.processSteps || []).map((step, index) => toProcessStep(step, key("process", index), index)),
  relatedIndustries: (item.relatedIndustries || []).map((slug, index) => ref("industryPage", slug, key("industry", index))),
  cta: toCta(item.cta)
}));

const industryDocs = content.industries.map((item) => ({
  _id: `industryPage.${item.slug}`,
  _type: "industryPage",
  title: item.title,
  slug: slugField(item.slug),
  industryPainPoints: [toCard({ title: "Pain", description: item.pain, icon: item.icon }, "pain-01")],
  nfgSolutions: [
    toCard({ title: "NFG fit", description: item.solution }, "solution-01"),
    ...(item.routes || []).map((route, index) => toCard(route, key("route", index)))
  ],
  commonParts: item.commonParts,
  relevantMaterials: item.materials,
  relatedSolutions: (item.relatedSolutions || []).map((slug, index) => ref("solutionPage", slug, key("solution", index))),
  cta: toCta(item.cta)
}));

const capabilityDocs = content.capabilities.map((item) => ({
  _id: `capabilityPage.${item.slug}`,
  _type: "capabilityPage",
  title: item.title,
  slug: slugField(item.slug),
  summary: item.body,
  capabilities: item.capabilities,
  equipment: item.equipment,
  processes: item.processes,
  materials: item.materials,
  cta: toCta(item.cta)
}));

const certificationDocs = content.certifications.map((item) => ({
  _id: `certificationOrAward.${slugify(item.title)}`,
  _type: "certificationOrAward",
  ...item
}));

const leaderDocs = content.leadership.map((item) => ({
  _id: `leader.${slugify(item.name)}`,
  _type: "leader",
  name: item.name,
  role: item.role,
  shortBio: item.body,
  areaOfResponsibility: item.areaOfResponsibility,
  quote: item.quote,
  displayOrder: item.displayOrder,
  featuredOnHomepage: item.featuredOnHomepage
}));

const caseStudyDocs = content.caseStudies.map((item) => ({
  _id: `caseStudy.${item.slug}`,
  _type: "caseStudy",
  title: item.title,
  slug: slugField(item.slug),
  clientNameDisplay: item.clientNameDisplay,
  confidentialityStatus: item.confidentialityStatus,
  problem: item.problem,
  nfgApproach: item.nfgApproach,
  manufacturingRoute: item.manufacturingRoute,
  materials: item.materials,
  result: item.result,
  featured: item.featured
}));

const blogDocs = content.blogPosts.map((item) => ({
  _id: `blogPost.${slugify(item.title)}`,
  _type: "blogPost",
  title: item.title,
  slug: slugField(slugify(item.title)),
  category: item.category,
  excerpt: item.excerpt,
  publishDate: item.publishDate
}));

const downloadDocs = content.downloads.map((item) => ({
  _id: `downloadAsset.${slugify(item.title)}`,
  _type: "downloadAsset",
  title: item.title,
  category: item.category,
  description: item.description
}));

const faqDocs = content.faqs.map((item) => ({
  _id: `faq.${slugify(item.question)}`,
  _type: "faq",
  question: item.question,
  answer: item.answer,
  category: item.category
}));

const universityDocs = content.universityPartnerships.map((item) => ({
  _id: `universityPartnership.${item.slug}`,
  _type: "universityPartnership",
  universityName: item.universityName,
  slug: slugField(item.slug),
  location: item.location,
  yearSigned: item.yearSigned,
  mouStatus: item.mouStatus,
  collaborationType: item.collaborationType,
  shortDescription: item.shortDescription,
  displayOnHomepage: item.displayOnHomepage,
  displayOrder: item.displayOrder,
  verificationStatus: item.verificationStatus
}));

const siteSettingsDoc = {
  _id: "siteSettings",
  _type: "siteSettings",
  ...content.siteSettings,
  globalCta: toCta(content.siteSettings.globalCta)
};

const signatureUptimeSolutionDoc = {
  _id: "signatureUptimeSolution",
  _type: "signatureUptimeSolution",
  title: "NFG Signature Uptime Solution",
  active: true,
  heroSlide: toHeroSlide(content.signatureUptimeHeroSlide, "signature-hero-01", 1),
  signatureUptimeSection: toSignatureUptimeSection(content.signatureUptimeSection),
  rtqFormConfig: toRtqFormConfig(content.rtqFormConfig)
};

const solutionsOverviewPageDoc = {
  _id: "solutionsOverviewPage",
  _type: "solutionsOverviewPage",
  title: "Solutions overview page",
  eyebrow: content.solutionsOverviewPage.eyebrow,
  headline: content.solutionsOverviewPage.headline,
  body: content.solutionsOverviewPage.body,
  primaryCta: toCta(content.solutionsOverviewPage.primaryCta),
  secondaryCta: toCta(content.solutionsOverviewPage.secondaryCta),
  signatureUptimeSection: toSignatureUptimeSection(content.signatureUptimeSection)
};

const tvetDoc = {
  _id: "tvetDevelopment",
  _type: "tvetDevelopment",
  title: "TVET development journey",
  ...content.skillsEducationPage.tvetStatus,
  skillAreas: content.tvetSkillAreas
};

const homepageDoc = {
  _id: "homepage",
  _type: "homepage",
  title: "Homepage",
  heroSlides: content.heroSlides.map((slide, index) => toHeroSlide(slide, key("hero", index), index)),
  trustBadges: content.trustBadges.map((card, index) => toCard(card, key("trust", index))),
  problemSection: content.problemCards.map((card, index) => toCard(card, key("problem", index))),
  methodSteps: content.methodSteps.map((step, index) => toProcessStep(step, key("method", index), index)),
  solutionCards: content.solutions.map((item, index) => ref("solutionPage", item.slug, key("solution", index))),
  industryCards: content.industries.map((item, index) => ref("industryPage", item.slug, key("industry", index))),
  wearComparison: content.wearComparison.map((card, index) => toCard(card, key("wear", index))),
  reverseEngineeringHighlight: content.reverseEngineeringHighlights.map((step, index) => toProcessStep(step, key("reverse", index), index)),
  nigerianContentSection: content.nigerianContentCards.map((card, index) => toCard(card, key("nigerian-content", index))),
  skillsEducationSection: content.skillsEducationCards.map((card, index) => toSkillCard(card, key("skills", index), index)),
  certificationsSection: content.certifications.filter((item) => item.displayOnHomepage).map((item, index) => ref("certificationOrAward", slugify(item.title), key("certification", index))),
  caseStudyReferences: content.caseStudies.filter((item) => item.featured).map((item, index) => ref("caseStudy", item.slug, key("case-study", index))),
  leadershipReferences: content.leadership.map((item, index) => ref("leader", slugify(item.name), key("leader", index))),
  finalCta: toCta(content.siteSettings.globalCta)
};

const documents = [
  siteSettingsDoc,
  signatureUptimeSolutionDoc,
  solutionsOverviewPageDoc,
  ...industryDocs,
  ...capabilityDocs,
  ...certificationDocs,
  ...leaderDocs,
  ...caseStudyDocs,
  ...solutionDocs,
  ...blogDocs,
  ...downloadDocs,
  ...faqDocs,
  ...universityDocs,
  tvetDoc,
  homepageDoc
];

const transaction = client.transaction();

for (const document of documents) {
  if (replaceExisting) {
    transaction.createOrReplace(document);
  } else {
    transaction.createIfNotExists(document);
  }
}

await transaction.commit();

for (const document of documents) {
  console.log(`${replaceExisting ? "Upserted" : "Created if missing"} ${document._id}`);
}

console.log(`Seed complete: ${documents.length} documents committed to Sanity project ${projectId}, dataset ${dataset}.`);
