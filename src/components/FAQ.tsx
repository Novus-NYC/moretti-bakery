"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-bakery-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-sub text-sm font-extrabold uppercase tracking-widest text-bakery-rose">
            Got Questions?
          </p>
          <h2 className="font-heading text-4xl font-black text-bakery-ink sm:text-5xl md:text-6xl">
            Frequently Asked
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-bakery-line">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-sub text-sm font-700 text-bakery-ink sm:text-base">
                    {faq.q}
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-bakery-line bg-bakery-cream text-bakery-rose transition-colors">
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
