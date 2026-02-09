import { useCartStore } from "../store/useCartStore";
import { useT } from "../i18n/useT";
import { Link } from "react-router-dom";

export default function Checkout() {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total());
  const { t } = useT();

  const handleCheckout = async () => {
    const response = await fetch("http://localhost:4000/create-preference", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });

    const data = await response.json();
    window.location.href = data.init_point;
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

          <button onClick={handleCheckout} className="checkout-cta">
            {t("checkout_pay")}
          </button>

          <p className="checkout-note">
            {t("checkout_note") ?? "Serás redirigido a Mercado Pago para completar el pago."}
          </p>
        </div>
      </div>
    </section>
  );
}
