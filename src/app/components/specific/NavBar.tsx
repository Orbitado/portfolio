import Link from "next/link";
import { navbarLinks } from "@/app/constants/menuData";
import { NavLink } from "@/app/types/types";
import { Globe, Moon, Sun } from "lucide-react";
function NavBar() {
  return (
    <header className="container">
      <nav className="nav">
        <h1 className="nav__logo">
          <Link href="/">LV</Link>
        </h1>
        <ul className="nav__list">
          {navbarLinks.map((link: NavLink) => (
            <li key={link.name} className="nav__item">
              <Link href={link.url} className="nav__link">
                {link.name}
              </Link>
            </li>
          ))}
          <li className="nav__item--theme-toggle">
            <div className="nav__theme-toggle">
              <Moon className="nav__icon nav__item" />
              <Sun className="nav__icon nav__item" />
            </div>
          </li>
          <li className="nav__item--theme-toggle">
            <div className="nav__theme-toggle">
              <Globe className="nav__icon nav__item" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
