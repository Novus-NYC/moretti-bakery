"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";

const heroImages = [
  "/images/mini-dream-cake-platter.jpg",
  "/images/cannoli-cake.jpg",
  "/images/assorted-jumbo-cupcakes.jpg",
  "/images/seven-layer-cookies.png",
  "/images/cinnamon-roll.jpg",
  "/images/pistachio-dream-cake.png",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[86svh] items-end overflow-hidden bg-bakery-ink pt-[74px]">
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3">
        {heroImages.map((src, index) => (
          <div key={src} className="relative min-h-[34svh]">
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover"
              priority={index < 3}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-bakery-ink via-bakery-ink/75 to-bakery-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-bakery-ink/80 via-bakery-ink/20 to-bakery-ink/10" />

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-5 pb-8 pt-16 md:px-8 md:pb-10 lg:grid-cols-[minmax(0,0.94fr)_420px] lg:items-end"
      >
        <div>
          <p className="section-kicker mb-5 inline-flex items-center gap-2 text-bakery-goldLight">
            Fresh cakes, pastries, and classics
          </p>

          <h1 className="max-w-4xl font-heading text-6xl font-black leading-[0.92] text-white sm:text-7xl lg:text-[7.5rem]">
            Moretti
            <span className="block text-bakery-goldLight">Bakery</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Staten Island bakery carrying on a family legacy with dream cakes,
            cookies, cupcakes, pastries, and seasonal sweets made for everyday
            visits and celebrations.
          </p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/menu"
              className="inline-flex justify-center rounded-lg bg-bakery-rose px-7 py-4 font-sub text-sm font-extrabold uppercase tracking-wide text-white shadow-soft transition hover:bg-bakery-roseDeep"
            >
              Browse the Menu
            </Link>
            <a
              href={`tel:${siteInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-7 py-4 font-sub text-sm font-extrabold uppercase tracking-wide text-white backdrop-blur transition hover:border-bakery-goldLight hover:text-bakery-goldLight"
            >
              <Phone size={16} />
              {siteInfo.phone}
            </a>
          </div>
        </div>

        <div className="hidden border-l border-white/20 pl-8 text-white/80 lg:block">
          <p className="section-kicker text-bakery-goldLight">Stop by today</p>
          <div className="mt-5 space-y-4 text-sm leading-6">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-bakery-goldLight" />
              <span>{siteInfo.location}</span>
            </p>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
              {siteInfo.hours.map((h) => (
                <div key={h.days} className="contents">
                  <span className="font-sub text-xs font-bold uppercase tracking-wider text-white/50">
                    {h.days}
                  </span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
