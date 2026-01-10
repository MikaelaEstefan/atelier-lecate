import ProductCard from "./ProductCard";
import { useT } from "../../i18n/useT";

export default function ProductGrid({ products }) {
  const { t } = useT();

  if (!products.length) {
    return <p className="text-sm text-[#8A8A8A]">{t("empty_products")}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
