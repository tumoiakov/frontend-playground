import { SectionContainer } from "@entities/SectionContainer";
import { SectionHeader } from "@entities/SectionHeader";
import { advantages, description, title } from "./Advantages.const";

import "./Advantages.css";
import { Advantage } from "@entities/Advatage";

const Advantages = () => {
  return (
    <SectionContainer id="advantages" className="advantages" inverted>
      <header className="advantages__header">
        <SectionHeader title={title} description={description} />
      </header>
      <div className="advantages__list">
        {advantages.map((item) => (
          <Advantage advantage={item} key={item.title} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Advantages;
