"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { categoryMeta, products } from "@/lib/data";

export default function FeaturedCategories() {
  return (
    <section className="bg-bakery-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-widest text-bakery-rose">
              Our Collections
            </p>
            <h2 className="font-heading text-4xl font-black leading-tight text-bakery-ink sm:text-5xl md:text-6xl">
              Browse Our
              <br />
              Sweet Selection
            </h2>
          </div>
          <Link
            href="/menu"
            className="inline-flex self-start rounded-full bg-bakery-ink px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-bakery-rose md:self-auto"
          >
            View All Items
          </Link>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
          {categoryMeta.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <Link
                href={`/menu?category=${cat.id}`}
                className="group relative flex aspect-[4/5] w-full flex-col overflow-hidden rounded-[20px] border border-bakery-line bg-bakery-ink transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(26,18,8,0.25)]"
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(min-width: 768px) 20vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bakery-ink/90 via-transparent to-transparent" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="block font-heading text-base font-bold text-white sm:text-lg">
                    {cat.label}
                  </span>
                  <span className="mt-0.5 block font-sub text-[0.65rem] font-bold uppercase tracking-widest text-bakery-goldLight">
                    {products.filter((product) => product.category.includes(cat.id)).length} items
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
