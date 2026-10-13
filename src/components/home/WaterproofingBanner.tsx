"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuote } from "@/context/QuoteContext";
import {
  Waves,
  Building,
  Home,
  Droplet,
  Compass,
  ArrowRight,
  Shield,
} from "lucide-react";

export const WaterproofingBanner: React.FC = () => {
  const { openQuoteModal } = useQuote();

  const areas = [
    { title: "Swimming Pools", icon: Waves },
    { title: "Basements", icon: Building },
    { title: "Rooftops", icon: Home },
    { title: "Wet Areas (Bathrooms & Washrooms)", icon: Droplet },
    { title: "Balconies", icon: Compass },
  ];

  return (
    <section className="relative bg-[#073B69] text-white py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Overlay Image */}
      <div className="absolute inset-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <Image
          src="/assets/services/waterproofing_hero.jpg"
          alt="Waterproofing applications background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline and Quote CTA */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#FFC400]">
              Specialized Project Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Expert <br />
              <span className="text-[#0AB3C7]">Waterproofing Solutions</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Protect your building from water ingress with our specialized waterproofing systems and professional application services tailored for residential, commercial, and industrial structures.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openQuoteModal("Waterproofing Project Services")}
                className="btn-yellow px-7 py-3 rounded-xl text-xs sm:text-sm font-black flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>REQUEST A WATERPROOFING QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Middle Column: 5 Key Application Areas */}
          <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 px-2">
              Key Structural Application Zones:
            </h3>
            <div className="space-y-2">
              {areas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0AB3C7]/20 text-[#0AB3C7] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100">
                      {area.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 10-Year Guarantee Shield Box */}
          <div className="lg:col-span-3 bg-gradient-to-b from-[#0875C9]/40 to-white/5 rounded-2xl p-6 border border-white/20 text-center relative overflow-hidden backdrop-blur-md">
            {/* Guarantee Shield Badge */}
            <div className="relative inline-block mb-4">
              <div className="w-20 h-24 mx-auto relative flex flex-col items-center justify-center bg-gradient-to-b from-[#FFD54F] to-[#FFC400] text-[#073B69] rounded-t-xl rounded-b-[40px] shadow-xl border-2 border-white/40">
                <Shield className="w-6 h-6 mb-0.5 text-[#073B69]" />
                <span className="text-2xl font-black leading-none">10</span>
                <span className="text-[9px] font-black uppercase tracking-wider leading-none mt-0.5">
                  YEAR
                </span>
                <span className="text-[7px] font-black uppercase tracking-widest text-[#073B69]/80">
                  GUARANTEE
                </span>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed mb-4">
              We provide a 10-year guarantee for qualifying waterproofing projects, subject to the applicable project scope, approved system, installation conditions, and written warranty terms.
            </p>

            <Link
              href="/services"
              className="text-xs font-black text-[#FFC400] hover:text-white inline-flex items-center gap-1.5 transition-colors"
            >
              <span>LEARN MORE ABOUT TERMS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
