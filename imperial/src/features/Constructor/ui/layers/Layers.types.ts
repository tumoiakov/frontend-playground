export type Layer = {
  name: string;
  description: string;
  param: string | Array<string>;
  price: string;
};

export type LayerProps = {
  layer: Layer;
  onRemove: () => void;
};

export type LayersProps = {
  layers: Array<Layer>;
  onAdd: () => void;
  onRemove: (index: number) => void;
  onMove: (from: number, to: number) => void;
};
