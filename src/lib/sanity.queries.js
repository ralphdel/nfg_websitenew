export const imageFields = `
  mediaType,
  image{..., asset->{url}},
  mobileImage{..., asset->{url}},
  video{asset->{playbackId, assetId}},
  videoFile{asset->{url}},
  videoUrl,
  posterImage{..., asset->{url}},
  videoAspectRatio,
  videoObjectFit,
  videoMaxWidth,
  videoAutoplay,
  altText,
  caption,
  theme,
  overlayOpacity,
  focalPoint
`;

export const ctaFields = `
  label,
  href,
  linkType,
  internalReference->{_type, title, slug},
  externalUrl,
  fileReference{asset->{url}},
  anchor,
  emailAddress,
  whatsappNumber,
  style
`;

export const cardFields = `
  title,
  subtitle,
  description,
  icon,
  image{..., asset->{url}},
  link{${ctaFields}},
  tag,
  details,
  useCases,
  displayOrder
`;

export const processStepFields = `
  stepNumber,
  title,
  description,
  icon,
  details
`;

export const skillsCardFields = `
  title,
  shortDescription,
  points,
  icon,
  image{..., asset->{url}},
  link{${ctaFields}},
  displayOrder,
  active
`;

export const heroSlideFields = `
  eyebrow,
  headline,
  subheadline,
  supportText,
  media{${imageFields}},
  primaryCta{${ctaFields}},
  secondaryCta{${ctaFields}},
  featureCards[]{${cardFields}},
  stats,
  displayOrder,
  active
`;

export const certificationFields = `
  _id,
  _type,
  title,
  issuingBody,
  year,
  category,
  description,
  logo{..., asset->{url}},
  certificateImage{..., asset->{url}},
  certificatePdf{asset->{url}},
  verificationStatus,
  displayOnHomepage,
  displayOrder
`;

export const leaderFields = `
  _id,
  _type,
  name,
  role,
  photo{..., asset->{url}},
  shortBio,
  areaOfResponsibility,
  quote,
  linkedIn,
  displayOrder,
  featuredOnHomepage
`;

export const solutionPageFields = `
  _id,
  _type,
  title,
  navTitle,
  slug,
  seo,
  hero{${imageFields}},
  summary,
  customerProblems[]{${cardFields}},
  applications,
  materials,
  technologies,
  processSteps[]{${processStepFields}},
  gallery[]{${imageFields}},
  relatedIndustries[]->{_id, _type, title, slug, summary, commonParts},
  relatedCaseStudies[]->{_id, _type, title, slug},
  downloads[]->{_id, _type, title, category},
  cta{${ctaFields}}
`;

export const industryPageFields = `
  _id,
  _type,
  title,
  slug,
  seo,
  hero{${imageFields}},
  industryPainPoints[]{${cardFields}},
  nfgSolutions[]{${cardFields}},
  commonParts,
  relevantMaterials,
  relevantCapabilities[]->{_id, _type, title, slug, summary},
  relatedSolutions[]->{_id, _type, title, slug, summary, technologies},
  relatedCaseStudies[]->{_id, _type, title, slug},
  cta{${ctaFields}}
`;

export const capabilityPageFields = `
  _id,
  _type,
  title,
  slug,
  seo,
  hero{${imageFields}},
  summary,
  capabilities,
  equipment,
  processes,
  materials,
  gallery[]{${imageFields}},
  relatedSolutions[]->{_id, _type, title, slug, summary, technologies},
  cta{${ctaFields}}
`;

export const caseStudyFields = `
  _id,
  _type,
  title,
  slug,
  seo,
  clientNameDisplay,
  confidentialityStatus,
  industry->{_id, _type, title, slug},
  problem,
  nfgApproach,
  manufacturingRoute,
  materials,
  result,
  images[]{${imageFields}},
  relatedSolutions[]->{_id, _type, title, slug},
  relatedCapabilities[]->{_id, _type, title, slug},
  publishDate,
  featured
`;

