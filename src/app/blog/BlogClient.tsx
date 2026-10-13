"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPostsData, BlogPost } from "@/data/blog";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export const BlogClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Articles",
    "Tile Adhesives",
    "Waterproofing",
    "Construction Tips",
    "Product Education",
    "Flooring",
  ];

  const filteredPosts = useMemo(() => {
    return blogPostsData.filter((post) => {
      const matchesCat =
        selectedCategory === "All Articles" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article is the first post
  const featuredPost = blogPostsData[0];

  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#073B69] via-[#0875C9] to-[#05294A] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFC400]">
            Knowledge & Insights
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            INSIGHTS FOR BETTER BUILDING
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed">
            Explore practical guidance, construction tips, product information, and waterproofing knowledge for contractors, builders, and developers.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="container-custom text-xs text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#0875C9]">Home</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Blog & Articles</span>
        </div>
      </div>

      <div className="container-custom mt-10 space-y-12">
        {/* Featured Post Card (Hero) */}
        {selectedCategory === "All Articles" && searchQuery === "" && (
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm card-shadow-hover group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full bg-slate-100 min-h-[300px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#FFC400] text-[#073B69] text-xs font-black px-3 py-1 rounded-lg">
                  FEATURED ARTICLE
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                  <span className="bg-blue-50 text-[#0875C9] font-bold px-2.5 py-0.5 rounded-md">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#073B69] group-hover:text-[#0875C9] transition-colors leading-tight">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {featuredPost.summary}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="btn-yellow px-6 py-2.5 rounded-xl text-xs font-black inline-flex items-center gap-2"
                  >
                    <span>READ FULL ARTICLE</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0875C9] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#0875C9] transition-all"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-blue-300 shadow-xs card-shadow-hover group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#073B69]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                    {post.category}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-sm font-black text-[#172333] group-hover:text-[#0875C9] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-[#0875C9] group-hover:underline flex items-center gap-1">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
