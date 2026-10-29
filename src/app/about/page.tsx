import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  CheckCircle,
  Factory,
  ArrowRight,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "About Us | Some Bonds are Forever",
  description:
    "Matshepo Africa Ltd is a construction chemicals manufacturer based in Nairobi, Kenya, delivering solutions for tile installation, waterproofing, grouting, plastering, and flooring.",
};

export default function AboutPage() {
  const values = [
    { name: "Quality", desc: "Commitment to stringent batch-to-batch consistency and reliable performance standards." },
    { name: "Reliability", desc: "Formulations engineered to endure local climate extremes and structural loads." },
    { name: "Innovation", desc: "Continuous research and formulation development matching modern architectural trends." },
    { name: "Customer Commitment", desc: "Dedicated technical consultation to help contractors choose the right system." },
    { name: "Integrity", desc: "Honest technical communication and transparent, realistic product ratings." },
    { name: "Sustainability", desc: "Environmentally conscious raw material selection and minimized production waste." },
  ];

  const whyChooseUs = [
    "A broad construction chemicals portfolio engineered for regional building methods.",
    "Graded tile adhesives covering economy (Grip Master) and certified classes (Simba Grip C1, C2, C2TES1).",
    "Specialized 2K cementitious and APP membrane waterproofing systems.",
    "Professional project execution services with an available 10-Year Waterproofing Guarantee.",
    "Customer-focused product and job-site technical support based right in Nairobi.",
  ];

  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-20">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#073B69] via-[#0875C9] to-[#05294A] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFC400]">
            About Matshepo Africa Ltd
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
            SOME BONDS ARE FOREVER
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
            Manufacturing practical, high-performance construction chemicals in Nairobi, Kenya to support contractors, builders, developers, and distributors.
          </p>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="container-custom text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0875C9]">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">About Us</span>
        </div>
      </div>

      <div className="container-custom mt-12 space-y-16">
        {/* Section A: Who We Are (Two Column Layout) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#0875C9]">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#073B69] tracking-tight">
                Empowering Kenya&apos;s Modern Construction Sector
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Matshepo Africa Ltd is a construction chemicals manufacturer based in Nairobi, Kenya, providing solutions for tile installation, waterproofing, grouting, plastering, and flooring systems.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Our focus is on developing practical construction chemical solutions that support reliable installation, durable building surfaces, and long-lasting performance.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Through product quality, technical development, and customer-focused service, we aim to support contractors, builders, distributors, developers, and construction professionals across our markets.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#073B69]">
                <MapPin className="w-4 h-4 text-[#0875C9]" />
                <span>Manufacturing & Distribution: Athi 55 Business Park, Nairobi, Kenya</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-slate-200 bg-slate-100">
                <Image
                  src="/assets/about/matshepo_factory_worker.jpg"
                  alt="Matshepo Africa Manufacturing and Quality Checking"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section B & C: Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0875C9] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#073B69]">Our Mission</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                &ldquo;To deliver dependable construction chemical solutions that support quality workmanship and durable buildings.&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Anchored on consistent product quality and honest contractor support.
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0795A5] flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#073B69]">Our Vision</h3>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                &ldquo;To become a trusted construction chemicals brand recognised for product performance, innovation, and customer service.&rdquo;
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Serving residential, commercial, and infrastructure builds across the region.
            </div>
          </div>
        </section>

        {/* Section D: Our Core Values */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#0875C9]">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B69] tracking-tight mt-1">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F5F8FC] border border-slate-200/60 hover:border-blue-200 hover:bg-white transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-[#0875C9] flex items-center justify-center mb-3 font-black text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-black text-[#172333] mb-1">{val.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section E: Manufacturing Approach */}
        <section className="bg-gradient-to-br from-[#073B69] to-[#05294A] text-white rounded-3xl p-8 sm:p-12 shadow-lg">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC400]">
              Production & Precision
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Our Manufacturing Approach
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Operating modern manufacturing facilities in Nairobi, Matshepo Africa adheres to disciplined production workflows designed to produce reliable construction chemical batches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#FFC400] mb-2.5" />
                <h3 className="text-sm font-bold text-white mb-1.5">Graded Raw Material Sourcing</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-grade silica sands, hydraulic cements, and specialized polymer additives.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#FFC400] mb-2.5" />
                <h3 className="text-sm font-bold text-white mb-1.5">Homogeneous Batch Blending</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated dry-mixing ensuring uniform dispersion of chemical admixtures.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-5 h-5 text-[#FFC400] mb-2.5" />
                <h3 className="text-sm font-bold text-white mb-1.5">Protective Sealed Packaging</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Multi-ply moisture-resistant packaging preventing premature hydration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section F: Why Choose Us? */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#0875C9]">
                Professional Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#073B69] tracking-tight">
                Why Choose Matshepo Africa?
              </h2>
              <div className="space-y-3 pt-2">
                {whyChooseUs.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F5F8FC] p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <Factory className="w-10 h-10 text-[#0875C9] mx-auto" />
              <h3 className="text-base font-black text-[#073B69]">Ready to Discuss Your Project?</h3>
              <p className="text-xs text-slate-600">
                Connect with our Nairobi technical team to request product samples, job-site demonstrations, or project pricing.
              </p>
              <Link
                href="/contact"
                className="btn-yellow px-6 py-3 rounded-xl text-xs font-black inline-flex items-center gap-2 shadow-xs"
              >
                <span>CONTACT OUR TEAM</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
