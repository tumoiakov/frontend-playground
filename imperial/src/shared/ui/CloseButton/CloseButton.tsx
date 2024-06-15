import CloseSVG from "@assets/icons/close.svg?react";
import clsx from "clsx";
import "./CloseButton.css";

type CloseProps = {
  onClick: () => void;
  className?: string;
};

const CloseButton = ({ className, onClick }: CloseProps) => {
  return (
    <button className={clsx("close", className)} onClick={onClick}>
      <CloseSVG className="close__icon" width={52} height={52} />
    </button>
  );
};

export default CloseButton;
