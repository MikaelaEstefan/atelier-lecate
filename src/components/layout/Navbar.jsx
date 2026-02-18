import { Link } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import { useLangStore } from "../../store/useLangStore";
import { useT } from "../../i18n/useT";

export default function Navbar() {
  const itemsCount = useCartStore((s) => s.items.length);
  const toggleLang = useLangStore((s) => s.toggleLang);
  const { t, lang } = useT();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        
        {/* Izquierda */}
        <nav className="nav-left">
          <Link to="/products">{t("nav_shop")}</Link>
        </nav>

        {/* Centro */}
        <Link to="/" className="logo">
          Atelier Lecatte
        </Link>

        {/* Derecha */}
        <div className="nav-right">
          <button onClick={toggleLang} className="lang-btn">
            {lang.toUpperCase()}
          </button>

          <Link to="/cart" className="cart-link">
            🛒
            {itemsCount > 0 && (
              <span className="cart-badge">{itemsCount}</span>
            )}
          </Link>
        </div>

      </div>
    </header>
  );
}

