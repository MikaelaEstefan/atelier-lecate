import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="flex flex-col gap-4">
      <Link to={`/products/${product.id}`} className="group">
        <div className="aspect-square bg-[#EAEAEA] mb-3" />

        <h2 className="text-sm font-medium group-hover:underline">
          {product.title}
        </h2>
      </Link>

      <p className="text-xs text-[#8A8A8A]">
        ${product.price}
      </p>
    </article>
  );
}

