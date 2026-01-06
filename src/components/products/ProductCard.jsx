import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="flex flex-col gap-4">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square bg-[#EAEAEA]" />
      </Link>

      <div>
        <h2 className="text-sm font-medium">
          {product.title}
        </h2>

        <p className="text-xs text-[#8A8A8A] mt-1">
          ${product.price}
        </p>
      </div>
    </article>
  );
}
