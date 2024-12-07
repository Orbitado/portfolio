import ThemeSwitcher from "./ThemeSwitcher";
import NavToggler from "./NavToggler";
import NavList from "./NavList";
import Link from "next/link";

function NavBar() {
  return (
    <header className="container">
      <nav className="nav">
        <h1 className="nav__logo">
          <Link
            href="/"
            aria-label="Link to the home page and Leonardo Valdez Logo."
          >
            LV
          </Link>
        </h1>
        <Link
          href="/#main-content"
          className="sr-only"
          aria-label="Link to skip to main content"
        >
          Skip to main content
        </Link>
        <NavList />
        <ul className="nav__list--togglers">
          <ThemeSwitcher />
          <NavToggler />
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
