import { Advantages } from "@widgets/advantages";
import { Conditions } from "@widgets/conditions";
import { Constructor } from "@widgets/constructor";
import { Header } from "@widgets/header";
import { Presentation } from "@widgets/presentation";
import { Products } from "@widgets/products";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Advantages />
      <Products />
      <Constructor />
      <Conditions />
      <section className="feedback">
        <header>
          <h1>Отзывы о нашей продукции</h1>
          <p>
            Вот что говорят наши прекрасно высыпающиеся клиенты, которые
            неоднократно обращаются к нам
          </p>
        </header>
        <div className="slider">
          {" "}
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
              производителя. Теперь меня не покидает чувство, что раньше я не
              спал вовсе. Я стал гораздо лучше высыпаться и спина совсем не
              беспокоит!
            </p>
            <footer>28 сентября 2019</footer>
          </article>
        </div>
      </section>
      <section id="contacts" className="contacts">
        <section className="contacts__content">
          <header>
            <hgroup>
              <h1>Наши контакты</h1>
              <p>
                Вы можете оставить заявку, и мы с Вами свяжемся в ближайшее
                время, чтобы ответить на все интересующие вопросы
              </p>
            </hgroup>
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
        <section className="contacts__map">{/* TODO add map */}</section>
      </section>
      <footer>
        <div>
          <img src="" alt="logo" />
          <nav>
            <ul>
              <li>
                <a href="#">Матрасы</a>
              </li>
              <li>
                <a href="#">О продукции</a>
              </li>
              <li>
                <a href="#">Доставка</a>
              </li>
              <li>
                <a href="#">Гарантии</a>
              </li>
              <li>
                <a href="#">Отзывы</a>
              </li>
              <li>
                <a href="#">Адреса магазинов</a>
              </li>
              <li>
                <a href="#">Партнерам</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
          <section className="footer__addresses">
            <p>Адреса салонов:</p>
            <p>ул.Красный проспект д. XX (салон "Матрасы & Кровати")</p>
            <p>пр.Дзержинского д. X/X (салон "Дюна" 3 этаж)</p>
            <p>ул.Гоголя д. XX (салон "Все для сна")</p>
            <p>c.Сокур, ул. Советская д. XX (Станция Комфорта)</p>
          </section>
          <section className="footer__phone">
            <p>8 (963) 944 XX XX</p>
            <p>Заказать звонок</p>
          </section>
        </div>
        <p>Все права защищены. 2024. Империа-Л.</p>
      </footer>
    </>
  );
}

export default App;
