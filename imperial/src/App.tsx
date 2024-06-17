import { Advantages } from "@widgets/advantages";
import { Header } from "@widgets/header";
import { Presentation } from "@widgets/presentation";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Advantages />
      <section>
        <h1>Наши преимущества</h1>
        <p>
          Изготовление матрасов любого размера и любой формы, изготовление
          матрасов в сжатые сроки и не забываем про высокое качество и доступные
          цены!
        </p>
        <div>
          <article className="advantage">
            <div className="advantage__logo" />
            <h1 className="advantage__title">Экологичность</h1>
            <p className="advantage__description">
              Произведено в Сибири по честной цене
            </p>
          </article>
          <article className="advantage">
            <div className="advantage__logo" />
            <h1 className="advantage__title">Качество</h1>
            <p className="advantage__description">
              Лучшие комплектующие из России и мира
            </p>
          </article>
          <article className="advantage">
            <div className="advantage__logo" />
            <h1 className="advantage__title">Любая сложность</h1>
            <p className="advantage__description">
              Любые размеры и форма за 3 дня
            </p>
          </article>
          <article className="advantage">
            <div className="advantage__logo" />
            <h1 className="advantage__title">Гарантия</h1>
            <p className="advantage__description">
              Гарантия до 18 месяцев Срок службы до 15 лет
            </p>
          </article>
        </div>
      </section>
      <section className="products">
        <header>
          <hgroup>
            <h1>Наша продукция</h1>
            <p>
              Выберите из нашего огромного каталога интересующий Вас вариант, и
              оставьте заявку на его приобретение. Мы обязательно свяжемся с
              Вами!
            </p>
          </hgroup>
          <menu>
            <p>Выберите категорию:</p>
            <div>
              <button>Матрасы</button>
              {/* TODO change this to select element \*/}
              <button>Наматрасники</button>
              <button>Детские матрасы</button>
            </div>
          </menu>
        </header>
        <section className="product-list">
          <article className="product">
            <header>
              <img src="" alt="product-image" className="product__image" />
              <h2 className="product__title">Турин-1</h2>
            </header>
            <section className="product__composition">
              <h3>Состав:</h3>
              <ul>
                <li>Кокосовая койра - 2 см.</li>
                <li>Волок термоскрепленный - 0.5 см.</li>
                <li>Кокосовая койра - 2 см.</li>
                <li>Высота матраца - 16см.</li>
                <li>Для людей весом до 120 кг.</li>
              </ul>
            </section>
            <section>
              <p>
                <span>1500 p.</span>
                <button>200x200</button>
                {/* TODO change to select */}
              </p>
              <a>Заказать товар</a>
            </section>
          </article>
          <button>Показать все варианты</button>
        </section>
      </section>
      <section id="constuctor" className="constuctor">
        <header>
          <hgroup>
            <h1>Онлайн-конструктор матрасов</h1>
            <p>
              С помощью представленного ниже конструктора матрасов Вы легко
              сможете изменить состав стандартной модели матраса или
              сконструировать индивидуальную модель матраса.
            </p>
          </hgroup>
        </header>
        <div>{/* TODO add constuctor */}</div>
      </section>
      <section className="conditions">
        <header>
          <h1>Честные условия покупки</h1>
          <p>
            Мы радуем своих клиентов приятными подарками и отличными условиями
            обслуживания
          </p>
        </header>
        <ul>
          <li>Доставка у нас бесплатная</li>
          <li>Поднимаем матрас на любой этаж бесплатно</li>
          <li>Дарим съемный чехол для матраса</li>
        </ul>
        <button>Подобрать матрас</button>
      </section>
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
            <p>ул.Красный проспект д. 99 (салон "Матрасы & Кровати")</p>
            <p>пр.Дзержинского д. 1/4 (салон "Дюна" 3 этаж)</p>
            <p>ул.Гоголя д. 14 (салон "Все для сна")</p>
            <p>c.Сокур, ул. Советская д. 80 (Станция Комфорта)</p>
          </section>
          <section className="footer__phone">
            <p>8 (963) 944 99 91</p>
            <p>Заказать звонок</p>
          </section>
        </div>
        <p>Все права защищены. 2020. Империа-Л.</p>
      </footer>
    </>
  );
}

export default App;
