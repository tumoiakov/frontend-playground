type AdvantageImage = "eco" | "quality" | "complexity" | "warranty";

export type AdvantageData = {
  title: string;
  description: string;
  image: AdvantageImage;
};

export type AdvantageProps = {
  advantage: AdvantageData;
};
