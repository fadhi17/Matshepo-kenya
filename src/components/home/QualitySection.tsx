import React from "react";
import { Anchor, Users, Eye, Shield } from "lucide-react";

export const QualitySection: React.FC = () => {
  const pillars = [
    {
      title: "QUALITY ASSURANCE",
      icon: Anchor,
      description:
        "We uphold the highest standards of quality in all our products. Rigorous testing procedures and continuous improvement initiatives ensure that our materials exceed industry benchmarks.",
    },
    {
      title: "CUSTOMER CENTRICITY",
      icon: Users,
      description:
        "Our clients are at the heart of everything we do. We are committed to understanding and meeting their unique requirements, providing personalized solutions, and delivering exceptional customer service.",
    },
    {
      title: "SUSTAINABILITY FOCUS",
      icon: Eye,
      description:
        "As a responsible corporate citizen, we prioritize sustainability in all aspects of our operations. Our products are designed to minimize environmental impact, and we actively invest in eco-friendly practices throughout the manufacturing process.",
    },
    {
      title: "LEADING R&D",
      icon: Shield,
      description:
        "Our research and development team continuously tests and improves our products to stay ahead of market trends.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F9FBFC] border-b border-slate-100">
      <div className="container-custom">
        {/* QUALITY POLICY */}
        <div className="max-w-4xl mb-14">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#172333] uppercase">
            QUALITY POLICY
          </h2>
          <div className="w-14 h-1 bg-[#FFC400] rounded-full mt-2.5 mb-6" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            To manufacture and deliver products and services consistent with accepted standards towards total customer satisfaction. To create at all levels an environment to promote quality as a way of life with a strong sense of values and commitment. To continuously train employees, improve machinery, processes and facilities towards productivity and consistent quality of products and services. To conduct professionally with the shareholders, employees, customers, suppliers, financial institutions, government and the public.
          </p>
        </div>

        {/* 4 CORE PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="flex items-start gap-4 sm:gap-5">
                <div className="w-12 h-12 rounded-full bg-[#FFC400] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-[#172333] mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
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
