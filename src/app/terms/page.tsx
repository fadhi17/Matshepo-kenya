import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";

export const metadata = {
  title: "Terms and Conditions | Matshepo Africa Ltd",
  description: "Terms and conditions for Matshepo Africa Ltd website, products, and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24">
      <div className="bg-[#073B69] text-white py-14">
        <div className="container-custom text-center space-y-2">
          <h1 className="text-3xl font-black">Terms and Conditions</h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Matshepo Africa Ltd • Construction Chemicals & Waterproofing
          </p>
        </div>
      </div>

      <div className="container-custom mt-10 max-w-3xl bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <h2 className="text-lg font-bold text-[#073B69]">1. Product Specifications and Application</h2>
        <p>
          Product information provided on this website represents typical properties based on manufacturing quality controls. Because site conditions, substrate preparation, and environmental exposures vary, contractors must verify product suitability for specific projects and strictly observe official application guidelines.
        </p>

        <h2 className="text-lg font-bold text-[#073B69]">2. 10-Year Waterproofing Guarantee Conditions</h2>
        <p>
          The 10-year waterproofing guarantee is applicable solely to qualifying waterproofing projects executed under Matshepo Africa approved technical scopes, using certified system components, following written warranty terms, and signed off upon inspection. Individual product purchases do not automatically imply project waterproofing warranties unless formally issued in writing.
        </p>

        <h2 className="text-lg font-bold text-[#073B69]">3. Quotations & Technical Submittals</h2>
        <p>
          Website quote requests and preliminary price indications are subject to formal confirmation by our technical sales office based on current raw material pricing, order volume, and delivery destination.
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
