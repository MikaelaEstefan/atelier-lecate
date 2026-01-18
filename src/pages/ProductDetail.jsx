import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";
import { useSalesStore } from "../store/useSalesStore";
import { useT } from "../i18n/useT";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const addItem = useCartStore((s) => s.addItem);
  const { t, lang } = useT();

  if (!product) return null;

  const isSold = useSalesStore((s) => s.isSold(product.id));

  return (
    <section className="px-16 py-24 max-w-2xl">
      <h1 className="text-4xl font-light mb-6">
      {product.title}
      </h1>

      <p className="text-sm text-[#8FA3AD] leading-relaxed mb-8">
      {product.description[lang]}
      </p>

       <p className="text-lg mb-12">
      ${product.price}
      </p>

      {!isSold ? (
        <button
          onClick={() => addItem(product)}
          className="text-sm tracking-wide border-b border-[#4F6D7A] pb-1 hover:opacity-60 transition">
          {t("product_add_to_cart")}
        </button>
      ) : (
        <p className="text-sm text-[#8A8A8A]">
          {t("product_sold")}
        </p>
      )}
    </section>
  );
}


