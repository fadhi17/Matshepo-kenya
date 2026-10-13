"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, blogPostsData } from "@/data/blog";
import { useQuote } from "@/context/QuoteContext";
import {
  Calendar,
  Clock,
  ArrowRight,
  Share2,
  Check,
  CheckCircle2,
  Copy,
  BookOpen,
  Phone,
} from "lucide-react";

interface Props {
  post: BlogPost;
}

export const BlogDetailClient: React.FC<Props> = ({ post }) => {
  const { openQuoteModal } = useQuote();
  const [copied, setCopied] = useState(false);

  const related = blogPostsData.filter((p) => p.id !== post.id).slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-[#F5F8FC] min-h-screen pb-24">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="container-custom text-xs text-slate-500 flex items-center gap-2 overflow-x-auto">
          <Link href="/" className="hover:text-[#0875C9]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#0875C9]">Blog</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate">{post.title}</span>
        </div>
      </div>

      <div className="container-custom mt-8 space-y-12 max-w-4xl">
        {/* Article Header Card */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
              <span className="bg-blue-50 text-[#0875C9] font-bold px-3 py-1 rounded-md">
                {post.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#073B69] tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {post.summary}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Social Share & Copy Bar */}
          <div className="py-3 px-4 bg-slate-50 rounded-xl border border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
            <span className="font-semibold flex items-center gap-1.5">
              <Share2 className="w-4 h-4 text-[#0875C9]" /> Share this practical guide:
            </span>
            <button
              onClick={handleCopyLink}
              className="font-bold text-[#0875C9] hover:underline flex items-center gap-1 cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>

          {/* Body Content Sections */}
          <div className="space-y-8 pt-4">
            {post.content.map((sec, idx) => (
              <div key={idx} className="space-y-3">
                {sec.sectionHeading && (
                  <h2 className="text-xl sm:text-2xl font-black text-[#073B69] tracking-tight">
                    {sec.sectionHeading}
                  </h2>
                )}
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 bg-gradient-to-br from-blue-50/70 to-indigo-50/40 rounded-2xl border border-blue-200/70 space-y-3 mt-8">
            <h3 className="text-base font-black text-[#073B69] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0875C9]" />
              Key Contractor Takeaways:
            </h3>
            <ul className="space-y-2">
              {post.keyTakeaways.map((point, kIdx) => (
                <li key={kIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Support & Quote CTA */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-sm font-bold text-[#073B69] block">
                Have questions about selecting the right chemical system?
              </span>
              <span className="text-xs text-slate-500">
                Contact Matshepo Africa engineers in Nairobi for project advice.
              </span>
            </div>
            <button
              onClick={() => openQuoteModal()}
              className="btn-yellow px-6 py-2.5 rounded-xl text-xs font-black shrink-0 cursor-pointer shadow-xs"
            >
              REQUEST A QUOTE →
            </button>
          </div>
        </article>

        {/* Related Articles */}
        <section className="space-y-6">
          <h2 className="text-xl font-black text-[#073B69]">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 p-4 card-shadow-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden mb-3">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-[#0875C9] uppercase">
                    {rel.category}
                  </span>
                  <h3 className="text-xs sm:text-sm font-black text-[#172333] group-hover:text-[#0875C9] transition-colors mt-0.5 leading-snug line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 text-xs font-bold text-[#0875C9] flex items-center gap-1">
                  <span>Read Article</span> <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
