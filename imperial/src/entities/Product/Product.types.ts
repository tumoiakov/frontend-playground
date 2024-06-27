type ProductContent = {
  id: string;
  element: string;
  value: string;
};

export type ProductSize = {
  size: string;
  price: number;
};

export type ProductData = {
  title: string;
  imagePath: string;
  imageDescription: string;
  content: Array<ProductContent>;
  sizes: Array<ProductSize>;
  link: string;
};

export type ProductProps = {
  product: ProductData;
};
