"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { siteInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-bakery-ink pt-[74px]">
      <Image
        src="/images/moretti-storefront.jpg"
        alt="Moretti Bakery storefront on Forest Ave in Staten Island"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-bakery-ink/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-bakery-ink via-bakery-ink/78 to-bakery-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-bakery-ink/88 via-bakery-ink/18 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_420px] lg:items-end"
      >
        <div>
          <p className="section-kicker mb-5 inline-flex items-center gap-2 text-bakery-goldLight">
            Forest Ave bakery, made with love
          </p>

          <h1 className="max-w-4xl font-heading text-5xl font-black uppercase leading-[0.96] text-white sm:text-7xl lg:text-[6.8rem]">
            Moretti
            <span className="block text-bakery-goldLight">Bakery</span>
          </h1>

          <p className="mt-7 max-w-2xl font-body text-lg italic leading-8 text-white/80 sm:text-xl">
            Stop into the Staten Island storefront for dream cakes, cupcakes,
            cookies, pastries, and the old-school neighborhood sweetness that
            made Moretti a Forest Ave favorite.
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
