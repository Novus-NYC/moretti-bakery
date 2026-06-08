"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  products,
  categoryMeta,
  type Product,
  type ProductCategory,
} from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import MenuFilterTabs from "@/components/MenuFilterTabs";

type SortKey = "default" | "price-asc" | "price-desc" | "name";

export default function MenuPage() {
  return (
    <Suspense fallback={<MenuShell />}>
      <MenuContent />
    </Suspense>
  );
}

function MenuContent() {
  const searchParams = useSearchParams();
  const initialCat = (searchParams.get("category") as ProductCategory) ?? "all";

  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">(
    initialCat
  );
  const [sort, setSort] = useState<SortKey>("default");

  const filtered = useMemo(() => {
    let list: Product[] =
      activeCategory === "all"
        ? [...products]
        : products.filter((p) => p.category.includes(activeCategory));

    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    else if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [activeCategory, sort]);

  const activeMeta =
    activeCategory === "all"
      ? null
      : categoryMeta.find((c) => c.id === activeCategory);

  return (
    <>
      {/* Page header */}
      <div className="bg-bakery-ink pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-3 font-sub text-sm font-extrabold uppercase tracking-widest text-bakery-gold">
            Moretti Bakery
          </p>
          <h1 className="font-heading text-5xl font-black text-white sm:text-6xl md:text-7xl">
            Our Menu
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/65">
            {activeMeta
              ? activeMeta.description
              : "Freshly baked, made with love — something for every sweet craving."}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="sticky top-[72px] z-40 border-b border-bakery-line bg-bakery-surface/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3 md:px-8">
          <MenuFilterTabs active={activeCategory} onChange={setActiveCategory} />

          {/* Sort */}
          <div className="flex items-center gap-2 font-sub text-xs font-semibold text-bakery-muted">
            <span className="hidden sm:inline">Sort:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-bakery-line bg-bakery-cream px-3 py-2 font-sub text-xs font-semibold text-bakery-ink outline-none transition focus:border-bakery-rose"
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <div className="bg-bakery-bg py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">

          {/* Result count */}
          <p className="mb-6 font-sub text-sm font-semibold text-bakery-muted">
            {filtered.length} item{filtered.length !== 1 ? "s" : ""}
            {activeCategory !== "all" && activeMeta
              ? ` in ${activeMeta.label}`
              : ""}
          </p>

          <motion.div
            key={`${activeCategory}-${sort}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

        </div>
      </div>
    </>
  );
}

function MenuShell() {
  return (
    <>
      <div className="bg-bakery-ink pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-3 font-sub text-sm font-extrabold uppercase tracking-widest text-bakery-gold">
            Moretti Bakery
          </p>
          <h1 className="font-heading text-5xl font-black text-white sm:text-6xl md:text-7xl">
            Our Menu
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/65">
            Freshly baked, made with love — something for every sweet craving.
          </p>
        </div>
      </div>
      <div className="bg-bakery-bg py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-sub text-sm font-semibold text-bakery-muted">
            Loading menu...
          </p>
        </div>
      </div>
    </>
  );
}
