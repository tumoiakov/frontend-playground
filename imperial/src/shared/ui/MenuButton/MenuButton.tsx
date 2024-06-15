import MenuSVG from "@assets/icons/menu.svg?react";
import clsx from "clsx";
import "./MenuButton.css";

type MenuProps = {
  onClick: () => void;
  className?: string;
};

const MenuButton = ({ className, onClick }: MenuProps) => {
  return (
    <button className={clsx("menu-btn", className)} onClick={onClick}>
      <MenuSVG className="menu-btn__icon" width={52} height={52} />
    </button>
  );
};

export default MenuButton;
