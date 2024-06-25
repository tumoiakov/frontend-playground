import clsx from "clsx";
import { ButtonProps, AnchorElemProps } from "./Button.types";
import "./Button.css";

const Button = (props: ButtonProps) => {
  if (props.elem === "link") {
    const {
      className,
      children,
      ui = "primary",
      ...rest
    } = props as AnchorElemProps;

    return (
      <a
        {...rest}
        className={clsx(
          "button",
          className,
          ui === "outline" && "button--outline",
          ui === "secondary" && "button--secondary"
        )}
      >
        {children}
      </a>
    );
  }

  const { className, children, ui = "primary", ...rest } = props;

  return (
    <button
      {...rest}
      className={clsx(
        "button",
        className,
        ui === "outline" && "button--outline",
        ui === "secondary" && "button--secondary"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
