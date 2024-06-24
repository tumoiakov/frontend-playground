import clsx from "clsx";
import { links } from "../model/links";
import "./Navigation.css";

type NavigationProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

function Navigation({ className, ...rest }: NavigationProps) {
  return (
    <nav {...rest} className={clsx("menu", className)}>
      <ul>
        {links.map((link) => (
          <li key={`${link.href} - ${link.title}`} className="menu__item">
            <a href={link.href} className="menu__link">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
