import { memo, useCallback } from "react";
import { SectionHeader } from "@entities/SectionHeader";
import { description, title } from "./Contacts.const";

import "./Contacts.css";
import "@entities/SectionContainer/SectionContainer.css";
import { Button } from "@shared/ui";

const Contacts = memo(() => {
  const onSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>((e) => {
    e.preventDefault();
    console.log("submit");
  }, []);

  return (
    <section id="contacts" className="contacts">
      <div className="contacts__container">
        <header>
          <SectionHeader title={title} description={description} />
        </header>
        <form className="contacts__form" onSubmit={onSubmit}>
          <p className="form__title">Обратная связь</p>
          <input
            type="text"
            placeholder="Введите ваше имя"
            aria-label="Ввод имени"
          />
          <input
            type="number"
            placeholder="Ваш номер телефона"
            aria-label="Ввод номера телефона"
          />
          <p className="form__description">
            *Наш менеджер свяжется с вами в течение 3 минут и ответит на все
            ваши вопросы
          </p>
          <Button
            className="form__submit button--shadow-large"
            elem="button"
            type="submit"
            ui="secondary"
          >
            Отправить заявку
          </Button>
        </form>
      </div>
      <div
        className="contacts__map"
        aria-label="Карта местонахождения офиса компании"
      >
        {/* TODO add real map widget */}
        <img src="/assets/contacts/map.webp" alt="map placeholder" />
      </div>
    </section>
  );
});

export default Contacts;
