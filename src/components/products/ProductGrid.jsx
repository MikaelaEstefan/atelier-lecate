import ProductCard from "./ProductCard";
import { useT } from "../../i18n/useT";

export default function ProductGrid({ products }) {
  const { t } = useT();

  if (!products.length) {
    return <p className="product-empty">{t("empty_products")}</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
