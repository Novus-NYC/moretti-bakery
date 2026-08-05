"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const galleryItems = [
  { src: "/images/cannoli-cake.jpg", alt: "Cannoli cake" },
  { src: "/images/oreo-cake.jpg", alt: "Oreo cake" },
  { src: "/images/pistachio-dream-cake.png", alt: "Pistachio dream cake" },
  { src: "/images/assorted-jumbo-cupcakes.jpg", alt: "Assorted jumbo cupcakes" },
  { src: "/images/seven-layer-cookies.png", alt: "Seven layer cookies" },
  { src: "/images/cinnamon-roll.jpg", alt: "Cinnamon roll" },
  { src: "/images/butter-cookies.jpg", alt: "Butter cookies" },
  { src: "/images/cupcakes.jpg", alt: "Cupcakes" },
  { src: "/images/chocolate-seven-layer-cake.png", alt: "Chocolate seven layer cake" },
  { src: "/images/lemon-poppy-dream-cake.jpeg", alt: "Lemon poppy dream cake" },
  { src: "/images/mini-dream-cake-platter.jpg", alt: "Mini dream cake platter" },
  { src: "/images/danish-pastry.jpg", alt: "Danish pastry" },
];

export default function FoodGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const move = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.min(track.clientWidth * 0.82, 480);
    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const lightboxItem =
    activeIndex === null ? null : galleryItems[activeIndex % galleryItems.length];

  return (
    <section className="overflow-hidden bg-bakery-ink py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <p className="section-kicker text-bakery-goldLight">The food</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-heading text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
          A bakery case worth lingering over
        </h2>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl justify-center gap-3 px-5 md:px-8">
        <button
          type="button"
          onClick={() => move("prev")}
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-bakery-gold bg-bakery-inkSoft text-bakery-goldLight transition hover:bg-bakery-gold/15"
          aria-label="Previous gallery images"
        >
          <ArrowLeft size={19} />
        </button>
        <button
          type="button"
          onClick={() => move("next")}
          className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-bakery-gold bg-bakery-inkSoft text-bakery-goldLight transition hover:bg-bakery-gold/15"
          aria-label="Next gallery images"
        >
          <ArrowRight size={19} />
        </button>
      </div>

      <div
        ref={trackRef}
        className="mt-8 flex gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {galleryItems.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative h-[280px] w-[280px] flex-shrink-0 overflow-visible rounded-lg border-2 border-bakery-gold bg-bakery-inkSoft p-2 shadow-soft transition hover:-translate-y-1 sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]"
            aria-label={`Open ${item.alt} image`}
          >
            <span className="pointer-events-none absolute inset-4 z-10 border border-bakery-goldLight/60" />
            <span className="relative block h-full w-full overflow-hidden rounded-md border border-white/20">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 280px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </span>
          </button>
        ))}
        {galleryItems.map((item) => (
          <div
            key={`${item.src}-duplicate`}
            className="group relative h-[280px] w-[280px] flex-shrink-0 overflow-visible rounded-lg border-2 border-bakery-gold bg-bakery-inkSoft p-2 shadow-soft sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]"
            aria-hidden="true"
          >
            <span className="pointer-events-none absolute inset-4 z-10 border border-bakery-goldLight/60" />
            <span className="relative block h-full w-full overflow-hidden rounded-md border border-white/20">
              <Image
                src={item.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 280px"
                className="object-cover"
              />
            </span>
          </div>
        ))}
      </div>

      {lightboxItem && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Food image viewer"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white"
            aria-label="Close image viewer"
          >
            <X size={19} />
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((current) =>
                current === null
                  ? 0
                  : (current - 1 + galleryItems.length) % galleryItems.length
              )
            }
            className="absolute left-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white sm:inline-flex"
            aria-label="Previous image"
          >
            <ArrowLeft size={19} />
          </button>
          <Image
            src={lightboxItem.src}
            alt={lightboxItem.alt}
            width={980}
            height={760}
            className="max-h-[84vh] w-auto max-w-full rounded-lg object-contain"
          />
          <button
            type="button"
            onClick={() =>
              setActiveIndex((current) =>
                current === null ? 0 : (current + 1) % galleryItems.length
              )
            }
            className="absolute right-5 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white sm:inline-flex"
            aria-label="Next image"
          >
            <ArrowRight size={19} />
          </button>
        </div>
      )}
    </section>
  );
}
