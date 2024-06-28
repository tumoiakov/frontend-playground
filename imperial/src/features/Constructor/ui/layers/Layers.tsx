import { useMemo } from "react";
import "./Layers.css";
import { LayersProps } from "./Layers.types";
import { Layer } from "./ui/Layer";

const Layers = ({ layers }: LayersProps) => {
  const layersList = useMemo(
    () => (
      <div className="layers__list">
        {layers.map((layer) => (
          <Layer layer={layer} onClose={() => console.log("close")} />
        ))}
      </div>
    ),
    [layers]
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
