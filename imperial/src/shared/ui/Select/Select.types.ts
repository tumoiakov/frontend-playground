import { ReactNode } from "react";

export type SelectValue = string | number;

export type SelectProps = {
  children: ReactNode | ReactNode[];
  defaultValue?: SelectValue;
  onChange?: (value: SelectValue) => void;
  ui?: 'primary' | 'borderless';
  className?: string;
};

export type SelectOptionProps = {
  value: SelectValue;
  children: ReactNode | ReactNode[];
  className?: string;
};
