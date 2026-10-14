"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { productsData, productCategories, ProductCategory, Product } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import {
  Search,
  Filter,
  ArrowRight,
  Check,
  Package,
  Layers,
  Sparkles,
} from "lucide-react";

export const ProductsClient: React.FC = () => {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as ProductCategory) || "All Products";

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [cardImageIndex, setCardImageIndex] = useState<Record<string, number>>({});
  const { openQuoteModal } = useQuote();

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && productCategories.includes(cat as ProductCategory)) {
      setSelectedCategory(cat as ProductCategory);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.grade && product.grade.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#073B69] via-[#0875C9] to-[#05294A] text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFC400]">
            Complete Product Catalogue
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            CONSTRUCTION CHEMICALS FOR EVERY BUILD
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
            Explore our range of tile adhesives, waterproofing systems, grout, plaster, and flooring solutions manufactured to high standards in Nairobi, Kenya.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="container-custom text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0875C9]">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Products Catalogue</span>
        </div>
      </div>

      <div className="container-custom mt-8 space-y-8">
        {/* Filter Bar & Search */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {productCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0875C9] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products or grades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9] transition-all"
            />
          </div>
        </div>

        {/* Product Count Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {productsData.length} products
          </span>
          {selectedCategory !== "All Products" && (
            <button
              onClick={() => setSelectedCategory("All Products")}
              className="text-[#0875C9] hover:underline font-semibold"
            >
              Reset Category Filter
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No products found</h3>
            <p className="text-xs text-slate-500 mt-1">
              No products match your search &quot;{searchQuery}&quot;. Please try a different query or category.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Products");
              }}
              className="btn-yellow px-5 py-2 rounded-xl text-xs font-bold mt-4"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const productImages =
                product.images && product.images.length > 0 ? product.images : [product.image];
              const currentImgIdx = cardImageIndex[product.id] || 0;
              const currentImg = productImages[currentImgIdx] || product.image;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 p-5 flex flex-col justify-between card-shadow-hover group"
                >
                  <div>
                    {/* Image Presentation */}
                    <div className="relative aspect-[4/3] bg-[#F5F8FC] rounded-xl overflow-hidden mb-4 p-4 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={currentImg}
                          alt={`${product.name} packaging ${currentImgIdx === 1 ? "Back" : "Front"}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={90}
                          className="object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Grade or Range Badge */}
                      {product.grade && (
                        <span className="absolute top-3 right-3 bg-[#073B69] text-white text-[11px] font-black px-2.5 py-0.5 rounded-md shadow-xs">
                          {product.grade}
                        </span>
                      )}
                      {product.badge && !product.grade && (
                        <span className="absolute top-3 right-3 bg-[#0795A5] text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                          {product.badge}
                        </span>
                      )}

                      {/* Packaging Views Toggle Pill */}
                      {productImages.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-xs rounded-full p-0.5 border border-slate-200/90 shadow-xs flex items-center gap-0.5 z-10 max-w-[92%] overflow-x-auto">
                          {productImages.map((_, imgIndex) => {
                            const label =
                              productImages.length === 2
                                ? imgIndex === 0
                                  ? "Front"
                                  : "Back"
                                : imgIndex === 0
                                ? "Combo"
                                : imgIndex === 1
                                ? "Bag Kit"
                                : "Bucket Kit";
                            return (
                              <button
                                key={imgIndex}
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setCardImageIndex((prev) => ({ ...prev, [product.id]: imgIndex }));
                                }}
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                                  currentImgIdx === imgIndex
                                    ? "bg-[#073B69] text-white shadow-xs"
                                    : "text-slate-600 hover:text-slate-900"
                                }`}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                  {/* Header info */}
                  <div className="flex items-center justify-between text-[11px] text-[#0875C9] font-bold uppercase tracking-wider mb-1">
                    <span>{product.category}</span>
                    {product.range && (
                      <span className="text-[10px] text-slate-400 normal-case">{product.range}</span>
                    )}
                  </div>

                  <h2 className="text-lg font-black text-[#172333] group-hover:text-[#0875C9] transition-colors leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {product.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Key Features Preview */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 space-y-1.5">
                    {product.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 leading-tight">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Packaging Preview */}
                  {product.packagingOptions && product.packagingOptions.length > 0 && (
                    <div className="mt-3 bg-slate-50 p-2 rounded-lg text-[11px] text-slate-500 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-[#0875C9] shrink-0" />
                      <span className="truncate">
                        <strong>Packaging:</strong> {product.packagingOptions.map((p) => p.weight).join(" / ")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-xs font-bold text-[#0875C9] hover:underline inline-flex items-center gap-1 py-1"
                  >
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => openQuoteModal(product.name)}
                    className="btn-yellow px-4 py-2 rounded-xl text-xs font-black shadow-xs cursor-pointer"
                  >
                    REQUEST A QUOTE
                  </button>
                </div>
              </div>
            );
          })}
          </div>
        )}
      </div>
    </div>
  );
};
