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

export const siteSettings = {
  siteTitle: "Nigerian Foundries Group",
  shortName: "NFG",
  defaultSeoTitle: "Nigerian Foundries Group | Industrial Manufacturing and Reverse Engineering",
  defaultSeoDescription:
    "Nigerian Foundries Group helps industrial clients identify, reverse-engineer and locally manufacture critical replacement parts, wear parts, municipal castings, sacrificial anodes, corrosion-protection assemblies, machined components, fabricated parts and 3D-printed solutions for cement, mining, oil and gas, marine, power, infrastructure and manufacturing across Nigeria and West Africa.",
  primaryEmail: "info@nigerianfoundriesgroup.com",
  salesEmail: "sales@nigerianfoundriesgroup.com",
  primaryPhone: "+234 803 402 6015",
  generalPhones: ["+234 817 260 7269", "+234 803 402 6017", "+234 807 089 2156", "+234 807 089 0880"],
  salesPhones: ["+234 803 402 6015", "+234 909 364 2770", "+234 807 089 0850", "+234 817 652 6478"],
  whatsappNumber: "2348034026015",
  address:
    "Head Office and Otta Factory, Lynson Chemical Avenue, Km-38 Abeokuta-Lagos Expressway, Sango-Ota, Ogun State, Nigeria.",
  registeredOffice:
    "1 Adeyemi Bero Crescent, Plot A, Block XII, Ilupeju Industrial Estate, off Anthony/Oshodi Expressway, Lagos, Nigeria.",
  officeHours: "Monday - Friday, 8:00 - 17:00",
  footerText:
    "Industrial castings, wear solutions, corrosion protection, machining, fabrication, reverse engineering and advanced manufacturing. Built in Nigeria. Supported locally. Trusted since 1969.",
  globalCta: { label: "Send Part / Drawing", href: "/rfq" }
};

export const signatureUptimeHeroSlide = {
  eyebrow: "NFG Signature Uptime Solution",
  headline: "Let Us Plan Together. Respond Fast. Protect Your Production.",
  subheadline:
    "When a critical part fails, the real cost is not just the part - it is lost production, waiting time, emergency pressure and money lost by the hour. NFG supports industries through a two-pronged signature approach: planned critical-parts support before shutdowns, and emergency manufacturing support when unexpected failures occur. Client maintenance, planning and procurement teams must align early with NFG Sales Engineers while NFG prepares raw materials, production routes, tooling, capacity, machining, inspection and delivery priorities.",
  primaryCta: { label: "Plan Critical Parts With NFG", href: "/solutions#signature-uptime-solution" },
  secondaryCta: { label: "Request Emergency Support", href: "/rtq" },
  media: {
    desktopImage: "/placeholders/hero/signature-uptime-solution.jpg",
    mobileImage: "/placeholders/hero/signature-uptime-solution.jpg",
    altText: "Industrial planner reviewing a parts list with maintenance and foundry support",
    caption: "Planned critical-parts support and emergency manufacturing response",
    overlayOpacity: 0.7,
    theme: "uptime"
  },
  featureCards: [
    { title: "Planned Critical Parts", description: "Prepare known, repeat and shutdown-critical parts before pressure builds." },
    { title: "Emergency Manufacturing Support", description: "Review failed parts, samples, drawings and urgent production constraints." },
    { title: "Reverse Engineering", description: "Start from the part and move toward a manufacturable route." },
    { title: "Local Manufacturing Routes", description: "Keep the work local where Nigerian capacity exists." },
    { title: "Consignment Stocking Available", description: "Support repeat spares planning and faster response." }
  ]
};

export const signatureUptimeSection = {
  conceptName: "NFG Signature Uptime Solution",
  anchorId: "signature-uptime-solution",
  eyebrow: "NFG Signature Solution",
  headline: "Plan Ahead Where You Can. Respond Fast When You Must.",
  introText:
    "NFG's technical solutions work best when they are connected to the client's maintenance reality. Some parts fail unexpectedly and require emergency response. Other parts are known, repeat, high-risk or shutdown-critical and should be planned before the plant is under pressure. That is why NFG supports clients through a two-pronged uptime model: planned critical-parts support and emergency manufacturing support. Both routes lead to the right technical solution - casting, machining, fabrication, reverse engineering, wear solution, corrosion protection, municipal casting or 3D printing.",
  positioningStatement:
    "NFG supports industrial clients through a two-pronged approach: planned critical-parts support before shutdowns and emergency manufacturing support when unexpected failures occur.",
  strategicMessage:
    "Prioritise local Naira-based manufacturing where Nigerian capacity exists, and use valuable forex only where no local support is available.",
  primaryCta: { label: "Plan Critical Parts", href: "/solutions#signature-uptime-solution" },
  secondaryCta: { label: "Request Emergency Support", href: "/rtq" },
  plannedSupportTitle: "Planned Critical-Parts Support",
  plannedSupportSubtitle: "The best delivery time starts before the emergency.",
  plannedSupportBody:
    "For known, repeat and shutdown-critical parts, NFG works with maintenance, planning and procurement teams before the emergency. When NFG understands the shutdown calendar, failure history, quantities and technical requirements early, it can prepare the manufacturing route, raw materials, tooling, production capacity, inspection requirements and delivery schedule.",
  plannedSupportBullets: [
    "Turnaround maintenance",
    "Shutdown planning",
    "Repeat wear parts",
    "Critical spares",
    "Long-lead parts",
    "Obsolete parts",
    "No-drawing parts",
    "Minimum stock-level agreements",
    "Consignment stocking discussions"
  ],
  plannedSupportCta: { label: "Create a Critical Parts Plan", href: "/rtq?supportType=planned" },
  emergencySupportTitle: "Emergency Manufacturing Support",
  emergencySupportSubtitle: "When the plant is waiting, NFG helps you respond.",
  emergencySupportBody:
    "Not every failure can be predicted. When a part breaks, wears out, corrodes or becomes unavailable, NFG helps identify the part, understand the failure, reverse-engineer where required and manufacture a practical local solution.",
  emergencySupportBullets: [
    "Plant stopped",
    "Urgent breakdown",
    "Broken or worn part",
    "Corrosion failure",
    "Unknown material",
    "Missing drawing",
    "OEM support unavailable",
    "Import delay",
    "Wrong or failed previous part"
  ],
  emergencySupportCta: { label: "Request Emergency Support", href: "/rtq?supportType=emergency" },
  hiddenCostHeadline: "The Cheapest Part Is Not Always the Lowest-Cost Solution.",
  hiddenCostBody:
    "Clients often compare only the overseas part price. But the hidden cost starts when the requirement is discussed too late: poor planning, delayed approvals, missing documents, wrong specifications, import uncertainty, documentation delays, emergency pressure and lost production while the plant waits. NFG helps clients think differently: prioritise local Naira-based manufacturing where Nigerian capacity exists, and use valuable forex only where no local support is available.",
  stockingHeadline: "Consignment Stocking for Critical Repeat Parts",
  stockingBody:
    "After a first successful supply, NFG and the client can agree on minimum stock levels or consignment stocking for selected repeat parts. This gives the client faster emergency replacement options and helps NFG plan raw materials and production more efficiently. The goal is fewer surprises, better delivery discipline and less plant waiting time.",
  stockingBullets: [
    "Repeat wear parts",
    "Crusher parts",
    "Cement plant spares",
    "Quarry parts",
    "Pump parts",
    "Machined castings",
    "Municipal castings",
    "Sacrificial anodes",
    "Other critical repeat items"
  ],
  stockingCta: { label: "Discuss Consignment Stocking", href: "/rtq?supportType=planned&interest=stocking" },
  homepage: {
    sectionId: "homepage-signature-uptime-solution",
    eyebrow: "NFG Signature Solution",
    headline: "Two Ways to Protect Uptime: Plan Ahead and Respond Fast.",
    body:
      "Not every industrial failure can be predicted. When a critical part breaks, wears out, corrodes or becomes unavailable, NFG can help identify the part, reverse-engineer the requirement and manufacture a practical local solution. That is our emergency support role. But the strongest results come when we plan together before the crisis. Maintenance knows the equipment. Planning knows the shutdown window. Procurement controls the purchase process. NFG understands the manufacturing route, raw materials, tooling, production capacity and delivery reality. When all sides work together early, we can plan better, quote better, produce better and support delivery times more realistically.",
    plannedCard: {
      title: "Planned Critical-Parts Support",
      subtitle: "For shutdowns, repeat parts and known high-risk items.",
      body:
        "For known, repeat and shutdown-critical parts, NFG works with maintenance, planning and procurement teams before the emergency. Early planning helps NFG prepare raw materials, production routes, tooling, machining, inspection and delivery priorities.",
      bullets: [
        "Shutdown and turnaround maintenance planning",
        "Repeat wear-part identification",
        "Long-lead item planning",
        "Obsolete or no-drawing part review",
        "Minimum stock-level discussions",
        "Consignment stocking where suitable"
      ],
      cta: { label: "Plan Critical Parts", href: "/solutions#signature-uptime-solution" }
    },
    emergencyCard: {
      title: "Emergency Manufacturing Support",
      subtitle: "For unexpected failures and urgent plant pressure.",
      body:
        "When a part fails unexpectedly, NFG helps respond by reviewing the failed part, identifying the problem, reverse-engineering where required and selecting the right local manufacturing route.",
      bullets: [
        "Broken or worn part review",
        "Drawing/photo/sample assessment",
        "3D laser scanning",
        "Dimensional checks",
        "OES spectrometer analysis",
        "Material and wear review",
        "Urgent quotation",
        "Local manufacturing support"
      ],
      cta: { label: "Request Emergency Support", href: "/rtq" }
    }
  },
  routesBanner: {
    headline: "Six Technical Routes. One NFG Working Model.",
    body: "Whether your requirement is planned or urgent, NFG begins with the problem, then guides you to the right solution route."
  },
  strip: {
    title: "Supported by the NFG Signature Uptime Solution",
    body:
      "This solution can support both planned critical-parts requirements and emergency manufacturing needs. Early planning helps NFG prepare raw materials, production capacity and delivery priorities. Emergency support helps clients respond when the plant is already under pressure.",
    primaryCta: { label: "Plan Critical Parts", href: "/solutions#signature-uptime-solution" },
    secondaryCta: { label: "Request Emergency Support", href: "/rtq" }
  },
  displayOnHomepage: true,
  displayOnSolutionsPage: true,
  displayOnSolutionPages: true
};

