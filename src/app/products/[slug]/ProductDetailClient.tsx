"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, productsData } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import {
  CheckCircle,
  Package,
  Layers,
  FileText,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Info,
  PhoneCall,
  Check,
} from "lucide-react";

interface Props {
  product: Product;
}

export const ProductDetailClient: React.FC<Props> = ({ product }) => {
  const { openQuoteModal } = useQuote();

  // Selected packaging or variant
  const [selectedPackagingIndex, setSelectedPackagingIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0] : null
  );

  const selectedPackaging = product.packagingOptions[selectedPackagingIndex];

  // Related products in the same category
  const relatedProducts = productsData
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="container-custom text-xs text-slate-500 flex items-center gap-2 overflow-x-auto">
          <Link href="/" className="hover:text-[#0875C9]">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#0875C9]">Products</Link>
          <span>/</span>
          <Link
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-[#0875C9]"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate">{product.name}</span>
        </div>
      </div>

      <div className="container-custom mt-8 space-y-12">
        {/* Main Product Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Product Image Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-square bg-[#F5F8FC] rounded-2xl overflow-hidden p-6 border border-slate-200/60 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={`${product.name} packaging`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-contain"
                  />
                </div>
                {product.grade && (
                  <span className="absolute top-4 left-4 bg-[#073B69] text-white text-xs font-black px-3 py-1 rounded-lg shadow-sm">
                    {product.grade}
                  </span>
                )}
                {product.badge && !product.grade && (
                  <span className="absolute top-4 left-4 bg-[#0795A5] text-white text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Verified Product Packaging Note */}
              <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-[11px] text-slate-600 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#0875C9] shrink-0" />
                <span>Manufactured at Matshepo Africa Ltd plant in Nairobi, Kenya.</span>
              </div>
            </div>

            {/* Right: Product Details & Selectors */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#0875C9] block mb-1">
                  {product.category} {product.range ? `• ${product.range}` : ""}
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-[#073B69] tracking-tight">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base font-bold text-slate-700 mt-1">
                  {product.subtitle}
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Variants Selector (e.g. Simba Grip 818 Grey vs White) */}
              {product.variants && (
                <div className="pt-2 border-t border-slate-100">
                  <label className="block text-xs font-bold text-[#172333] mb-2">
                    Select Powder Variant:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedVariant(v)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          selectedVariant === v
                            ? "bg-[#0875C9] text-white border-[#0875C9] shadow-xs"
                            : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Packaging Selector (especially Ultraguard 25kg vs 30kg) */}
              {product.packagingOptions.length > 0 && (
                <div className="pt-2 border-t border-slate-100">
                  <label className="block text-xs font-bold text-[#172333] mb-2">
                    Packaging Specification:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.packagingOptions.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedPackagingIndex(idx)}
                        className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                          selectedPackagingIndex === idx
                            ? "border-[#0875C9] bg-blue-50/50 ring-2 ring-[#0875C9]/20"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#172333]">{opt.label}</span>
                          <Package className="w-4 h-4 text-[#0875C9]" />
                        </div>
                        {opt.breakdown && (
                          <div className="text-[11px] font-semibold text-[#0875C9] mt-1">
                            {opt.breakdown}
                          </div>
                        )}
                        {opt.details && (
                          <p className="text-[11px] text-slate-500 mt-1 leading-tight">
                            {opt.details}
                          </p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() =>
                    openQuoteModal(
                      `${product.name}${
                        product.packagingOptions.length > 1
                          ? ` (${selectedPackaging.label})`
                          : ""
                      }${selectedVariant ? ` - ${selectedVariant}` : ""}`
                    )
                  }
                  className="btn-yellow px-8 py-3.5 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>REQUEST A QUOTE FOR THIS PRODUCT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold border-2 border-slate-200 hover:border-[#0875C9] text-slate-700 hover:text-[#0875C9] transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Technical Enquiry</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features & Applications Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Benefits */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-lg font-black text-[#073B69] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0875C9]" />
              Key Features & Benefits
            </h2>
            <div className="space-y-3">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Applications & Surfaces */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
            <h2 className="text-lg font-black text-[#073B69] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#0795A5]" />
              Recommended Applications
            </h2>
            <div className="space-y-3">
              {product.applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0875C9] flex items-center justify-center shrink-0 mt-0.5">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  <span>{app}</span>
                </div>
              ))}
            </div>

            {product.suitableSurfaces && (
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-[#172333] block mb-2">
                  Suitable Verified Surfaces:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.suitableSurfaces.map((surf, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-[#F5F8FC] text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md"
                    >
                      {surf}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Technical Data Sheet & Verification Notice */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-lg font-black text-[#073B69] flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0875C9]" />
                Technical Documentation & TDS
              </h2>
              <p className="text-xs text-slate-500 max-w-xl">
                Technical documentation and certified batch compliance reports are provided directly by our laboratory upon project specification review.
              </p>
            </div>
            <div className="bg-[#F5F8FC] px-4 py-3 rounded-xl border border-slate-200 text-xs text-slate-600">
              <span className="font-semibold block text-[#073B69]">
                Technical documentation will be available soon.
              </span>
              <span>Contact our team for product information & custom submittal packs.</span>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-[#073B69]">
                Related Products in {product.category}
              </h2>
              <Link
                href={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-bold text-[#0875C9] hover:underline flex items-center gap-1"
              >
                <span>View all in category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-4 flex flex-col justify-between card-shadow-hover"
                >
                  <div>
                    <div className="relative aspect-[4/3] bg-[#F5F8FC] rounded-xl overflow-hidden mb-3 p-3 flex items-center justify-center">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-contain p-2"
                      />
                      {rel.grade && (
                        <span className="absolute top-2.5 right-2.5 bg-[#073B69] text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                          {rel.grade}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-[#0875C9] uppercase">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-black text-[#172333] mt-0.5 leading-tight">
                      {rel.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {rel.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/products/${rel.slug}`}
                      className="text-xs font-bold text-[#0875C9] hover:underline flex items-center gap-1"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <button
                      onClick={() => openQuoteModal(rel.name)}
                      className="btn-yellow px-3 py-1.5 rounded-lg text-[11px] font-black"
                    >
                      QUOTE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
