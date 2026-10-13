"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { servicesData, guaranteeDetails } from "@/data/services";
import {
  Shield,
  Waves,
  Building,
  Home,
  Droplet,
  Compass,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export const ServicesClient: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "Nairobi",
    projectType: "Swimming Pool",
    size: "",
    contactMethod: "Phone Call",
    contactTime: "Morning (9am - 12pm)",
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Valid phone number is required";
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Valid email address is required";
    }
    if (!formData.location.trim()) errs.location = "Project location is required";
    if (!formData.description.trim()) errs.description = "Project description is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 850));
      setIsSuccess(true);
    } catch {
      setErrors({ form: "Error sending project enquiry. Please call our team directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceIcons = [Waves, Building, Home, Droplet, Compass];

  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#073B69] via-[#0875C9] to-[#05294A] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#FFC400] text-xs font-bold border border-white/10">
            <Shield className="w-3.5 h-3.5" />
            <span>10-YEAR GUARANTEE AVAILABLE FOR QUALIFYING PROJECTS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            COMPLETE WATERPROOFING SOLUTIONS
          </h1>
          <p className="text-lg sm:text-xl font-bold text-slate-100">
            Protect Your Building. Preserve Its Value.
          </p>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
            We provide professional waterproofing project services for key areas of buildings, helping customers address water ingress risks through appropriate waterproofing systems and application methods.
          </p>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="container-custom text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0875C9]">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Waterproofing Services</span>
        </div>
      </div>

      <div className="container-custom mt-12 space-y-16">
        {/* 5 Service Categories Detailed Cards */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-wider text-[#0875C9]">
              Turnkey Application & Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B69] tracking-tight mt-1">
              Waterproofing Services Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every building zone faces different water dynamics. Our certified technical teams specify and execute tailored systems for each structural environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:border-blue-300 card-shadow-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-[#073B69]/90 text-white text-xs font-bold px-3 py-1 rounded-lg flex items-center gap-1.5 backdrop-blur-xs">
                        <Icon className="w-3.5 h-3.5 text-[#0AB3C7]" />
                        <span>Zone 0{index + 1}</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-base font-black text-[#073B69]">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <div className="pt-2 border-t border-slate-100 space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-800 block">
                          Specified Matshepo Systems:
                        </span>
                        {service.recommendedSystems.map((sys, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                            <CheckCircle className="w-3 h-3 text-[#0875C9] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{sys}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <a
                      href="#enquiry-form"
                      className="w-full btn-outline-blue py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Enquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 10-YEAR GUARANTEE PROMINENT SECTION */}
        <section className="bg-gradient-to-br from-[#073B69] via-[#0875C9] to-[#073B69] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Shield Graphic Badge */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="inline-block p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="w-24 h-28 mx-auto relative flex flex-col items-center justify-center bg-gradient-to-b from-[#FFD54F] to-[#FFC400] text-[#073B69] rounded-t-2xl rounded-b-[48px] shadow-xl border-2 border-white/60">
                  <Shield className="w-8 h-8 mb-0.5 text-[#073B69]" />
                  <span className="text-3xl font-black leading-none">10</span>
                  <span className="text-[10px] font-black uppercase tracking-wider leading-none mt-0.5">
                    YEAR
                  </span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#073B69]/80">
                    GUARANTEE
                  </span>
                </div>
              </div>
            </div>

            {/* Guarantee Terms & Information */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#FFC400] block">
                Official Warranty Policy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                {guaranteeDetails.title}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed">
                {guaranteeDetails.statement}
              </p>
              <div className="p-4 bg-white/10 rounded-2xl border border-white/15 text-xs text-slate-200 leading-relaxed">
                <strong>Important Notice on Warranty Conditions:</strong> {guaranteeDetails.note}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {guaranteeDetails.keyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle className="w-3.5 h-3.5 text-[#FFC400] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#enquiry-form"
                  className="btn-yellow px-7 py-3 rounded-xl text-xs sm:text-sm font-black inline-flex items-center gap-2 shadow-lg"
                >
                  <span>DISCUSS YOUR WATERPROOFING PROJECT</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Project Enquiry Form Section */}
        <section id="enquiry-form" className="scroll-mt-24">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm max-w-4xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0875C9]">
                Get Started
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#073B69] tracking-tight mt-1">
                Waterproofing Project Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Submit your structural parameters and our engineering team in Nairobi will provide a technical review, recommended system specification, and transparent quotation.
              </p>
            </div>

            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#073B69]">Enquiry Successfully Submitted!</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our waterproofing technical team has received your project enquiry for <strong>{formData.projectType}</strong> ({formData.location}). We will reach out via {formData.contactMethod.toLowerCase()} during {formData.contactTime}.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-yellow px-7 py-2.5 rounded-xl text-xs font-black mt-6"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {errors.form && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errors.form}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Customer Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Kamau"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                        errors.name ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Skyline Real Estate"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0757 775 555 / +254..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                        errors.phone ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.co.ke"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                        errors.email ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9]"
                    >
                      <option value="Swimming Pool">Swimming Pool</option>
                      <option value="Basement">Basement</option>
                      <option value="Rooftop">Rooftop</option>
                      <option value="Bathroom / Washroom">Bathroom / Washroom</option>
                      <option value="Balcony">Balcony</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Project Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Westlands, Nairobi"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                        errors.location ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                      }`}
                    />
                    {errors.location && <p className="text-[11px] text-red-500 mt-1">{errors.location}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Approx. Size <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 450 m²"
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Preferred Contact Method
                    </label>
                    <select
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9]"
                    >
                      <option value="Phone Call">Phone Call</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Preferred Contact Time <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <select
                      value={formData.contactTime}
                      onChange={(e) => setFormData({ ...formData, contactTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9]"
                    >
                      <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                      <option value="Afternoon (1pm - 5pm)">Afternoon (1pm - 5pm)</option>
                      <option value="Anytime">Anytime during business hours</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172333] mb-1">
                    Project Description & Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe structure status, current leaks or new build, substrate condition..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all resize-none ${
                      errors.description ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                    }`}
                  />
                  {errors.description && <p className="text-[11px] text-red-500 mt-1">{errors.description}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-yellow py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        SUBMITTING ENQUIRY...
                      </>
                    ) : (
                      "SUBMIT WATERPROOFING ENQUIRY →"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
