"use client";

import { categoryMeta, type ProductCategory } from "@/lib/data";

type Props = {
  active: ProductCategory | "all";
  onChange: (cat: ProductCategory | "all") => void;
};

const allTab = { id: "all" as const, label: "All Items" };

export default function MenuFilterTabs({ active, onChange }: Props) {
  const tabs = [allTab, ...categoryMeta.map((c) => ({ id: c.id, label: c.label }))];

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Menu categories">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id as ProductCategory | "all")}
            role="tab"
            aria-selected={isActive}
            className={`rounded-lg border px-4 py-2 font-sub text-xs font-bold uppercase tracking-wide transition-all ${
              isActive
                ? "border-bakery-ink bg-bakery-ink text-white"
                : "border-bakery-line bg-white text-bakery-muted hover:border-bakery-rose hover:text-bakery-rose"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
