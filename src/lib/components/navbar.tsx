"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteInfo } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bakery-line bg-[#FAF7F3]">
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-5 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/images/logo.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 flex-shrink-0"
            priority
          />
          <span className="font-heading text-base font-bold text-bakery-ink sm:text-lg">
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
            href="/menu"
            className="rounded-full bg-bakery-ink px-5 py-3 font-sub text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-bakery-rose"
          >
            View Menu
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bakery-line text-bakery-ink transition hover:border-bakery-rose hover:text-bakery-rose md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-bakery-line bg-[#FAF7F3] px-5 pb-5 md:hidden">
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
        </div>
      )}
    </header>
  );
}
