import { Button, Logo, MenuButton } from "@shared/ui";
import { Navigation } from "@widgets/navigation";
import { useCallback, useState } from "react";
import clsx from "clsx";
import { CloseButton } from "@shared/ui/CloseButton";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    document.body.classList.toggle("noscroll", !open);
    setOpen((prev) => !prev);
  }, [open]);

  return (
    <header className="header">
      <MenuButton className="header__burger" onClick={toggleOpen} />
      <Logo className="header__logo" />
      <section className={clsx("header__menu", open && "header__menu--open")}>
        <header className="menu__header">
          <CloseButton onClick={toggleOpen} />
        </header>
        <Navigation className="menu--header" />
      </section>
      <section className="header__phone">
        <p className="header__phone-number">
          <div className="header__phone-icon" />
          <span>8 (963) 944 XX XX</span>
        </p>
        <p className="header__btn">
          <Button elem="link" href="#contacts" type="outline">
            Заказать звонок
          </Button>
        </p>
      </section>
    </header>
  );
}

export default Header;
