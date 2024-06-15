import clsx from "clsx";
import { ButtonProps } from "./Button.types";
import "./Button.css";

const Button = ({
  className,
  children,
  type = "primary",
  ...rest
}: ButtonProps) => {
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
