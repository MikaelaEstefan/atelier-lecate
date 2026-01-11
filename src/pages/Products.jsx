import { useProductStore } from "../store/useProductStore";
import ProductGrid from "../components/products/ProductGrid";
import { useSalesStore } from "../store/useSalesStore";
import { useT } from "../i18n/useT";

export default function Products() {
  const products = useProductStore((s) => s.products);

  const { t } = useT();

  const soldIds = useSalesStore((s) => s.soldIds);

  const availableProducts = products.filter(
  (p) => !soldIds.includes(p.id)
  );

  return (
    <section className="px-12 py-16">
      <h1 className="text-2xl font-light mb-10">{t("products_title")}</h1>

      <ProductGrid products={availableProducts} />
    </section>
  );
}

