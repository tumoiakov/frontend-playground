import { memo } from "react";
import { SectionContainer } from "@entities/SectionContainer";
import { SectionHeader } from "@entities/SectionHeader";
import { description, tabs, title } from "./Constructor.const";
import "./Constructor.css";
import { TabView } from "@shared/ui/TabView";

const Constructor = memo(() => {
  return (
    <SectionContainer id="constuctor" className="constuctor">
      <header>
        <SectionHeader title={title} description={description} />
      </header>
      <TabView tabs={tabs} className="constuctor__content" />
    </SectionContainer>
  );
});

export default Constructor;
