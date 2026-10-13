"use client";

import React, { useState } from "react";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const QuoteSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    productOrService: "Grip Master (Tile Adhesive)",
    city: "Nairobi",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Valid email is required";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Valid phone is required";
    }
    if (!formData.city.trim()) errs.city = "City is required";
    if (!formData.message.trim()) errs.message = "Message is required";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
    } catch {
      setErrors({ form: "Failed to submit. Please call us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-br from-[#073B69] via-[#0875C9] to-[#05294A] text-white overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC400] block">
              Let&apos;s Build Together
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Get a Quote for <br />
              <span className="text-[#FFC400]">Your Project</span>
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-md">
              Contact our Nairobi team for product information, technical guidance, distributor enquiries, or turnkey waterproofing project estimates.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FFC400] text-[#073B69] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-300 block">Direct Hotline</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#FFC400] transition-colors">
                    {companyData.phone}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${companyData.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0795A5] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-300 block">Technical Sales Desk</span>
                  <span className="text-sm font-bold text-white group-hover:text-[#FFC400] transition-colors">
                    {companyData.email}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/10 border border-white/10 text-xs text-slate-300">
                <MapPin className="w-5 h-5 text-[#FFC400] shrink-0 mt-0.5" />
                <span>{companyData.address.full}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-[#172333] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
              <div className="mb-6">
                <h3 className="text-xl font-black text-[#073B69]">Request a Quote</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your project requirements and receive a prompt specification and price quotation.
                </p>
              </div>

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#073B69]">Thank you!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto">
                    We have received your quote request. A Matshepo Africa technical representative will reach out to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: "",
                        companyName: "",
                        email: "",
                        phone: "",
                        productOrService: "Grip Master (Tile Adhesive)",
                        city: "Nairobi",
                        message: "",
                      });
                    }}
                    className="btn-yellow px-6 py-2.5 rounded-xl text-xs font-black mt-5"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                          errors.fullName ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Company Name (Optional)"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                          errors.email ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                          errors.phone ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <select
                        value={formData.productOrService}
                        onChange={(e) => setFormData({ ...formData, productOrService: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9] transition-all"
                      >
                        {productsData.map((p) => (
                          <option key={p.id} value={`${p.name} (${p.category})`}>
                            {p.name} — {p.subtitle}
                          </option>
                        ))}
                        <option value="Waterproofing Project Service (10-Yr Guarantee)">
                          Waterproofing Service (10-Yr Guarantee)
                        </option>
                      </select>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="City / Location *"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                          errors.city ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                        }`}
                      />
                      {errors.city && <p className="text-[11px] text-red-500 mt-1">{errors.city}</p>}
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      placeholder="Project details, scope, or questions *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all resize-none ${
                        errors.message ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-yellow py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        SUBMITTING...
                      </>
                    ) : (
                      "SUBMIT REQUEST →"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
