import { memo } from "react";
import "./Feedback.css";
import { SectionContainer } from "@entities/SectionContainer";
import { SectionHeader } from "@entities/SectionHeader";
import { description, feedbackItems, title } from "./Feedback.const";
import { Slideshow } from "@shared/ui/Slideshow";
import { FeedbackItem } from "@entities/FeedbackItem";

const Feedback = memo(() => {
  return (
    <SectionContainer id="feedback" className="feedback">
      <header>
        <SectionHeader title={title} description={description} />
      </header>
      <Slideshow>
        {feedbackItems.map((item) => (
          <FeedbackItem
            key={`${item.userName} ${item.productName}`}
            item={item}
          />
        ))}
      </Slideshow>
    </SectionContainer>
  );
});

export default Feedback;
