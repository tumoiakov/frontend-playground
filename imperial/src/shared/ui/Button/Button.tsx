import clsx from "clsx";
import { ButtonProps } from "./Button.types";
import "./Button.css";

const Button = ({
  className,
  children,
  type = "primary",
  elem = "button",
  ...rest
}: ButtonProps) => {
  if (elem === "link") {
    return (
      <a
        {...rest}
        className={clsx(
          "button",
          className,
          type === "outline" && "button--outline",
          type === "secondary" && "button--secondary"
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...rest}
      className={clsx(
        "button",
        className,
        type === "outline" && "button--outline",
        type === "secondary" && "button--secondary"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
