export interface WaterproofingService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  applications: string[];
  recommendedSystems: string[];
  keyBenefits: string[];
}

export const servicesData: WaterproofingService[] = [
  {
    id: "swimming-pool",
    slug: "swimming-pool",
    title: "Swimming Pool Waterproofing",
    shortDescription:
      "Waterproofing applications for suitable swimming pool structures, ensuring long-term containment against hydrostatic pressure.",
    fullDescription:
      "Swimming pools and water-retaining structures are subject to continuous hydrostatic pressure from both internal water loads and external groundwater tables. Our professional swimming pool waterproofing service utilizes dual-action cementitious systems like Ultraguard and high-grade flexible barriers to guarantee complete impermeability before tile installation.",
    image: "/assets/projects/project_swimming_pool.jpg",
    applications: [
      "In-ground residential swimming pools",
      "Commercial resort and hotel pool facilities",
      "Rooftop infinity pools",
      "Water fountains and decorative features",
    ],
    recommendedSystems: [
      "Ultraguard 2K Cementitious Waterproofing System (30 kg kit)",
      "Simba Grip 818 C2TES1 Submerged Grade Tile Adhesive",
      "Tile Lit Waterproof Joint Grout",
    ],
    keyBenefits: [
      "Resists sustained positive water pressure and submerged chemical exposure",
      "Flexible membrane accommodates structural settlement and thermal shifts",
      "Excellent substrate compatibility for direct tile application",
    ],
  },
  {
    id: "basement",
    slug: "basement",
    title: "Basement Waterproofing",
    shortDescription:
      "Appropriate waterproofing systems for below-ground structures to prevent water seepage, moisture rising, and structural degradation.",
    fullDescription:
      "Below-ground structures require robust protection against subterranean water ingress, lateral earth pressure, and rising damp. We provide comprehensive tanking solutions combining Insutech APP Membrane systems with crystalline and cementitious protective barriers to safeguard basements, underground car parks, and foundations.",
    image: "/assets/projects/project_basement.jpg",
    applications: [
      "Commercial basement parking levels",
      "Residential underground living spaces and wine cellars",
      "Retaining walls and lift pits",
      "Foundation grade beams and footings",
    ],
    recommendedSystems: [
      "Insutech APP Modified Bitumen Torch-Applied Membrane",
      "Ultraguard 2K Cementitious Negative-Side Barrier",
      "Sub-structure drainage and perimeter joint seals",
    ],
    keyBenefits: [
      "Heavy-duty barrier against positive and negative hydrostatic pressure",
      "Puncture-resistant formulations withstand backfilling operations",
      "Long-term protection against foundation concrete carbonation",
    ],
  },
  {
    id: "rooftop",
    slug: "rooftop",
    title: "Rooftop Waterproofing",
    shortDescription:
      "Appropriate waterproofing solutions to protect flat roofs, podiums, and terraces against severe weather and thermal expansion.",
    fullDescription:
      "Exposed concrete roofs in Kenya face extreme ultraviolet radiation, high daytime temperatures, and torrential rainfall during monsoon seasons. Matshepo Africa engineers complete rooftop waterproofing systems that eliminate pooling leaks, resist thermal cracking, and protect underlying interior spaces with durable membranes.",
    image: "/assets/projects/project_rooftop.jpg",
    applications: [
      "Flat concrete commercial and residential roofs",
      "Podium decks and multi-tier terraces",
      "Solar array rooftop mounting slabs",
      "Gutters, parapets, and rainwater outlets",
    ],
    recommendedSystems: [
      "Insutech APP Membrane with UV-protective finish",
      "Ultraguard 2K High-Flexibility Cementitious Layer",
      "Reinforced corner fillets and expansion joint detailing",
    ],
    keyBenefits: [
      "Exceptional UV stability and elongation under thermal shock",
      "Seamless integration with roof drains and parapet terminations",
      "Eligible for Matshepo 10-Year Waterproofing Project Guarantee",
    ],
  },
  {
    id: "wet-areas",
    slug: "wet-areas",
    title: "Wet Area Waterproofing",
    shortDescription:
      "Crucial waterproofing before tiling in bathrooms, washrooms, utility spaces, and commercial kitchens to prevent hidden seepage.",
    fullDescription:
      "Water leaks inside bathrooms and washrooms often remain unnoticed until severe damage occurs to ceilings below and adjoining drywall partitions. Our wet area waterproofing solutions provide an impervious under-tile tanking barrier across floors, shower recesses, and vertical splash zones prior to tile installation.",
    image: "/assets/projects/project_washroom.jpg",
    applications: [
      "Master and guest bathrooms in high-end developments",
      "Commercial hotel washrooms and changing rooms",
      "Industrial kitchens and food preparation facilities",
      "Laundry rooms and domestic utility zones",
    ],
    recommendedSystems: [
      "Ultraguard 2K Cementitious Barrier (25 kg / 30 kg kit)",
      "Simba Grip 777 C2 Polymer-Modified Tile Adhesive",
      "Tile Lit Waterproof Tile Grout",
    ],
    keyBenefits: [
      "Monolithic seal around plumbing pipe penetrations and floor drains",
      "Zero ponding seepage into lower floor apartments and ceilings",
      "Direct bonding with ceramic and porcelain tile adhesives",
    ],
  },
  {
    id: "balcony",
    slug: "balcony",
    title: "Balcony Waterproofing",
    shortDescription:
      "Proper waterproofing to protect building structures, structural slab edges, and interior spaces from wind-driven rain penetration.",
    fullDescription:
      "Cantilevered balconies and terraces are vulnerable to water pooling, wind-driven rainfall, and deflection stresses. If not properly protected, moisture penetrates the slab edge, corrodes structural rebar, and seeps into internal living rooms through threshold transitions. We deliver tailored waterproofing systems engineered for external exposed slabs.",
    image: "/assets/projects/project_balcony.jpg",
    applications: [
      "Apartment balconies and penthouse verandas",
      "Hotel suite terraces and outdoor lounges",
      "Cantilevered concrete walkways",
      "Threshold transitions between interior and exterior spaces",
    ],
    recommendedSystems: [
      "Ultraguard 2K Flexible Cementitious Membrane",
      "Simba Grip 777 / Simba Grip 818 Exterior Tile Adhesive",
      "Perimeter drip edge and expansion joint seals",
    ],
    keyBenefits: [
      "Protects structural reinforced concrete from carbonation and rebar rust",
      "Resists freeze-thaw deflection and tropical rain delamination",
      "Prevents unsightly efflorescence leaching on building facades",
    ],
  },
];

export const guaranteeDetails = {
  title: "10-YEAR WATERPROOFING GUARANTEE",
  subtitle: "Protect Your Building. Preserve Its Value.",
  statement:
    "We provide a 10-year guarantee for qualifying waterproofing projects, subject to the applicable project scope, approved system, installation conditions, and written warranty terms.",
  note:
    "The 10-year guarantee applies to projects where Matshepo Africa approved waterproofing systems are installed according to our technical specifications, surface preparation protocols, and formal project execution guidelines.",
  keyPoints: [
    "Applicable to qualifying residential, commercial, and industrial projects",
    "Verified installation procedures by certified technical personnel",
    "Comprehensive coverage against material failure and water ingress",
    "Subject to written terms, inspection sign-off, and approved scope",
  ],
};
