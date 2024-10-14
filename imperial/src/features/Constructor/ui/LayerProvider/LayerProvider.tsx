import { ReactElement } from "react";
import { Layer } from "../layers";
import { LayerContext } from "./LayerContext";
import { useUpdateLayer } from "./useUpdateLayer";
import { SizeContext } from "./SizeContext";
import { useUpdateSize } from "./useUpdateSize";

type LayerProviderProps = {
    children: ReactElement,
    defaultSize?: [number, number],
    defaultLayers?: Array<Layer>,
}

export function LayerProvider({ children, defaultSize, defaultLayers }: LayerProviderProps) {
    const [layers, { handleAdd, handleMove, handleRemove }] = useUpdateLayer(defaultLayers);
    const [sizes, { updateSizes }] = useUpdateSize(defaultSize);

    return (
        <SizeContext.Provider value={{ sizes, updateSizes }}>
            <LayerContext.Provider value={{ layers, handleAdd, handleMove, handleRemove}}>
                {children}
            </LayerContext.Provider>
        </SizeContext.Provider>
    );
}