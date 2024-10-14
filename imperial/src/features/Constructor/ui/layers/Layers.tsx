import { useMemo } from "react";
import "./Layers.css";
import { LayersProps } from "./Layers.types";
import { Layer } from "./ui/Layer";

const Layers = ({ layers, onRemove }: LayersProps) => {
  const layersList = useMemo(
    () => (
      <div className="layers__list">
        {layers.map((layer, index) => (
          <Layer key={layer.name} layer={layer} onRemove={() => onRemove(index)} />
        ))}
      </div>
    ),
    [layers, onRemove]
  );

  const layersEmpty = (
    <div className="layers__empty">
      <p>Добавьте слой...</p>
    </div>
  );
	
  return (
    <div className="layers">{layers.length > 0 ? layersList : layersEmpty}</div>
  );
};

export default Layers;
