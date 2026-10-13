"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { testimonialsData } from "@/data/testimonials";
import { ChevronLeft, ChevronRight, Quote, ArrowRight, Pause, Play } from "lucide-react";

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-16 bg-white border-b border-slate-200/60">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#0875C9] block mb-1">
              Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B69] tracking-tight">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={isPaused ? "Play testimonial slideshow" : "Pause testimonial slideshow"}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-1.5">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#0875C9] hover:bg-blue-50 text-slate-600 hover:text-[#0875C9] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full border border-slate-200 hover:border-[#0875C9] hover:bg-blue-50 text-slate-600 hover:text-[#0875C9] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link
              href="/testimonials"
              className="text-xs sm:text-sm font-bold text-[#0875C9] hover:text-[#073B69] inline-flex items-center gap-1 ml-2"
            >
              <span>View All Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Testimonials Grid on Desktop, Slideable on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 rounded-2xl bg-[#F5F8FC] border border-slate-200/80 flex flex-col justify-between transition-all duration-300 ${
                index === currentIndex ? "ring-2 ring-[#0875C9]/30 bg-white shadow-lg" : "hover:bg-white hover:shadow-md"
              }`}
            >
              <div>
                <Quote className="w-8 h-8 text-[#FFC400] mb-4 fill-[#FFC400]/20" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-200 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xs font-black text-[#172333] leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-[11px] text-slate-500 block leading-tight">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentIndex ? "w-6 bg-[#0875C9]" : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
