"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, siteInfo } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bakery-line/80 bg-bakery-bg/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[74px] w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Moretti Bakery home">
          <Image
            src="/images/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 flex-shrink-0"
            priority
          />
          <span className="font-heading text-lg font-black text-bakery-ink sm:text-xl">
            {siteInfo.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sub text-xs font-extrabold uppercase tracking-widest transition-colors hover:text-bakery-rose ${
                  active ? "text-bakery-rose" : "text-bakery-inkSoft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={`tel:${siteInfo.phone}`}
            className="inline-flex items-center gap-2 rounded-lg bg-bakery-berry px-4 py-3 font-sub text-xs font-extrabold uppercase tracking-wider text-white shadow-soft transition hover:bg-bakery-roseDeep"
          >
            <Phone size={14} />
            Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-bakery-line bg-white/60 text-bakery-ink transition hover:border-bakery-rose hover:text-bakery-rose md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-bakery-line bg-bakery-bg px-5 pb-5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-bakery-line py-4 font-sub text-sm font-extrabold uppercase tracking-widest text-bakery-inkSoft transition hover:text-bakery-rose"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${siteInfo.phone}`}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-bakery-berry px-4 py-3 font-sub text-xs font-extrabold uppercase tracking-wider text-white"
          >
            <Phone size={14} />
            Call the Bakery
          </a>
        </div>
      )}
    </header>
  );
}
