"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData, projectCategories, ProjectItem } from "@/data/projects";
import { MapPin, ArrowRight, X, Layers, CheckCircle2 } from "lucide-react";

export const ProjectsClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "All Projects") return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#073B69] via-[#0875C9] to-[#05294A] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFC400]">
            Track Record & Applications
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            PROJECTS & PORTFOLIO
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
            Showcasing real-world construction chemical applications and professional waterproofing across Kenya&apos;s residential, commercial, and hospitality developments.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="container-custom text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0875C9]">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Projects Portfolio</span>
        </div>
      </div>

      <div className="container-custom mt-8 space-y-8">
        {/* Category Filters */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-2 overflow-x-auto scrollbar-none">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0875C9] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-blue-300 shadow-xs card-shadow-hover cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#073B69]/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md backdrop-blur-xs">
                    {project.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-black text-[#172333] group-hover:text-[#0875C9] transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0875C9]" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0875C9] group-hover:underline flex items-center gap-1">
                  View Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
        >
          <div className="relative w-full max-w-2xl bg-white text-[#172333] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative aspect-[16/9] bg-slate-900">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-3 bg-[#073B69]/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-lg">
                {activeModalProject.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <h3 className="text-2xl font-black text-[#073B69]">
                  {activeModalProject.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#0875C9]" />
                  <span>{activeModalProject.location}</span>
                  <span>•</span>
                  <span><strong>Scope:</strong> {activeModalProject.scope}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeModalProject.fullDetails}
              </p>

              <div className="bg-[#F5F8FC] p-4 rounded-xl border border-slate-200/60">
                <span className="text-xs font-bold text-[#073B69] block mb-2">
                  Chemical Systems & Products Specified:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.systemsUsed.map((sys, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold bg-white text-[#0875C9] border border-blue-200 px-3 py-1 rounded-lg shadow-2xs"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="btn-yellow px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
