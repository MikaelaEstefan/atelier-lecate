import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCartStore } from "../store/useCartStore";
import { useSalesStore } from "../store/useSalesStore";
import { useT } from "../i18n/useT";

export default function ProductDetail() {
  const { id } = useParams();
  const { t, lang } = useT();

  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((s) => s.addItem);
  const isSold = useSalesStore((s) => s.isSold(product?.id));

  if (!product) return null;

  return (
    <section className="section">
      <div className="container product-detail">

        {/* Imagen */}
          <div className="product-detail-image">
            <img
              src={product.image}
              alt={product.title}
              className="product-detail-img"
            />
          </div>


        {/* Texto */}
        <div className="product-detail-info">
          <h1 className="product-detail-title">
            {product.title}
          </h1>

          <p className="product-detail-description">
            {product.description[lang]}
          </p>

          <p className="product-detail-price">
            ${product.price}
          </p>

          {!isSold ? (
            <button
              onClick={() => addItem(product)}
              className="product-detail-cta"
            >
              {t("product_add_to_cart")}
            </button>
          ) : (
            <p className="product-detail-sold">
              {t("product_sold")}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}



