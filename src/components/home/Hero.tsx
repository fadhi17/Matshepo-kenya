"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F5F8FC] to-[#EEF4FB] pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-200/60">
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0875C9_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Small Location / Industry Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#0875C9] text-xs font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#0875C9] animate-ping"></span>
            <span>CONSTRUCTION CHEMICALS MANUFACTURING • NAIROBI, KENYA</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#073B69] tracking-tight leading-[1.08]">
              STRONGER BONDS. <br />
              <span className="text-[#0875C9]">LASTING PROTECTION.</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-[#172333] pt-1">
              Advanced Construction Chemicals for Stronger, More Durable Buildings.
            </p>
          </div>

          {/* Supporting Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            From high-performance tile adhesives to reliable waterproofing systems, Matshepo Africa delivers quality construction solutions designed for modern building projects across residential, commercial, and industrial developments.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <Link
              href="/products"
              className="btn-yellow px-7 py-3.5 rounded-xl text-sm font-black flex items-center justify-center gap-2 shadow-sm text-center"
            >
              <span>EXPLORE OUR PRODUCTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl text-sm font-bold border-2 border-[#0875C9] text-[#0875C9] hover:bg-blue-50/60 transition-colors flex items-center justify-center gap-2 text-center"
            >
              <span>CONTACT US</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Three Trust Badges */}
          <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold bg-white/80 p-3 rounded-xl border border-slate-100 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0875C9] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Durable Performance</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold bg-white/80 p-3 rounded-xl border border-slate-100 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-teal-50 text-[#0795A5] flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <span>Sustainable Solutions</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold bg-white/80 p-3 rounded-xl border border-slate-100 shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <span>Trusted by Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
