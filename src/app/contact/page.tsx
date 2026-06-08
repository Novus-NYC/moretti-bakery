import Image from "next/image";
import { Clock, MapPin, Phone, Share2 } from "lucide-react";
import { siteInfo } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SocialIcon from "@/components/SocialIcon";

export default function ContactPage() {
  return (
    <>
      <div className="bg-bakery-ink pb-20 pt-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-4 font-sub text-sm font-extrabold uppercase tracking-widest text-bakery-gold">
            Visit the Bakery
          </p>
          <h1 className="font-heading text-5xl font-black text-white sm:text-6xl md:text-7xl">
            Find Us
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
            Stop by for fresh cakes, pastries, cupcakes, and seasonal favorites.
            For custom orders, call or email the bakery directly.
          </p>
        </div>
      </div>

      <section className="bg-bakery-bg py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1.25fr] md:px-8">
          <ScrollReveal>
            <p className="mb-3 font-sub text-sm font-extrabold uppercase tracking-widest text-bakery-rose">
              Contact Info
            </p>
            <h2 className="mb-8 font-heading text-3xl font-black text-bakery-ink md:text-4xl">
              Bakery Details
            </h2>

            <div className="space-y-5">
              <InfoRow icon={<MapPin size={18} className="text-bakery-rose" />} label="Location">
                {siteInfo.location}
              </InfoRow>
              <InfoRow icon={<Phone size={18} className="text-bakery-rose" />} label="Phone">
                <a href={`tel:${siteInfo.phone}`} className="transition hover:text-bakery-rose">
                  {siteInfo.phone}
                </a>
              </InfoRow>
              <InfoRow icon={<Clock size={18} className="text-bakery-rose" />} label="Hours">
                <div className="space-y-1">
                  {siteInfo.hours.map((h) => (
                    <p key={h.days} className="text-sm text-bakery-inkSoft">
                      <span className="font-semibold">{h.days}:</span> {h.time}
                    </p>
                  ))}
                </div>
              </InfoRow>
              <InfoRow icon={<Share2 size={18} className="text-bakery-rose" />} label="Social">
                <div className="flex flex-wrap gap-3">
                  {siteInfo.social.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${siteInfo.name} on ${social.platform}`}
                      className="inline-flex items-center gap-2 rounded-full border border-bakery-line bg-bakery-surface px-3 py-2 font-sub text-xs font-extrabold uppercase tracking-wide text-bakery-inkSoft transition hover:border-bakery-rose hover:text-bakery-rose"
                    >
                      <SocialIcon platform={social.platform} className="h-4 w-4" />
                      {social.handle}
                    </a>
                  ))}
                </div>
              </InfoRow>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-bakery-line bg-bakery-cream shadow-card">
              <Image
                src="/images/assorted-jumbo-cupcakes.jpg"
                alt="Assorted cupcakes at Moretti Bakery"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bakery-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="max-w-md font-heading text-2xl font-black leading-tight text-white sm:text-3xl">
                  Freshly baked sweets for everyday visits and special occasions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-bakery-line bg-bakery-cream">
        {icon}
      </div>
      <div>
        <p className="mb-0.5 font-sub text-[0.65rem] font-bold uppercase tracking-widest text-bakery-subtle">
          {label}
        </p>
        <div className="text-sm text-bakery-inkSoft">{children}</div>
      </div>
    </div>
  );
}
