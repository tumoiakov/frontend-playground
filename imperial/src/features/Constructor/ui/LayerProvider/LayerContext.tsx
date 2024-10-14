import { createContext } from "react";
import { Layer } from "../layers";

type LayerContextType = {
    layers: Array<Layer>;
    handleAdd?: (layer: Layer) => void;
    handleMove?: (from: number, to: number) => void;
    handleRemove?: (index: number) => void;
}

export const LayerContext = createContext<LayerContextType | null>(null);