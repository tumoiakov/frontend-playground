import { ReactNode, memo } from "react";
import "./SectionContainer.css";
import { clsx } from "clsx";

type SectionContainerProps = {
  children: ReactNode | ReactNode[];
  id?: string;
  className?: string;
};

const SectionContainer = memo(
  ({ children, id, className }: SectionContainerProps) => {
    return (
      <div id={id} className={clsx("section-container", className)}>
        {children}
      </div>
    );
  }
);

export default SectionContainer;
