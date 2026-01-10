import { Link } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import { useLangStore } from "../../store/useLangStore";
import { useT } from "../../i18n/useT";



export default function Navbar() {

  const itemsCount = useCartStore((s) => s.items.length);
  const toggleLang = useLangStore((s) => s.toggleLang);
  const { t, lang } = useT();


  return (
    <header className="flex items-center justify-between px-8 py-6">
      <Link to="/" className="text-xl font-light tracking-wide">
        Atelier Lecate
      </Link>

      <nav className="flex items-center gap-6">
        <Link to="/products" className="text-sm hover:opacity-70">
          {t("nav_shop")}
        </Link>
        <button
          onClick={toggleLang}
          className="text-xs border border-white/20 px-2 py-1 hover:border-white/50 transition"
          aria-label="Toggle language"
        >
          {lang.toUpperCase()}
        </button>


        <Link to="/cart" className="relative text-sm">
        🛒
        {itemsCount > 0 && (
          <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white rounded-full px-1">
            {itemsCount}
          </span>
        )}
       </Link>

      </nav>
    </header>
  );
}
