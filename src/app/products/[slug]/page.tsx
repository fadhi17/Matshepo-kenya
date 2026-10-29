import React from "react";
import { notFound } from "next/navigation";
import { productsData } from "@/data/products";
import { ProductDetailClient } from "./ProductDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find(
    (p) => p.slug === slug || (slug === "insutech-app-membrane" && p.slug === "app-membrane")
  );

  if (!product) {
    return {
      title: "Product Not Found | Matshepo Africa Ltd",
    };
  }

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    openGraph: {
      title: `${product.name} | Matshepo Africa Ltd`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = productsData.find(
    (p) => p.slug === slug || (slug === "insutech-app-membrane" && p.slug === "app-membrane")
  );

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
