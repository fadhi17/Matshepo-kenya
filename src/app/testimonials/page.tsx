import React from "react";
import Image from "next/image";
import Link from "next/link";
import { testimonialsData } from "@/data/testimonials";
import { Quote, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

export const metadata = {
  title: "Client Testimonials | Matshepo Africa Ltd",
  description:
    "Read what contractors, project managers, and builders in Nairobi, Kenya say about Matshepo Africa construction chemicals and waterproofing solutions.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#073B69] via-[#0875C9] to-[#05294A] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFC400]">
            Verified Contractor Feedback
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            WHAT OUR CLIENTS SAY
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
            Real feedback from professional builders, project managers, and tiling contractors across Nairobi and Kenya relying on Matshepo Africa solutions.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="container-custom text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0875C9]">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Client Testimonials</span>
        </div>
      </div>

      <div className="container-custom mt-12 space-y-12">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:border-blue-300 card-shadow-hover flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-[#FFC400] mb-6 fill-[#FFC400]/20" />
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0 border border-slate-300">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#172333] leading-tight">
                    {item.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#0875C9] mt-0.5">
                    {item.role}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Review CTA Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm text-center max-w-2xl mx-auto space-y-4">
          <ShieldCheck className="w-12 h-12 text-[#0875C9] mx-auto" />
          <h2 className="text-xl sm:text-2xl font-black text-[#073B69]">
            Have You Completed a Project with Matshepo Africa?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We value contractor and developer partnerships. If you have utilized our tile adhesives, waterproofing systems, or grout, we welcome your feedback.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-yellow px-8 py-3 rounded-xl text-xs sm:text-sm font-black inline-flex items-center gap-2"
            >
              <span>SHARE YOUR PROJECT FEEDBACK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
