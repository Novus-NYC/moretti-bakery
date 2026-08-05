import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteInfo } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";

const socialImages = [
  "/images/assorted-sesame-street-cupcakes.jpg",
  "/images/chocolatey-chocolate-chip-dream-cake.png",
  "/images/jumbo-sugar-cookies.jpg",
];

export default function SocialSection() {
  return (
    <section className="bg-bakery-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <div className="flex flex-col justify-center">
          <p className="section-kicker text-bakery-rose">Follow along</p>
          <h2 className="mt-3 font-heading text-4xl font-black uppercase leading-tight text-bakery-ink sm:text-5xl">
            See what just came out of the oven
          </h2>
          <p className="mt-5 max-w-xl font-body text-base italic leading-8 text-bakery-inkSoft">
            Custom cakes, colorful cupcakes, trays of cookies, and the newest
            Dream Cake flavors usually hit social first.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {siteInfo.social.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between gap-4 rounded-lg border border-bakery-ink bg-bakery-ink px-5 py-4 font-sub text-lg font-extrabold uppercase text-white shadow-card transition hover:bg-bakery-berry"
                aria-label={`${siteInfo.name} on ${social.platform}`}
              >
                <span className="inline-flex items-center gap-3">
                  <SocialIcon platform={social.platform} className="h-5 w-5" />
                  {social.handle}
                </span>
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="grid min-h-[420px] grid-cols-3 gap-3">
          {socialImages.map((src, index) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-lg border border-bakery-line bg-white shadow-card ${
                index === 1 ? "mt-10" : index === 2 ? "mt-20" : ""
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 768px) 18vw, 31vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
