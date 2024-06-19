import { memo } from "react";
import { SectionHeader } from "@entities/SectionHeader";
import { description, title } from "./Contacts.const";

import "./Contacts.css";
import "@entities/SectionContainer/SectionContainer.css";

const Contacts = memo(() => {
  return (
    <section id="contacts" className="contacts">
      <div className="contacts__container">
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
      </div>
      <div
        className="contacts__map"
        aria-label="Карта местонахождения офиса компании"
      >
        {/* TODO add real map widget */}
        <img src="/src/assets/contacts/map.png" alt="map placeholder" />
      </div>
    </section>
  );
});

export default Contacts;
