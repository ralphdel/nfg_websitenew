import { cache } from "react";
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
  Gauge,
  GraduationCap,
  Hammer,
  HardHat,
  HelpCircle,
  Landmark,
  Layers3,
  ListChecks,
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
  TimerReset,
  Upload,
  Users,
  Waves,
  Wrench,
  Zap
} from "lucide-react";
import * as fallback from "@/data/siteContent";
import { sanityClient, projectId } from "@/lib/sanity.client";
import { allEditableContentQuery } from "@/lib/sanity.queries";

const iconMap = {
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
  Gauge,
  GraduationCap,
  Hammer,
  HardHat,
  HelpCircle,
  Landmark,
  Layers3,
  ListChecks,
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
  TimerReset,
  Upload,
  Users,
  Waves,
  Wrench,
  Zap
};

const typeBasePath = {
  solutionPage: "/solutions",
  industryPage: "/industries",
  capabilityPage: "/capabilities",
  blogPost: "/resources/insights"
};

const defaultVezappPoints = [
  {
    title: "Production tracking",
    icon: Gauge,
    body: "Create clearer visibility on where each order is in the process."
  },
  {
    title: "Quality checkpoints",
    icon: ClipboardCheck,
    body: "Record inspection and process data at defined stages."
  },
  {
    title: "Scheduling visibility",
    icon: TimerReset,
    body: "Reduce surprises and improve delivery planning."
  },
  {
    title: "Management accountability",
    icon: ListChecks,
    body: "Structured information improves follow-up and accountability."
  }
];

function hasItems(value) {
  return Array.isArray(value) && value.length > 0;
}

function normalizeSlug(slug) {
  if (!slug) return "";
  if (typeof slug === "string") return slug;
  return slug.current || "";
}

function iconFromName(value, fallbackIcon) {
  if (typeof value === "function") return value;
  if (!value || typeof value !== "string") return fallbackIcon;
  return iconMap[value] || iconMap[value.replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase())] || fallbackIcon;
}

function pathFromReference(reference) {
  const slug = normalizeSlug(reference?.slug);
  const basePath = typeBasePath[reference?._type];
  if (!slug || !basePath) return "";
  return `${basePath}/${slug}`;
}

export function normalizeCta(cta, fallbackCta) {
  const source = cta || fallbackCta;
  if (!source) return undefined;

  let href = source.href || "";

  if (!href) {
    if (source.linkType === "external") href = source.externalUrl || "";
    if (source.linkType === "file") href = source.fileReference?.asset?.url || "";
    if (source.linkType === "anchor") href = source.anchor?.startsWith("#") ? source.anchor : `#${source.anchor || ""}`;
    if (source.linkType === "email") href = source.emailAddress ? `mailto:${source.emailAddress}` : "";
    if (source.linkType === "whatsapp") href = source.whatsappNumber ? `https://wa.me/${source.whatsappNumber}` : "";
    if (source.linkType === "internal") href = pathFromReference(source.internalReference);
  }

  if (!href) {
    href =
      source.externalUrl ||
      pathFromReference(source.internalReference) ||
      source.fileReference?.asset?.url ||
      fallbackCta?.href ||
      "";
  }

  return {
    ...fallbackCta,
    ...source,
    label: source.label || fallbackCta?.label || "Learn more",
    href: href || "/"
  };
}

