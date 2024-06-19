import { memo } from "react";
import "./Contacts.css";
import { SectionContainer } from "@entities/SectionContainer";
import { SectionHeader } from "@entities/SectionHeader";
import { description, title } from "./Contacts.const";

const Contacts = memo(() => {
  return (
    <SectionContainer id="contacts" className="contacts">
      <section className="contacts__content">
        <header>
          <SectionHeader title={title} description={description} />
        </header>
        <form>
          <p>Обратная связь</p>
          <input type="text" placeholder="Введите ваше имя" />
          <input type="text" placeholder="Ваш номер телефона" />
          <p>
            *Наш менеджер свяжется с вами в течение 3 минут и ответит на все
            ваши вопросы
          </p>
        </form>
      </section>
      <section className="contacts__map">
        {/* TODO add real map widget */}
        <img src="/src/assets/contacts/map.png" alt="map placeholder" />
      </section>
    </SectionContainer>
  );
});

export default Contacts;
