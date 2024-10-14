import { useCallback, useState } from "react";
import { defaultSizes } from "../default/DefaultConstructor.const";

export function useUpdateSize(size?: [number, number]): [
  [number, number],
  {
    updateSizes: (sizes: [number, number]) => void;
  }
] {
  const [sizes, setSizes] = useState<[number, number]>(size || defaultSizes);

  const updateSizes = useCallback((newSize: [number, number]) => {
    setSizes(newSize);
  }, []);

  return [sizes, { updateSizes }];
}
