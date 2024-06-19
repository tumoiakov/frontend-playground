import { memo } from "react";
import "./Feedback.css";
import { SectionContainer } from "@entities/SectionContainer";
import { SectionHeader } from "@entities/SectionHeader";
import { description, title } from "./Feedback.const";

const Feedback = memo(() => {
  return (
    <SectionContainer id="feedback" className="feedback">
      <header>
        <SectionHeader title={title} description={description} />
      </header>
      <div className="slider">
        {/* TODO make slider*/}
        <article className="slide">
          <img src="" alt="slide__image" />
          <header>
            <hgroup>
              <h1 className="name">Андрей Гаспарян</h1>
              <p className="item">Матрас “Венеция - 1”</p>
            </hgroup>
          </header>
          <p>
            Неделю назад стал счастливым обладателем одного из матрасов этого
            производителя. Теперь меня не покидает чувство, что раньше я не спал
            вовсе. Я стал гораздо лучше высыпаться и спина совсем не беспокоит!
          </p>
          <footer>28 сентября 2019</footer>
        </article>
      </div>
    </SectionContainer>
  );
});

export default Feedback;
