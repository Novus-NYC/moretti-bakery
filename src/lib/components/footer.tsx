import Link from "next/link";
import Image from "next/image";
import { navLinks, siteInfo, categoryMeta } from "@/lib/data";
import SocialIcon from "@/components/SocialIcon";

export default function Footer() {
  return (
    <footer className="border-t border-bakery-line/20 bg-bakery-ink text-white/60">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 flex-shrink-0"
              />
              <span className="font-heading text-lg font-black text-white">
                {siteInfo.name}
              </span>
            </div>
            <p className="text-sm leading-7">
              A legacy of sweetness, love, and community — carrying on my
              mother&apos;s dream, one delicious treat at a time.
            </p>
            <div className="mt-5 flex gap-3">
              {siteInfo.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.platform}
                  title={s.platform}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-transparent hover:bg-bakery-rose hover:text-white"
                >
                  <SocialIcon platform={s.platform} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-white/30">
              © {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-4 font-sub text-xs font-extrabold uppercase tracking-widest text-bakery-gold">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div>
            <h4 className="mb-4 font-sub text-xs font-extrabold uppercase tracking-widest text-bakery-gold">
              Menu
            </h4>
            <ul className="flex flex-col gap-3">
              {categoryMeta.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/menu?category=${cat.id}`}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <hr className="my-8 border-white/10" />
        <p className="text-center text-xs text-white/30">
          {siteInfo.location} &nbsp;·&nbsp; Baked fresh for the community
        </p>
      </div>
    </footer>
  );
}