function normalizeMedia(media, fallbackMedia) {
  if (!media && !fallbackMedia) return undefined;

  const imageUrl = media?.image?.asset?.url || media?.imageUrl || media?.desktopImage;
  const mobileImageUrl = media?.mobileImage?.asset?.url || media?.mobileImage;
  const posterUrl = media?.posterImage?.asset?.url;
  const videoFileUrl = media?.videoFile?.asset?.url || media?.videoFileUrl;
  const videoUrl = media?.videoUrl || fallbackMedia?.videoUrl;
  const mediaType = media?.mediaType || fallbackMedia?.mediaType || (videoFileUrl || videoUrl ? "video" : "image");

  return {
    ...fallbackMedia,
    ...media,
    mediaType,
    desktopImage: imageUrl || fallbackMedia?.desktopImage || fallbackMedia?.image,
    mobileImage: mobileImageUrl || fallbackMedia?.mobileImage || fallbackMedia?.desktopImage,
    posterImage: posterUrl || fallbackMedia?.posterImage,
    videoFileUrl: videoFileUrl || fallbackMedia?.videoFileUrl,
    videoUrl,
    videoAspectRatio: media?.videoAspectRatio || fallbackMedia?.videoAspectRatio || "16 / 9",
    videoObjectFit: media?.videoObjectFit || fallbackMedia?.videoObjectFit || "cover",
    videoMaxWidth: media?.videoMaxWidth || fallbackMedia?.videoMaxWidth,
    videoAutoplay: media?.videoAutoplay ?? fallbackMedia?.videoAutoplay ?? true,
    altText: media?.altText || fallbackMedia?.altText || media?.caption || fallbackMedia?.caption || "NFG media",
    caption: media?.caption || fallbackMedia?.caption,
    overlayOpacity: media?.overlayOpacity ?? fallbackMedia?.overlayOpacity,
    theme: media?.theme || fallbackMedia?.theme || "foundry"
  };
}

function normalizeCard(card, fallbackCard = {}) {
  if (typeof card === "string") {
    return { title: card, description: card, body: card, href: fallbackCard.href };
  }

  const source = card || {};
  const link = normalizeCta(source.link, fallbackCard.link);
  const description = source.description || source.body || fallbackCard.description || fallbackCard.body || "";

  return {
    ...fallbackCard,
    ...source,
    title: source.title || fallbackCard.title || "",
    description,
    body: source.body || description,
    detail: source.detail || description,
    href: source.href || link?.href || fallbackCard.href || "/rfq",
    label: source.label || source.tag || fallbackCard.label,
    icon: iconFromName(source.icon, fallbackCard.icon),
    link
  };
}

function normalizeCards(cards, fallbackCards = []) {
  const source = hasItems(cards) ? cards : fallbackCards;
  return source.map((card, index) => normalizeCard(card, fallbackCards[index])).filter((card) => card.title);
}

function normalizeCollection(items, fallbackItems = [], normalizeItem, isValid = (item) => item.title) {
  const normalized = (hasItems(items) ? items : fallbackItems)
    .map((item, index) => normalizeItem(item, fallbackItems[index]))
    .filter(isValid);

  if (normalized.length) return normalized;

  return fallbackItems
    .map((item, index) => normalizeItem(item, fallbackItems[index]))
    .filter(isValid);
}

function normalizeStep(step, fallbackStep = {}) {
  const source = step || {};
  const description = source.description || source.body || fallbackStep.description || fallbackStep.body || "";

  return {
    ...fallbackStep,
    ...source,
    title: source.title || fallbackStep.title || "",
    description,
    body: source.body || description,
    icon: iconFromName(source.icon, fallbackStep.icon),
    details: source.details || fallbackStep.details || []
  };
}

function normalizeSteps(steps, fallbackSteps = []) {
  const source = hasItems(steps) ? steps : fallbackSteps;
  return source.map((step, index) => normalizeStep(step, fallbackSteps[index])).filter((step) => step.title);
}

function cardsToStrings(cards, fallbackItems = []) {
  if (!hasItems(cards)) return fallbackItems || [];
  return cards.map((card) => card.title || card.description).filter(Boolean);
}

function stepsToStrings(steps, fallbackItems = []) {
  if (!hasItems(steps)) return fallbackItems || [];
  return steps.map((step) => step.description || step.title).filter(Boolean);
}

