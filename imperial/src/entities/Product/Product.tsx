import { memo } from "react";
import "./Product.css";
import { ProductProps } from "./Product.types";

const Product = memo(({ product }: ProductProps) => {
  const { title, content, imageDescription, imagePath, sizes } = product;
  return (
    <article className="product">
      <div className="product__image">
        <img src={imagePath} alt={imageDescription} />
      </div>
      <div className="product__container">
        <header>
          <h2 className="product__title">{title}</h2>
        </header>
        <section className="product__composition">
          <h3>Состав:</h3>
          <ul>
            {content.map((item) => (
              <li key={item.id}>
                {item.element} - {item.value}.
              </li>
            ))}
          </ul>
        </section>
        <section className="product__cost">
          <p>
            <span className="product__price">
              {new Intl.NumberFormat("ru-Ru", { useGrouping: true }).format(
                sizes[0].price
              )}р.
            </span>
            <button className="product__size">{sizes[0].size}</button>
            {/* TODO change to select */}
          </p>
          <a className="product__order">Заказать товар</a>
        </section>
      </div>
    </article>
  );
});

export default Product;
