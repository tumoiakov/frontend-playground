import { memo } from "react";
import "./FeedbackItem.css";
import { FeedbackItemData } from "./FeedbackItem.types";

type FeedbackItemProps = {
  item: FeedbackItemData;
};

const FeedbackItem = memo(({ item }: FeedbackItemProps) => {
  return (
    <article className="slide">
      <div className="slide__avatar">
        <img src={item.imageUri} alt={`аватар профиля ${item.userName}`} />
      </div>
      <header>
        <hgroup>
          <h1 className="slide__name">{item.userName}</h1>
          <p className="slide__product">{item.productName}</p>
        </hgroup>
      </header>
      <p className="slide__content">{item.feedback}</p>
      <footer className="slide__date">{item.date}</footer>
    </article>
  );
});

export default FeedbackItem;
