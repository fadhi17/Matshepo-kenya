"use client";

import React, { useState, useEffect } from "react";
import { useQuote } from "@/context/QuoteContext";
import { productsData } from "@/data/products";
import { servicesData } from "@/data/services";
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Image from "next/image";

export const QuoteModal: React.FC = () => {
  const { isOpen, prefilledItem, closeQuoteModal } = useQuote();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "Kenya",
    city: "Nairobi",
    productOrService: "",
    quantity: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledItem) {
      setFormData((prev) => ({ ...prev, productOrService: prefilledItem }));
    } else {
      setFormData((prev) => ({ ...prev, productOrService: "Grip Master" }));
    }
  }, [prefilledItem, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeQuoteModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeQuoteModal]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 8) {
      newErrors.phone = "Please enter a valid phone number (at least 8 digits)";
    }
    if (!formData.city.trim()) newErrors.city = "City or town is required";
    if (!formData.productOrService) newErrors.productOrService = "Please select a product or service";
    if (!formData.message.trim()) newErrors.message = "Please describe your project or requirement";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Realistic submission processing
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSuccess(true);
    } catch {
      setErrors({ form: "An error occurred while submitting your quote request. Please try again or call us at 0757 775 555." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "Kenya",
      city: "Nairobi",
      productOrService: "",
      quantity: "",
      message: "",
    });
    setErrors({});
    closeQuoteModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#073B69] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="relative shrink-0">
              <Image
                src="/assets/logo/matshepo_logo_white.png"
                alt="Matshepo Africa"
                width={48}
                height={57}
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFC400]">
                Matshepo Africa Ltd
              </span>
              <h2 id="quote-modal-title" className="text-xl md:text-2xl font-black mt-0.5">
                Request a Project Quote
              </h2>
            </div>
          </div>
          <button
            onClick={closeQuoteModal}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#073B69] mb-2">Quote Request Received!</h3>
              <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our technical sales team in Nairobi has received your request regarding{" "}
                <span className="text-[#0875C9] font-semibold">{formData.productOrService}</span> and will contact you via {formData.email || formData.phone} within 24 business hours.
              </p>
              <div className="bg-[#F5F8FC] p-4 rounded-xl text-xs text-slate-600 mb-6 border border-slate-200/60 text-left space-y-1">
                <div><strong>Location:</strong> {formData.city}, {formData.country}</div>
                <div><strong>Product / Service:</strong> {formData.productOrService}</div>
                {formData.quantity && <div><strong>Quantity/Size:</strong> {formData.quantity}</div>}
              </div>
              <button
                onClick={handleReset}
                className="btn-yellow px-8 py-3 rounded-xl text-sm font-bold shadow-md cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {errors.form && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.form}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="quote-name" className="block text-xs font-bold text-[#172333] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Samuel Mwangi"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-300 focus:border-[#0875C9] focus:ring-[#0875C9]/20"
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="quote-company" className="block text-xs font-bold text-[#172333] mb-1">
                    Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="quote-company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Builders Ltd"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#0875C9] focus:ring-2 focus:ring-[#0875C9]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label htmlFor="quote-email" className="block text-xs font-bold text-[#172333] mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.co.ke"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-300 focus:border-[#0875C9] focus:ring-[#0875C9]/20"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-bold text-[#172333] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0757 775 555 / +254..."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-300 focus:border-[#0875C9] focus:ring-[#0875C9]/20"
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Country */}
                <div>
                  <label htmlFor="quote-country" className="block text-xs font-bold text-[#172333] mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="quote-country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:border-[#0875C9]"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="quote-city" className="block text-xs font-bold text-[#172333] mb-1">
                    City / Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="quote-city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Nairobi, Athi River, Mombasa"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.city
                        ? "border-red-400 focus:ring-red-200"
                        : "border-slate-300 focus:border-[#0875C9] focus:ring-[#0875C9]/20"
                    }`}
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
              </div>

              {/* Product or Service */}
              <div>
                <label htmlFor="quote-product" className="block text-xs font-bold text-[#172333] mb-1">
                  Product or Waterproofing Service <span className="text-red-500">*</span>
                </label>
                <select
                  id="quote-product"
                  value={formData.productOrService}
                  onChange={(e) => setFormData({ ...formData, productOrService: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#0875C9] focus:ring-2 focus:ring-[#0875C9]/20"
                >
                  <optgroup label="Tile Adhesives">
                    {productsData
                      .filter((p) => p.category === "Tile Adhesives")
                      .map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} {p.grade ? `(${p.grade})` : ""} - {p.subtitle}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Waterproofing Products">
                    {productsData
                      .filter((p) => p.category === "Waterproofing")
                      .map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} - {p.subtitle}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Grout, Plaster & Flooring">
                    {productsData
                      .filter((p) => ["Grout", "Plaster", "Flooring"].includes(p.category))
                      .map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.category}) - {p.subtitle}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label="Waterproofing Project Services (10-Yr Guarantee)">
                    {servicesData.map((s) => (
                      <option key={s.id} value={`Service: ${s.title}`}>
                        {s.title} (Project Service)
                      </option>
                    ))}
                  </optgroup>
                </select>
                {errors.productOrService && (
                  <p className="text-red-500 text-xs mt-1">{errors.productOrService}</p>
                )}
              </div>

              {/* Quantity / Estimated Size */}
              <div>
                <label htmlFor="quote-quantity" className="block text-xs font-bold text-[#172333] mb-1">
                  Estimated Quantity or Project Area <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="quote-quantity"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="e.g. 50 bags, 25 kits, or 350 m² area"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:border-[#0875C9] focus:ring-2 focus:ring-[#0875C9]/20"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="quote-message" className="block text-xs font-bold text-[#172333] mb-1">
                  Project Description or Questions <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="quote-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the project, substrate condition, or specific technical requirements..."
                  className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? "border-red-400 focus:ring-red-200"
                      : "border-slate-300 focus:border-[#0875C9] focus:ring-[#0875C9]/20"
                  }`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto btn-yellow px-8 py-2.5 rounded-lg text-sm font-black flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    "SUBMIT QUOTE REQUEST →"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