export const solutionsOverviewPage = {
  eyebrow: "Solutions",
  headline: "Send the Problem. We Help Choose the Route.",
  body:
    "From broken parts and worn liners to corrosion protection, municipal castings and advanced manufacturing, NFG starts by understanding the client problem before choosing the manufacturing route.",
  primaryCta: { label: "Plan Critical Parts", href: "/solutions#signature-uptime-solution" },
  secondaryCta: { label: "Send Part / Drawing", href: "/rtq" },
  signatureUptimeSection
};

export const rtqFormConfig = {
  enableQueryParameterPrefill: true,
  supportTypeOptions: [
    {
      value: "emergency",
      label: "Emergency Support",
      description: "The plant is stopped, under pressure, or needs urgent replacement support.",
      defaultGuidance: "Suggested urgency: Urgent or Plant stopped."
    },
    {
      value: "planned",
      label: "Planned Critical-Parts Support",
      description: "You are planning for shutdown, turnaround maintenance, repeat parts, minimum stock levels or consignment stocking.",
      defaultGuidance: "Suggested urgency: Planned shutdown or Routine."
    },
    {
      value: "standard",
      label: "Standard RFQ / Technical Review",
      description: "You want NFG to review a part, drawing, photo or manufacturing requirement.",
      defaultGuidance: "Routine or urgent depending on user selection."
    }
  ],
  plannedSupportFields: [
    "Upcoming shutdown / turnaround date",
    "Critical parts list available?",
    "Repeat parts currently imported?",
    "Parts with no drawings?",
    "Interest in minimum stock levels?",
    "Interest in consignment stocking?",
    "Maintenance contact name",
    "Planning contact name",
    "Procurement contact name"
  ],
  emergencySupportFields: [
    "Is the plant currently stopped?",
    "How many hours/days has production been affected?",
    "Is there an emergency shutdown date?",
    "Is a sample part available immediately?",
    "Is urgent site visit required?"
  ]
};

export const heroSlides = [
  {
    eyebrow: "Trusted Since 1969 • Built for Industrial Resilience",
    headline: "We Are The Manufacturing Backbone Helping Nigeria and West Africa's Industries Stay Productive.",
    subheadline:
      "When global supply chains are unstable, local manufacturing capacity for parts becomes essential. NFG helps cement plants, mines, quarries, infrastructure projects and offshore assets reduce dependence on uncertain imports by identifying, reverse-engineering and locally manufacturing practical solutions for parts that break, wear out, corrode or become obsolete. Ferrous and non-ferrous foundry casting, machining, fabrication, wear solutions, corrosion protection, digital engineering and additive manufacturing keep that response practical.",
    primaryCta: { label: "Send Us Your Part / Drawing", href: "/rtq" },
    secondaryCta: { label: "Explore Solutions", href: "/solutions" },
    media: {
      desktopImage: "/placeholders/hero/foundry-pouring-or-industrial-floor.jpg",
      mobileImage: "/placeholders/hero/hero-foundry-pouring.jpg",
      altText: "Foundry floor and industrial manufacturing operation placeholder",
      caption: "Foundry pouring or industrial floor photography",
      overlayOpacity: 0.68,
      theme: "foundry"
    },
    featureCards: [
      { title: "Since 1969", description: "Long-term Nigerian industrial manufacturing experience." },
      { title: "ISO 9001:2015 & ISO 50001", description: "Core management systems tracked through CMS records." },
      { title: "SSAB-certified Hardox® Wearparts Centre", description: "Wear-part workshop recognition." },
      { title: "Federal Ministry of Industry OEM Manufacturer Certificate", description: "Certificate record managed through Sanity." },
      { title: "Metal & Polymer Additive Manufacturing", description: "Advanced part-development capability." }
    ],
    stats: [
      { value: "1969", label: "industrial manufacturing roots" },
      { value: "Local", label: "support and accountability" }
    ]
  },
  signatureUptimeHeroSlide,
  {
    eyebrow: "Reverse engineering",
    headline: "No Drawing? No OEM Support? We Can Start With What You Have.",
    subheadline:
      "When a part is broken, worn, obsolete or unsupported by the OEM, the real challenge is understanding the part, material, failure, operating condition and the best way to manufacture it locally. NFG helps clients move from uncertainty to a practical manufacturing route using sample parts, old drawings, photos, rough dimensions or equipment details. 3D laser scanning, dimensional checks, OES spectro analysis, CAD drawings, rapid prototyping and route selection help move the work forward.",
    primaryCta: { label: "Start Reverse Engineering", href: "/solutions/reverse-engineering" },
    secondaryCta: { label: "Upload Part / Drawing / Photo", href: "/rtq" },
    media: {
      desktopImage: "/placeholders/hero/laser-scanning-part.jpg",
      mobileImage: "/placeholders/hero/hero-laser-scanning.jpg",
      altText: "Laser scanning an industrial replacement part placeholder",
      caption: "Laser scanning, CAD and dimensional review",
      overlayOpacity: 0.7,
      theme: "scan"
    },
    featureCards: [
      { title: "3D Laser Scanning", description: "Capture geometry from worn or obsolete components." },
      { title: "OES Spectro Analysis", description: "Review material, failure condition and operating environment." },
      { title: "Digital Drawings", description: "Convert the part into production data." },
      { title: "Rapid Prototyping", description: "Prove the route before committing to production." },
      { title: "Manufacturing Route Selection", description: "Choose casting, fabrication, machining, anode, CCO or 3D printing." }
    ]
  },
  {
    eyebrow: "Wear Solutions for Cement, Mining, Quarries & Dredging",
    headline: "Wear Is Not Just Damage. It Is Lost Production.",
    subheadline:
      "In cement plants, mines, mineral-processing plants, quarries and dredging operations, wear attacks production every day through impact, abrasion, sliding wear, erosion, corrosion and repeated part failure. NFG helps clients fight wear first through engineered foundry castings - manganese steel, high-chrome iron, Ni-Hard, moly-chrome and other wear alloys - supported by machining, fabrication, Hardox® wear plate solutions and Enduraclad® CCO technologies.",
    primaryCta: { label: "Explore Wear Solutions", href: "/solutions/wear-part-solutions" },
    secondaryCta: { label: "Send Worn Part / Drawing", href: "/rtq" },
    media: {
      desktopImage: "/placeholders/hero/wear-parts-crusher-cement.jpg",
      mobileImage: "/placeholders/hero/hero-wear-parts.jpg",
      altText: "Crusher, cement and mining wear-part placeholder",
      caption: "Crusher liners, chutes and heavy wear areas",
      overlayOpacity: 0.72,
      theme: "wear"
    },
    featureCards: [
      { title: "Wear Castings", description: "Lead route for repeat wear parts." },
      { title: "Manganese Steel", description: "Impact and work-hardening crusher parts." },
      { title: "High-Chrome Iron", description: "Severe abrasion and wear areas." },
      { title: "Hardox® Wearparts Centre", description: "Premium wear-plate processing support." },
      { title: "Enduraclad® Approved Workshop", description: "CCO and hardfacing route support." },
      { title: "Machining & Fabrication", description: "Finish and assemble the part properly." }
    ]
  },
  {
    eyebrow: "Corrosion Protection & Offshore Asset-Life Extension",
    headline: "Nigerian-Made Anodes Protecting Offshore Assets Where Failure Is Not an Option.",
    subheadline:
      "Every offshore platform, FPSO, subsea pipeline, mooring system, vessel and marine structure fights corrosion every day. In offshore oil and gas, corrosion protection is asset integrity, safety, production continuity and lifecycle protection. Through Metec West Africa, NFG manufactures sacrificial anodes and cathodic protection solutions in Nigeria for offshore oil and gas, marine, power and coastal infrastructure, with Imenco Norway supporting retrofit CP applications where required.",
    specificationTable: {
      title: "METEC ANODE SPECIFICATIONS",
      rows: [
        { label: "Alloy Type", value: "Al-Zn-In (Galvalum III Equiv.)" },
        { label: "Capacity", value: "2700 Ah/kg" },
        { label: "Efficiency", value: "95% Minimum" },
        { label: "Standards", value: "DNV-RP-B401 / NACE SP0169" }
      ]
    },
    primaryCta: { label: "Explore Corrosion Protection", href: "/solutions/corrosion-protection" },
    secondaryCta: { label: "Discuss Retrofit CP / Anode Requirements", href: "/rtq" },
    media: {
      desktopImage: "/placeholders/hero/sacrificial-anodes-offshore.jpg",
      mobileImage: "/placeholders/hero/hero-sacrificial-anodes.jpg",
      altText: "Sacrificial anodes and offshore corrosion protection placeholder",
      caption: "Metec West Africa sacrificial anode capability",
      overlayOpacity: 0.7,
      theme: "marine"
    },
    featureCards: [
      { title: "Egina", description: "Project reference / asset context." },
      { title: "Usan", description: "Project reference / asset context." },
      { title: "Akpo", description: "Project reference / asset context." },
      { title: "Bonga", description: "Project reference / asset context." },
      { title: "Imenco Norway", description: "Retrofit CP support partner." },
      { title: "Nigerian Content", description: "Local manufacturing and accountability." }
    ]
  },
  {
    eyebrow: "Advanced Digital & Additive Manufacturing",
    headline: "We Are Turning Reverse Engineering Experience Into Africa's Manufacturing Future.",
    subheadline:
      "NFG's move into Additive Manufacturing - better known as 3D printing - is built on over five decades of identifying, redesigning and manufacturing critical industrial parts through castings, machining, fabrication, material analysis and reverse engineering. Today, NFG combines 3D laser scanning, digital engineering, polymer 3D printing and metal additive manufacturing to support advanced part development for oil and gas, power stations, marine, heavy industry, critical national infrastructure and security-service applications.",
    primaryCta: { label: "Explore Additive Manufacturing", href: "/solutions/3d-printing-advanced-manufacturing" },
    secondaryCta: { label: "View 3D Printing Capabilities", href: "/capabilities/additive-manufacturing" },
    media: {
      desktopImage: "/placeholders/hero/vezapp-3d-printing-dashboard.jpg",
      mobileImage: "/placeholders/hero/hero-vezapp-digital.jpg",
      altText: "Digital production control and advanced manufacturing placeholder",
      caption: "Vezapp, digital engineering and 3D printing",
      overlayOpacity: 0.72,
      theme: "digital"
    },
    featureCards: [
      { title: "3D Laser Scanning", description: "Capture geometry and part intent." },
      { title: "Digital Engineering", description: "Design the route before production." },
      { title: "Polymer 3D Printing", description: "Prototype and validate quickly." },
      { title: "Metal Additive Manufacturing", description: "Advance complex part development." },
      { title: "Reverse Engineering", description: "Move from sample part to manufacturable data." },
      { title: "Youth Skills Development", description: "Build the next generation of industrial talent." }
    ]
  },
  {
    eyebrow: "Municipal Castings & Drainage Solutions",
    headline: "Drainage Protects the Value and Security of Your Infrastructure.",
    subheadline:
      "A factory, estate, road, port, airport, industrial yard or public facility can be worth millions - but poor drainage can slowly damage it. NFG designs and manufactures ductile iron municipal castings, drainage gratings, manhole covers and custom access solutions to the BS EN 124 load-class standard - from pedestrian areas and estates to roads, ports, industrial yards and airport-grade applications. Built for Nigerian conditions - sand, oil, gravel, debris, heavy traffic and coastal corrosion exposure - NFG solutions are engineered for strength, water flow, maintenance access and long service life, with hinged, bolted, lockable and custom-branded anti-theft options. For high-security locations, NFG can provide bolted, lockable and controlled-access cover designs that support inspection, access control and tamper resistance.",
    primaryCta: { label: "Request a Drainage Review", href: "/rtq" },
    secondaryCta: { label: "Send Site Photos / Drawings", href: "/rtq" },
    media: {
      desktopImage: "/placeholders/hero/maintenance-hole-cover-installed.jpg",
      mobileImage: "/placeholders/hero/hero-wear-parts.jpg",
      altText: "Municipal castings and drainage access placeholder",
      caption: "Municipal castings and drainage access solutions",
      overlayOpacity: 0.7,
      theme: "foundry"
    },
    featureCards: [
      { title: "BS EN 124 Load Classes", description: "Load-classed municipal access solutions." },
      { title: "Ductile Iron", description: "Strength, water flow and service life." },
      { title: "Custom-Made Covers", description: "Built for the site, not a generic slab." },
      { title: "Lockable Anti-Theft Options", description: "Support controlled access and security." },
      { title: "High-Security Bolting", description: "Inspection-ready and tamper-resistant." },
      { title: "Roads • Estates • Ports • Airports", description: "Applications across infrastructure types." }
    ]
  }
];

