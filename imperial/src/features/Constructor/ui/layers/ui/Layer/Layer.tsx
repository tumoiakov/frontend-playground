import { LayerProps } from "../../Layers.types";
import "./Layer.css";

const Layer = ({ layer }: LayerProps) => {
  return <div className="layer">{layer.name}</div>;
};

export default Layer;
