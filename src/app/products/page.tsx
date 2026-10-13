import React, { Suspense } from "react";
import { ProductsClient } from "./ProductsClient";

export const metadata = {
  title: "Construction Chemicals Products | Matshepo Africa Ltd",
  description:
    "Explore our complete range of tile adhesives, waterproofing systems, waterproof grout, ready-mix plaster, and microcement flooring.",
};

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F5F8FC]">
          <div className="text-slate-500 text-sm font-semibold animate-pulse">
            Loading products catalogue...
          </div>
        </div>
      }
    >
      <ProductsClient />
    </Suspense>
  );
}