export const trustBadges = [
  { title: "Since 1969", detail: "Long-term Nigerian industrial manufacturing experience", verificationStatus: "verified" },
  { title: "ISO 9001:2015", detail: "Certificate record managed through CMS", verificationStatus: "pending" },
  { title: "ISO 50001", detail: "Energy management certificate record managed through CMS", verificationStatus: "pending" },
  { title: "SSAB-certified Hardox Wearparts Centre", detail: "Wear-part workshop recognition", verificationStatus: "pending" },
  { title: "Metec West Africa", detail: "Corrosion-protection manufacturing capability", verificationStatus: "pending" },
  { title: "Shell Nigerian Content Recognition", detail: "Recognition record managed through CMS", verificationStatus: "pending" },
  { title: "Stanford Seed Transformation", detail: "Transformation journey proof point", verificationStatus: "pending" },
  {
    title: "Federal Ministry of Industry OEM Manufacturer Certificate",
    detail: "Certificate image or PDF can be attached in Sanity",
    verificationStatus: "pending"
  },
  { title: "Metal & Polymer Additive Manufacturing", detail: "Advanced part-development capability", verificationStatus: "pending" },
  { title: "GEF-UNIDO Industrial Energy Efficiency Project", detail: "IEE and resource efficient cleaner production record", verificationStatus: "pending" },
  { title: "Metec West Africa + Imenco Partnership", detail: "Corrosion-protection partnership positioning", verificationStatus: "pending" }
];

export const problemCards = [
  {
    title: "Broken or worn-out parts",
    description: "One failed component can stop a process, delay maintenance and create avoidable pressure.",
    icon: AlertTriangle,
    href: "/rfq"
  },
  {
    title: "No drawing or obsolete OEM support",
    description: "When drawings are missing or support has ended, NFG can start with the part, photo or scan.",
    icon: FileQuestion,
    href: "/solutions/reverse-engineering"
  },
  {
    title: "Wrong material or repeated failures",
    description: "We review the material, wear pattern, failure condition and operating environment before selecting a route.",
    icon: Microscope,
    href: "/capabilities/material-analysis"
  },
  {
    title: "Import delay and FX pressure",
    description: "Local manufacturing can reduce dependence on long external supply chains for critical replacement parts.",
    icon: Clock3,
    href: "/nigerian-content"
  },
  {
    title: "Corrosion and offshore exposure",
    description: "Metec West Africa supports sacrificial anodes and corrosion-protection assemblies for harsh environments.",
    icon: Anchor,
    href: "/solutions/corrosion-protection"
  },
  {
    title: "Poor supplier visibility",
    description: "Digital production control improves internal discipline, communication and accountability.",
    icon: ClipboardCheck,
    href: "/capabilities/digital-production-control-vezapp"
  }
];

export const methodSteps = [
  {
    title: "Understand Your Process",
    icon: FileSearch,
    body:
      "We begin with questions: where the part is used, what failed, what material was used, what load or wear condition exists, how urgent the shutdown is, and what success looks like.",
    details: ["Operating environment", "Urgency", "Failure history", "Success condition"]
  },
  {
    title: "Identify the Part and Pain Area",
    icon: ScanLine,
    body:
      "We review the broken, worn or corroded part, drawings, photos, site conditions, operating environment and failure history.",
    details: ["Sample part", "Photos", "Drawings", "Site condition"]
  },
  {
    title: "Reverse-Engineer the Part",
    icon: Radar,
    body:
      "Where drawings are unavailable or unreliable, we use 3D laser scanning, dimensional checks, digital drawings, metal composition analysis and rapid prototyping.",
    details: ["3D scanning", "CAD drawing", "Material analysis", "Prototype when required"]
  },
  {
    title: "Select the Manufacturing Route",
    icon: Route,
    body:
      "We decide the best route: casting, machining, fabrication, Hardox, Enduraclad CCO, sacrificial anode, Imenco clamp integration, polymer 3D printing, metal 3D printing or a combined solution.",
    details: ["Casting", "Machining", "Fabrication", "Wear or corrosion route"]
  },
  {
    title: "Quote, Manufacture and Support",
    icon: BadgeCheck,
    body:
      "We issue a quotation, manufacture locally, inspect the job, deliver the part and support repeat supply where required.",
    details: ["Quotation", "Inspection", "Delivery", "Repeat supply support"]
  }
];

