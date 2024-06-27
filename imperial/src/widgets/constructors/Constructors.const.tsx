import { Constructor } from "@features/Constructor";
import { Tab } from "@shared/ui/TabView/TabView.types";

export const title = "Онлайн-конструктор матрасов";
export const description =
  "С помощью представленного ниже конструктора матрасов Вы легко сможете изменить состав стандартной модели матраса или сконструировать индивидуальную модель матраса.";

export const tabs: Array<Tab> = [
  {
    name: "Стандартный",
    content: <Constructor type="default" />,
  },
  {
    name: "Заказной размер",
    content: <Constructor type="custom" />,
  },
];
