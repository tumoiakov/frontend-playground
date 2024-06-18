import { ReactNode, memo } from "react";
import "./SectionContainer.css";
import { clsx } from "clsx";

type SectionContainerProps = {
  id: string;
  children: ReactNode | ReactNode[];
  className?: string;
  inverted?: boolean;
};

const SectionContainer = memo(
  ({ children, id, inverted, className }: SectionContainerProps) => {
    return (
      <section
        id={id}
        className={clsx("section", inverted && "inverted", className)}
      >
        <div className={clsx("section__container", `${id}__container`)}>
          {children}
        </div>
      </section>
    );
  }
);

export default SectionContainer;