export const solutions = [
  {
    title: "Drainage and Municipal Casting Solutions",
    navTitle: "Drainage & Municipal Castings",
    slug: "drainage-municipal-castings",
    icon: Landmark,
    summary:
      "Maintenance hole covers, manhole covers, drainage gratings and road infrastructure castings for municipal, estate, high-rise and industrial facility use.",
    hero:
      "Durable municipal castings and drainage access solutions for Nigerian roads, estates, high-rise buildings and industrial sites.",
    customerProblems: ["Imported covers", "Poor-quality castings", "Drainage failures", "Urban infrastructure needs"],
    applications: [
      "Maintenance hole covers",
      "Manhole covers",
      "Drainage gratings",
      "Road infrastructure castings",
      "Estate and high-rise building drainage",
      "Industrial facility drainage access",
      "Utility access covers"
    ],
    materials: ["Ductile iron", "Grey iron", "Steel and iron castings"],
    technologies: ["Casting", "Design support", "Machining where required"],
    processSteps: ["Review load/application need", "Confirm drawing or sample", "Select casting route", "Quote and manufacture locally"],
    media: ["municipal-covers-grid.jpg", "maintenance-hole-cover-installed.jpg", "drainage-grating-road.jpg"],
    cta: { label: "Need a local alternative to imported covers?", href: "/rfq?type=municipal" },
    relatedIndustries: ["infrastructure-municipal-works"]
  },
  {
    title: "Wear Part Solutions for Mines, Cement, Quarries and Dredging",
    navTitle: "Wear Part Solutions",
    slug: "wear-part-solutions",
    icon: HardHat,
    summary:
      "Castings, Hardox fabricated wear parts, Enduraclad chromium-carbide overlay plates, machining, fabrication and reverse engineering for severe wear.",
    hero:
      "Wear solutions for impact, abrasion and severe sliding wear in cement, mining, quarry and dredging operations.",
    customerProblems: ["Abrasive wear", "Impact wear", "Crusher shutdowns", "Imported spares", "Repeated liner failure"],
    applications: ["Jaw plates", "Mantles", "Cones", "Blow bars", "Liners", "Grates", "Chutes", "Hoppers", "VRM areas", "Dredging wear parts"],
    materials: ["Manganese steel", "High-chrome iron", "Ni-Hard", "Moly-chrome steel", "Ductile iron", "Grey iron", "Stainless steel", "Hardox steel", "CCO plates"],
    technologies: ["Foundry castings", "Hardox fabrication", "Enduraclad CCO", "Machining", "Reverse engineering"],
    processSteps: ["Identify wear mode", "Review material and equipment", "Select casting, Hardox or CCO route", "Manufacture and support repeat supply"],
    media: ["wear-parts-cement-mining.jpg"],
    cta: { label: "Send Us Your Worn Part", href: "/rfq?type=wear" },
    relatedIndustries: ["cement-plants", "mining-mineral-processing", "quarries-aggregates", "dredging"]
  },
  {
    title: "Corrosion-Protection Solutions for Offshore, Marine and Industrial Assets",
    navTitle: "Corrosion Protection",
    slug: "corrosion-protection",
    icon: Anchor,
    summary:
      "Nigerian-made sacrificial anodes and cathodic protection solutions for offshore oil & gas, marine, power and coastal infrastructure, with retrofit CP support through Imenco Norway.",
    hero:
      "Corrosion protection is asset integrity, safety, production continuity and lifecycle protection for offshore and marine infrastructure.",
    customerProblems: ["Offshore corrosion", "Coastal exposure", "Retrofit difficulty", "Imported corrosion systems", "Nigerian Content requirements"],
    applications: ["Offshore oil and gas structures", "Marine vessels", "Ports", "Windmills", "Jetties", "Subsea structures", "Coastal infrastructure", "Power assets"],
    materials: ["Aluminium anodes", "Zinc anodes", "Non-ferrous corrosion-protection materials"],
    technologies: ["Metec West Africa sacrificial anodes", "Imenco retrofit CP support", "Fabrication", "Machining", "Inspection"],
    processSteps: ["Understand asset and exposure", "Select anode requirement", "Plan assembly or clamp integration", "Manufacture locally and support delivery"],
    media: ["corrosion-anodes.jpg"],
    cta: { label: "Discuss Corrosion Protection", href: "/rfq?type=corrosion" },
    relatedIndustries: ["oil-gas-offshore", "marine-ports-windmills", "power-energy"]
  },
  {
    title: "From Broken Part to Digital Manufacturing Solution",
    navTitle: "Reverse Engineering",
    slug: "reverse-engineering",
    icon: ScanLine,
    summary:
      "3D laser scanning, dimensional checks, digital drawings, material analysis and rapid prototyping when drawings are missing or unreliable.",
    hero:
      "Start with the broken part, photo, drawing or failed assembly, then move toward a manufacturable local solution.",
    customerProblems: ["No drawing", "Obsolete OEM support", "Unknown material", "Unclear failure mode", "Need for a local repeatable part"],
    applications: ["Replacement parts", "Legacy components", "Crusher parts", "Machined parts", "Assemblies", "Prototype and pattern development"],
    materials: ["Material depends on application and analysis"],
    technologies: ["3D laser scanning", "Digital drawings", "Metal composition analysis", "Rapid prototyping", "CAD review"],
    processSteps: [
      "Receive part, photo or drawing",
      "Understand process and failure mode",
      "3D laser scan",
      "Create 3D digital drawing",
      "Conduct metal composition analysis",
      "Prototype where required",
      "Select manufacturing route",
      "Quote and manufacture"
    ],
    media: ["reverse-engineering-scan.jpg", "cad-model-placeholder.jpg", "before-after-part.jpg", "3d-printed-prototype.jpg"],
    cta: { label: "Start Reverse Engineering", href: "/rfq?type=reverse-engineering" },
    relatedIndustries: ["cement-plants", "mining-mineral-processing", "agro-allied-general-manufacturing"]
  },
  {
    title: "Machining, Fabrication and Assembly for Industrial Parts",
    navTitle: "Machining, Fabrication & Assembly",
    slug: "machining-fabrication-assembly",
    icon: Wrench,
    summary:
      "Industrial Applications Ltd supports machining, CNC machining, welding, fabrication, repair, assembly and machined castings.",
    hero:
      "Practical machining, fabrication and repair support for shafts, housings, wear assemblies, machined castings and industrial parts.",
    customerProblems: ["Worn parts", "Repair requirement", "Machining bottlenecks", "Assembly work", "Legacy components"],
    applications: ["Machining", "CNC machining", "Welding", "Fabrication", "Repair", "Assembly", "Machined castings", "Shafts", "Housings", "Wear assemblies"],
    materials: ["Steel", "Iron castings", "Stainless steel", "Hardox", "Application-specific materials"],
    technologies: ["CNC machining", "Fabrication", "Welding", "Assembly", "Repair support"],
    processSteps: ["Review requirement", "Confirm drawing/sample", "Machine, fabricate or repair", "Inspect and deliver"],
    media: ["machining-fabrication.jpg"],
    cta: { label: "Request Machining / Fabrication Support", href: "/rfq?type=machining" },
    relatedIndustries: ["power-energy", "agro-allied-general-manufacturing", "oil-gas-offshore"]
  },
  {
    title: "3D Printing and Advanced Manufacturing for Industrial Development",
    navTitle: "3D Printing & Advanced Manufacturing",
    slug: "3d-printing-advanced-manufacturing",
    icon: Radar,
    summary:
      "Polymer and metal 3D printing support for rapid prototyping, pattern development, design visualisation, qualification and future localisation.",
    hero:
      "An advanced manufacturing journey focused on rapid prototyping, part development, qualification and future localisation of complex industrial parts.",
    customerProblems: ["Need for rapid prototype", "Design visualisation", "Pattern development", "Future localisation", "Qualification pathway"],
    applications: ["Rapid prototyping", "Pattern development", "Design visualisation", "Design qualification", "Advanced part development", "Future localisation"],
    materials: ["Polymer printing materials", "Metal additive manufacturing materials under qualification"],
    technologies: ["Polymer 3D printing", "Metal 3D printing", "Digital engineering", "Prototype review"],
    processSteps: ["Understand part development need", "Prepare digital model", "Prototype or qualify", "Feed learning into manufacturing route"],
    media: ["metal-3d-printing.jpg"],
    cta: { label: "Explore 3D Printing", href: "/rfq?type=3d-printing" },
    relatedIndustries: ["oil-gas-offshore", "power-energy", "agro-allied-general-manufacturing"]
  }
];

