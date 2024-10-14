import { useCallback, useState } from "react";
import { Layer } from "../layers";

export function useUpdateLayer(defaultLayers?: Array<Layer>): [
  Array<Layer>,
  { 
    handleRemove: (index: number) => void,
    handleAdd: (layer: Layer) => void,
    handleMove: (from: number, to: number) => void,
  }
] {
  const [layers, setLayers] = useState<Array<Layer>>(defaultLayers || []);

  const handleRemove = useCallback((index: number) => {
    setLayers((prev) => prev.filter((_, idx) => idx !== index))
  }, [setLayers]);

  const handleAdd = useCallback((layer: Layer) => {
    const isAlreadyAdded = layers.find((item) => item.name === layer.name);
    if (!isAlreadyAdded) {
      setLayers((prev) => [...prev, layer]);
    }
  }, [layers, setLayers]);

  const handleMove = useCallback((from: number, to: number) => {
    const isFromInvalid: boolean = from < 0 || layers.length - 1 < from;
    const isToInvalid: boolean = to < 0 || layers.length - 1 < to;

    if (isFromInvalid || isToInvalid) {
      return;
    }

    const layer = layers[from];
    if (from < to) {
      for (let i = from; i < to; i++) {
        layers[i] = layers[i + 1];
      }
      layers[to] = layer;
    }
    if (from > to) {
      for (let i = to; i < from; i++) {
        layers[i + 1] = layers[i];
      }
      layers[to] = layer;
    }
  },[layers])

  return [layers, { handleAdd, handleMove, handleRemove }];
}
