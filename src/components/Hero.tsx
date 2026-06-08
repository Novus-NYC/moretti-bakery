"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">

      {/* Rich dark brown background — matches the old version exactly */}
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, #3D2005 0%, #1A0E04 55%, #110A02 100%)",
        }}
      />

      {/* Subtle warm glow on the right side */}
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 80% 40%, rgba(120,65,15,0.35) 0%, transparent 60%)",
        }}
      />

      <div className="absolute inset-y-0 right-0 hidden w-[54%] md:block">
        <Image
          src="/images/cannoli-cake.jpg"
          alt=""
          fill
          sizes="54vw"
          className="object-cover opacity-85"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0E04] via-[#1A0E04]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#110A02]/80 via-transparent to-[#110A02]/20" />
      </div>

      {/* Decorative ring */}
      <div className="pointer-events-none absolute right-[8%] top-1/2 hidden h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-[rgba(201,148,58,0.08)] md:block">
        <div className="absolute inset-5 rounded-full border border-[rgba(201,148,58,0.04)]" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 md:px-8 md:pb-32"
      >
        {/* Badge */}
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(201,148,58,0.4)] bg-[rgba(201,148,58,0.15)] px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-[#F0D4A0]">
          Staten Island's Favorite Bakery
        </p>

        {/* Headline */}
        <h1 className="max-w-4xl font-heading text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-[7rem]">
          A Legacy of
          <br />
          Sweetness,
          <em className="mt-1 block font-black italic text-[#C9943A]">
            Love &amp; Community
          </em>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
          Carrying on my mother&apos;s dream, one delicious treat at a time.
          From signature cakes to flaky pastries — every bite tells a story.
        </p>

        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/menu"
            className="inline-flex justify-center rounded-full bg-bakery-rose px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-bakery-roseDeep"
          >
            Explore Our Menu
          </Link>
          <Link
            href="/about"
            className="inline-flex justify-center rounded-full border-2 border-white/30 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition hover:border-[#C9943A] hover:text-[#C9943A]"
          >
            Our Story
          </Link>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 flex h-10 w-6 -translate-x-1/2 items-start justify-center rounded-full border border-white/25 p-1.5"
        aria-hidden="true"
      >
        <motion.span
          animate={{ opacity: [1, 0], y: [0, 12] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-2 w-1.5 rounded-full bg-[#C9943A]"
        />
      </motion.div>
    </section>
  );
}
