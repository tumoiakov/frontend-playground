import { ReactNode } from "react";

export type Tab = {
  name: string;
  content: ReactNode;
};

export type TabViewProps = {
  tabs: Array<Tab>;
  className?: string;
};
