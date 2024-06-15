type ButtonType = "primary" | "secondary" | "outline";
type ButtonElem = "link" | "button";

export type ButtonProps = React.HTMLProps<
  HTMLButtonElement & HTMLAnchorElement
> & {
  type?: ButtonType;
  elem?: ButtonElem;
};
