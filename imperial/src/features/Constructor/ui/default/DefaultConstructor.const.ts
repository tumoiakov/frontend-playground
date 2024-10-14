import { Layer } from "../layers/Layers.types";

export const defaultLayers: Array<Layer> = [
    {
        name: 'Чехол',
        description: 'Наружний слой матраса матраса',
        data: [
            {
                param: 'Bamboo',
                price: 0.23,
            },
        ]
    }
]

export const defaultSizes: [number, number] = [80, 190];