export const industries = [
  {
    title: "Cement Plants",
    slug: "cement-plants",
    icon: Factory,
    pain: "Wear parts, liners, crusher parts, VRM areas, shutdown risk and imported spares.",
    solution:
      "High-chrome castings, manganese steel, Enduraclad CCO, Hardox, machining and reverse engineering.",
    commonParts: ["Crusher parts", "Liners", "VRM areas", "Jaw plates", "Blow bars", "Chutes"],
    materials: ["High-chrome iron", "Manganese steel", "Hardox", "Enduraclad CCO", "Ni-Hard"],
    routes: ["Casting", "Machining", "Fabrication", "Reverse engineering", "Wear solution selection"],
    relatedSolutions: ["wear-part-solutions", "reverse-engineering", "machining-fabrication-assembly"],
    cta: { label: "Solve a Cement Plant Wear Problem", href: "/rfq?industry=cement" }
  },
  {
    title: "Mining & Mineral Processing",
    slug: "mining-mineral-processing",
    icon: Pickaxe,
    pain: "Abrasive wear, impact wear, crusher parts and downtime.",
    solution: "Manganese castings, high-chrome iron, Hardox, Enduraclad and reverse engineering.",
    commonParts: ["Crusher liners", "Jaw plates", "Cones", "Mantles", "Chutes", "Hoppers"],
    materials: ["Manganese steel", "High-chrome iron", "Hardox", "Enduraclad CCO"],
    routes: ["Casting", "Hardox fabrication", "CCO", "Reverse engineering"],
    relatedSolutions: ["wear-part-solutions", "reverse-engineering"],
    cta: { label: "Discuss Mining Wear Parts", href: "/rfq?industry=mining" }
  },
  {
    title: "Quarries & Aggregates",
    slug: "quarries-aggregates",
    icon: Hammer,
    pain: "Crusher wear, emergency replacements and imported spares.",
    solution: "Jaw plates, cones, mantles, blow bars and liners supported through casting and reverse engineering.",
    commonParts: ["Jaw plates", "Cones", "Mantles", "Blow bars", "Liners"],
    materials: ["Manganese steel", "High-chrome iron", "Ni-Hard"],
    routes: ["Casting", "Machining", "Reverse engineering"],
    relatedSolutions: ["wear-part-solutions", "reverse-engineering"],
    cta: { label: "Send a Quarry Crusher Part", href: "/rfq?industry=quarry" }
  },
  {
    title: "Dredging",
    slug: "dredging",
    icon: Waves,
    pain: "Abrasion, corrosion and harsh operating conditions.",
    solution: "Wear-resistant castings, fabricated parts, machining and corrosion-support options.",
    commonParts: ["Dredging wear parts", "Pump and pipeline wear components", "Fabricated assemblies"],
    materials: ["Wear-resistant castings", "Steel", "Application-specific alloys"],
    routes: ["Casting", "Fabrication", "Machining", "Corrosion support"],
    relatedSolutions: ["wear-part-solutions", "corrosion-protection", "machining-fabrication-assembly"],
    cta: { label: "Discuss Dredging Parts", href: "/rfq?industry=dredging" }
  },
  {
    title: "Oil & Gas / Offshore",
    slug: "oil-gas-offshore",
    icon: Anchor,
    pain: "Corrosion, Local Content requirements, retrofit difficulty and imported offshore systems.",
    solution:
      "Sacrificial anodes, Metec West Africa, Imenco clamp integration, fabrication, machining and 3D printing development pathway.",
    commonParts: ["Sacrificial anodes", "Corrosion-protection assemblies", "Fabricated components", "Machined parts"],
    materials: ["Aluminium anodes", "Zinc anodes", "Steel assemblies", "Application-specific materials"],
    routes: ["Anode manufacturing", "Clamp integration", "Fabrication", "Machining", "Advanced part development"],
    relatedSolutions: ["corrosion-protection", "machining-fabrication-assembly", "3d-printing-advanced-manufacturing"],
    cta: { label: "Discuss Offshore Corrosion Protection", href: "/rfq?industry=oil-gas" }
  },
  {
    title: "Marine / Ports / Windmills",
    slug: "marine-ports-windmills",
    icon: Ship,
    pain: "Corrosion, coastal exposure and structural degradation.",
    solution: "Anodes, corrosion protection, fabricated components and maintenance support.",
    commonParts: ["Anodes", "Fabricated components", "Maintenance parts", "Coastal infrastructure components"],
    materials: ["Anode materials", "Steel", "Non-ferrous materials"],
    routes: ["Corrosion protection", "Fabrication", "Machining", "Maintenance support"],
    relatedSolutions: ["corrosion-protection", "machining-fabrication-assembly"],
    cta: { label: "Discuss Marine Protection", href: "/rfq?industry=marine" }
  },
  {
    title: "Power & Energy",
    slug: "power-energy",
    icon: Bolt,
    pain: "Critical spares, corrosion, replacement parts and local capacity.",
    solution: "Castings, machining, fabrication, corrosion protection and reverse engineering.",
    commonParts: ["Replacement parts", "Machined components", "Fabricated assemblies", "Corrosion-protection items"],
    materials: ["Alloy steels", "Iron castings", "Stainless steel", "Application-specific materials"],
    routes: ["Casting", "Machining", "Fabrication", "Reverse engineering", "Corrosion protection"],
    relatedSolutions: ["reverse-engineering", "machining-fabrication-assembly", "corrosion-protection"],
    cta: { label: "Review a Power/Energy Part", href: "/rfq?industry=power" }
  },
  {
    title: "Infrastructure & Municipal Works",
    slug: "infrastructure-municipal-works",
    icon: Building2,
    pain: "Imported covers, drainage failures, poor-quality castings and urban infrastructure needs.",
    solution: "Maintenance hole covers, manhole covers, gratings and drainage design support.",
    commonParts: ["Maintenance hole covers", "Manhole covers", "Drainage gratings", "Utility access covers"],
    materials: ["Ductile iron", "Grey iron", "Steel and iron castings"],
    routes: ["Casting", "Design support", "Machining where required"],
    relatedSolutions: ["drainage-municipal-castings"],
    cta: { label: "Request Municipal Casting Support", href: "/rfq?industry=infrastructure" }
  },
  {
    title: "Agro-Allied & General Manufacturing",
    slug: "agro-allied-general-manufacturing",
    icon: Layers3,
    pain: "Replacement parts, worn parts, obsolete spares and repairs.",
    solution: "Machining, fabrication, castings and reverse engineering.",
    commonParts: ["Machined spares", "Fabricated parts", "Castings", "Repair parts", "Obsolete components"],
    materials: ["Steel", "Stainless steel", "Iron castings", "Application-specific alloys"],
    routes: ["Machining", "Fabrication", "Casting", "Reverse engineering"],
    relatedSolutions: ["machining-fabrication-assembly", "reverse-engineering", "3d-printing-advanced-manufacturing"],
    cta: { label: "Send a Manufacturing Part", href: "/rfq?industry=manufacturing" }
  }
];

export const capabilities = [
  {
    title: "Ferrous Foundry",
    slug: "ferrous-foundry",
    icon: Factory,
    body:
      "Steel and iron castings in manganese steel, high-chrome iron, grey iron, ductile iron, Ni-Hard, stainless steel and alloy steels for cement, mining and quarry applications.",
    capabilities: ["Steel and iron castings", "Manganese steel", "High-chrome iron", "Grey iron", "Ductile iron", "Ni-Hard", "Alloy steels"],
    processes: ["Pattern review", "Melting", "Casting", "Heat treatment where required", "Inspection"],
    materials: ["Manganese steel", "High-chrome iron", "Grey iron", "Ductile iron", "Ni-Hard", "Moly-chrome", "Stainless steel"]
  },
  {
    title: "Non-Ferrous Foundry / Metec West Africa",
    slug: "non-ferrous-foundry-metec-west-africa",
    icon: Anchor,
    body:
      "Sacrificial anodes and non-ferrous corrosion-protection castings for oil and gas, marine, offshore and industrial applications.",
    capabilities: ["Sacrificial anodes", "Non-ferrous casting", "Offshore corrosion-protection support", "Marine corrosion support"],
    processes: ["Application review", "Material selection", "Casting", "Assembly support"],
    materials: ["Aluminium anodes", "Zinc anodes", "Non-ferrous alloys"]
  },
  {
    title: "Industrial Applications / Machining & Fabrication",
    slug: "industrial-applications-machining-fabrication",
    icon: Wrench,
    body:
      "CNC machining, fabrication, welding, assembly, repairs and industrial part support through Industrial Applications Ltd.",
    capabilities: ["CNC machining", "Fabrication", "Welding", "Assembly", "Repairs", "Industrial parts"],
    processes: ["Drawing/sample review", "Machining", "Fabrication", "Welding", "Inspection"],
    materials: ["Steel", "Cast iron", "Stainless steel", "Hardox", "Application-specific materials"]
  },
  {
    title: "Laser Scanning & Reverse Engineering",
    slug: "laser-scanning-reverse-engineering",
    icon: ScanLine,
    body:
      "3D laser scanning, measurement, CAD/digital drawings, part identification and design development for obsolete or unavailable parts.",
    capabilities: ["3D laser scanning", "Measurement", "CAD drawings", "Part identification", "Design development"],
    processes: ["Receive part", "Scan and measure", "Create digital model", "Select manufacturing route"],
    materials: ["Material depends on analysis and operating service"]
  },
  {
    title: "Material Analysis",
    slug: "material-analysis",
    icon: Microscope,
    body:
      "Metal composition analysis, material verification, failure review support and material selection for critical industrial replacement parts.",
    capabilities: ["Metal composition analysis", "Material verification", "Failure review support", "Material selection"],
    processes: ["Sample review", "Composition analysis", "Failure-condition discussion", "Material recommendation"],
    materials: ["Ferrous and non-ferrous materials subject to application"]
  },
  {
    title: "Additive Manufacturing",
    slug: "additive-manufacturing",
    icon: Radar,
    body:
      "Polymer and metal 3D printing for rapid prototyping, design validation, pattern development, advanced part development and future localisation.",
    capabilities: ["Polymer 3D printing", "Metal 3D printing", "Rapid prototyping", "Design validation", "Pattern development"],
    processes: ["Digital model preparation", "Prototype", "Review and qualify", "Feed learning into local manufacturing"],
    materials: ["Polymer printing materials", "Metal additive materials under qualification"]
  },
  {
    title: "Digital Production Control / Vezapp",
    slug: "digital-production-control-vezapp",
    icon: ClipboardCheck,
    body:
      "Production tracking, scheduling discipline, quality checkpoints and accountability between sales, planning, production and management.",
    capabilities: ["Production tracking", "Scheduling discipline", "Quality checkpoints", "Accountability", "Communication flow"],
    processes: ["Order intake", "Planning", "Production checkpoints", "Management visibility"],
    materials: ["Digital operating discipline"]
  }
];

