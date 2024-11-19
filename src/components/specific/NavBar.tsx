import ThemeSwitcher from "./ThemeSwitcher";
import LanguageToggler from "./LanguageToggler";
import NavToggler from "./NavToggler";
import NavList from "./NavList";
import Link from "next/link";

function NavBar() {
  return (
    <header className="container">
      <nav className="nav">
        <h1 className="nav__logo">
          <Link href="/">LV</Link>
        </h1>
        <NavList />
        <ul className="nav__list--togglers">
          <ThemeSwitcher />
          <LanguageToggler />
          <NavToggler />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
