import { createContext } from "react";

type SizeContextType = {
    sizes: [number, number];
    updateSizes: (sizes: [number, number]) => void;
}

export const SizeContext = createContext<SizeContextType | null>(null);