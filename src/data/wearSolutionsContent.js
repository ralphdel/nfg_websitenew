import { Boxes, Factory, HardHat, Layers3, ShieldCheck } from "lucide-react";
import { signatureUptimeSection as baseSignatureUptimeSection } from "@/data/siteContent";

export const wearOverviewRouteRows = [
  {
    problem: "Crusher impact, rock-on-metal shock",
    route: "Wear Castings",
    href: "/solutions/wear-part-solutions/wear-castings"
  },
  {
    problem: "Cement/mining liners and cast parts",
    route: "Manganese, high-chrome, Ni-Hard, moly-chrome",
    href: "/solutions/wear-part-solutions/wear-castings"
  },
  {
    problem: "Buckets, truck bodies, chutes, fabricated wear parts",
    route: "Hardox® wear solutions",
    href: "/solutions/wear-part-solutions/hardox-wear-solutions"
  },
  {
    problem: "Severe sliding abrasion",
    route: "Enduraclad® CCO",
    href: "/solutions/wear-part-solutions/enduraclad-cco-hardfacing"
  },
  {
    problem: "Sticky material / poor flow",
    route: "Enduraclad® SUPERFLOW®",
    href: "/solutions/wear-part-solutions/enduraclad-cco-hardfacing"
  },
  {
    problem: "VRM roller/table wear",
    route: "Enduraclad® VRM hardfacing route",
    href: "/solutions/wear-part-solutions/enduraclad-cco-hardfacing"
  },
  {
    problem: "Plant unit repair or modification",
    route: "Machining + fabrication + wear route",
    href: "/rtq"
  }
];

export const wearOverviewPage = {
  metaTitle: "Wear Part Solutions | Nigerian Foundries Group",
  metaDescription:
    "Choose the right wear route for cement, mining, quarries and dredging applications: wear castings, Hardox® wear solutions, Enduraclad® CCO, machining and fabrication.",
  hero: {
    eyebrow: "Wear Part Solutions Overview",
    title: "Choose the Right Wear Route Before You Choose the Material.",
    body:
      "Wear can come from impact, sliding abrasion, gouging, corrosion, erosion, poor flow, wrong material or poor installation. NFG reviews the application first, then recommends the right route: castings, Hardox® wear plate, Enduraclad® CCO, machining, fabrication or a combined solution.",
    primaryCta: { label: "Request Wear Review", href: "/rtq" },
    secondaryCta: { label: "Send Worn Part / Drawing", href: "/rtq" },
    chips: ["Wear Castings", "Hardox® Wear Solutions", "Enduraclad® CCO", "Machining & Fabrication", "Combined Routes"]
  },
  intro: {
    title: "Wear Is Not One Problem.",
    body:
      "Wear affects cement plants, mines, quarries, dredging operations and mineral-processing systems in different ways. The best solution may be a cast alloy, a wear plate, a CCO overlay, machining, fabrication or a combined route. NFG helps clients review the application before choosing the material."
  },
  routeCards: [
    {
      title: "Wear Castings",
      subtitle: "NFG's foundation wear route.",
      body:
        "Engineered cast wear parts for cement, mining, quarries and dredging applications, using manganese steel, high-chrome iron, Ni-Hard, moly-chrome and other suitable wear alloys.",
      href: "/solutions/wear-part-solutions/wear-castings",
      cta: "Explore Wear Castings",
      icon: Factory
    },
    {
      title: "Hardox® Wear Solutions",
      subtitle: "Premium wear plate, properly processed.",
      body:
        "Hardox® wear plate solutions supported by local stock access, CNC cutting, bending, controlled welding, fabrication and ready-to-install wear parts.",
      href: "/solutions/wear-part-solutions/hardox-wear-solutions",
      cta: "Explore Hardox® Wear Solutions",
      icon: HardHat
    },
    {
      title: "Enduraclad® CCO & Hardfacing",
      subtitle: "Overlay and hardfacing for severe wear.",
      body:
        "Enduraclad® CCO, SUPERFLOW® and future VRM hardfacing routes for severe sliding abrasion, sticky material, flow problems and high-wear surfaces.",
      href: "/solutions/wear-part-solutions/enduraclad-cco-hardfacing",
      cta: "Explore Enduraclad® Solutions",
      icon: Layers3
    }
  ],
  signatureStrip: {
    ...baseSignatureUptimeSection,
    strip: {
      title: "Plan Wear Parts Before Shutdown Pressure Starts.",
      body:
        "For repeat wear parts, NFG and the client should plan minimum stock levels, raw materials, patterns, production slots, machining, inspection and delivery priorities before shutdown pressure begins.",
      primaryCta: { label: "Plan Repeat Wear Parts", href: "/solutions#signature-uptime-solution" },
      secondaryCta: { label: "Request Emergency Support", href: "/rtq" }
    }
  },
  relatedLinks: [
    { label: "Wear Castings", href: "/solutions/wear-part-solutions/wear-castings" },
    { label: "Hardox® Wear Solutions", href: "/solutions/wear-part-solutions/hardox-wear-solutions" },
    { label: "Enduraclad® CCO & Hardfacing", href: "/solutions/wear-part-solutions/enduraclad-cco-hardfacing" }
  ]
};

