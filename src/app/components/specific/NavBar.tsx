"use client";
import Link from "next/link";
import { navbarLinks } from "@/app/constants/menuData";
import { NavLinkProps } from "@/app/types/types";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageToggler from "./LanguageToggler";
import { Menu, X } from "lucide-react";
import { useState } from "react";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="container">
      <nav className="nav">
        <h1 className="nav__logo">
          <Link href="/">LV</Link>
        </h1>
        <ul className={`nav__list ${isMenuOpen ? "open" : "close"}`}>
          {navbarLinks.map((link: NavLinkProps) => (
            <li key={link.name} className="nav__item">
              <Link href={link.url} className="nav__link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="nav__list--togglers">
          <ThemeSwitcher />
          <LanguageToggler />
          <li className="nav__item--mobile">
            <button
              type="button"
              aria-label="Toggle navigation"
              className="nav__toggler"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="nav__icon" />
              ) : (
                <Menu className="nav__icon" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
