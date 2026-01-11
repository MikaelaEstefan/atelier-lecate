import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useT } from "../i18n/useT";
import { useCartStore } from "../store/useCartStore";
import { useSalesStore } from "../store/useSalesStore";

export default function Success() {
  const { t } = useT();
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const markAsSold = useSalesStore((s) => s.markAsSold);

  useEffect(() => {
    const ids = items.map((item) => item.id);
    if (ids.length) {
      markAsSold(ids);
      clearCart();
    }
  }, [items, markAsSold, clearCart]);

  return (
    <section className="px-12 py-20 max-w-xl">
      <h1 className="text-2xl font-light mb-6">
        {t("payment_success_title")}
      </h1>

      <p className="text-sm text-[#8A8A8A] mb-10">
        {t("payment_success_text")}
      </p>

      <Link to="/" className="text-sm underline">
        Volver al inicio
      </Link>
    </section>
  );
}

