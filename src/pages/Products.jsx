import { useProductStore } from "../store/useProductStore";
import ProductGrid from "../components/products/ProductGrid";
import { useSalesStore } from "../store/useSalesStore";
import { useT } from "../i18n/useT";

export default function Products() {
  const products = useProductStore((s) => s.products);
  const soldIds = useSalesStore((s) => s.soldIds);
  const { t } = useT();

  const availableProducts = products.filter(
    (p) => !soldIds.includes(p.id)
  );

  return (
    <section className="section">
      <div className="container">

        <h1 className="page-title">
          {t("products_title")}
        </h1>

        <ProductGrid products={availableProducts} />

      </div>
    </section>
  );
}

