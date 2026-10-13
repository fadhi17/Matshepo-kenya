import React from "react";
import { notFound } from "next/navigation";
import { blogPostsData } from "@/data/blog";
import { BlogDetailClient } from "./BlogDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Matshepo Africa Ltd",
    };
  }

  return {
    title: `${post.title} | Matshepo Africa Blog`,
    description: post.summary,
    openGraph: {
      title: `${post.title} | Matshepo Africa Ltd`,
      description: post.summary,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetailClient post={post} />;
}
