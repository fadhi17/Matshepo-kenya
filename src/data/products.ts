export interface PackagingOption {
  label: string;
  weight: string;
  breakdown?: string;
  details?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Tile Adhesives" | "Waterproofing" | "Grout" | "Plaster" | "Flooring";
  range?: string;
  grade?: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  applications: string[];
  suitableSurfaces?: string[];
  packagingOptions: PackagingOption[];
  variants?: string[];
  image: string;
  images?: string[];
  badge?: string;
  tdsAvailable: boolean;
  sdsAvailable: boolean;
  seoTitle: string;
  seoDescription: string;
}

export const productsData: Product[] = [
  // 1. Grip Master
  {
    id: "grip-master",
    slug: "grip-master",
    name: "Grip Master",
    category: "Tile Adhesives",
    range: "Grip Master Range — Economy",
    subtitle: "Ceramic Tile Adhesive",
    shortDescription:
      "Superior bond ceramic tile adhesive formulated for quick, quality tiling that saves time and labor.",
    fullDescription:
      "Grip Master is a superior bond cement-based tile adhesive specifically formulated for standard and large format ceramic tile installation. Manufactured with world-class adhesive technology in Nairobi, Kenya, it ensures higher bonding strength, broad coverage, and easy workability for interior floor and wall tiling projects.",
    keyFeatures: [
      "Superior bond ceramic tile adhesive for quick & quality tiling",
      "Saves time and labor with smooth, easy trowel application",
      "Coverage: Approx. 5 m² per 25 kg bag at 3 mm bed thickness",
      "Water mix ratio: approx. 23–25% for optimal workability",
      "Standard 25 kg multi-ply moisture-resistant bag packaging",
    ],
    applications: [
      "Interior ceramic tile fixing on walls and floors",
      "Residential floor and wall tiling projects",
      "Standard cement screeds, concrete renders, and plaster",
    ],
    suitableSurfaces: [
      "Cured concrete slabs and subfloors",
      "Sand-cement screeds and renders",
      "Concrete blockwork and masonry",
    ],
    packagingOptions: [
      { label: "Standard Bag", weight: "25 kg", details: "Multi-ply moisture-resistant paper bag (approx. 5 m² coverage at 3mm)" },
    ],
    image: "/assets/products/grip_master_front.png",
    images: [
      "/assets/products/grip_master_front.png",
      "/assets/products/grip_master_back.png",
    ],
    badge: "Ceramic Formula",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Grip Master Ceramic Tile Adhesive | Matshepo Africa Nairobi",
    seoDescription:
      "Grip Master ceramic tile adhesive by Matshepo Africa Ltd. Superior bond ceramic tile adhesive for quick, quality tiling in Nairobi, Kenya.",
  },

  // 2. Grip Master Plus
  {
    id: "grip-master-plus",
    slug: "grip-master-plus",
    name: "Grip Master Plus",
    category: "Tile Adhesives",
    range: "Grip Master Range — Economy",
    subtitle: "Porcelain Tile Adhesive",
    shortDescription:
      "Superior bond premium tile adhesive recommended for porcelain, granite, marble, and natural stone tiles.",
    fullDescription:
      "Grip Master Plus is an enhanced, high-performance cementitious tile adhesive engineered specifically for low-porosity porcelain, granite, marble, and natural stone installations. Formulated with world-class polymer bonding agents, it ensures maximum grab and long-term durability on both floor and wall applications.",
    keyFeatures: [
      "Superior bond premium tile adhesive for porcelain, granites, marbles & stones",
      "High bonding strength engineered for dense, low-absorption tile bodies",
      "Coverage: Approx. 5 m² per 25 kg bag at 3 mm thickness",
      "Water mix ratio: approx. 23–25% with smooth, non-sag trowel consistency",
      "Standard 25 kg multi-ply moisture-resistant bag packaging",
    ],
    applications: [
      "Porcelain, granite, marble, and natural stone tile installations",
      "Dense vitrified and low-porosity tile fixing",
      "Interior living rooms, kitchens, bathrooms, and corridors",
    ],
    suitableSurfaces: [
      "Concrete subfloors and screed beds",
      "Cement render and concrete plaster",
      "Stable indoor masonry walls",
    ],
    packagingOptions: [
      { label: "Standard Bag", weight: "25 kg", details: "Multi-ply moisture-resistant paper bag (approx. 5 m² coverage at 3mm)" },
    ],
    image: "/assets/products/grip_master_plus_front.png",
    images: [
      "/assets/products/grip_master_plus_front.png",
      "/assets/products/grip_master_plus_back.png",
    ],
    badge: "Porcelain Formula",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Grip Master Plus Porcelain Tile Adhesive | Matshepo Africa",
    seoDescription:
      "Grip Master Plus porcelain tile adhesive by Matshepo Africa Ltd. Recommended for premium tiles, granites, marbles & stones in Kenya.",
  },

  // 3. Simba Grip 555
  {
    id: "simba-grip-555",
    slug: "simba-grip-555",
    name: "Simba Grip 555",
    category: "Tile Adhesives",
    range: "Simba Grip Range — Premium & Graded",
    grade: "C1 Grade",
    subtitle: "Standard Grey Tile Adhesive (C1 Grade)",
    shortDescription:
      "Superior bond standard grey ceramic tile adhesive for quick and quality tiling, saving time and labour.",
    fullDescription:
      "Simba Grip 555 is a standard classified C1 Grade cement-based tile adhesive manufactured with German technology in Nairobi, Kenya. Specifically formulated with silica-based mortar, polymer modification, and extended open time, it delivers high bonding strength and easy workability for ceramic tile installations on interior walls and floors.",
    keyFeatures: [
      "Officially classified C1 Grade ceramic tile adhesive (KEBS SM#85548)",
      "Polymer modified & silica-based mortar with German technology",
      "Extended open time and high bonding strength for quick, quality tiling",
      "Coverage: Approx. 5 m² per 25 kg bag at 3 mm thickness",
      "Water mix ratio: approx. 23–25% for smooth, easy troweling",
    ],
    applications: [
      "Ceramic tile installation on interior walls and floors",
      "Standard sand-cement screeds, concrete renders, and masonry",
      "Residential and commercial interior tiling projects",
    ],
    suitableSurfaces: [
      "Standard sand-cement screeds",
      "Cured concrete walls and subfloors",
      "Cementitious base coats and masonry",
    ],
    packagingOptions: [
      { label: "Standard Bag", weight: "25 kg", details: "Multi-ply moisture-resistant paper bag (approx. 5 m² coverage at 3mm)" },
    ],
    image: "/assets/products/simba_grip_555_front.png",
    images: [
      "/assets/products/simba_grip_555_front.png",
      "/assets/products/simba_grip_555_back.png",
    ],
    badge: "C1 Grade",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Simba Grip 555 C1 Grade Tile Adhesive | Matshepo Africa Nairobi",
    seoDescription:
      "Simba Grip 555 C1 Grade standard grey ceramic tile adhesive by Matshepo Africa Ltd. High bonding strength, polymer modified, German technology in Kenya.",
  },

  // 4. Simba Grip 777
  {
    id: "simba-grip-777",
    slug: "simba-grip-777",
    name: "Simba Grip 777",
    category: "Tile Adhesives",
    range: "Simba Grip Range — Premium & Graded",
    grade: "C2 Grade",
    subtitle: "High Performance Tile Adhesive (C2 / C2T Grade)",
    shortDescription:
      "Superior bond premium polymer-modified tile adhesive recommended for porcelain tiles, granites, marbles & stones.",
    fullDescription:
      "Simba Grip 777 is an advanced C2 / C2T Grade polymer-modified cementitious tile adhesive engineered with German technology for demanding architectural installations. Enhanced with silica-based mortar, extended open time, freeze/thaw resistance, and reduced slip, it provides maximum adhesion strength for heavy porcelain, vitrified tiles, granite, marble, and natural stone on walls and floors.",
    keyFeatures: [
      "Certified C2 / C2T Grade polymer-modified tile adhesive (KEBS SM#85548)",
      "Engineered for porcelain tiles, granites, marbles & natural stones",
      "German technology with silica-based mortar, extended open time & reduced slip",
      "Freeze/thaw resistant with enhanced water-resistant properties",
      "Coverage: Approx. 5 m² per 25 kg bag at 3 mm thickness (23–25% water mix)",
    ],
    applications: [
      "Porcelain, granite, marble, and natural stone tile installations",
      "Internal and external walls and floors",
      "Bathrooms, kitchens, balconies, and wet areas",
      "Commercial flooring subject to moderate-to-heavy foot traffic",
    ],
    suitableSurfaces: [
      "Engineered concrete slabs and cured subfloors",
      "Waterproofed substrates (compatible with Ultraguard)",
      "High-density sand-cement screeds and renders",
    ],
    packagingOptions: [
      { label: "Standard Bag", weight: "25 kg", details: "Multi-ply moisture-resistant paper bag (approx. 5 m² coverage at 3mm)" },
    ],
    image: "/assets/products/simba_grip_777_front.png",
    images: [
      "/assets/products/simba_grip_777_front.png",
      "/assets/products/simba_grip_777_back.png",
    ],
    badge: "C2 Grade",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Simba Grip 777 C2 Grade Tile Adhesive | Matshepo Africa Nairobi",
    seoDescription:
      "Simba Grip 777 C2 / C2T Grade high-performance tile adhesive by Matshepo Africa Ltd. Superior bond for porcelain, granites, marbles & stones in Kenya.",
  },

  // 5. Simba Grip 818
  {
    id: "simba-grip-818",
    slug: "simba-grip-818",
    name: "Simba Grip 818",
    category: "Tile Adhesives",
    range: "Simba Grip Range — Premium & Graded",
    grade: "C2TES1 Grade",
    variants: ["Grey powder", "White powder"],
    subtitle: "C2TES1 Grade Premium Tile Adhesive (Grey & White)",
    shortDescription:
      "Flagship C2TES1 deformable tile adhesive built to flex and engineered to bond large-format porcelain, marble, and stone.",
    fullDescription:
      "Simba Grip 818 is Matshepo Africa's premier C2TES1 Grade high-performance tile adhesive, formulated with German technology and premium polymer resins. Built to flex and engineered to bond, it combines high bonding strength (C2), slip resistance (T), extended open time (E), and deformable flexibility (S1). Ideal for large-format porcelain, light-colored tiles, marble, and natural stone in interior/exterior, wet areas, swimming pools, and heavy-traffic environments.",
    keyFeatures: [
      "Classified C2TES1 Grade: High bond, No vertical slip (T), Extended open time (E), Deformable flexible (S1)",
      "Available in both Grey Powder and White Powder formulations",
      "Ideal for large-format porcelain, light-colored marble, and natural stone",
      "Certified KEBS SM#85548 with German technology silica-based polymer mortar",
      "Coverage: Approx. 5 m² per 25 kg bag at 3 mm thickness (23–25% water mix)",
    ],
    applications: [
      "Large-format porcelain tiles and ultra-thin ceramic slabs",
      "Light-colored marble, granite, and translucent natural stone (White variant)",
      "Interior & exterior facades, balconies, and high-rise cladding",
      "Wet areas, swimming pools, water features, and submerged structures",
      "Heavy commercial and industrial high-traffic floors",
    ],
    suitableSurfaces: [
      "Reinforced concrete slabs and pre-cast structures",
      "Cementitious waterproofing membranes (Ultraguard 2K)",
      "Heavy-duty screeds, underfloor heating, and tile-over-tile",
    ],
    packagingOptions: [
      { label: "Grey Powder Bag", weight: "25 kg", details: "C2TES1 Grade grey powder formulation (approx. 5 m² at 3mm)" },
      { label: "White Powder Bag", weight: "25 kg", details: "C2TES1 Grade white powder for light marble/stone (approx. 5 m² at 3mm)" },
    ],
    image: "/assets/products/simba_grip_818_front.png",
    images: [
      "/assets/products/simba_grip_818_front.png",
      "/assets/products/simba_grip_818_back.png",
    ],
    badge: "C2TES1 Flagship",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Simba Grip 818 C2TES1 Grade Tile Adhesive | Matshepo Africa",
    seoDescription:
      "Simba Grip 818 C2TES1 Grade premium tile adhesive in Grey and White powder. Built to flex and engineered for large format porcelain, marble, and stone in Kenya.",
  },

  // 6. Ultraguard
  {
    id: "ultraguard",
    slug: "ultraguard",
    name: "Ultraguard",
    category: "Waterproofing",
    subtitle: "2K Cementitious Waterproofing",
    shortDescription:
      "Two-component polymer-modified cementitious waterproofing system for robust positive and negative water barrier protection.",
    fullDescription:
      "Ultraguard is a premium two-component (2K) polymer-modified cementitious waterproofing system engineered to form a robust, flexible, seamless waterproof barrier on concrete and masonry structures. Consisting of a specially formulated powder blend (available in 20kg moisture-resistant sack) and an advanced liquid polymer jerrican, Ultraguard seals capillaries and resists positive and negative hydrostatic water pressure.",
    keyFeatures: [
      "Two-component (2K) polymer-modified cementitious waterproofing system",
      "Available in 25 Kg Kit (20 Kg Powder + 5 Kg Liquid) & 30 Kg Kit (20 Kg Powder + 10 Kg Liquid)",
      "Powder available in 20 Kg multi-ply moisture-resistant bag packaging",
      "Seamless and monolithic water barrier protection for positive & negative pressure",
      "Excellent bonding to damp or dry concrete substrates with long-term flexibility",
      "Core system for Matshepo Africa's 10-Year Waterproofing Guarantee",
    ],
    applications: [
      "Swimming pools, water features, and water-retaining structures",
      "Basements, retaining walls, and underground foundation tanking",
      "Rooftops, terraces, balconies, and exposed concrete slabs",
      "Bathrooms, showers, and wet area sub-tile waterproofing",
      "Water reservoirs, canals, and drainage channels",
    ],
    suitableSurfaces: [
      "Cast concrete slabs, precast concrete, and masonry blockwork",
      "Cementitious sand-cement screeds and renders",
      "Soundly prepared, cured mineral substrates",
    ],
    packagingOptions: [
      {
        label: "25 Kg Kit",
        weight: "25 Kg (20 Kg Powder + 5 Kg Liquid)",
        breakdown: "20 Kg Powder + 5 Kg Liquid",
        details: "Supplied as 20 Kg powder bag + 5 Kg liquid polymer container",
      },
      {
        label: "30 Kg Kit",
        weight: "30 Kg (20 Kg Powder + 10 Kg Liquid)",
        breakdown: "20 Kg Powder + 10 Kg Liquid",
        details: "Supplied as 20 Kg powder bag + 10 Kg liquid polymer container for enhanced elongation & flexibility",
      },
    ],
    image: "/assets/products/ultraguard_combo_t.png",
    badge: "2K Waterproofing",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Ultraguard 2K Cementitious Waterproofing | Matshepo Africa Nairobi",
    seoDescription:
      "Ultraguard 2K cementitious waterproofing system by Matshepo Africa Ltd. Packaging: 25 Kg (20 Kg Powder + 5 Kg Liquid) & 30 Kg (20 Kg Powder + 10 Kg Liquid) in Nairobi, Kenya.",
  },

  // 7. APP Membrane
  {
    id: "app-membrane",
    slug: "app-membrane",
    name: "APP Membrane",
    category: "Waterproofing",
    subtitle: "APP Modified Bituminous Waterproofing Membrane",
    shortDescription:
      "APP membrane waterproofing solution for suitable building waterproofing applications.",
    fullDescription:
      "APP Membrane is a heavy-duty Atactic Polypropylene (APP) modified bitumen waterproofing membrane reinforced with non-woven spunbond polyester. Engineered for exceptional tensile strength, thermal stability under harsh sunlight, and superior puncture resistance, it provides long-lasting waterproofing for major commercial, industrial, and civil construction projects.",
    keyFeatures: [
      "High-grade APP polymer-modified bitumen formulation",
      "Reinforced polyester core for high tensile strength & elongation",
      "Superior resistance to thermal aging and UV breakdown",
      "Excellent puncture resistance during backfilling and roof access",
      "Proven performance on large flat roofs and below-ground foundations",
    ],
    applications: [
      "Flat concrete rooftops and podium decks",
      "Commercial basements and deep foundation tanking",
      "Bridge decks, tunnels, and underground civil structures",
      "Balconies, terraces, and multi-story car parks",
    ],
    suitableSurfaces: [
      "Primed concrete decks and slabs",
      "Cementitious levelling screeds",
      "Precast concrete elements",
    ],
    packagingOptions: [
      {
        label: "Standard Membrane Roll",
        weight: "1m x 10m roll",
        details: "Torch-applied bituminous sheet membrane roll",
      },
    ],
    image: "/assets/products/cat_waterproofing.jpg",
    badge: "Membrane System",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "APP Waterproofing Membrane | Matshepo Africa",
    seoDescription:
      "APP Membrane by Matshepo Africa Ltd. Torch-applied APP modified bitumen waterproofing membrane for rooftops and basements in Kenya.",
  },

  // 8. Tile Lit
  {
    id: "tile-lit",
    slug: "tile-lit",
    name: "Tile Lit",
    category: "Grout",
    subtitle: "Waterproof Grout",
    shortDescription:
      "Tile Lit is a polymer-fortified waterproof grout engineered for joint finishing on interior and exterior wall and floor tiles.",
    fullDescription:
      "Tile Lit is a polymer-fortified waterproof cementitious tile grout engineered for joint finishing on ceramic, porcelain, mosaic, and natural stone tiles. Offering high bonding strength, tight particle packing, low water absorption, and clean aesthetic lines, Tile Lit prevents moisture ingress between tiles while delivering durable, fade-resistant joints for both interior and exterior installations.",
    keyFeatures: [
      "Waterproof formulation engineered to resist moisture ingress",
      "High bonding strength with tight particle packing",
      "Easy application and smooth troweling without staining tiles",
      "Suitable for interior & exterior wall & floor tiles",
      "Available in 5 versatile shades: White, Grey, Cream, Beige, and Brown",
    ],
    applications: [
      "Grouting joints in ceramic, porcelain, mosaic, and stone tiles",
      "Bathrooms, shower recesses, washrooms, and utility areas",
      "Kitchen splashbacks, countertops, and residential living floors",
      "Balconies, terraces, and external wall facades",
    ],
    suitableSurfaces: [
      "Tile joints on properly set and cured tile installations",
      "Interior and exterior wall and floor joint widths",
    ],
    packagingOptions: [
      {
        label: "Standard Pack",
        weight: "Moisture-Sealed Bag",
        details: "Available in convenient moisture-sealed packaging (contact team for current bulk packing)",
      },
    ],
    variants: ["White", "Grey", "Cream", "Beige", "Brown"],
    image: "/assets/products/tile_lit_hd.png",
    badge: "Waterproof Grout",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Tile Lit Waterproof Grout | Matshepo Africa",
    seoDescription:
      "Tile Lit waterproof grout by Matshepo Africa Ltd. Durable, moisture-resistant tile joint finishing for interior and exterior wall and floor tiles in Kenya.",
  },

  // 9. Express Plaster
  {
    id: "express-plaster",
    slug: "express-plaster",
    name: "Express Plaster",
    category: "Plaster",
    range: "Express Plaster 888",
    subtitle: "Ready Mix Plaster",
    shortDescription:
      "Express Plaster 888 is a polymer-modified high-performance ready-mix plastering compound designed for fast, smooth, and durable wall finishing.",
    fullDescription:
      "Express Plaster 888 is a factory-blended ready-mix cementitious plaster engineered to replace traditional, inconsistent site-mixed sand and cement. Consisting of graded aggregates, high-grade Portland cement, and specialized workability polymers, it delivers smooth application, consistent bonding, and reduced rebound loss for fast, reliable wall finishing on interior and exterior walls.\n\nExpress Plaster is designed for fast and efficient wall plastering and can be applied using a suitable compressor-powered plaster spraying machine for faster application, reduced manual effort and improved productivity on construction sites.",
    keyFeatures: [
      "High performance ready-mix plastering solution",
      "Polymer-modified compound for fast, smooth, and durable wall finishing",
      "Machine-sprayable with compressor-powered plaster machines or manual trowel application",
      "Factory pre-blended for guaranteed consistent batch quality",
      "Superior adhesion to masonry, clay bricks, and concrete blocks",
      "Net weight 25 kg protective moisture-resistant packaging made in Kenya",
    ],
    applications: [
      "Internal wall plastering on brick, blockwork, and concrete",
      "External rendering on commercial and residential buildings",
      "Preparation of flat, smooth substrates for tiling or painting",
    ],
    suitableSurfaces: [
      "Concrete masonry units (CMU)",
      "Red clay bricks and autoclaved aerated concrete (AAC)",
      "Monolithic concrete walls and beams",
    ],
    packagingOptions: [
      {
        label: "Ready-Mix Bag",
        weight: "25 kg",
        details: "Polymer-modified high-performance readymix plastering compound",
      },
    ],
    image: "/assets/products/express_plaster_hd.png",
    badge: "Ready Mix Plaster",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Express Plaster: Ready Mix Plaster | Matshepo Africa",
    seoDescription:
      "Express Plaster 888 ready mix plaster by Matshepo Africa Ltd. Polymer-modified 25kg wall plastering solution manufactured in Nairobi, Kenya.",
  },

  // 10. Cemora
  {
    id: "cemora",
    slug: "cemora",
    name: "Cemora",
    category: "Flooring",
    range: "The Art of Microcement Flooring",
    subtitle: "Microcement Flooring",
    shortDescription:
      "Cemora is a living surface. Hand-applied by master craftsmen, its natural movement and mineral variations ensure that no two floors are identical. You are laying down a piece of history.",
    fullDescription:
      "Cemora is a living surface. Hand-applied by master craftsmen, its natural movement and mineral variations ensure that no two floors are identical. You are laying down a piece of history.",
    keyFeatures: [
      "The Art of Microcement Flooring for modern architectural spaces",
      "Continuous, seamless living surface with natural mineral variations",
      "Hand-applied by master craftsmen ensuring bespoke, unique results",
      "Applied in thin layers without adding substantial structural weight",
      "High abrasion resistance with protective sealer compatibility",
    ],
    applications: [
      "High-end residential living rooms, bathrooms, and kitchens",
      "Commercial boutique showrooms, restaurants, and galleries",
      "Modern office reception areas and executive suites",
      "Architectural feature walls and bespoke concrete design accents",
    ],
    suitableSurfaces: [
      "Smooth, level concrete screeds",
      "Properly primed and prepared masonry surfaces",
      "Existing stable tiled or cementitious floors",
    ],
    packagingOptions: [
      {
        label: "Designer Pail",
        weight: "System Pail",
        details: "Engineered microcement flooring compound in durable packaging",
      },
    ],
    image: "/assets/products/cemora_hd.png",
    badge: "Microcement Flooring",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Cemora: Microcement Flooring | Matshepo Africa",
    seoDescription:
      "Cemora microcement flooring by Matshepo Africa Ltd. Seamless, contemporary architectural decorative floor finishes in Nairobi, Kenya.",
  },
];

export const productCategories = [
  "All Products",
  "Tile Adhesives",
  "Waterproofing",
  "Grout",
  "Plaster",
  "Flooring",
] as const;

export type ProductCategory = (typeof productCategories)[number];
