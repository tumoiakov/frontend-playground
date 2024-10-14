import { memo, useCallback, useState } from "react";
import "./Product.css";
import { ProductProps, ProductSize } from "./Product.types";
import { Select } from "@shared/ui/Select";

const Product = memo(({ product }: ProductProps) => {
  const { title, content, imageDescription, imagePath, sizes } = product;
  const [productSize, setProductSize] = useState<ProductSize>(sizes[0]);

  const handleSizeChange = useCallback(
    (value: string) => {
      const newSize = sizes.find((item) => item.size === value);
      if (newSize) {
        setProductSize(newSize);
      }
    },
    [sizes]
  );

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
          <div>
            <span className="product__price">
              {new Intl.NumberFormat("ru-Ru", { useGrouping: true }).format(
                productSize.price
              )}
              р.
            </span>
            <Select
              className="product__size"
              defaultValue={productSize.size}
              onChange={handleSizeChange}
            >
              {sizes.map((size) => (
                <Select.Option key={size.size} value={size.size}>{size.size}</Select.Option>
              ))}
            </Select>
          </div>
          <a href="" className="product__order">
            Заказать товар
          </a>
        </section>
      </div>
    </article>
  );
});

export default Product;