function normalizeHeroSlides(slides, fallbackSlides = []) {
  const source = hasItems(slides) ? slides : fallbackSlides;

  return source
    .map((slide, index) => {
      const fallbackSlide = fallbackSlides[index] || {};
      return {
        ...fallbackSlide,
        ...slide,
        primaryCta: normalizeCta(slide?.primaryCta, fallbackSlide.primaryCta),
        secondaryCta: normalizeCta(slide?.secondaryCta, fallbackSlide.secondaryCta),
        media: normalizeMedia(slide?.media, fallbackSlide.media),
        featureCards: normalizeCards(slide?.featureCards, fallbackSlide.featureCards || []).map(({ icon, ...card }) => card),
        stats: Array.isArray(slide?.stats) ? slide.stats : hasItems(slides) ? [] : fallbackSlide.stats || []
      };
    })
    .filter((slide) => slide.headline);
}

function normalizeSolution(doc, fallbackDoc = {}) {
  const slug = normalizeSlug(doc?.slug) || fallbackDoc.slug;
  const customerProblems = cardsToStrings(doc?.customerProblems, fallbackDoc.customerProblems);
  const processSteps = stepsToStrings(doc?.processSteps, fallbackDoc.processSteps);

  return {
    ...fallbackDoc,
    ...doc,
    slug,
    title: doc?.title || fallbackDoc.title || "",
    navTitle: doc?.navTitle || fallbackDoc.navTitle,
    summary: doc?.summary || fallbackDoc.summary || "",
    hero: doc?.heroText || doc?.summary || fallbackDoc.hero || fallbackDoc.summary || "",
    media: normalizeMedia(doc?.hero, fallbackDoc.media),
    customerProblems,
    applications: doc?.applications || fallbackDoc.applications || [],
    materials: doc?.materials || fallbackDoc.materials || [],
    technologies: doc?.technologies || fallbackDoc.technologies || [],
    processSteps,
    relatedIndustries: doc?.relatedIndustries || fallbackDoc.relatedIndustries || [],
    relatedCaseStudies: doc?.relatedCaseStudies || fallbackDoc.relatedCaseStudies || [],
    cta: normalizeCta(doc?.cta, fallbackDoc.cta),
    icon: iconFromName(doc?.icon, fallbackDoc.icon)
  };
}

function normalizeIndustry(doc, fallbackDoc = {}) {
  const painCards = normalizeCards(doc?.industryPainPoints, []);
  const solutionCards = normalizeCards(doc?.nfgSolutions, []);
  const firstPain = painCards[0];
  const firstSolution = solutionCards[0];
  const slug = normalizeSlug(doc?.slug) || fallbackDoc.slug;

  return {
    ...fallbackDoc,
    ...doc,
    slug,
    title: doc?.title || fallbackDoc.title || "",
    pain: doc?.pain || firstPain?.description || firstPain?.title || fallbackDoc.pain || "",
    solution: doc?.solution || firstSolution?.description || firstSolution?.title || fallbackDoc.solution || "",
    media: normalizeMedia(doc?.hero, fallbackDoc.media),
    routes: doc?.routes || solutionCards.map((card) => card.title) || fallbackDoc.routes || [],
    commonParts: doc?.commonParts || fallbackDoc.commonParts || [],
    materials: doc?.materials || doc?.relevantMaterials || fallbackDoc.materials || [],
    relatedSolutions: doc?.relatedSolutions || fallbackDoc.relatedSolutions || [],
    relatedCaseStudies: doc?.relatedCaseStudies || fallbackDoc.relatedCaseStudies || [],
    cta: normalizeCta(doc?.cta, fallbackDoc.cta),
    icon: iconFromName(doc?.icon, fallbackDoc.icon)
  };
}

