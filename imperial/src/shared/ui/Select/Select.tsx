import clsx from "clsx";
import "./Select.css";
import { SelectOptionProps, SelectProps } from "./Select.types";
import { useCallback, useState } from "react";

const SelectOption = ({ children, className, value }: SelectOptionProps) => {
  return (
    <option value={value} className={clsx("option", className)}>
      {children}
    </option>
  );
};

const Select = ({
  className,
  children,
  defaultValue,
  ui = "primary",
  onChange,
}: SelectProps) => {
  const [currentValue, setCurrentValue] =
    useState<Optional<string>>(defaultValue);

  const onValueUpdate = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
      setCurrentValue(e.target.value);
      onChange?.(e.target.value);
    },
    [onChange]
  );

  return (
    <div className={clsx("select", ui, className)}>
      <select
        value={currentValue}
        onChange={onValueUpdate}
        className="select__inner"
      >
        {children}
      </select>
    </div>
  );
};

Select.Option = SelectOption;
export default Select;
