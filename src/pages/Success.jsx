import { Link } from "react-router-dom";
import { useT } from "../i18n/useT";
import { useCartStore } from "../store/useCartStore";
import { useEffect } from "react";

export default function Success() {
  const { t } = useT();
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className="px-12 py-20 max-w-xl">
      <h1 className="text-2xl font-light mb-6">
        {t("payment_success_title") ?? "Pago realizado"}
      </h1>

      <p className="text-sm text-[#8A8A8A] mb-10">
        {t("payment_success_text") ??
          "El pago se realizó correctamente. Gracias por tu compra."}
      </p>

      <Link
        to="/"
        className="text-sm underline"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