export const wearComparison = [
  {
    title: "Hardox Wearparts",
    subtitle: "Impact and abrasion",
    description:
      "Best suited for fabricated wear parts, dump bodies, chutes, liners, hoppers and structural areas where high-strength wear plate is the right route.",
    icon: HardHat,
    useCases: ["Impact wear", "Abrasion", "Fabricated wear structures", "Replacement liners"]
  },
  {
    title: "Enduraclad / CCO Solutions",
    subtitle: "Severe sliding abrasion",
    description:
      "Chromium-carbide overlay solutions for high-wear surfaces such as cement, mining and heavy-process areas where sliding abrasion dominates.",
    icon: ShieldCheck,
    useCases: ["VRM areas", "Chutes", "Wear liners", "High-abrasion surfaces"]
  }
];

export const reverseEngineeringHighlights = [
  "Receive part, photo or drawing",
  "Understand process and failure mode",
  "3D laser scan and dimensionally check",
  "Create digital drawing or CAD model",
  "Review metal composition where required",
  "Prototype or qualify the design",
  "Select manufacturing route",
  "Quote and manufacture locally"
];

export const nigerianContentCards = [
  {
    title: "Local manufacturing since 1969",
    icon: Factory,
    body: "Long-term industrial manufacturing presence supporting Nigeria's basic industries."
  },
  {
    title: "Nigerian-made sacrificial anodes",
    icon: Anchor,
    body: "Metec West Africa supports local corrosion-protection capacity for offshore, marine and coastal applications."
  },
  {
    title: "Metec West Africa + Imenco",
    icon: ShieldCheck,
    body: "Nigerian sacrificial anode manufacturing combined with international offshore clamp technology."
  },
  {
    title: "Hardox wear solutions",
    icon: HardHat,
    body: "Fabricated wear-part solutions for impact and abrasion applications."
  },
  {
    title: "Enduraclad CCO wear solutions",
    icon: Layers3,
    body: "Chromium-carbide overlay options for severe sliding abrasion in heavy industry."
  },
  {
    title: "Shell-supported additive manufacturing journey",
    icon: Microscope,
    body: "Advanced part development and future localisation without overclaiming production readiness."
  },
  {
    title: "University partnerships",
    icon: GraduationCap,
    body: "Technical collaboration and exposure for the next generation of industrial talent."
  },
  {
    title: "TVET and technical skills",
    icon: Zap,
    body: "Support for practical industrial skills needed to scale Nigerian manufacturing."
  }
];

export const skillsEducationCards = [
  {
    title: "University Partnerships",
    icon: GraduationCap,
    image: "/placeholders/skills/university-mou-signing.jpg",
    shortDescription:
      "Connecting academic learning with real manufacturing challenges through university MOUs, technical engagement and industrial exposure.",
    body:
      "NFG works with Nigerian universities through Memoranda of Understanding and technical collaboration pathways that connect academic learning with real industrial manufacturing challenges.",
    points: [
      "Engineering exposure",
      "Foundry and manufacturing awareness",
      "Research collaboration opportunities",
      "Student and faculty engagement",
      "Real industrial problem-solving"
    ],
    href: "/about/skills-education-foundation#university-partnerships",
    cta: "View University Partnerships"
  },
  {
    title: "Industrial Training",
    icon: HardHat,
    image: "/placeholders/skills/industrial-training-students.jpg",
    shortDescription:
      "Giving students and young technical talent exposure to foundry operations, machining, fabrication, quality control, reverse engineering and advanced manufacturing.",
    body:
      "NFG provides industrial training exposure for students and young technical talent, helping them experience real manufacturing environments, equipment, safety culture and production discipline.",
    points: [
      "Foundry operations",
      "Machining and fabrication",
      "Quality control exposure",
      "Engineering and reverse engineering",
      "Workplace discipline and safety"
    ],
    href: "/about/industrial-training",
    cta: "Explore Industrial Training"
  },
  {
    title: "Nigerian Foundries Educational Foundation",
    icon: BookOpen,
    image: "/placeholders/skills/foundation-education.jpg",
    shortDescription:
      "Supporting technical education, industrial awareness and the development of future manufacturing talent.",
    body:
      "The Foundation represents NFG's long-term commitment to technical education, industrial awareness and the development of future manufacturing talent in Nigeria.",
    points: [
      "Technical education support",
      "Youth and skills development",
      "Manufacturing awareness",
      "Industrial career pathways",
      "Community and education impact"
    ],
    href: "/about/skills-education-foundation#foundation",
    cta: "Learn About the Foundation"
  },
  {
    title: "TVET Development Journey",
    icon: Settings,
    image: "/placeholders/skills/tvet-workshop-training.jpg",
    shortDescription:
      "Building a structured pathway for practical manufacturing skills linked to real Nigerian industrial needs.",
    body:
      "NFG is developing a structured pathway for technical and vocational education linked to real manufacturing needs, helping prepare young Nigerians for careers in modern industry.",
    points: [
      "Practical manufacturing skills",
      "Foundry and metalworking exposure",
      "Industrial maintenance awareness",
      "Digital and advanced manufacturing exposure",
      "Skills for Nigeria's industrial future"
    ],
    href: "/about/skills-education-foundation#tvet-journey",
    cta: "View TVET Journey"
  }
];

export const skillsEducationPage = {
  title: "Skills, Education & Foundation",
  slug: "skills-education-foundation",
  heroHeadline: "Building Industrial Skills for Nigeria's Manufacturing Future",
  heroSubheadline:
    "NFG supports Nigerian industrial growth not only by manufacturing critical parts locally, but also by helping develop the engineers, technicians, students and skilled workers who will sustain the future of manufacturing.",
  heroImage: "/placeholders/skills/skills-education-hero.jpg",
  intro:
    "NFG has spent decades manufacturing parts for Nigeria's basic industries. But the future of Nigerian manufacturing depends on more than equipment and facilities. It depends on people.",
  universityPartnershipsCountApproved: false,
  verifiedUniversityMouCount: null,
  universitySafeWording: "University partnership pathways across Nigeria",
  tvetStatus: {
    currentStatus: "planning",
    publicStatusText: "TVET development journey",
    accreditationBody: "",
    managementApprovedForPublicDisplay: false,
    lastUpdated: "2026-05-09"
  }
};

export const universityPartnerships = [
  {
    universityName: "University partnership record",
    slug: "university-partnership-record",
    location: "Nigeria",
    yearSigned: "To verify",
    mouStatus: "draft",
    collaborationType: ["Student industrial visits", "Foundry awareness", "Engineering project support"],
    shortDescription:
      "CMS-managed university partnership item. Add each confirmed MOU individually with logo, photos, collaboration details and verification status.",
    verificationStatus: "pending",
    displayOnHomepage: false,
    displayOrder: 1
  }
];

export const trainingExposureAreas = [
  {
    title: "Foundry Operations",
    icon: Flame,
    body: "Melting, moulding, pouring, fettling, heat treatment and production discipline."
  },
  {
    title: "Machining and Fabrication",
    icon: Wrench,
    body: "Machine shop exposure, fabrication, welding, assembly and repair support."
  },
  {
    title: "Quality Control",
    icon: ClipboardCheck,
    body: "Inspection, dimensional checks, material verification and quality discipline."
  },
  {
    title: "Reverse Engineering",
    icon: ScanLine,
    body: "Part identification, measurement, 3D laser scanning and digital drawing development."
  },
  {
    title: "Additive Manufacturing",
    icon: Radar,
    body: "Polymer and metal 3D printing exposure, rapid prototyping and design visualisation."
  },
  {
    title: "Corrosion Protection",
    icon: Anchor,
    body: "Sacrificial anodes, non-ferrous manufacturing and offshore corrosion-protection awareness."
  }
];

export const industrialTrainingDepartments = [
  "Ferrous Foundry",
  "Metec West Africa / Non-Ferrous",
  "Machining & Fabrication",
  "Engineering / Reverse Engineering",
  "Quality Control",
  "3D Printing / Additive Manufacturing",
  "Administration / HRA",
  "Finance / Accounts",
  "Sales Relationship / Client Support"
];

export const tvetSkillAreas = [
  "Foundry and metal casting",
  "Pattern and moulding awareness",
  "Machining and fabrication",
  "Welding and repair",
  "Quality inspection",
  "Corrosion protection",
  "Laser scanning and reverse engineering",
  "3D printing and rapid prototyping",
  "Production planning and digital tracking",
  "Safety and workplace discipline"
];

export const talentPipelineCards = [
  { title: "Graduate trainees", icon: GraduationCap, body: "Structured exposure for young professionals entering industrial manufacturing." },
  { title: "Industrial trainees", icon: HardHat, body: "Real manufacturing environment exposure for students and young technical talent." },
  { title: "Young engineers", icon: Settings, body: "Mentoring around materials, drawings, measurement, process discipline and problem solving." },
  { title: "Technicians", icon: Wrench, body: "Practical awareness across foundry, machining, fabrication, maintenance and safety." },
  { title: "Quality and inspection trainees", icon: ClipboardCheck, body: "Dimensional checks, material verification and quality discipline exposure." },
  { title: "Digital manufacturing learners", icon: Radar, body: "Digital drawings, 3D printing, reverse engineering and production tracking awareness." }
];

