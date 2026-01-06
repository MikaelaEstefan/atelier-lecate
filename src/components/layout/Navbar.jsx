import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      <Link to="/" className="text-xl font-light tracking-wide">
        Atelier Lecate
      </Link>

      <nav className="flex items-center gap-6">
        <Link to="/products" className="text-sm hover:opacity-70">
          Tienda
        </Link>

        <Link to="/cart" className="text-sm">
          🛒
        </Link>
      </nav>
    </header>
  );
}
