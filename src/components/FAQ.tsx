"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-bakery-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker mb-3 text-bakery-rose">
            Before you visit
          </p>
          <h2 className="font-heading text-4xl font-black text-bakery-ink sm:text-5xl">
            Good to know
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-bakery-line rounded-lg border border-bakery-line bg-white shadow-card">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="px-5 py-5 sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-sub text-sm font-semibold text-bakery-ink sm:text-base">
                    {faq.q}
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-bakery-line bg-bakery-cream text-bakery-rose transition-colors">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-64 pt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm leading-7 text-bakery-muted">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