export const certifications = [
  {
    title: "ISO 9001:2015",
    issuingBody: "Certification body to be confirmed in CMS",
    year: "To verify",
    category: "Quality",
    description: "Quality management certification record. Upload certificate image or PDF when approved.",
    verificationStatus: "pending",
    displayOnHomepage: true
  },
  {
    title: "ISO 50001",
    issuingBody: "Certification body to be confirmed in CMS",
    year: "To verify",
    category: "Energy",
    description: "Energy management certification record. Upload certificate image or PDF when approved.",
    verificationStatus: "pending",
    displayOnHomepage: true
  },
  {
    title: "Federal Ministry of Industry OEM Manufacturer's Certificate",
    issuingBody: "Federal Ministry of Industry",
    year: "To verify",
    category: "Manufacturing recognition",
    description: "OEM manufacturer's certificate record with verification status and downloadable PDF support.",
    verificationStatus: "pending",
    displayOnHomepage: true
  },
  {
    title: "Hardox Wearparts Certified Workshop",
    issuingBody: "Hardox Wearparts",
    year: "To verify",
    category: "Workshop recognition",
    description: "Wearparts recognition record. Certificate media can be uploaded through Sanity.",
    verificationStatus: "pending",
    displayOnHomepage: true
  },
  {
    title: "Shell Nigerian Content Manufacturing Recognition",
    issuingBody: "Shell",
    year: "To verify",
    category: "Nigerian Content",
    description: "Recognition record managed conservatively until certificate evidence is uploaded.",
    verificationStatus: "pending",
    displayOnHomepage: true
  },
  {
    title: "Stanford Seed Transformation Program",
    issuingBody: "Stanford Seed",
    year: "2023",
    category: "Transformation",
    description: "Transformation program completion record for NFG's operational improvement journey.",
    verificationStatus: "pending",
    displayOnHomepage: true
  },
  {
    title: "GEF-UNIDO Industrial Energy Efficiency & RECP Project",
    issuingBody: "GEF-UNIDO",
    year: "To verify",
    category: "Energy and cleaner production",
    description: "Industrial energy efficiency and resource efficient cleaner production project recognition.",
    verificationStatus: "pending",
    displayOnHomepage: true
  }
];

export const caseStudies = [
  {
    label: "Selected project",
    title: "Cement plant wear-part localisation",
    slug: "cement-plant-wear-part-localisation",
    clientNameDisplay: "Confidential cement client",
    confidentialityStatus: "confidential",
    industry: "Cement Plants",
    problem: "Critical wear parts were creating maintenance pressure and dependence on imported spares.",
    nfgApproach:
      "NFG reviewed the wear condition, considered local manufacturing routes and supported practical replacement-part supply.",
    manufacturingRoute: "Wear casting, machining and wear-solution review",
    materials: ["High-chrome iron", "Manganese steel", "Wear materials subject to application"],
    result:
      "A local support pathway for recurring cement plant wear needs. Performance numbers are intentionally omitted until approved for publication.",
    featured: true
  },
  {
    label: "Client example",
    title: "Quarry crusher parts reverse engineering",
    slug: "quarry-crusher-parts-reverse-engineering",
    clientNameDisplay: "Confidential quarry operator",
    confidentialityStatus: "confidential",
    industry: "Quarries & Aggregates",
    problem: "Imported crusher spares created avoidable delay and drawings were not always available.",
    nfgApproach: "Laser measurement, drawing generation and replacement-part development from a sample component.",
    manufacturingRoute: "Reverse engineering, casting and machining",
    materials: ["Manganese steel", "High-chrome iron"],
    result: "A manufacturable local route for replacement crusher parts.",
    featured: true
  },
  {
    label: "Partnership application",
    title: "Offshore corrosion protection",
    slug: "offshore-corrosion-protection",
    clientNameDisplay: "Confidential offshore application",
    confidentialityStatus: "confidential",
    industry: "Oil & Gas / Offshore",
    problem: "Offshore corrosion exposure required practical local manufacturing and retrofit support.",
    nfgApproach: "Metec West Africa sacrificial anode capability combined with Imenco-aligned clamp positioning.",
    manufacturingRoute: "Sacrificial anodes and corrosion-protection assembly support",
    materials: ["Aluminium anodes", "Zinc anodes"],
    result: "Nigerian Content pathway for corrosion-protection assemblies.",
    featured: true
  },
  {
    label: "Capability journey",
    title: "Shell-supported additive manufacturing journey",
    slug: "shell-supported-additive-manufacturing-journey",
    clientNameDisplay: "Internal capability development",
    confidentialityStatus: "approved summary only",
    industry: "Oil & Gas / Offshore",
    problem: "Nigeria needs a practical pathway toward local development of more complex industrial parts.",
    nfgApproach: "Advanced manufacturing capability development using polymer and metal 3D printing for prototyping and qualification.",
    manufacturingRoute: "Digital engineering, additive manufacturing and qualification pathway",
    materials: ["Polymer and metal additive manufacturing materials under qualification"],
    result: "Part development capability positioned as a journey, not an overclaimed production promise.",
    featured: true
  }
];

export const leadership = [
  {
    name: "Vassily Oye Barberopoulos",
    role: "Managing Director",
    areaOfResponsibility: "Group leadership, strategy and industrial transformation",
    body:
      "Leading NFG's evolution from a long-established foundry business into an integrated industrial manufacturing and reverse-engineering group.",
    quote: "Local manufacturing must solve real operational problems for industry.",
    featuredOnHomepage: true,
    displayOrder: 1
  },
  {
    name: "Nicholas Barberopoulos",
    role: "Deputy Managing Director",
    areaOfResponsibility: "Operations, delivery and group coordination",
    body:
      "Supporting operational delivery across foundry, machining, fabrication, corrosion protection and advanced manufacturing activities.",
    quote: "The job is not just making a part. It is making the route dependable.",
    featuredOnHomepage: true,
    displayOrder: 2
  },
  {
    name: "Dr Cynthia Abima",
    role: "Head of Ferrous Foundry",
    areaOfResponsibility: "Ferrous foundry technical leadership",
    body:
      "Representing the new generation of technical leadership at NFG, combining quality discipline, metallurgical understanding and operational responsibility.",
    quote: "Material choice and process discipline matter before the mould is poured.",
    featuredOnHomepage: true,
    displayOrder: 3
  }
];

export const aboutPages = [
  {
    title: "Our Story",
    slug: "story",
    summary:
      "Founded in 1969, NFG has grown from foundry roots into a second-generation industrial group with ferrous foundry, Metec West Africa, Industrial Applications, reverse engineering, 3D printing and digital transformation capability.",
    sections: [
      "Founded in 1969",
      "Second-generation industrial group",
      "From foundry to integrated manufacturing group",
      "Ferrous and non-ferrous capability",
      "Machining, fabrication and Industrial Applications",
      "Reverse engineering and 3D printing",
      "Nigerian Content and digital transformation"
    ]
  },
  {
    title: "Transformation Journey",
    slug: "transformation-journey",
    summary:
      "NFG's transformation journey covers Stanford Seed completion in 2023, Kaizen, Vezapp digitisation, customer-centric structure, scheduling discipline, quality discipline and industrial scaling.",
    sections: ["Stanford Seed 2023", "Kaizen", "Vezapp digitisation", "Customer-centric structure", "Quality discipline", "Finance and procurement discipline"]
  },
  {
    title: "Skills, Education & Foundation",
    slug: "skills-education-foundation",
    summary:
      "NFG supports university partnerships, industrial training, technical education, foundation initiatives and structured skills development as part of Nigeria's industrial future.",
    sections: [
      "Why industrial skills matter",
      "University partnerships and MOUs",
      "Industrial training",
      "Nigerian Foundries Educational Foundation",
      "TVET development journey",
      "Graduate and technical talent pipeline"
    ]
  },
  {
    title: "Industrial Training",
    slug: "industrial-training",
    summary:
      "Industrial training enquiry pathway for students and young technical talent seeking exposure to real manufacturing environments.",
    sections: [
      "Foundry operations",
      "Machining and fabrication",
      "Quality control",
      "Reverse engineering",
      "Additive manufacturing",
      "Corrosion protection"
    ]
  },
  {
    title: "Facilities",
    slug: "facilities",
    summary:
      "Facilities include Otta foundry, Ilupeju and engineering areas where applicable, Metec West Africa, Industrial Applications, labs, machining areas and fabrication areas.",
    sections: ["Otta foundry", "Ilupeju / engineering", "Metec West Africa", "Industrial Applications", "Labs", "Machining and fabrication areas"]
  },
  {
    title: "Careers",
    slug: "careers",
    summary:
      "Careers at NFG cover graduate trainees, technical skills, foundry careers, engineering careers and industrial training.",
    sections: ["Graduate trainees", "Technical skills", "Foundry careers", "Engineering careers", "Industrial training"]
  }
];

export const resourcePages = [
  { title: "Case Studies", slug: "case-studies", icon: FileSearch, summary: "Approved industrial examples framed without confidential client details." },
  { title: "Insights / Blog", slug: "insights", icon: BookOpen, summary: "Foundry knowledge, wear solutions, corrosion protection, reverse engineering and Nigerian Content." },
  { title: "Downloads", slug: "downloads", icon: Download, summary: "Company profile, solution brochures, certification PDFs and product catalogues." },
  { title: "FAQs", slug: "faqs", icon: HelpCircle, summary: "Common RFQ, reverse engineering, municipal casting, wear part, corrosion and 3D printing questions." }
];

export const blogPosts = [
  {
    title: "How to start reverse engineering when no drawing exists",
    category: "Reverse engineering",
    excerpt: "What to send, what NFG reviews and how a broken part becomes a manufacturable route.",
    publishDate: "2026-05-09"
  },
  {
    title: "Hardox, CCO or casting: choosing the right wear route",
    category: "Wear solutions",
    excerpt: "Impact, abrasion and service environment should guide the route before price comparison.",
    publishDate: "2026-05-09"
  },
  {
    title: "Nigerian Content as industrial capacity",
    category: "Nigerian Content",
    excerpt: "Local manufacturing matters when strategic industries need practical accountability close to site.",
    publishDate: "2026-05-09"
  }
];

