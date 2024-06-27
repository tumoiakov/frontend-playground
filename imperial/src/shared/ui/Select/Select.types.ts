import { ReactNode } from "react";

export type SelectProps = {
  children: ReactNode | ReactNode[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
};

export type SelectOptionProps = {
  value: string;
  children: ReactNode | ReactNode[];
  className?: string;
};
