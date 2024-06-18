import { memo } from "react";
import { SectionContainer } from "@entities/SectionContainer";
import { SectionHeader } from "@entities/SectionHeader";
import { description, title } from "./Constructor.const";
import "./Constructor.css";

const Constructor = memo(() => {
  return (
    <SectionContainer id="constuctor" className="constuctor">
      <header>
        <SectionHeader title={title} description={description} />
      </header>
      <div>{/* TODO add constuctor */}</div>
    </SectionContainer>
  );
});

export default Constructor;
