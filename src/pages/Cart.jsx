import { useCartStore } from "../store/useCartStore";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const total = useCartStore((s) => s.total());

  if (!items.length) {
    return (
      <div className="px-12 py-16">
        <p className="text-sm text-[#8A8A8A]">
          Tu carrito está vacío.
        </p>
        <Link to="/products" className="text-sm underline mt-4 inline-block">
          Ver obras disponibles
        </Link>
      </div>
    );
  }

  return (
    <section className="px-12 py-16">
      <h1 className="text-2xl font-light mb-10">
        Carrito
      </h1>

      <ul className="space-y-6 mb-10">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <div>
              <p className="text-sm">{item.title}</p>
              <p className="text-xs text-[#8A8A8A]">${item.price}</p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-xs underline"
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mb-8">
        <p className="text-sm">Total</p>
        <p className="text-lg">${total}</p>
      </div>

      <Link
        to="/checkout"
        className="inline-block border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition"
      >
        Continuar al pago
      </Link>
    </section>
  );
}
