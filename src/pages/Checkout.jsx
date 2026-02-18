import { useState } from "react";
import { useCartStore } from "../store/useCartStore";
import { useT } from "../i18n/useT";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Checkout() {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total());
  const { t } = useT();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCheckout = async () => {
    if (!items.length || loading) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(`${API}/create-preference`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const text = await response.text();

      if (!response.ok) {
        throw new Error(`Backend error ${response.status}: ${text}`);
      }

      const data = JSON.parse(text);

      const url = data.sandbox_init_point || data.init_point;
      if (!url) throw new Error("No vino init_point desde el backend.");

      window.location.href = url;
    } catch (err) {
      console.error(err);
      setErrorMsg(
        t("checkout_error") ||
          "No se pudo iniciar el pago. Asegurate de que el backend esté corriendo en el puerto 4000."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!items.length) {
    return (
      <section className="section">
        <div className="container checkout">
          <p className="checkout-empty">{t("checkout_empty")}</p>

          <Link to="/products" className="cart-link-inline">
            {t("cart_view_products")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container checkout">
        <h1 className="page-title">{t("checkout_title")}</h1>

        <div className="checkout-list">
          {items.map((item) => (
            <div key={item.id} className="checkout-item">
              <div className="checkout-item-left">
                <span className="checkout-item-title">{item.title}</span>
              </div>
              <span className="checkout-item-price">${item.price}</span>
            </div>
          ))}
        </div>

        <div className="checkout-summary">
          <div className="checkout-total">
            <span>{t("cart_total")}</span>
            <span>${total}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="checkout-cta"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (t("checkout_loading") || "Redirigiendo...") : t("checkout_pay")}
          </button>

          {errorMsg && (
            <p className="checkout-note" style={{ marginTop: 12 }}>
              {errorMsg}
            </p>
          )}

          <p className="checkout-note">
            {t("checkout_note") ??
              "Serás redirigido a Mercado Pago para completar el pago."}
          </p>
        </div>
      </div>
    </section>
  );
}
