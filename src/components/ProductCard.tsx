import Image from "next/image";
import { categoryMeta, type Product } from "@/lib/data";

const badgeStyles = {
  new:        "bg-bakery-sage text-white",
  bestseller: "bg-bakery-rose text-white",
  limited:    "bg-bakery-gold text-bakery-ink",
};

const badgeLabels = {
  new:        "New",
  bestseller: "Best Seller",
  limited:    "Limited",
};

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const primaryCategory = product.category[0];
  const categoryLabel =
    categoryMeta.find((category) => category.id === primaryCategory)?.label ??
    primaryCategory;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-bakery-line bg-bakery-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">

      <div className="bakery-tile-frame relative aspect-[4/3] w-full overflow-hidden bg-bakery-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-md px-3 py-1 font-sub text-[0.62rem] font-extrabold uppercase tracking-wide ${badgeStyles[product.badge]}`}
          >
            {badgeLabels[product.badge]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 pb-5">
        <p className="mb-1 font-sub text-[0.65rem] font-bold uppercase tracking-widest text-bakery-subtle">
          {categoryLabel}
        </p>
        <h3 className="font-heading text-base font-black leading-snug text-bakery-ink sm:text-lg">
          {product.name}
        </h3>
        {product.description && (
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-bakery-muted">
            {product.description}
          </p>
        )}
        <p className="mt-auto pt-4 font-sub text-base font-extrabold text-bakery-berry">
          ${product.price.toFixed(2)}
        </p>
      </div>

    </article>
  );
}
