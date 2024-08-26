import { memo, useCallback, useMemo, useState } from "react";
import { SectionContainer } from "@entities/SectionContainer";
import { SectionHeader } from "@entities/SectionHeader";
import {
  collapseBtnText,
  description,
  emptyPlaceHolderText,
  products,
  showAllBtnText,
  title,
} from "./Products.const";
import { Button } from "@shared/ui";
import { Product } from "@entities/Product";
import "./Products.css";
import { ProductTypes } from "./Products.types";

const Products = memo(() => {
  const [showAll, setShowAll] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<ProductTypes>(
    ProductTypes.Matrases
  );

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  const productList = useMemo(() => {
    if (!showAll) {
      return products[selectedMenu]
        .slice(0, 8)
        .map((item) => <Product key={item.title} product={item} />);
    } else {
      return products[selectedMenu].map((item) => (
        <Product key={item.title} product={item} />
      ));
    }
  }, [selectedMenu, showAll]);

  const setType = useCallback(
    (type: ProductTypes) => () => setSelectedMenu(type),
    []
  );

  const EmptyPlaceholder = (
    <span className="products__empty">{emptyPlaceHolderText}</span>
  );

  return (
    <SectionContainer id="products" className="products">
      <header className="products__header">
        <SectionHeader title={title} description={description} />
        <div className="category-menu">
          <p className="category-menu__label">Выберите категорию:</p>
          <menu>
            <Button
              elem="button"
              type="button"
              ui={
                selectedMenu === ProductTypes.Matrases ? "primary" : "outline"
              }
              onClick={setType(ProductTypes.Matrases)}
            >
              Матрасы
            </Button>
            <Button
              elem="button"
              type="button"
              ui={selectedMenu === ProductTypes.Covers ? "primary" : "outline"}
              onClick={setType(ProductTypes.Covers)}
            >
              Наматрасники
            </Button>
            <Button
              elem="button"
              type="button"
              ui={
                selectedMenu === ProductTypes.ChildrenMatrases
                  ? "primary"
                  : "outline"
              }
              onClick={setType(ProductTypes.ChildrenMatrases)}
            >
              Детские матрасы
            </Button>
          </menu>
        </div>
      </header>
      {productList.length ? (
        <>
          <div className="product-list">{productList}</div>
          <footer className="products__footer">
            <Button
              elem="button"
              type="button"
              onClick={toggleShowAll}
              className="button--shadow-large"
            >
              {showAll ? collapseBtnText : showAllBtnText}
            </Button>
          </footer>
        </>
      ) : (
        EmptyPlaceholder
      )}
    </SectionContainer>
  );
});

export default Products;
