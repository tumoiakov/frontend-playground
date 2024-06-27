import { memo } from "react";
import { SectionContainer } from "@entities/SectionContainer";
import { SectionHeader } from "@entities/SectionHeader";
import { description, tabs, title } from "./Constructors.const";
import "./Constructors.css";
import { TabView } from "@shared/ui/TabView";

const Constructors = memo(() => {
  return (
    <SectionContainer id="constuctors" className="constuctors">
      <header>
        <SectionHeader title={title} description={description} />
      </header>
      <TabView tabs={tabs} className="constuctors__content" />
    </SectionContainer>
  );
});

export default Constructors;
