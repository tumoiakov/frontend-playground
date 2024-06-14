type ButtonType = "primary" | "secondary" | "outline";

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & { type?: ButtonType };