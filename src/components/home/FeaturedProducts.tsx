"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { productsData } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export const FeaturedProducts: React.FC = () => {
  const { openQuoteModal } = useQuote();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Featured products across categories highlighting Simba Grip, Tile Lit, and Ultraguard
  const featuredOrder = [
    "simba-grip-777",
    "tile-lit",
    "express-plaster",
    "cemora",
    "ultraguard",
    "simba-grip-818",
    "grip-master-plus",
    "grip-master",
    "simba-grip-555",
  ];
  const featured = featuredOrder
    .map((id) => productsData.find((p) => p.id === id))
    .filter(Boolean) as typeof productsData;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200/60">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#0875C9] block mb-1">
              Manufactured in Nairobi
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B69] tracking-tight">
              Featured Products
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Scroll navigation arrows */}
            <div className="flex items-center gap-1.5 mr-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#0875C9] hover:bg-blue-50 text-slate-600 hover:text-[#0875C9] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous products"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#0875C9] hover:bg-blue-50 text-slate-600 hover:text-[#0875C9] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next products"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link
              href="/products"
              className="text-xs sm:text-sm font-bold text-[#0875C9] hover:text-[#073B69] inline-flex items-center gap-1"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel / Grid */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth"
          tabIndex={0}
          role="region"
          aria-label="Featured products list"
        >
          {featured.map((product) => (
            <div
              key={product.id}
              className="min-w-[260px] sm:min-w-[280px] max-w-[290px] shrink-0 bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 p-4 flex flex-col justify-between card-shadow-hover group snap-start"
            >
              <div>
                {/* Product Image Card */}
                <div className="relative aspect-[4/3] bg-[#F5F8FC] rounded-xl overflow-hidden mb-4 p-3 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={`${product.name} packaging`}
                      fill
                      sizes="260px"
                      quality={90}
                      className="object-contain group-hover:scale-108 transition-transform duration-300"
                    />
                  </div>
                  {/* Badge */}
                  {product.grade && (
                    <span className="absolute top-2.5 right-2.5 bg-[#073B69] text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs">
                      {product.grade}
                    </span>
                  )}
                  {product.badge && !product.grade && (
                    <span className="absolute top-2.5 right-2.5 bg-[#0795A5] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Product Name & Details */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0875C9] block mb-0.5">
                  {product.category}
                </span>
                <h3 className="text-base font-black text-[#172333] group-hover:text-[#0875C9] transition-colors leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1 font-medium">
                  {product.subtitle}
                </p>
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={`/products/${product.slug}`}
                  className="text-xs font-bold text-[#0875C9] hover:underline flex items-center gap-1 py-1"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <button
                  onClick={() => openQuoteModal(product.name)}
                  className="btn-yellow px-3 py-1.5 rounded-lg text-[11px] font-black cursor-pointer shadow-xs"
                >
                  QUOTE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
