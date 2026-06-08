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
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id as ProductCategory | "all")}
            className={`rounded-full px-4 py-2 font-sub text-xs font-bold uppercase tracking-wide transition-all ${
              isActive
                ? "bg-bakery-ink text-white"
                : "bg-bakery-cream text-bakery-muted hover:bg-bakery-ink hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
