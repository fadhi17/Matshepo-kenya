import React from "react";

export const WelcomeSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-100">
      <div className="container-custom">
        <div className="max-w-4xl">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#172333] uppercase">
            WELCOME TO MATSHEPO AFRICA
          </h2>
          {/* Gold Accent Bar */}
          <div className="w-14 h-1 bg-[#FFC400] rounded-full mt-2.5 mb-6" />

          {/* Paragraphs */}
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Matshepo Africa is one of the leading building material manufacturers for the widest range of tile adhesive, grout and water proofing in East Africa. The company&apos;s regional position is a result of its strong commitment to sustainable development through offering environment friendly products and developing special products using the latest available technology.
            </p>
            <p>
              We aim to ease the work of the installer, improve the durability of the building and create lasting customer relationships. We do this by manufacturing safe innovative building materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
