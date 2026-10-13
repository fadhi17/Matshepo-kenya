import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";

export const metadata = {
  title: "Privacy Policy | Matshepo Africa Ltd",
  description: "Privacy policy for Matshepo Africa Ltd website and communications.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24">
      <div className="bg-[#073B69] text-white py-14">
        <div className="container-custom text-center space-y-2">
          <h1 className="text-3xl font-black">Privacy Policy</h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Last updated: October 2026 • Matshepo Africa Ltd
          </p>
        </div>
      </div>

      <div className="container-custom mt-10 max-w-3xl bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#073B69]">1. Information Collection</h2>
        <p>
          Matshepo Africa Ltd collects information you provide directly through our contact forms, quote requests, and email communications. This includes your name, company name, telephone number, email address, and project details.
        </p>

        <h2 className="text-lg font-bold text-[#073B69]">2. Purpose of Processing</h2>
        <p>
          We use this information strictly to provide price quotations, answer technical inquiries regarding tile adhesives and waterproofing systems, fulfill sample requests, and deliver professional services.
        </p>

        <h2 className="text-lg font-bold text-[#073B69]">3. Data Security & Storage</h2>
        <p>
          Your contact information is stored securely and is never sold, leased, or distributed to third parties for marketing purposes.
        </p>

        <h2 className="text-lg font-bold text-[#073B69]">4. Contact Our Privacy Office</h2>
        <p>
          If you have questions regarding your data, contact us at: <a href={`mailto:${companyData.email}`} className="text-[#0875C9] font-bold">{companyData.email}</a> or phone {companyData.phone}.
        </p>

        <div className="pt-4 border-t border-slate-100">
          <Link href="/" className="text-xs font-bold text-[#0875C9] hover:underline">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