export const wearCastingsPage = {
  metaTitle: "Wear Castings for Cement, Mining, Quarries & Dredging | Nigerian Foundries Group",
  metaDescription:
    "Engineered cast wear parts, material selection, heat treatment, machining and repeat supply planning for cement, mining, quarries and dredging applications.",
  hero: {
    eyebrow: "Wear Castings",
    title: "Cast Wear Parts Are Metallurgy, Heat Treatment and Application Knowledge - Not Just Metal Shapes.",
    body:
      "Crushers, mills, pumps, dredging systems, chutes and mineral-processing equipment suffer impact, abrasion and repeated wear. Wrong material selection can cause early failure. NFG supports clients with engineered wear castings, reverse engineering, metallurgy, pattern/methoding, casting, heat treatment, machining, inspection and repeat supply.",
    primaryCta: { label: "Review a Cast Wear Part", href: "/rtq" },
    secondaryCta: { label: "Plan Repeat Wear Castings", href: "/solutions#signature-uptime-solution" },
    chips: ["Manganese Steel", "High-Chrome Iron", "Ni-Hard", "Moly-Chrome Steel", "Repeat Supply"]
  },
  sections: [
    {
      title: "The Industrial Pain",
      body:
        "Crushers, mills, pumps, dredging systems, chutes and mineral-processing equipment operate under harsh wear conditions. Impact, abrasion, slurry movement, poor material selection and repeated part failure can stop production and increase emergency procurement pressure."
    },
    {
      title: "NFG Material Routes",
      cards: [
        { title: "Manganese steel", body: "Impact and work-hardening crusher parts.", icon: Factory },
        { title: "High-chrome iron", body: "Severe abrasion liners and grinding/wear areas.", icon: ShieldCheck },
        { title: "Ni-Hard", body: "Abrasion-resistant dredging and slurry applications.", icon: Boxes },
        { title: "Moly-chrome steels", body: "Selected high-wear and impact applications.", icon: Layers3 },
        { title: "Ductile / grey iron", body: "Lower-wear industrial components where suitable.", icon: Factory }
      ]
    },
    {
      title: "Typical Cast Wear Parts",
      items: [
        "Jaw plates",
        "Mantles and concaves",
        "Blow bars",
        "Hammers",
        "Mill liners",
        "Crusher liners",
        "Pump casings",
        "Impellers",
        "Dredging wear parts",
        "Grinding and crushing components",
        "Custom reverse-engineered wear castings"
      ]
    },
    {
      title: "NFG Method",
      items: [
        "Part review",
        "Failure discussion",
        "Material analysis",
        "Pattern / methoding",
        "Casting",
        "Heat treatment",
        "Machining",
        "Inspection",
        "Repeat supply"
      ]
    }
  ],
  closing: {
    title: "Plan Repeat Wear Castings Before Shutdowns",
    body:
      "Wear castings should not always be ordered after failure. For repeat parts, NFG and the client should plan minimum stock levels, raw materials, patterns and production slots before shutdowns.",
    primaryCta: { label: "Review a Cast Wear Part", href: "/rtq" },
    secondaryCta: { label: "Plan Repeat Wear Castings", href: "/solutions#signature-uptime-solution" }
  },
  relatedLinks: [
    { label: "Wear Part Solutions Overview", href: "/solutions/wear-part-solutions" },
    { label: "Hardox® Wear Solutions", href: "/solutions/wear-part-solutions/hardox-wear-solutions" },
    { label: "Enduraclad® CCO & Hardfacing", href: "/solutions/wear-part-solutions/enduraclad-cco-hardfacing" }
  ]
};

