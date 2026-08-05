import Image from "next/image";
import { Clock, MapPin, Phone, Share2 } from "lucide-react";
import { siteInfo } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import SocialIcon from "@/components/SocialIcon";

export default function ContactPage() {
  return (
    <section className="bg-bakery-bg pt-[118px] pb-16 md:pt-[132px] md:pb-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal className="mb-10 grid gap-5 border-b border-bakery-line pb-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="section-kicker mb-3 text-bakery-rose">
              Visit the bakery
            </p>
            <h1 className="font-heading text-4xl font-black leading-tight text-bakery-ink sm:text-5xl md:text-6xl">
              Bakery Details
            </h1>
          </div>
          <p className="max-w-2xl font-body text-base italic leading-8 text-bakery-inkSoft md:justify-self-end">
            Stop by for fresh cakes, pastries, cupcakes, and seasonal favorites.
            For custom orders, call the bakery directly.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-stretch lg:gap-12">
          <ScrollReveal>
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
                      className="inline-flex items-center gap-2 rounded-lg border border-bakery-line bg-bakery-surface px-3 py-2 font-sub text-xs font-extrabold uppercase tracking-wide text-bakery-inkSoft transition hover:border-bakery-rose hover:text-bakery-rose"
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
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-lg border border-bakery-line bg-bakery-cream shadow-card md:min-h-0">
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
      </div>
    </section>
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
    <div className="flex items-start gap-4 rounded-lg border border-bakery-line bg-white p-4 shadow-card">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-bakery-line bg-bakery-cream">
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
