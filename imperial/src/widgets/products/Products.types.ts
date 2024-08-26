import { ProductData } from "@entities/Product/Product.types";

export enum ProductTypes {
  Matrases = "mattresses",
  Covers = "covers",
  ChildrenMatrases = "children_mattrasses",
}

export type ProductList = {
  [ProductTypes.Matrases]: Array<ProductData>;
  [ProductTypes.Covers]: Array<ProductData>;
  [ProductTypes.ChildrenMatrases]: Array<ProductData>;
};
