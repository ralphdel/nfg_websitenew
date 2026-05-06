import {
  Anchor,
  BadgeCheck,
  Bolt,
  Building2,
  Factory,
  FileSearch,
  Hammer,
  HardHat,
  Layers3,
  Microscope,
  Pickaxe,
  Radar,
  ScanLine,
  Settings,
  ShieldCheck,
  Ship,
  Wrench,
  Zap
} from "lucide-react";

export const navItems = [
  { label: "Industries", href: "#industries" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "How We Work", href: "#process" },
  { label: "Proof", href: "#proof" },
  { label: "Vezapp", href: "#vezapp" },
  { label: "Partnerships", href: "#nigerian-content" },
  { label: "Leadership", href: "#leadership" }
];

export const trustBadges = [
  "Since 1969",
  "ISO 9001",
  "Nigerian Content",
  "Hardox Wearparts Centre",
  "Imenco Corrosion Partnership",
  "Shell-Supported Additive Manufacturing",
  "Vezapp Digital Production Tracking"
];

export const problems = [
  "Breakdown of critical parts",
  "Long import lead times",
  "Obsolete OEM components",
  "Foreign exchange exposure",
  "Unplanned downtime",
  "Limited local technical support",
  "Poor visibility on job progress"
];

export const industries = [
  {
    title: "Cement, Mining & Quarry",
    icon: Pickaxe,
    pain: "High-wear parts, emergency shutdowns and imported spares.",
    solution:
      "Manganese steel, high-chrome iron, Ni-Hard, moly-chrome, Hardox, Enduraclad/CCO, machining and reverse engineering.",
    slug: "cement-mining"
  },
  {
    title: "Oil & Gas",
    icon: Factory,
    pain: "Corrosion exposure, Nigerian Content requirements and long supply chains.",
    solution:
      "Sacrificial anodes, non-ferrous castings, corrosion-protection assemblies, machining, fabrication and additive manufacturing support.",
    slug: "oil-gas"
  },
  {
    title: "Marine & Offshore",
    icon: Ship,
    pain: "Harsh environments, corrosion risk and urgent vessel maintenance windows.",
    solution:
      "Metec West Africa anodes, Imenco-aligned corrosion protection, machined parts, fabricated assemblies and reverse-engineered components.",
    slug: "marine-offshore"
  },
  {
    title: "Power & Energy",
    icon: Bolt,
    pain: "Critical equipment downtime and hard-to-source replacement components.",
    solution:
      "Alloy castings, precision machining, fabrication, repair support, laser scanning and replacement-part development.",
    slug: "power-energy"
  },
  {
    title: "Infrastructure & Municipal Works",
    icon: Building2,
    pain: "Heavy-duty public assets need durable, locally supported parts.",
    solution:
      "Castings, machined components, fabricated assemblies, covers, grates, structural wear parts and repeat supply programmes.",
    slug: "infrastructure"
  },
  {
    title: "Agro-Allied & Food Processing",
    icon: Layers3,
    pain: "Processing equipment wear, hygiene needs and production stoppages.",
    solution:
      "Stainless and alloy castings, machined spares, repair fabrication, reverse engineering and repeat industrial supply.",
    slug: "agro-allied"
  },
  {
    title: "Defence & Industrial Maintenance",
    icon: ShieldCheck,
    pain: "Legacy equipment, constrained sourcing and sensitive operational timelines.",
    solution:
      "Reverse engineering, machining, fabrication, castings and disciplined local support for critical maintenance requirements.",
    slug: "defence-maintenance"
  }
];

