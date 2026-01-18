import { Link } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import { useLangStore } from "../../store/useLangStore";
import { useT } from "../../i18n/useT";

export default function Navbar() {
  const itemsCount = useCartStore((s) => s.items.length);
  const toggleLang = useLangStore((s) => s.toggleLang);
  const { t, lang } = useT();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-12 py-6 bg-transparent">
        <Link to="/" className="text-lg font-light tracking-wide">
          Atelier Lecate
        </Link>

        <nav className="flex items-center gap-6 text-[var(--text-muted)]">
          <Link to="/products" className="text-sm hover:opacity-70">
            {t("nav_shop")}
          </Link>

          <button
            onClick={toggleLang}
            className="text-xs border border-[var(--text-muted)] px-2 py-1"
            aria-label="Toggle language"
          >
            {lang.toUpperCase()}
          </button>

          <Link to="/cart" className="relative text-sm">
            🛒
            {itemsCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-[#4F6D7A] text-[#FAF8F4] rounded-full px-1">
                {itemsCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
