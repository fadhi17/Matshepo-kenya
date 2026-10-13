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
    shortDescription: "A practical tile adhesive solution for ceramic tile installation.",
    fullDescription:
      "Grip Master is a reliable, cement-based tile adhesive specifically formulated for standard ceramic tile installation. Designed for cost-effective, dependable performance on interior floors and walls, it ensures consistent bonding strength for everyday residential and light commercial tiling work.",
    keyFeatures: [
      "Specially formulated for standard ceramic tiles",
      "Economical and practical for residential builds",
      "Easy workability and smooth trowel application",
      "Good sag resistance on vertical surfaces",
      "Consistent batch-to-batch manufacturing quality",
    ],
    applications: [
      "Interior ceramic tile fixing",
      "Residential floor and wall tiling",
      "Standard cement screeds and concrete plaster",
    ],
    suitableSurfaces: [
      "Cured concrete slabs",
      "Sand-cement screeds and renders",
      "Concrete blockwork and masonry",
    ],
    packagingOptions: [
      { label: "Standard Bag", weight: "25 kg", details: "Multi-ply moisture-resistant paper bag" },
    ],
    image: "/assets/products/grip_master.png",
    badge: "Economy Range",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Grip Master Ceramic Tile Adhesive | Matshepo Africa Nairobi",
    seoDescription:
      "Grip Master ceramic tile adhesive by Matshepo Africa Ltd. A practical, reliable tile adhesive for ceramic tile installation in Nairobi, Kenya.",
  },

  // 2. Grip Master Plus
  {
    id: "grip-master-plus",
    slug: "grip-master-plus",
    name: "Grip Master Plus",
    category: "Tile Adhesives",
    range: "Grip Master Range — Economy",
    subtitle: "Porcelain Tile Adhesive",
    shortDescription: "A tile adhesive solution developed for porcelain tile installation.",
    fullDescription:
      "Grip Master Plus is an enhanced tile adhesive developed specifically for porcelain tile installations. Formulated to provide higher grip and improved bonding capability for dense, low-porosity porcelain tiles, it ensures long-term bond reliability on both floor and wall applications.",
    keyFeatures: [
      "Engineered for low-absorption porcelain tiles",
      "Enhanced adhesion strength for dense tile bodies",
      "Smooth mix consistency and easy spreadability",
      "Suitable for internal floors and walls",
      "Developed for dependable everyday tile installations",
    ],
    applications: [
      "Porcelain tile installations",
      "Vitrified ceramic tile fixing",
      "Interior living rooms, kitchens, and corridors",
    ],
    suitableSurfaces: [
      "Concrete subfloors",
      "Cement render and plaster",
      "Sound screed beds",
    ],
    packagingOptions: [
      { label: "Standard Bag", weight: "25 kg", details: "Multi-ply moisture-resistant paper bag" },
    ],
    image: "/assets/products/grip_master.png",
    badge: "Porcelain Formula",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Grip Master Plus Porcelain Tile Adhesive | Matshepo Africa",
    seoDescription:
      "Grip Master Plus porcelain tile adhesive by Matshepo Africa. Developed for secure porcelain tile installation on residential and commercial builds.",
  },

  // 3. Simba Grip 555
  {
    id: "simba-grip-555",
    slug: "simba-grip-555",
    name: "Simba Grip 555",
    category: "Tile Adhesives",
    range: "Simba Grip Range — Premium & Graded",
    grade: "C1 Grade",
    subtitle: "C1 Grade Cement-Based Tile Adhesive",
    shortDescription: "Cement-based tile adhesive for suitable tile installation applications.",
    fullDescription:
      "Simba Grip 555 is a standard classified C1 Grade cement-based tile adhesive manufactured to stringent quality standards in Nairobi, Kenya. Providing dependable bonding performance for a broad spectrum of tile installations, it is the professional's choice for reliable everyday tiling on masonry and concrete substrates.",
    keyFeatures: [
      "Officially classified C1 Grade cementitious adhesive",
      "Consistent bonding strength and stability",
      "Excellent workability and open time for installers",
      "Suitable for ceramic and semi-vitrified tiles",
      "Strict quality control manufactured in Nairobi",
    ],
    applications: [
      "Ceramic tile installation on internal walls and floors",
      "Residential developments and commercial premises",
      "Substrates complying with standard preparation guidelines",
    ],
    suitableSurfaces: [
      "Standard sand-cement screeds",
      "Cured concrete walls and slabs",
      "Cementitious base coats",
    ],
    packagingOptions: [
      { label: "Standard Bag", weight: "25 kg", details: "Factory-sealed protective packaging" },
    ],
    image: "/assets/products/simba_grip_555.png",
    badge: "C1 Grade",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Simba Grip 555 C1 Grade Tile Adhesive | Matshepo Africa",
    seoDescription:
      "Simba Grip 555 C1 Grade cement-based tile adhesive by Matshepo Africa Ltd. Reliable adhesion for ceramic tile installations in Kenya.",
  },

  // 4. Simba Grip 777
  {
    id: "simba-grip-777",
    slug: "simba-grip-777",
    name: "Simba Grip 777",
    category: "Tile Adhesives",
    range: "Simba Grip Range — Premium & Graded",
    grade: "C2 Grade",
    subtitle: "C2 Grade Polymer-Modified Tile Adhesive",
    shortDescription:
      "Polymer-modified cement-based tile adhesive offering enhanced adhesion performance and water-resistant properties.",
    fullDescription:
      "Simba Grip 777 is an advanced C2 Grade polymer-modified cementitious tile adhesive engineered for high-performance building applications. With fortified synthetic polymer additives, it delivers superior adhesion strength, enhanced water resistance, and greater flexibility for demanding architectural surfaces.",
    keyFeatures: [
      "Classified C2 Grade polymer-modified cementitious adhesive",
      "Enhanced adhesion strength for dense porcelain & vitrified tiles",
      "Built-in water-resistant properties for wet areas",
      "High mechanical bond strength under foot traffic",
      "Ideal for demanding residential and commercial installations",
    ],
    applications: [
      "Porcelain and vitrified tile installation",
      "Wet areas including bathrooms, kitchens, and balconies",
      "Commercial flooring subject to moderate foot traffic",
    ],
    suitableSurfaces: [
      "Engineered concrete slabs",
      "Waterproofed substrates (compatible with Ultraguard)",
      "High-density screeds and renders",
    ],
    packagingOptions: [
      { label: "Standard Bag", weight: "25 kg", details: "Reinforced moisture-proof packaging" },
    ],
    image: "/assets/products/simba_grip_777.png",
    badge: "C2 Grade",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Simba Grip 777 C2 Grade Tile Adhesive | Matshepo Africa",
    seoDescription:
      "Simba Grip 777 C2 Grade polymer-modified tile adhesive. Enhanced adhesion and water resistance for demanding tile projects in Kenya.",
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
    subtitle: "C2TES1 Grade High-Performance Tile Adhesive",
    shortDescription:
      "High-performance tile adhesive for suitable demanding tile installation applications.",
    fullDescription:
      "Simba Grip 818 represents Matshepo Africa's flagship C2TES1 Grade high-performance tile adhesive. Formulated with premium polymers, extended open time (E), slip resistance (T), and deformable elasticity (S1), it is engineered for the most rigorous installations including large-format porcelain, exterior facades, submerged structures, and high-stress substrates.",
    keyFeatures: [
      "Classified C2TES1 Grade: High adhesion, Extended open time, No vertical slip, Deformable S1",
      "Available in both Grey Powder and White Powder variants",
      "Ideal for large-format porcelain tiles and natural stone",
      "Superior shear resistance under thermal and structural movement",
      "Suitable for exterior facades and submerged applications",
    ],
    applications: [
      "Large-format porcelain tiles and slabs",
      "Swimming pools and water-retaining structures",
      "Exterior facades and high-rise cladding",
      "High-traffic commercial spaces and industrial floors",
    ],
    suitableSurfaces: [
      "Reinforced concrete and pre-cast structures",
      "Cementitious waterproofing membranes",
      "Heavy-duty screeds and existing tile over tile (with appropriate primer)",
    ],
    packagingOptions: [
      { label: "Grey Powder Bag", weight: "25 kg", details: "C2TES1 Grade grey powder formulation" },
      { label: "White Powder Bag", weight: "25 kg", details: "C2TES1 Grade white powder for light marble/stone" },
    ],
    image: "/assets/products/simba_grip_818.png",
    badge: "C2TES1 Flagship",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Simba Grip 818 C2TES1 Grade Tile Adhesive | Matshepo Africa",
    seoDescription:
      "Simba Grip 818 C2TES1 Grade high-performance tile adhesive in grey & white powder. Engineered for large format tiles and swimming pools in Kenya.",
  },

  // 6. Ultraguard
  {
    id: "ultraguard",
    slug: "ultraguard",
    name: "Ultraguard",
    category: "Waterproofing",
    subtitle: "2K Cementitious Waterproofing System",
    shortDescription:
      "Ultraguard is a two-component cementitious waterproofing system designed for suitable construction applications requiring a protective waterproofing layer.",
    fullDescription:
      "Ultraguard is a premium two-component (2K) polymer-modified cementitious waterproofing system engineered to form a robust, flexible, seamless waterproof barrier on concrete and masonry structures. Consisting of a specially formulated powder blend and an advanced liquid polymer, Ultraguard seals capillaries and resists positive and negative water pressure.",
    keyFeatures: [
      "Two-component polymer-modified cementitious system",
      "Dual packaging options: 25 kg total and 30 kg total",
      "Seamless and monolithic water barrier protection",
      "Excellent bonding to damp or dry concrete substrates",
      "Suitable for potable water contact and submerged structures",
      "Integral component of Matshepo's 10-Year Waterproofing Guarantee system",
    ],
    applications: [
      "Swimming pools and water features",
      "Basements and underground retaining walls",
      "Rooftops, terraces, and exposed slabs",
      "Bathrooms, showers, and wet area sub-tile waterproofing",
      "Water reservoirs and drainage channels",
    ],
    suitableSurfaces: [
      "Cast concrete, precast units, and masonry blocks",
      "Cementitious screeds and sand-cement plasters",
      "Substrates free from contaminants and soundly cured",
    ],
    packagingOptions: [
      {
        label: "Option A: 25 kg Total Kit",
        weight: "25 kg total",
        breakdown: "20 kg powder + 5 kg liquid",
        details: "Supplied as 20 kg dry powder sack + 5 kg liquid polymer container",
      },
      {
        label: "Option B: 30 kg Total Kit",
        weight: "30 kg total",
        breakdown: "20 kg powder + 10 kg liquid",
        details: "Supplied as 20 kg dry powder sack + 10 kg liquid polymer container for higher flexibility",
      },
    ],
    image: "/assets/products/ultraguard.png",
    badge: "2K Waterproofing",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Ultraguard 2K Cementitious Waterproofing | Matshepo Africa",
    seoDescription:
      "Ultraguard 2K cementitious waterproofing system by Matshepo Africa Ltd. Available in 25kg and 30kg kits for swimming pools, basements, and roofs in Kenya.",
  },

  // 7. Insutech APP Membrane
  {
    id: "insutech-app-membrane",
    slug: "insutech-app-membrane",
    name: "Insutech APP Membrane",
    category: "Waterproofing",
    subtitle: "APP Modified Bituminous Waterproofing Membrane",
    shortDescription:
      "APP membrane waterproofing solution for suitable building waterproofing applications.",
    fullDescription:
      "Insutech APP Membrane is a heavy-duty Atactic Polypropylene (APP) modified bitumen waterproofing membrane reinforced with non-woven spunbond polyester. Engineered for exceptional tensile strength, thermal stability under harsh sunlight, and superior puncture resistance, it provides long-lasting waterproofing for major commercial, industrial, and civil construction projects.",
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
    seoTitle: "Insutech APP Waterproofing Membrane | Matshepo Africa",
    seoDescription:
      "Insutech APP Membrane by Matshepo Africa Ltd. Torch-applied APP modified bitumen waterproofing membrane for rooftops and basements in Kenya.",
  },

  // 8. Tile Lit
  {
    id: "tile-lit",
    slug: "tile-lit",
    name: "Tile Lit",
    category: "Grout",
    subtitle: "Waterproof Tile Grout",
    shortDescription:
      "Tile Lit is a waterproof grout solution designed for suitable tile-joint finishing applications.",
    fullDescription:
      "Tile Lit is a polymer-fortified waterproof cementitious tile grout engineered for joint finishing on ceramic, porcelain, mosaic, and natural stone tiles. Offering dense compaction, low water absorption, and clean aesthetic lines, Tile Lit prevents moisture ingress between tiles while delivering durable, fade-resistant joints for interior and exterior installations.",
    keyFeatures: [
      "Formulated with waterproofing compounds to resist moisture ingress",
      "Smooth finish with tight particle packing",
      "Crack-resistant formulation with high abrasion resistance",
      "Suitable for walls and floors in wet and dry spaces",
      "Easy to mix, apply, and wash off without staining tiles",
    ],
    applications: [
      "Grouting joints in ceramic and porcelain tile installations",
      "Bathrooms, showers, washrooms, and utility areas",
      "Kitchen splashbacks, countertops, and residential living floors",
      "Balcony and terrace tile joints",
    ],
    suitableSurfaces: [
      "Tile joints on properly set and cured tile installations",
      "Wall and floor joint widths per project requirements",
    ],
    packagingOptions: [
      {
        label: "Standard Packaging",
        weight: "Standard Pack",
        details: "Available in convenient moisture-sealed packaging (contact team for confirmed size)",
      },
    ],
    image: "/assets/products/tile_lit.png",
    badge: "Waterproof Grout",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Tile Lit Waterproof Tile Grout | Matshepo Africa",
    seoDescription:
      "Tile Lit waterproof tile grout by Matshepo Africa Ltd. Durable, moisture-resistant tile joint finishing for bathrooms, floors, and walls in Kenya.",
  },

  // 9. Express Plaster
  {
    id: "express-plaster",
    slug: "express-plaster",
    name: "Express Plaster",
    category: "Plaster",
    subtitle: "Ready Mix Plaster",
    shortDescription:
      "Express Plaster is a ready-mix plaster solution designed to support convenient plastering work on suitable surfaces.",
    fullDescription:
      "Express Plaster is a factory-blended ready-mix cementitious plaster engineered to replace traditional, inconsistent site-mixed sand and cement. Consisting of graded aggregates, high-grade Portland cement, and specialized workability polymers, it delivers smooth application, consistent bonding, and reduced rebound loss for fast, reliable wall finishing.",
    keyFeatures: [
      "Factory pre-blended for guaranteed consistent batch quality",
      "Eliminates site-mixing inaccuracies and sand sieving labor",
      "Superior adhesion to masonry, clay bricks, and concrete blocks",
      "Significantly reduced rebound loss during application",
      "Supports both internal wall plastering and external rendering",
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
        weight: "Standard Bag",
        details: "High-strength protective bag packaging (contact team for confirmed size)",
      },
    ],
    image: "/assets/products/cat_plaster.jpg",
    badge: "Ready Mix",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Express Plaster Ready Mix Plaster | Matshepo Africa",
    seoDescription:
      "Express Plaster ready mix plaster by Matshepo Africa Ltd. Factory-blended convenient wall plastering solution for contractors in Nairobi, Kenya.",
  },

  // 10. Cemora
  {
    id: "cemora",
    slug: "cemora",
    name: "Cemora",
    category: "Flooring",
    subtitle: "Microcement Flooring Solution",
    shortDescription:
      "Cemora offers a microcement flooring solution for projects seeking a refined, contemporary surface finish.",
    fullDescription:
      "Cemora is an architectural microcement flooring and surface coating system engineered for luxury modern interiors. Creating seamless, joint-free tactile concrete aesthetics, Cemora provides architects, designers, and property owners with a sophisticated continuous finish across floors, walls, and bespoke features with excellent durability and contemporary elegance.",
    keyFeatures: [
      "Continuous, seamless architectural microcement finish",
      "Contemporary minimalist aesthetic for modern interiors",
      "Applied in thin layers without adding substantial structural weight",
      "Suitable for floors, interior walls, and designer accents",
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
        label: "Microcement Kit",
        weight: "System Kit",
        details: "Complete system formulation (contact team for confirmed kit specifications)",
      },
    ],
    image: "/assets/products/cat_flooring.jpg",
    badge: "Architectural Flooring",
    tdsAvailable: false,
    sdsAvailable: false,
    seoTitle: "Cemora Microcement Flooring | Matshepo Africa",
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
