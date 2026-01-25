import { Link } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import { useLangStore } from "../../store/useLangStore";
import { useT } from "../../i18n/useT";

export default function Navbar() {
  const itemsCount = useCartStore((s) => s.items.length);
  const toggleLang = useLangStore((s) => s.toggleLang);
  const { t, lang } = useT();

  return (
   <header className="bg-[#BFD7E5] text-[#FAF8F4]">
    <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-3 items-center">
    
    {/* Izquierda */}
    <nav className="flex items-center gap-4 text-sm">
      <Link to="/products" className="hover:opacity-80">
        {t("nav_shop")}
      </Link>
    </nav>

    {/* Centro */}
    <Link
      to="/"
      className="text-lg font-light tracking-wide text-center"
    >
      Atelier Lecate
    </Link>

    {/* Derecha */}
    <div className="flex items-center justify-end gap-4 text-sm">
      <button
        onClick={toggleLang}
        className="border border-white/40 px-2 py-1 text-xs hover:bg-white/10 transition"
      >
        {lang.toUpperCase()}
      </button>

      <Link to="/cart" className="relative">
        🛒
        {itemsCount > 0 && (
          <span className="absolute -top-2 -right-2 text-[10px] bg-[#FAF8F4] text-[#4F6D7A] rounded-full px-1">
            {itemsCount}
          </span>
        )}
      </Link>
    </div>

  </div>
</header>

  );
}

