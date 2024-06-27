import { memo } from "react";
import "./Constructor.css";
import clsx from "clsx";
import { DefaultConstructor, CustomConstructor } from "./ui";

type ConstructorProps = {
  type?: "default" | "custom";
  className?: string;
};

const Constructor = memo(
  ({ type = "default", className }: ConstructorProps) => {
    return (
      <div className={clsx("constuctor__wrapper", className)}>
        {type === "default" ? <DefaultConstructor /> : <CustomConstructor />}
      </div>
    );
  }
);

export default Constructor;
