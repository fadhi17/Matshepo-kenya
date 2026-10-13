"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData, ProjectItem } from "@/data/projects";
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, X } from "lucide-react";

export const ProjectsPreview: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#073B69] text-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#FFC400] block mb-1">
              Our Projects
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Real Projects. Real Performance.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <Link
              href="/projects"
              className="text-xs sm:text-sm font-bold text-[#FFC400] hover:text-white inline-flex items-center gap-1 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scrollable Project Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth"
          tabIndex={0}
          role="region"
          aria-label="Recent project portfolio list"
        >
          {projectsData.slice(0, 5).map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="min-w-[260px] sm:min-w-[280px] max-w-[290px] shrink-0 bg-white text-[#172333] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer snap-start flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-slate-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="280px"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#073B69]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {project.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-[#172333] group-hover:text-[#0875C9] transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                    <MapPin className="w-3 h-3 text-[#0875C9]" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-1">
                <span className="text-[11px] font-bold text-[#0875C9] group-hover:underline flex items-center gap-1">
                  View Case Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in"
        >
          <div className="relative w-full max-w-2xl bg-white text-[#172333] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <div className="relative aspect-[16/9] bg-slate-900">
              <Image
                src={selectedProject.image}
                alt={selectedProject.name}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-3 bg-[#073B69]/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-lg">
                {selectedProject.category}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-black text-[#073B69]">
                  {selectedProject.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#0875C9]" />
                  <span>{selectedProject.location}</span>
                  <span>•</span>
                  <span>Scope: {selectedProject.scope}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedProject.fullDetails}
              </p>

              <div className="bg-[#F5F8FC] p-3.5 rounded-xl border border-slate-200/60">
                <span className="text-xs font-bold text-[#073B69] block mb-1.5">
                  Systems & Products Specified:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.systemsUsed.map((sys, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-white text-[#0875C9] border border-blue-200 px-2.5 py-1 rounded-md"
                    >
                      {sys}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-yellow px-6 py-2.5 rounded-xl text-xs font-black uppercase cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