function normalizeCapability(doc, fallbackDoc = {}) {
  const slug = normalizeSlug(doc?.slug) || fallbackDoc.slug;

  return {
    ...fallbackDoc,
    ...doc,
    slug,
    title: doc?.title || fallbackDoc.title || "",
    body: doc?.body || doc?.summary || fallbackDoc.body || fallbackDoc.summary || "",
    summary: doc?.summary || fallbackDoc.summary || fallbackDoc.body || "",
    media: normalizeMedia(doc?.hero, fallbackDoc.media),
    capabilities: doc?.capabilities || fallbackDoc.capabilities || [],
    equipment: doc?.equipment || fallbackDoc.equipment || [],
    processes: doc?.processes || fallbackDoc.processes || [],
    materials: doc?.materials || fallbackDoc.materials || [],
    relatedSolutions: doc?.relatedSolutions || fallbackDoc.relatedSolutions || [],
    cta: normalizeCta(doc?.cta, fallbackDoc.cta),
    icon: iconFromName(doc?.icon, fallbackDoc.icon)
  };
}

function normalizeCertification(doc, fallbackDoc = {}) {
  return {
    ...fallbackDoc,
    ...doc,
    title: doc?.title || fallbackDoc.title || "",
    description: doc?.description || fallbackDoc.description || fallbackDoc.detail || "",
    detail: doc?.detail || doc?.description || fallbackDoc.detail || fallbackDoc.description || "",
    verificationStatus: doc?.verificationStatus || fallbackDoc.verificationStatus,
    displayOnHomepage: doc?.displayOnHomepage ?? fallbackDoc.displayOnHomepage
  };
}

function normalizeLeader(doc, fallbackDoc = {}) {
  return {
    ...fallbackDoc,
    ...doc,
    name: doc?.name || fallbackDoc.name || "",
    role: doc?.role || fallbackDoc.role || "",
    body: doc?.body || doc?.shortBio || fallbackDoc.body || "",
    featuredOnHomepage: doc?.featuredOnHomepage ?? fallbackDoc.featuredOnHomepage
  };
}

function normalizeCaseStudy(doc, fallbackDoc = {}) {
  return {
    ...fallbackDoc,
    ...doc,
    title: doc?.title || fallbackDoc.title || "",
    slug: normalizeSlug(doc?.slug) || fallbackDoc.slug,
    label: doc?.label || fallbackDoc.label || doc?.confidentialityStatus || "Selected project",
    industry: doc?.industry?.title || doc?.industry || fallbackDoc.industry,
    featured: doc?.featured ?? fallbackDoc.featured
  };
}

function normalizeDownload(doc, fallbackDoc = {}) {
  const fileUrl = doc?.file?.asset?.url || doc?.href || fallbackDoc.href;
  return {
    ...fallbackDoc,
    ...doc,
    title: doc?.title || fallbackDoc.title || "",
    href: fileUrl || "#"
  };
}

function normalizeFaq(doc, fallbackDoc = {}) {
  return {
    ...fallbackDoc,
    ...doc,
    question: doc?.question || fallbackDoc.question || "",
    answer: doc?.answer || fallbackDoc.answer || ""
  };
}

function normalizeBlogPost(doc, fallbackDoc = {}) {
  return {
    ...fallbackDoc,
    ...doc,
    title: doc?.title || fallbackDoc.title || "",
    slug: normalizeSlug(doc?.slug) || fallbackDoc.slug,
    excerpt: doc?.excerpt || fallbackDoc.excerpt || ""
  };
}

function normalizeSkillsCard(card, fallbackCard = {}) {
  const source = card || {};
  const link = normalizeCta(source.link, fallbackCard.link);
  const imageUrl = source.image?.asset?.url || source.image || fallbackCard.image;

  return {
    ...fallbackCard,
    ...source,
    title: source.title || fallbackCard.title || "",
    shortDescription: source.shortDescription || fallbackCard.shortDescription || source.description || "",
    points: source.points || fallbackCard.points || [],
    href: source.href || link?.href || fallbackCard.href || "/about/skills-education-foundation",
    cta: source.cta || link?.label || fallbackCard.cta || "Learn more",
    image: imageUrl,
    icon: iconFromName(source.icon, fallbackCard.icon),
    link
  };
}

function normalizeSkillsCards(cards, fallbackCards = []) {
  const source = hasItems(cards) ? cards : fallbackCards;
  return source.map((card, index) => normalizeSkillsCard(card, fallbackCards[index])).filter((card) => card.title);
}

