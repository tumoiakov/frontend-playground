import "./DefaultConstructor.css";
import { Layers } from "../layers";
import { LayerProvider } from "../LayerProvider";
import { defaultLayers } from "./DefaultConstructor.const";
import { Sizes } from "../sizes";

const DefaultConstructor = () => {
  return (
    <LayerProvider defaultLayers={defaultLayers}>
      <div className="constuctor constructor--default">
        <div className="constructor__editor">
          <Sizes />
          <div className="constuctor__structure-label">
            <div className="constuctor__icon constuctor__icon--editor" />
            <p className="constuctor__label">Выберите состав матраса</p>
            {/* <Layers
              layers={layers}
              onRemove={handleRemove}
              onAdd={handleAdd}
              onMove={handleMove}
            /> */}
          </div>
        </div>
        <div className="constuctor__visual"></div>
      </div>
    </LayerProvider>
  );
};

export default DefaultConstructor;
