import React from "react";
import { Factory, Award, ShieldCheck, Headphones } from "lucide-react";

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      title: "QUALITY-FOCUSED MANUFACTURING",
      description:
        "Construction chemical solutions developed with a commitment to consistent quality.",
      icon: Factory,
      accentColor: "text-[#0875C9] bg-blue-50",
    },
    {
      title: "PERFORMANCE-DRIVEN PRODUCTS",
      description:
        "Products designed to support strong adhesion, durability, and reliable protection.",
      icon: Award,
      accentColor: "text-amber-600 bg-amber-50",
    },
    {
      title: "WATERPROOFING EXPERTISE",
      description:
        "Solutions for swimming pools, basements, rooftops, balconies, and wet areas.",
      icon: ShieldCheck,
      accentColor: "text-[#0795A5] bg-teal-50",
    },
    {
      title: "CUSTOMER-FOCUSED SERVICE",
      description:
        "Dedicated support to help customers select suitable products for their projects.",
      icon: Headphones,
      accentColor: "text-indigo-600 bg-indigo-50",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200/60">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#F5F8FC] border border-slate-200/70 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl ${item.accentColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-black text-[#073B69] tracking-tight mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
