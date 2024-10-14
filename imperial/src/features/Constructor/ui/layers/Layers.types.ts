export type Layer = {
  name: string;
  description: string;
  data: LayerData | Array<LayerData>;
};

/** Parameters and price per 1 cm^2 of material*/
type LayerData = {
  param: string;
  price: number; 
}

export type LayerProps = {
  layer: Layer;
  onRemove: () => void;
};

export type LayersProps = {
  layers: Array<Layer>;
  onAdd: (layer: Layer) => void;
  onRemove: (index: number) => void;
  onMove: (from: number, to: number) => void;
};