function normalizeWearCards(cards, fallbackCards = []) {
  const source = hasItems(cards) ? cards : fallbackCards;
  return source.map((card, index) => {
    const normalized = normalizeCard(card, fallbackCards[index]);
    return {
      ...normalized,
      subtitle: normalized.subtitle || normalized.tag,
      useCases: normalized.useCases || normalized.details || (normalized.tag ? [normalized.tag] : [])
    };
  });
}

function normalizeCollections(raw = {}) {
  const siteSettings = {
    ...fallback.siteSettings,
    ...(raw.siteSettings || {}),
    globalCta: normalizeCta(raw.siteSettings?.globalCta, fallback.siteSettings.globalCta)
  };

  const solutions = normalizeCollection(raw.solutions, fallback.solutions, normalizeSolution, (item) => item.title && item.slug);
  const industries = normalizeCollection(raw.industries, fallback.industries, normalizeIndustry, (item) => item.title && item.slug);
  const capabilities = normalizeCollection(raw.capabilities, fallback.capabilities, normalizeCapability, (item) => item.title && item.slug);
  const certifications = normalizeCollection(raw.certifications, fallback.certifications, normalizeCertification);
  const leadership = normalizeCollection(raw.leaders, fallback.leadership, normalizeLeader, (item) => item.name);
  const caseStudies = normalizeCollection(raw.caseStudies, fallback.caseStudies, normalizeCaseStudy, (item) => item.title && item.slug);
  const downloads = normalizeCollection(raw.downloads, fallback.downloads, normalizeDownload);
  const faqs = normalizeCollection(raw.faqs, fallback.faqs, normalizeFaq, (item) => item.question);
  const blogPosts = normalizeCollection(raw.blogPosts, fallback.blogPosts, normalizeBlogPost, (item) => item.title && item.slug);

  const homepage = raw.homepage || {};

  return {
    source: raw.source || "fallback",
    siteSettings,
    solutions,
    industries,
    capabilities,
    certifications,
    leadership,
    caseStudies,
    downloads,
    faqs,
    blogPosts,
    homepage: {
      heroSlides: normalizeHeroSlides(homepage.heroSlides, fallback.heroSlides),
      trustBadges: normalizeCards(
        homepage.trustBadges,
        certifications.filter((item) => item.displayOnHomepage).length
          ? certifications.filter((item) => item.displayOnHomepage)
          : fallback.trustBadges
      ),
      problems: normalizeCards(homepage.problemSection, fallback.problemCards),
      methodSteps: normalizeSteps(homepage.methodSteps, fallback.processSteps),
      solutions: normalizeCollection(homepage.solutionCards, solutions, normalizeSolution, (item) => item.title && item.slug),
      industries: normalizeCollection(homepage.industryCards, industries, normalizeIndustry, (item) => item.title && item.slug),
      capabilities,
      wearComparison: normalizeWearCards(homepage.wearComparison, fallback.wearComparison),
      reverseEngineeringHighlights: hasItems(homepage.reverseEngineeringHighlight)
        ? stepsToStrings(homepage.reverseEngineeringHighlight, fallback.reverseEngineeringHighlights)
        : fallback.reverseEngineeringHighlights,
      nigerianContent: normalizeCards(homepage.nigerianContentSection, fallback.partnerships),
      skillsEducation: normalizeSkillsCards(homepage.skillsEducationSection, fallback.skillsEducationCards),
      vezapp: normalizeCards(homepage.vezappSection, defaultVezappPoints),
      certifications: normalizeCollection(
        homepage.certificationsSection,
        certifications.filter((item) => item.displayOnHomepage),
        normalizeCertification
      ),
      caseStudies: normalizeCollection(
        homepage.caseStudyReferences,
        caseStudies.filter((item) => item.featured),
        normalizeCaseStudy,
        (item) => item.title && item.slug
      ),
      leadership: normalizeCollection(
        homepage.leadershipReferences,
        leadership.filter((item) => item.featuredOnHomepage !== false),
        normalizeLeader,
        (item) => item.name
      ),
      finalCta: normalizeCta(homepage.finalCta)
    }
  };
}

