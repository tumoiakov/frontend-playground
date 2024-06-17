import { memo } from "react";
import "./Advantage.css";
import { AdvantageProps } from "./Advantage.types";

const Advantage = memo(
  ({ advantage: { description, image, title } }: AdvantageProps) => {
    return (
      <article className="advantage">
        <div className={`advantage__logo ${image}`} />
        <h1 className="advantage__title">{title}</h1>
        <p className="advantage__description">{description}</p>
      </article>
    );
  }
);

export default Advantage;