export const downloadFields = `
  _id,
  _type,
  title,
  category,
  description,
  file{asset->{url}},
  thumbnail{..., asset->{url}},
  gatedOrUngated,
  relatedPage->{_id, _type, title, slug}
`;

export const faqFields = `
  _id,
  _type,
  question,
  answer,
  category,
  relatedPage->{_id, _type, title, slug},
  displayOrder
`;

export const homepageQuery = `
*[_type == "homepage"][0]{
  title,
  seo,
  heroSlides[active != false] | order(displayOrder asc){${heroSlideFields}},
  trustBadges[]{
    ${cardFields},
    _type == "reference" => @->{${certificationFields}}
  },
  problemSection[]{${cardFields}},
  methodSteps[]{${processStepFields}},
  solutionCards[]->{${solutionPageFields}},
  industryCards[]->{${industryPageFields}},
  wearComparison[]{${cardFields}},
  reverseEngineeringHighlight[]{${processStepFields}},
  nigerianContentSection[]{${cardFields}},
  skillsEducationSection[active != false] | order(displayOrder asc){${skillsCardFields}},
  vezappSection[]{${cardFields}},
  certificationsSection[]->{${certificationFields}},
  caseStudyReferences[]->{${caseStudyFields}},
  leadershipReferences[]->{${leaderFields}},
  finalCta{${ctaFields}}
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  ...,
  globalCta{${ctaFields}},
  defaultOgImage{..., asset->{url}}
}`;

export const navigationSettingsQuery = `*[_type == "navigationSettings"][0]`;
export const solutionPagesQuery = `*[_type == "solutionPage" && defined(slug.current)] | order(title asc){${solutionPageFields}}`;
export const industryPagesQuery = `*[_type == "industryPage" && defined(slug.current)] | order(title asc){${industryPageFields}}`;
export const capabilityPagesQuery = `*[_type == "capabilityPage" && defined(slug.current)] | order(title asc){${capabilityPageFields}}`;
export const certificationsQuery = `*[_type == "certificationOrAward"] | order(displayOrder asc, title asc){${certificationFields}}`;
export const leadersQuery = `*[_type == "leader"] | order(displayOrder asc, name asc){${leaderFields}}`;
export const caseStudiesQuery = `*[_type == "caseStudy" && defined(slug.current)] | order(publishDate desc, title asc){${caseStudyFields}}`;
export const downloadsQuery = `*[_type == "downloadAsset"] | order(title asc){${downloadFields}}`;
export const faqsQuery = `*[_type == "faq"] | order(displayOrder asc, question asc){${faqFields}}`;
export const blogPostsQuery = `*[_type == "blogPost" && defined(slug.current)] | order(publishDate desc, title asc){
  _id,
  _type,
  title,
  slug,
  category,
  excerpt,
  coverImage{..., asset->{url}},
  author,
  publishDate
}`;
export const educationPageQuery = `*[_type == "educationPage" && slug.current == $slug][0]`;
export const universityPartnershipsQuery = `*[_type == "universityPartnership"] | order(displayOrder asc, universityName asc)`;
export const industrialTrainingProgramsQuery = `*[_type == "industrialTrainingProgram" && active == true] | order(displayOrder asc, title asc)`;
export const foundationInitiativesQuery = `*[_type == "foundationInitiative" && displayOnFoundationPage == true] | order(displayOrder asc, title asc)`;
export const tvetDevelopmentQuery = `*[_type == "tvetDevelopment"][0]`;

export const allEditableContentQuery = `{
  "siteSettings": ${siteSettingsQuery},
  "homepage": ${homepageQuery},
  "solutions": ${solutionPagesQuery},
  "industries": ${industryPagesQuery},
  "capabilities": ${capabilityPagesQuery},
  "certifications": ${certificationsQuery},
  "leaders": ${leadersQuery},
  "caseStudies": ${caseStudiesQuery},
  "downloads": ${downloadsQuery},
  "faqs": ${faqsQuery},
  "blogPosts": ${blogPostsQuery}
}`;