function pageNavItem(page, basePath, description) {
  return {
    label: page.navTitle || page.title,
    href: `${basePath}/${page.slug}`,
    description: page.summary || page.body || page.pain || description || ""
  };
}

function buildNavigation(content) {
  return fallback.navItems.map((group) => {
    if (group.label === "Solutions") {
      return { ...group, items: content.solutions.map((page) => pageNavItem(page, "/solutions")) };
    }
    if (group.label === "Industries") {
      return { ...group, items: content.industries.map((page) => pageNavItem(page, "/industries")) };
    }
    if (group.label === "Capabilities") {
      return { ...group, items: content.capabilities.map((page) => pageNavItem(page, "/capabilities")) };
    }
    return group;
  });
}

function buildFooterNavigation(content) {
  return fallback.footerNavigation.map((group) => {
    if (group.title === "Solutions") {
      return {
        ...group,
        links: content.solutions.slice(0, 6).map((page) => ({ label: page.navTitle || page.title, href: `/solutions/${page.slug}` }))
      };
    }
    if (group.title === "Industries") {
      return {
        ...group,
        links: content.industries.slice(0, 6).map((page) => ({ label: page.title, href: `/industries/${page.slug}` }))
      };
    }
    return group;
  });
}

async function fetchEditableContent() {
  if (!projectId || projectId === "replace-me") return { source: "fallback" };

  const maxRetries = 2;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const data = await sanityClient.fetch(allEditableContentQuery, {}, { next: { revalidate: 60 } });

      if (!data || (!data.homepage && !data.siteSettings)) {
        console.warn(`Sanity returned empty data on attempt ${attempt}/${maxRetries}`);
        if (attempt < maxRetries) continue;
        return { source: "fallback" };
      }

      return { ...data, source: "sanity" };
    } catch (error) {
      console.warn(`Sanity fetch attempt ${attempt}/${maxRetries} failed:`, error.message || error);
      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    }
  }

  console.warn("All Sanity fetch attempts failed; using local fallback content.");
  return { source: "fallback" };
}

export const getEditableContent = cache(async () => normalizeCollections(await fetchEditableContent()));

export async function getLayoutContent() {
  const content = await getEditableContent();
  return {
    siteSettings: content.siteSettings,
    navItems: buildNavigation(content),
    footerNavigation: buildFooterNavigation(content),
    trustBadges: content.homepage.trustBadges
  };
}

export async function getHomepageContent() {
  const content = await getEditableContent();
  return {
    ...content.homepage,
    siteSettings: content.siteSettings
  };
}

export async function getSiteSettings() {
  const content = await getEditableContent();
  return content.siteSettings;
}

export async function getSolutions() {
  const content = await getEditableContent();
  return content.solutions;
}

export async function getIndustries() {
  const content = await getEditableContent();
  return content.industries;
}

export async function getCapabilities() {
  const content = await getEditableContent();
  return content.capabilities;
}

export async function getCertifications() {
  const content = await getEditableContent();
  return content.certifications;
}

export async function getLeadership() {
  const content = await getEditableContent();
  return content.leadership;
}

export async function getResourcesContent() {
  const content = await getEditableContent();
  return {
    resourcePages: fallback.resourcePages,
    caseStudies: content.caseStudies,
    downloads: content.downloads,
    faqs: content.faqs,
    blogPosts: content.blogPosts
  };
}

export async function getSolutionBySlug(slug) {
  const solutions = await getSolutions();
  return solutions.find((item) => item.slug === slug);
}

export async function getIndustryBySlug(slug) {
  const industries = await getIndustries();
  return industries.find((item) => item.slug === slug);
}

export async function getCapabilityBySlug(slug) {
  const capabilities = await getCapabilities();
  return capabilities.find((item) => item.slug === slug);
}
