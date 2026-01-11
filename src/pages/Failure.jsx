import { Link } from "react-router-dom";
import { useT } from "../i18n/useT";

export default function Failure() {
  const { t } = useT();

  return (
    <section className="px-12 py-20 max-w-xl">
      <h1 className="text-2xl font-light mb-6">
        {t("payment_failure_title") ?? "Pago rechazado"}
      </h1>

      <p className="text-sm text-[#8A8A8A] mb-10">
        {t("payment_failure_text") ??
          "No se pudo completar el pago. Podés intentar nuevamente."}
      </p>

      <Link
        to="/cart"
        className="text-sm underline"
      >
        Volver al carrito
      </Link>
    </section>
  );
}
