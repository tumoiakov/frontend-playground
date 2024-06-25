type ButtonType = "primary" | "secondary" | "outline";
// type ButtonElem = "link" | "button";

export type ButtonElemProps = React.HTMLProps<HTMLButtonElement> & {
  elem: "button";
  type: "submit" | "reset" | "button";
  ui?: ButtonType;
};

export type AnchorElemProps = React.HTMLProps<HTMLAnchorElement> & {
  elem: "link";
  type?: string;
  ui?: ButtonType;
};

export type ButtonProps = ButtonElemProps | AnchorElemProps;
