"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutStrip() {
  return (
    <section className="bg-bakery-ink py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[380px] overflow-hidden rounded-[28px] border border-bakery-gold/20 bg-bakery-inkSoft md:min-h-[460px]"
        >
          <Image
            src="/images/seven-layer-cookies.png"
            alt="Moretti Bakery seven layer cookies"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bakery-ink/35 via-transparent to-transparent" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-sub text-sm font-extrabold uppercase tracking-widest text-bakery-gold">
            Behind the Brand
          </p>
          <h2 className="font-heading text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Welcome to
            <br />
            Moretti Bakery
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Every bite tells a story of love, family, and tradition. Explore
            our freshly baked goods, custom cakes, and timeless classics.
            Whether it&apos;s a family gathering, a special occasion, or just a
            moment of indulgence — we&apos;re here to make life sweeter.
          </p>
          <Link
            href="/about"
            className="btn-line mt-10 text-white"
          >
            Learn Our Story
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
