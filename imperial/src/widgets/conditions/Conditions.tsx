import { SectionContainer } from "@entities/SectionContainer";
import "./Conditions.css";
import { SectionHeader } from "@entities/SectionHeader";
import { conditionBackgrounds, description, title } from "./Conditions.const";
import { Button } from "@shared/ui";
import { memo, useEffect, useState } from "react";

const Conditions = memo(() => {
  const [background, setBackground] = useState<[number, string]>([
    0,
    conditionBackgrounds[0],
  ]);

  useEffect(() => {
    function updateBackground() {
      setBackground((prev) => {
        const newIndex = prev[0] + 1;
        if (newIndex < conditionBackgrounds.length) {
          return [newIndex, conditionBackgrounds[newIndex]];
        }

        return [0, conditionBackgrounds[0]];
      });
    }
    const interval = setInterval(updateBackground, 30 * 1000);

    return () => clearInterval(interval);
  }, [setBackground]);

  return (
    <SectionContainer id="conditions" className={`conditions ${background[1]}`}>
      <header>
        <SectionHeader title={title} description={description} />
      </header>
      <ul>
        <li>
          <div className="delivery-icon" />
          <span>Доставка у нас бесплатная</span>
        </li>
        <li>
          <div className="floor-icon" />
          <span>Поднимаем матрас на любой этаж бесплатно</span>
        </li>
        <li>
          <div className="gift-icon" />
          <span>Дарим съемный чехол для матраса</span>
        </li>
      </ul>
      <footer>
        <Button elem="link" href="#constructor">
          Подобрать матрас
        </Button>
      </footer>
    </SectionContainer>
  );
});

export default Conditions;
