import { memo } from "react";
import "./SectionHeader.css";

type SectionHeaderProps = {
  title: string;
  description: string;
};

const SectionHeader = memo(({ title, description }: SectionHeaderProps) => {
  return (
    <hgroup className="section-header">
      <h1 className="section-header__title">{title}</h1>
      <p className="section-header__description">{description}</p>
    </hgroup>
  );
});

export default SectionHeader;
