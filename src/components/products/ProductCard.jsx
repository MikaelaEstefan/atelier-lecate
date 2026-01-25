import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-link">
        
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

        <h2 className="product-title">
          {product.title}
        </h2>
      </Link>

      <p className="product-price">
        ${product.price}
      </p>
    </article>
  );
}


