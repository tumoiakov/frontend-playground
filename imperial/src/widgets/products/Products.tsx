import { memo, useCallback, useMemo, useState } from "react";
import { SectionContainer } from "@entities/SectionContainer";
import { SectionHeader } from "@entities/SectionHeader";
import {
  collapseBtnText,
  description,
  products,
  showAllBtnText,
  title,
} from "./Products.const";
import { Button } from "@shared/ui";
import { Product } from "@entities/Product";
import "./Products.css";

const Products = memo(() => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  const productList = useMemo(() => {
    if (!showAll) {
      return products
        .slice(0, 8)
        .map((item) => <Product key={item.title} product={item} />);
    } else {
      return products.map((item) => (
        <Product key={item.title} product={item} />
      ));
    }
  }, [showAll]);

  return (
    <SectionContainer id="products" className="products">
      <header className="products__header">
        <SectionHeader title={title} description={description} />
        <div className="category-menu">
          <p className="category-menu__label">Выберите категорию:</p>
          <menu>
            {/* TODO make buttons work */}
            <Button>Матрасы</Button>
            <Button type="outline">Наматрасники</Button>
            <Button type="outline">Детские матрасы</Button>
          </menu>
        </div>
      </header>
      <div className="product-list">{productList}</div>
      <footer className="products__footer">
        <Button onClick={toggleShowAll}>
          {showAll ? collapseBtnText : showAllBtnText}
        </Button>
      </footer>
    </SectionContainer>
  );
});

export default Products;
