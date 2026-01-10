import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { useT } from "../i18n/useT";

export default function Cart() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const total = useCartStore((s) => s.total());
  const { t } = useT();

  if (!items.length) {
    return (
      <div className="px-12 py-16">
        <p className="text-sm text-[#8A8A8A]">
          {t("cart_empty")}
        </p>

        <Link
          to="/products"
          className="text-sm underline mt-4 inline-block"
        >
          {t("cart_view_products")}
        </Link>
      </div>
    );
  }

  return (
    <section className="px-12 py-16 max-w-xl">
      <h1 className="text-2xl font-light mb-10">
        {t("cart_title")}
      </h1>

      <ul className="space-y-6 mb-10">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center"
          >
            <div>
              <p className="text-sm">{item.title}</p>
              <p className="text-xs text-[#8A8A8A]">
                ${item.price}
              </p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-xs underline"
            >
              {t("cart_remove")}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mb-8">
        <p className="text-sm">{t("cart_total")}</p>
        <p className="text-lg">${total}</p>
      </div>

      <Link
        to="/checkout"
        className="inline-block border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition"
      >
        {t("cart_checkout")}
      </Link>
    </section>
  );
}

