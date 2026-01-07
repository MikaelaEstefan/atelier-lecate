import { Link } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";


export default function Navbar() {

  const itemsCount = useCartStore((s) => s.items.length);

  return (
    <header className="flex items-center justify-between px-8 py-6">
      <Link to="/" className="text-xl font-light tracking-wide">
        Atelier Lecate
      </Link>

      <nav className="flex items-center gap-6">
        <Link to="/products" className="text-sm hover:opacity-70">
          Tienda
        </Link>

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
