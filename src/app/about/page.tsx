import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Users, Wheat } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  {
    icon: Heart,
    title: "Tradition & Innovation",
    body: "While staying true to time-tested family recipes, we embrace modern flavors and techniques to meet the evolving tastes of our community.",
  },
  {
    icon: Users,
    title: "Community Connection",
    body: "From birthdays to weddings, Moretti Bakery has been part of Staten Island's cherished moments for generations. We're more than a shop — we're a piece of the community's heart.",
  },
  {
    icon: Sparkles,
    title: "Heart in Every Bite",
    body: "Each treat is crafted with love — a reflection of my mother's passion and the family's unwavering dedication to quality and care.",
  },
  {
    icon: Wheat,
    title: "Premium Ingredients",
    body: "We bake with farm-fresh eggs, pure butter, and fine flour. Ingredients like yogurt, buttermilk, and syrups give that melt-in-your-mouth texture we're known for.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-bakery-ink pb-20 pt-36">
        <Image
          src="/images/seven-layer-cookies.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-28"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bakery-ink via-bakery-ink/90 to-bakery-ink/50" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="section-kicker mb-4 text-bakery-goldLight">
            Est. Staten Island
          </p>
          <h1 className="max-w-3xl font-heading text-5xl font-black leading-tight text-white sm:text-6xl md:text-7xl">
            Honoring a Mother&apos;s
            <em className="mt-1 block italic text-bakery-gold">Dream</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Moretti Bakery began as a labor of love — a mother and daughter united by
            flour, butter, and an unshakeable belief in the power of food to bring
            people together.
          </p>
        </div>
      </div>

      <section className="bg-bakery-bg py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 md:grid-cols-2 md:px-8">

          <ScrollReveal>
            <div className="bakery-image-frame min-h-[440px]">
              <div className="bakery-image-frame-media">
                <Image
                  src="/images/mini-dream-cake-platter.jpg"
                  alt="Moretti Bakery story"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-bakery-ink/80 p-4 text-center font-heading italic text-base text-white backdrop-blur-sm">
                  &ldquo;Every recipe carries her warmth.&rdquo;
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="section-kicker mb-3 text-bakery-rose">
              Our Story
            </p>
            <h2 className="font-heading text-4xl font-black leading-tight text-bakery-ink md:text-5xl">
              A Bakery Built on Love
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-bakery-inkSoft/80">
              <p>
                Moretti Bakery began as a labor of love, created by my mother — a passionate
                baker who believed in the power of food to bring people together. For decades,
                she served the Staten Island community with warmth, kindness, and unforgettable
                baked goods.
              </p>
              <p>
                After her passing, I made it my mission to continue her legacy. Every day, I
                am inspired by her dedication and the joy she brought to others. At Moretti
                Bakery, we blend tradition with innovation, offering beloved family recipes
                alongside exciting new creations.
              </p>
              <p>
                For me, this bakery is more than a business — it&apos;s my life&apos;s purpose.
                It&apos;s where I connect with my roots, build upon my family&apos;s legacy, and
                share the same warmth and joy my mother infused into every recipe.
              </p>
            </div>
            <Link href="/menu" className="btn-line mt-10 text-bakery-ink">
              Browse Our Menu
            </Link>
          </ScrollReveal>

        </div>
      </section>

      <section className="bg-bakery-pistachio/45 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <ScrollReveal className="mb-12 text-center">
            <p className="section-kicker mb-3 text-bakery-rose">
              What We Stand For
            </p>
            <h2 className="font-heading text-4xl font-black text-bakery-ink sm:text-5xl">
              Our Values
            </h2>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-lg border border-bakery-line bg-bakery-surface p-6 shadow-card">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-bakery-berry text-white">
                    <p.icon size={22} strokeWidth={2.2} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold text-bakery-ink">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-7 text-bakery-muted">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
