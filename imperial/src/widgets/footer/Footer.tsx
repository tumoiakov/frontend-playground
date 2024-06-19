import { memo } from "react";
import { Navigation } from "@widgets/navigation";
import { Logo } from "@shared/ui";

import "./Footer.css";

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <Logo className="footer__logo" />
        <Navigation className="menu--footer" />
        <section className="footer__addresses">
          <h1 className="footer__addresses-title">Адреса салонов:</h1>
          <ul className="footer__addresses-list">
            <li>ул.Красный проспект д. XX (салон "Матрасы & Кровати")</li>
            <li>пр.Дзержинского д. X/X (салон "Дюна" 3 этаж)</li>
            <li>ул.Гоголя д. XX (салон "Все для сна")</li>
            <li>c.Сокур, ул. Советская д. XX (Станция Комфорта)</li>
          </ul>
        </section>
        <section className="footer__phone">
          <p className="footer__phone-number">
            <div className="footer__phone-icon" />
            <span>8 (963) 944 XX XX</span>
          </p>
          <p className="footer__phone-link">
            <a href="#contacts">Заказать звонок</a>
          </p>
        </section>
      </div>
      <p className="footer__copyright">Все права защищены. 2024. Империа-Л.</p>
    </footer>
  );
});

export default Footer;
