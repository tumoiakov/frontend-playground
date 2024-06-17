import { AdvantageData } from "@entities/Advatage/Advantage.types";

export const title = "Наши преимущества";
export const description =
  "Изготовление матрасов любого размера и любой формы, изготовление матрасов в сжатые сроки и не забываем про высокое качество и доступные цены!";

export const advantages: Array<AdvantageData> = [
  {
    title: "Экологичность",
    description: "Произведено в Сибири по честной цене",
    image: "eco",
  },
  {
    title: "Качество",
    description: "Лучшие комплектующие из России и мира",
    image: "quality",
  },
  {
    title: "Любая сложность",
    description: "Любые размеры и форма за 3 дня",
    image: "complexity",
  },
  {
    title: "Гарантия",
    description: "Гарантия до 18 месяцев Срок службы до 15 лет",
    image: "warranty",
  },
];
