import React from "react";
import Image from "next/image";

export const HomeBlogSection: React.FC = () => {
  const posts = [
    {
      title: "MATSHEPO AFRICA ACHIEVES LANDMARK 25TH PROJECT WITH CUTTING-EDGE CONSTRUCTION",
      description:
        "The introduction of the enhanced Simba Grip 555 and Simba Grip 777, along with the advanced Ultra Guard Waterproofing solution, has been met with enthusiastic reception from the construction industry.",
      image: "/assets/blog/blog_landmark_construction.jpg",
      alt: "Matshepo Africa 25th Landmark Project Construction",
    },
    {
      title: "\"QUALITY OF THE PRODUCT IS THE BEST ADVERTISEMENT OF THE PRODUCT\": MATSHEPO",
      description:
        "In an industry where the competition is stiff and companies often allocate substantial budgets to advertising, Matshepo Africa takes a different approach by focusing on product quality.",
      image: "/assets/blog/blog_built_on_trust.png",
      alt: "Matshepo Africa Built on Trust Product Quality",
    },
    {
      title: "WOMEN'S DAY CELEBRATION ORGANIZED BY BANK OF BARODA",
      description:
        "Matshepo Africa's Director, Ms. Shery Yohannan, participated in the Women's Day celebration organized by Bank of Baroda.",
      image: "/assets/blog/blog_womens_day.jpg",
      alt: "Women's Day Celebration with Bank of Baroda",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="container-custom">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#172333] uppercase">
            BLOG
          </h2>
          <div className="w-14 h-1 bg-[#FFC400] rounded-full mt-2.5 mb-8" />
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col group">
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-100 shadow-xs">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#172333] mt-4 mb-2.5 leading-snug group-hover:text-[#0875C9] transition-colors">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
