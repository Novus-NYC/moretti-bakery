import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { navLinks, siteInfo } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bakery-ink text-white/70">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <Link
              href="/"
              className="inline-flex items-center gap-4"
              aria-label="Moretti Bakery home"
            >
              <Image
                src="/images/logo.png"
                alt=""
                width={52}
                height={52}
                className="h-12 w-12 flex-shrink-0 opacity-80"
              />
              <span className="font-heading text-2xl font-black uppercase text-white">
                {siteInfo.name}
              </span>
            </Link>
            <p className="mt-5 font-body text-sm italic leading-7 text-white/65">
              Family recipes, Dream Cakes, cookies, cupcakes, and neighborhood
              sweetness from Forest Ave.
            </p>
            <div className="mt-6 grid gap-3 font-sub text-base font-semibold uppercase text-white/80 sm:grid-cols-2">
              <a
                href={`tel:${siteInfo.phone}`}
                className="inline-flex items-center gap-2 transition hover:text-bakery-goldLight"
              >
                <Phone size={16} />
                {siteInfo.phone}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={16} />
                {siteInfo.location}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <div className="flex flex-wrap gap-3">
              {siteInfo.social.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${siteInfo.name} on ${social.platform}`}
                  className="inline-flex items-center gap-3 rounded-lg border border-bakery-gold/40 bg-white/5 px-4 py-3 font-sub text-lg font-extrabold uppercase text-white transition hover:border-bakery-goldLight hover:bg-bakery-gold/15"
                >
                  <SocialIcon platform={social.platform} className="h-5 w-5" />
                  {social.platform}
                </a>
              ))}
            </div>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sub text-base font-bold uppercase text-white/55 transition hover:text-bakery-goldLight"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 font-sub text-sm font-semibold uppercase text-white/35">
          © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