export const capabilities = [
  {
    title: "Ferrous Foundry",
    icon: Factory,
    body:
      "Industrial castings in manganese steel, high-chrome iron, ductile iron, grey iron, Ni-Hard, stainless and alloy steels.",
    slug: "ferrous-foundry"
  },
  {
    title: "Non-Ferrous Foundry / Metec West Africa",
    icon: Anchor,
    body:
      "Sacrificial anodes and non-ferrous castings for oil & gas, marine, power and corrosion-protection applications.",
    slug: "corrosion-protection"
  },
  {
    title: "Machining, Fabrication & Assembly",
    icon: Wrench,
    body:
      "CNC machining, fabrication, welding, assembly and repair of industrial components.",
    slug: "machining-fabrication"
  },
  {
    title: "Wear Solutions",
    icon: HardHat,
    body:
      "Hardox wear parts for impact and abrasion, plus Enduraclad chromium-carbide overlay solutions for severe sliding abrasion.",
    slug: "wear-solutions"
  },
  {
    title: "Reverse Engineering",
    icon: ScanLine,
    body:
      "Laser scanning, measurement, redesign, drawing generation and replacement-part development.",
    slug: "reverse-engineering"
  },
  {
    title: "Additive Manufacturing",
    icon: Radar,
    body:
      "Metal 3D printing, polymer 3D printing, rapid prototyping, patterns, tooling and advanced part development.",
    slug: "additive-manufacturing"
  }
];

export const processSteps = [
  {
    title: "Diagnose",
    icon: FileSearch,
    body:
      "We understand the failure, wear pattern, material requirement and operating condition."
  },
  {
    title: "Scan / Engineer",
    icon: ScanLine,
    body:
      "We scan, measure, reverse-engineer, draw, simulate or redesign where required."
  },
  {
    title: "Manufacture",
    icon: Hammer,
    body:
      "We cast, machine, fabricate, protect, print or assemble using the right route."
  },
  {
    title: "Track / Deliver",
    icon: BadgeCheck,
    body:
      "We track production, inspect quality checkpoints and support the client through delivery and installation where applicable."
  }
];

export const caseStudies = [
  {
    label: "Selected project",
    title: "Cement plant wear-part localisation",
    body:
      "Local manufacturing and wear-solution support for critical cement plant components, with emphasis on shorter response time and practical maintenance support."
  },
  {
    label: "Client example",
    title: "Quarry crusher parts reverse engineering",
    body:
      "Laser measurement, drawing generation and replacement-part development for quarry equipment where imported spares created avoidable delay."
  },
  {
    label: "Partnership application",
    title: "Offshore corrosion protection",
    body:
      "Metec West Africa and Imenco-aligned corrosion-protection capability for sacrificial anodes and offshore protection assemblies."
  },
  {
    label: "Capability journey",
    title: "Shell-supported metal additive manufacturing",
    body:
      "Development of advanced industrial part capability through supported additive manufacturing, with future localisation potential."
  },
  {
    label: "Internal transformation project",
    title: "Vezapp production tracking implementation",
    body:
      "Digital production visibility under implementation to improve scheduling discipline, quality checkpoints and delivery accountability."
  }
];

export const partnerships = [
  {
    title: "Metec West Africa + Imenco",
    icon: Anchor,
    body:
      "Nigerian-made sacrificial anodes combined with international offshore corrosion-protection technology."
  },
  {
    title: "Hardox Wearparts",
    icon: HardHat,
    body:
      "Accredited wear solutions for impact and abrasion applications."
  },
  {
    title: "Enduraclad",
    icon: ShieldCheck,
    body:
      "Chromium-carbide overlay solutions for severe wear in cement, mining and heavy industry."
  },
  {
    title: "Shell-Supported Additive Manufacturing",
    icon: Microscope,
    body:
      "Metal 3D printing capability for advanced industrial part development and future localisation."
  },
  {
    title: "Universities / TVET",
    icon: Zap,
    body:
      "Industrial training, university partnerships and technical skills development for Nigeria's manufacturing future."
  }
];

export const leadership = [
  {
    name: "Vassily Oye Barberopoulos",
    role: "Managing Director",
    body:
      "Leading NFG's evolution from a long-established foundry business into an integrated industrial manufacturing and reverse-engineering group."
  },
  {
    name: "Nicholas Barberopoulos",
    role: "Deputy Managing Director",
    body:
      "Supporting operational delivery across foundry, machining, fabrication, corrosion-protection and advanced manufacturing activities."
  },
  {
    name: "Dr Cynthia Abima",
    role: "Head of Ferrous Foundry",
    body:
      "Dr Cynthia Abima represents the new generation of technical leadership at NFG - combining quality discipline, metallurgical understanding and operational responsibility in one of Africa's most demanding heavy-manufacturing environments."
  }
];

export const landingPages = [...industries, ...capabilities];
