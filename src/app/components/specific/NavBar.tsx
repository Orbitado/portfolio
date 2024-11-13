import Link from "next/link";
import { navbarLinks } from "@/app/constants/menuData";
import { NavLinkProps } from "@/app/types/types";
import { Globe } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
function NavBar() {
  return (
    <header className="container">
      <nav className="nav">
        <h1 className="nav__logo">
          <Link href="/">LV</Link>
        </h1>
        <ul className="nav__list">
          {navbarLinks.map((link: NavLinkProps) => (
            <li key={link.name} className="nav__item">
              <Link href={link.url} className="nav__link">
                {link.name}
              </Link>
            </li>
          ))}
          <ThemeSwitcher />
          <li className="nav__item">
            <div className="nav__toggler">
              <Globe className="nav__icon" />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
