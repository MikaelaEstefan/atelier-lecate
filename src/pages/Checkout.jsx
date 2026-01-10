import { useCartStore } from "../store/useCartStore";
import { useT } from "../i18n/useT";

export default function Checkout() {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total());
  const { t } = useT();

  const handleCheckout = async () => {
    const response = await fetch(
      "http://localhost:4000/create-preference",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      }
    );

    const data = await response.json();
    window.location.href = data.init_point;
  };

  if (!items.length) {
    return (
      <div className="px-12 py-16">
        <p className="text-sm">
          {t("checkout_empty")}
        </p>
      </div>
    );
  }

  return (
    <section className="px-12 py-16 max-w-xl">
      <h1 className="text-2xl font-light mb-10">
        {t("checkout_title")}
      </h1>

      <ul className="space-y-4 mb-8">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between text-sm"
          >
            <span>{item.title}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mb-10">
        <span>{t("cart_total")}</span>
        <span className="text-lg">${total}</span>
      </div>

      <button
        onClick={handleCheckout}
        className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition"
      >
        {t("checkout_pay")}
      </button>
    </section>
  );
}
