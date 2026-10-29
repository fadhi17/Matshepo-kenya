"use client";

import React, { useState } from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building2,
  Layers,
  Handshake,
  Headphones,
} from "lucide-react";

export const ContactClient: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    enquiryType: "Product Information",
    productOfInterest: "Grip Master",
    projectLocation: "Nairobi",
    message: "",
    privacyConsent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const enquiryTypes = [
    "Product Information",
    "Request a Quote",
    "Waterproofing Project",
    "Distribution Partnership",
    "Technical Support",
    "General Enquiry",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Valid email address is required";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Valid phone number is required";
    }
    if (!formData.message.trim()) errs.message = "Please write your message";
    if (!formData.privacyConsent) {
      errs.privacyConsent = "Please consent to our data processing policy";
    }

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
      setErrors({ form: "Error sending message. Please contact our team directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#073B69] via-[#0875C9] to-[#05294A] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFC400]">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            LET&apos;S BUILD SOMETHING STRONGER
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
            Contact our team to discuss products, technical information, distribution opportunities, or waterproofing projects across Kenya.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="container-custom text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0875C9]">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Contact Us</span>
        </div>
      </div>

      <div className="container-custom mt-12 space-y-12">
        {/* 4 Enquiry Method Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0875C9] flex items-center justify-center mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-[#172333]">Product Enquiries</h3>
            <p className="text-xs text-slate-500 mt-1">
              Tile adhesives, waterproofing kits, grouts, and plaster technical datasheets.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#0795A5] flex items-center justify-center mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-[#172333]">Waterproofing Projects</h3>
            <p className="text-xs text-slate-500 mt-1">
              Project assessments, scope specifications, and 10-Year Guarantee terms.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <Handshake className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-[#172333]">Distribution Enquiries</h3>
            <p className="text-xs text-slate-500 mt-1">
              Hardware stores, regional stockists, and construction material distributors.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-black text-[#172333]">Technical Support</h3>
            <p className="text-xs text-slate-500 mt-1">
              On-site application guidance and substrate compatibility analysis.
            </p>
          </div>
        </div>

        {/* Main 2-Column: Details & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Verified Contact Information & Location */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#0875C9] block mb-1">
                Direct Contact
              </span>
              <h2 className="text-2xl font-black text-[#073B69]">
                Matshepo Africa Ltd
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Manufacturing Quality Construction Chemicals in Nairobi, Kenya.
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-100">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <MapPin className="w-5 h-5 text-[#0875C9] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Physical Address:</strong>
                  <span>{companyData.address.full}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <Phone className="w-5 h-5 text-[#0875C9] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Phone Number:</strong>
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="text-[#0875C9] hover:underline font-semibold"
                  >
                    {companyData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <Mail className="w-5 h-5 text-[#0875C9] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-bold">Email Address:</strong>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-[#0875C9] hover:underline font-semibold"
                  >
                    {companyData.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Map Placeholder Card */}
            <div className="p-4 bg-[#F5F8FC] rounded-2xl border border-slate-200/80 text-xs text-slate-600 space-y-2">
              <div className="font-bold text-[#073B69] flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#0875C9]" />
                <span>Nairobi Manufacturing Facility</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Located conveniently at Athi 55 Business Park in Mlolongo, Athi River corridor, providing fast logistical dispatch to Nairobi, Machakos, Kiambu, and regional sites.
              </p>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-[#073B69]">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the form below and our technical sales engineers will reply within 24 business hours.
              </p>
            </div>

            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#073B69]">Message Successfully Sent!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. We have received your {formData.enquiryType.toLowerCase()} message. Our team in Nairobi will respond promptly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-yellow px-7 py-2.5 rounded-xl text-xs font-black mt-6"
                >
                  Send Another Message
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
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Samuel Mwangi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all ${
                        errors.fullName ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                      }`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Builders Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Enquiry Type
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9]"
                    >
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#172333] mb-1">
                      Product or Service of Interest
                    </label>
                    <select
                      value={formData.productOfInterest}
                      onChange={(e) => setFormData({ ...formData, productOfInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9]"
                    >
                      {productsData.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.category})
                        </option>
                      ))}
                      <option value="Waterproofing Project Service">
                        Waterproofing Project Service (10-Yr Guarantee)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172333] mb-1">
                    Project Location <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nairobi, Mombasa, Kisumu"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172333] mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please tell us about your requirement or project scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none transition-all resize-none ${
                      errors.message ? "border-red-400" : "border-slate-200 focus:border-[#0875C9]"
                    }`}
                  />
                  {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="privacy-consent"
                    checked={formData.privacyConsent}
                    onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-0.5 rounded text-[#0875C9] focus:ring-[#0875C9]"
                  />
                  <label htmlFor="privacy-consent" className="text-xs text-slate-600">
                    I consent to Matshepo Africa Ltd collecting and processing my contact details to respond to this enquiry.
                  </label>
                </div>
                {errors.privacyConsent && (
                  <p className="text-[11px] text-red-500">{errors.privacyConsent}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-yellow py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      SENDING MESSAGE...
                    </>
                  ) : (
                    <>
                      <span>SEND ENQUIRY MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
