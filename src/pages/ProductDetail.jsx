import { useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";

export default function ProductDetail() {
  const { id } = useParams();
  const products = useProductStore((s) => s.products);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="p-12">Obra no encontrada.</p>;
  }

  return (
    <section className="px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="aspect-square bg-[#EAEAEA]" />

      <div>
        <h1 className="text-2xl font-light mb-4">
          {product.title}
        </h1>

        <p className="text-sm text-[#8A8A8A] mb-6">
          {product.description}
        </p>

        <p className="text-lg mb-8">
          ${product.price}
        </p>

        <button className="border border-black px-6 py-3 text-sm">
          Agregar al carrito
        </button>
      </div>
    </section>
  );
}