export const hardoxWearSolutionsPage = {
  metaTitle: "Hardox® Wear Solutions by Nigerian Foundries Limited",
  metaDescription:
    "Hardox® wear plate solutions, CNC cutting, bending, welding, fabrication and ready-to-install wear parts for harsh Nigerian operating conditions.",
  hero: {
    eyebrow: "Hardox® Wear Solutions",
    title: "Do Not Just Buy the Plate. Get the Wear Part Made Right.",
    body:
      "Hardox® wear plate is ideal for industries where abrasion, impact, material handling and equipment wear are constant problems - including mining, mineral processing, cement plants, cement batching plants, quarries and construction. Nigerian Foundries Limited is a distributor and stockist of Hardox® wear plate grades, subject to stock availability and application requirements, and an SSAB-certified Hardox® Wearparts Centre in Nigeria.",
    primaryCta: { label: "Request Hardox® Wear Review", href: "/rtq" },
    secondaryCta: { label: "Send Photos / Drawings", href: "/rtq" },
    tertiaryCta: { label: "Plan Repeat Wear Parts", href: "/solutions#signature-uptime-solution" },
    chips: ["SSAB-certified Hardox® Wearparts Centre", "CNC Cutting", "Bending", "Controlled Welding", "Ready-to-Install Parts"]
  },
  sections: [
    {
      title: "Why Processing Matters",
      body:
        "Hardox® wear plate is a premium engineered material. Its performance depends not only on buying the correct plate, but on selecting the right grade and processing it properly. If Hardox® wear plate is heated wrongly, bent with poor tooling, welded without proper control or fabricated without understanding the application, the client may lose the performance they paid for."
    },
    {
      title: "NFG Hardox® Capability",
      items: [
        "Genuine Hardox® wear plate",
        "Local stock access",
        "CNC plasma cutting",
        "CNC laser cutting",
        "CNC press brake bending",
        "Controlled welding",
        "Fabrication",
        "Machine shop finishing",
        "Equipment modifications",
        "Ready-to-install parts",
        "Repeat wear kits"
      ]
    },
    {
      title: "Typical Applications",
      items: [
        "Chute liners made with Hardox® wear plate",
        "Hopper liners",
        "Buckets",
        "Truck body components",
        "Material-handling parts",
        "Screens and feeders",
        "Equipment modifications",
        "Cut-to-shape wear kits"
      ]
    },
    {
      title: "Lowest Plate Price Is Not Always Lowest Cost",
      body:
        "Poor processing, wrong grade selection, repeat failure and downtime can cost more than proper local processing. NFG helps clients protect their investment by combining genuine Hardox® wear plate with correct local processing and application review."
    }
  ],
  closing: {
    title: "Keep Repeat Wear Parts on a Better Planning Path",
    body:
      "Repeat wear parts are easier to support when the client and NFG know the shutdown cycle, expected wear pattern and preferred route before the last part fails.",
    primaryCta: { label: "Request Hardox® Wear Review", href: "/rtq" },
    secondaryCta: { label: "Send Photos / Drawings", href: "/rtq" }
  },
  relatedLinks: [
    { label: "Wear Part Solutions Overview", href: "/solutions/wear-part-solutions" },
    { label: "Wear Castings", href: "/solutions/wear-part-solutions/wear-castings" },
    { label: "Enduraclad® CCO & Hardfacing", href: "/solutions/wear-part-solutions/enduraclad-cco-hardfacing" }
  ]
};

