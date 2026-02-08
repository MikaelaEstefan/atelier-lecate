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
      <section className="section">
        <div className="container cart">
          <p className="cart-empty">{t("cart_empty")}</p>

          <Link to="/products" className="cart-link-inline">
            {t("cart_view_products")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container cart">
        <h1 className="page-title">{t("cart_title")}</h1>

        <div className="cart-list">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-media">
                <div className="cart-thumb">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="cart-item-info">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="cart-remove"
              >
                {t("cart_remove")}
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="cart-total">
            <span>{t("cart_total")}</span>
            <span>${total}</span>
          </div>

          <Link to="/checkout" className="cart-cta">
            {t("cart_checkout")}
          </Link>
        </div>
      </div>
    </section>
  );
}

