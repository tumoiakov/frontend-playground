import { Button, Logo } from "@shared/ui";
import { Navigation } from "@widgets/navigation";
import "./Header.css";

function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
      <p>8 (963) 944 99 91</p>
      <Button type="outline">Заказать звонок</Button>
    </header>
  );
}

export default Header;
