import { memo } from "react";
import { SectionContainer } from "@entities/SectionContainer";
import { SectionHeader } from "@entities/SectionHeader";
import { description, products, title } from "./Products.const";
import { Button } from "@shared/ui";
import { Product } from "@entities/Product";
import "./Products.css";

const Products = memo(() => {
  return (
    <SectionContainer id="products" className="products">
      <header className="products__header">
        <SectionHeader title={title} description={description} />
        <div className="category-menu">
          <p className="category-menu__label">Выберите категорию:</p>
          <menu>
            {" "}
            {/* TODO make buttons work */}
            <Button>Матрасы</Button>
            <Button type="outline">Наматрасники</Button>
            <Button type="outline">Детские матрасы</Button>
          </menu>
        </div>
      </header>
      <div className="product-list">
        {products.slice(0, 8).map((item) => (
          <Product key={item.title} product={item} />
        ))}
      </div>
      <footer className="products__footer">
        <Button>Показать все варианты</Button>
      </footer>
    </SectionContainer>
  );
});

export default Products;
