import { Select } from "@shared/ui/Select";
import { useCallback, useContext } from "react";
import { SizeContext } from "../LayerProvider/SizeContext";
import { SelectValue } from "@shared/ui/Select/Select.types";
import { defaultSizes } from "../default/DefaultConstructor.const";
import "./Sizes.css";

export function Sizes() {
  const sizeContext = useContext(SizeContext);

  const sizes = sizeContext?.sizes;
  const updateSizes = sizeContext?.updateSizes;

  const updateWidth = useCallback(
    (width: SelectValue) => {
      if (sizes && typeof width === "number") {
        updateSizes?.([width, sizes[1]]);
        return;
      }

      if (sizes && typeof width === "string") {
        const parsedWidth = Number.parseInt(width);
        if (Number.isInteger(parsedWidth)) {
          updateSizes?.([parsedWidth, sizes[1]]);
        }
      }
    },
    [sizes, updateSizes]
  );

  const updateHeight = useCallback(
    (width: SelectValue) => {
      if (sizes && typeof width === "number") {
        updateSizes?.([width, sizes[1]]);
        return;
      }

      if (sizes && typeof width === "string") {
        const parsedWidth = Number.parseInt(width);
        if (Number.isInteger(parsedWidth)) {
          updateSizes?.([parsedWidth, sizes[1]]);
        }
      }
    },
    [sizes, updateSizes]
  );

  return (
    <div className="constructor__size">
      <div className="constuctor__icon constuctor__icon--size" />
      <p className="constuctor__label">Задайте размер</p>
      <Select
        onChange={updateWidth}
        defaultValue={sizes?.[0] ?? defaultSizes[0]}
        className="constuctor__size-select"
      >
        <Select.Option value={80}>80 см</Select.Option>
        <Select.Option value={90}>90 см</Select.Option>
        <Select.Option value={100}>100 см</Select.Option>
      </Select>
      <span className="constuctor__size-divider">x</span>
      <Select
        onChange={updateHeight}
        defaultValue={sizes?.[1] ?? defaultSizes[1]}
        className="constuctor__size-select"
      >
        <Select.Option value={180}>180 см</Select.Option>
        <Select.Option value={190}>190 см</Select.Option>
        <Select.Option value={200}>200 см</Select.Option>
      </Select>
    </div>
  );
}