export const downloads = [
  {
    title: "Company profile",
    category: "Company",
    description: "Overview of NFG's group capability, sectors served and contact routes.",
    href: "/documents/nfg-company-profile.pdf"
  },
  {
    title: "Wear solutions brochure",
    category: "Solutions",
    description: "Hardox, Enduraclad CCO, castings and reverse engineering for severe wear environments.",
    href: "/documents/wear-solutions-brochure.pdf"
  },
  {
    title: "Municipal casting catalogue",
    category: "Product catalogue",
    description: "Maintenance hole covers, manhole covers, gratings and municipal casting categories.",
    href: "/documents/municipal-casting-catalogue.pdf"
  },
  {
    title: "Corrosion protection brochure",
    category: "Solutions",
    description: "Metec West Africa sacrificial anodes and corrosion-protection assembly positioning.",
    href: "/documents/corrosion-protection-brochure.pdf"
  }
];

export const faqs = [
  {
    category: "RFQ process",
    question: "What should I send when a part fails?",
    answer:
      "Send a photo, drawing, broken or worn sample, equipment name, quantity, urgency and any known material or operating condition."
  },
  {
    category: "Reverse engineering",
    question: "Can NFG help if there is no drawing?",
    answer:
      "Yes. NFG can start with the sample part, photo or scan, then review geometry, material and failure condition before recommending a manufacturing route."
  },
  {
    category: "Municipal castings",
    question: "Can NFG support local alternatives to imported covers?",
    answer:
      "Yes. NFG supports maintenance hole covers, manhole covers, gratings and utility access castings for municipal, estate and industrial needs."
  },
  {
    category: "Wear parts",
    question: "How do I know whether to use Hardox, Enduraclad or a casting?",
    answer:
      "The route depends on the wear mode, impact level, geometry, operating environment and available sample or drawing."
  },
  {
    category: "Corrosion protection",
    question: "What does Metec West Africa provide?",
    answer:
      "Metec West Africa supports sacrificial anodes and corrosion-protection assemblies for offshore, marine, power, windmill and coastal applications."
  },
  {
    category: "3D printing",
    question: "Does NFG claim full production replacement through 3D printing?",
    answer:
      "No. NFG presents 3D printing as an advanced manufacturing journey for rapid prototyping, part development, qualification and future localisation."
  }
];

export const contactCards = [
  {
    title: "General enquiry",
    icon: Mail,
    body: "For company enquiries, facility information and general routing.",
    href: `mailto:${siteSettings.primaryEmail}`,
    label: siteSettings.primaryEmail
  },
  {
    title: "Sales / RFQ",
    icon: Send,
    body: "For replacement parts, drawings, wear problems and technical review.",
    href: `mailto:${siteSettings.salesEmail}?subject=NFG%20RFQ`,
    label: siteSettings.salesEmail
  },
  {
    title: "WhatsApp technical sales",
    icon: MessageCircle,
    body: "Start with a photo, drawing or short explanation of the problem.",
    href: `https://wa.me/${siteSettings.whatsappNumber}`,
    label: siteSettings.primaryPhone
  },
  {
    title: "Facility visit",
    icon: CalendarDays,
    body: "Request a visit for qualified industrial, procurement or technical teams.",
    href: `mailto:${siteSettings.salesEmail}?subject=Facility%20Visit%20Request`,
    label: "Request by email"
  },
  {
    title: "Head Office & Otta Factory",
    icon: MapPin,
    body: siteSettings.address,
    href: "/contact#map",
    label: "View map placeholder"
  },
  {
    title: "Phone",
    icon: Phone,
    body: `Sales: ${siteSettings.salesPhones.join(", ")}. General: ${siteSettings.generalPhones.join(", ")}.`,
    href: `tel:${siteSettings.salesPhones[0].replace(/\s/g, "")}`,
    label: siteSettings.salesPhones[0]
  }
];

export const navItems = [
  {
    label: "Solutions",
    href: "/solutions",
    description: "Manufacturing routes for parts, wear, corrosion and reverse engineering.",
    items: [
      {
        label: "NFG Signature Uptime Solution",
        href: "/solutions#signature-uptime-solution",
        description:
          "Plan ahead, respond fast and protect production through planned critical-parts support and emergency manufacturing support.",
        featured: true
      },
      ...solutions.map((item) => ({
        label: item.navTitle || item.title,
        href: `/solutions/${item.slug}`,
        description: item.summary
      }))
    ]
  },
  {
    label: "Industries",
    href: "/industries",
    description: "How NFG supports plants, mines, quarries, offshore, municipal and manufacturing clients.",
    items: industries.map((item) => ({
      label: item.title,
      href: `/industries/${item.slug}`,
      description: item.pain
    }))
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    description: "Foundry, machining, scanning, analysis, additive manufacturing and digital production control.",
    items: capabilities.map((item) => ({
      label: item.title,
      href: `/capabilities/${item.slug}`,
      description: item.body
    }))
  },
  {
    label: "Nigerian Content",
    href: "/nigerian-content",
    description: "Industrial capacity, partnerships, skills development, recognitions and local manufacturing.",
    items: [
      { label: "Local Manufacturing", href: "/nigerian-content", description: "Nigerian Content as practical industrial capacity." },
      { label: "Skills Development", href: "/about/skills-education-foundation", description: "People, training and technical capacity behind Nigerian Content." },
      { label: "University Partnerships", href: "/about/skills-education-foundation#university-partnerships", description: "MOU pathways connecting universities with real industrial manufacturing." },
      { label: "TVET Journey", href: "/about/skills-education-foundation#tvet-journey", description: "Working toward structured technical training capacity without overstating accreditation." },
      { label: "Foundation", href: "/about/skills-education-foundation#foundation", description: "Nigerian Foundries Educational Foundation and education impact." },
      { label: "Metec West Africa + Imenco", href: "/nigerian-content/metec-imenco", description: "Anodes with offshore clamp integration positioning." },
      { label: "Certifications & Awards", href: "/nigerian-content/certifications-awards", description: "Verified or pending certificates and recognitions." }
    ]
  },
  {
    label: "About",
    href: "/about",
    description: "Story, leadership, skills, education, transformation, facilities and careers.",
    items: [
      { label: "Our Story", href: "/about/story", description: "Founded in 1969 and evolving into an integrated industrial group." },
      { label: "Leadership", href: "/about/leadership", description: "Management and technical leadership profiles." },
      { label: "Skills, Education & Foundation", href: "/about/skills-education-foundation", description: "University MOUs, industrial training, foundation initiatives and TVET development journey." },
      { label: "Industrial Training", href: "/about/industrial-training", description: "Enquiry pathway for students and young technical talent." },
      { label: "Transformation Journey", href: "/about/transformation-journey", description: "Stanford Seed, Kaizen, Vezapp and operating discipline." },
      { label: "Facilities", href: "/about/facilities", description: "Otta, Ilupeju, Metec, Industrial Applications, labs and workshops." },
      { label: "Careers", href: "/about/careers", description: "Graduate, technical, foundry and engineering paths." }
    ]
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Case studies, insights, downloads and FAQs.",
    items: resourcePages.map((item) => ({
      label: item.title,
      href: `/resources/${item.slug}`,
      description: item.summary
    }))
  },
  {
    label: "Contact / RFQ",
    href: "/contact",
    description: "Contact cards, RFQ intake and technical review.",
    items: [
      { label: "Contact", href: "/contact", description: "Department cards, address, email, phone and map placeholder." },
      { label: "RFQ / Technical Review", href: "/rfq", description: "Send a broken part, drawing, photo or industrial problem." }
    ]
  }
];

export const footerNavigation = [
  { title: "Solutions", links: solutions.slice(0, 6).map((item) => ({ label: item.navTitle || item.title, href: `/solutions/${item.slug}` })) },
  { title: "Industries", links: industries.slice(0, 6).map((item) => ({ label: item.title, href: `/industries/${item.slug}` })) },
  { title: "Skills & Education", links: [
    { label: "University Partnerships", href: "/about/skills-education-foundation#university-partnerships" },
    { label: "Industrial Training", href: "/about/industrial-training" },
    { label: "Nigerian Foundries Educational Foundation", href: "/about/skills-education-foundation#foundation" },
    { label: "TVET Development", href: "/about/skills-education-foundation#tvet-journey" },
    { label: "Careers", href: "/about/careers" }
  ] },
  { title: "Company", links: [
    { label: "Nigerian Content", href: "/nigerian-content" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Certifications & Awards", href: "/nigerian-content/certifications-awards" },
    { label: "Downloads", href: "/resources/downloads" }
  ] },
  { title: "Contact", links: [
    { label: "Send Part / Drawing", href: "/rfq" },
    { label: "Contact Sales", href: "/contact" },
    { label: "WhatsApp Technical Sales", href: `https://wa.me/${siteSettings.whatsappNumber}` },
    { label: "Download Company Profile", href: "/documents/nfg-company-profile.pdf" }
  ] }
];

export const problems = problemCards.map((item) => item.title);
export const processSteps = methodSteps;
export const partnerships = nigerianContentCards;
export const landingPages = [...solutions, ...industries, ...capabilities];

export function findBySlug(collection, slug) {
  return collection.find((item) => item.slug === slug);
}
