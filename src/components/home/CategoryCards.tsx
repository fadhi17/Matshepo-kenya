import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const CategoryCards: React.FC = () => {
  const categories = [
    {
      title: "Tile Adhesives",
      slug: "Tile Adhesives",
      image: "/assets/products/tile_adhesives_all_five.png",
      count: "5 Products",
    },
    {
      title: "Waterproofing",
      slug: "Waterproofing",
      image: "/assets/products/ultraguard_combo_t.png",
      count: "Ultraguard 2K & APP",
    },
    {
      title: "Grout",
      slug: "Grout",
      image: "/assets/products/tile_lit_hd.png",
      count: "Tile Lit Waterproof",
    },
    {
      title: "Plaster",
      slug: "Plaster",
      image: "/assets/products/express_plaster_hd.png",
      count: "Express Plaster",
    },
    {
      title: "Flooring",
      slug: "Flooring",
      image: "/assets/products/cemora_hd.png",
      count: "Cemora Microcement",
    },
  ];

  return (
    <section className="py-16 bg-[#F5F8FC]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#0875C9] block mb-1">
              Our Products
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B69] tracking-tight">
              Complete Construction Solutions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              From tile adhesives to waterproofing, grouting, plastering and flooring — our products are developed to deliver reliability, durability and long-lasting performance.
            </p>
          </div>
          <Link
            href="/products"
            className="text-xs sm:text-sm font-bold text-[#0875C9] hover:text-[#073B69] inline-flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-200/80 hover:border-blue-200 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] bg-[#F5F8FC] overflow-hidden flex items-center justify-center">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className={
                    cat.slug === "Grout" ||
                    cat.slug === "Plaster" ||
                    cat.slug === "Flooring" ||
                    cat.slug === "Tile Adhesives" ||
                    cat.slug === "Waterproofing"
                      ? "object-contain p-2 group-hover:scale-108 transition-transform duration-500"
                      : "object-cover group-hover:scale-108 transition-transform duration-500"
                  }
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#172333] group-hover:text-[#0875C9] transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] text-slate-500">{cat.count}</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0875C9] group-hover:text-white text-slate-600 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
