import { memo } from "react";
import { Button } from "@shared/ui";

import "./Presentation.css";

const Presentation = memo(() => {
  return (
    <section id="presentation" className="presentation">
      <div className="section presentation__content-wrapper">
        <div className="presentation__content">
          <h1 className="presentation__title">
            Ортопедические матрасы для отдыха с комфортом
          </h1>
          <p className="presentation__description">
            Подберите для себя матрас индивидуально по выгодной цене и дизайну
            на нашем онлайн-конструкторе прямо сейчас!
          </p>
          <Button elem="link" href="#constuctor" className="presentation__btn">
            Подобрать матрас
          </Button>
          <div className="presentation__more">
            <span className="presentation__more__icon" />
            <span>Подробнее</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Presentation;