export const enduracladWearSolutionsPage = {
  metaTitle: "Enduraclad® CCO & Hardfacing Solutions | Nigerian Foundries Group",
  metaDescription:
    "Enduraclad® CCO, SUPERFLOW® and VRM hardfacing planning routes for severe abrasion, sticky material, poor flow and high-wear surfaces.",
  hero: {
    eyebrow: "Enduraclad® CCO & Hardfacing",
    title: "Engineered Overlay and Hardfacing Technologies for Severe Wear.",
    body:
      "NFG is an Enduraclad® approved workshop, distributor and stockist for Nigeria and West Africa. This page should stand on its own and should not compare Enduraclad® too much with Hardox®.",
    primaryCta: { label: "Request Enduraclad® Wear Review", href: "/rtq" },
    secondaryCta: { label: "Discuss VRM Hardfacing Planning", href: "/rtq" },
    chips: ["Approved Workshop", "CCO Plate", "SUPERFLOW®", "Severe Abrasion", "Hardfacing Planning"]
  },
  sections: [
    {
      title: "What Enduraclad® CCO Is",
      body:
        "Enduraclad® CCO plate is a bimetallic wear product: a carbide-rich overlay bonded to a weldable mild steel base. The base allows welding and fabrication, while the overlay provides wear protection."
    },
    {
      title: "Product Routes",
      cards: [
        { title: "ECI60", body: "General CCO wear protection.", icon: Factory },
        { title: "ECI80", body: "Higher-wear CCO applications.", icon: ShieldCheck },
        { title: "CTC6000®", body: "Severe abrasion and demanding wear.", icon: Layers3 },
        { title: "ECIMAXI", body: "Extremely severe abrasion.", icon: Boxes },
        { title: "EMEX", body: "Severe abrasion with severe impact.", icon: HardHat },
        { title: "SUPERFLOW®", body: "Polished CCO for sticky material and flow problems.", icon: Factory }
      ]
    },
    {
      title: "VRM Hardfacing Planning",
      body:
        "NFG is preparing to offer in-situ VRM hardfacing in Nigeria by end of 2026 using Enduraclad® controlled hardfacing wires/coils.",
      items: [
        "VRM roller tyres",
        "Grinding tables",
        "Mill liners",
        "Nozzle rings",
        "Separator parts",
        "Ducting and protection areas"
      ]
    },
    {
      title: "Typical Applications",
      items: [
        "Cement plants",
        "Mining",
        "Mineral processing",
        "Quarries",
        "Chutes",
        "Hoppers",
        "Transfer points",
        "Feeders",
        "Screen decks",
        "VRM wear areas"
      ]
    }
  ],
  closing: {
    title: "Treat VRM Hardfacing as a Planning Pathway",
    body:
      "Use the planning pathway now so the site can move forward on data, priorities and readiness without overstating the service as fully launched.",
    primaryCta: { label: "Request Enduraclad® Wear Review", href: "/rtq" },
    secondaryCta: { label: "Discuss VRM Hardfacing Planning", href: "/rtq" }
  },
  relatedLinks: [
    { label: "Wear Part Solutions Overview", href: "/solutions/wear-part-solutions" },
    { label: "Wear Castings", href: "/solutions/wear-part-solutions/wear-castings" },
    { label: "Hardox® Wear Solutions", href: "/solutions/wear-part-solutions/hardox-wear-solutions" }
  ]
};

export const wearSolutionPages = {
  "wear-castings": wearCastingsPage,
  "hardox-wear-solutions": hardoxWearSolutionsPage,
  "enduraclad-cco-hardfacing": enduracladWearSolutionsPage
};
