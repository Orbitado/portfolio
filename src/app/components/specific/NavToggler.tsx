"use client";
import { useMenu } from "@/app/hooks/useMenu";
import { Menu, X } from "lucide-react";

function NavToggler() {
  const { isMenuOpen, toggleMenu } = useMenu();
  return (
    <li className="nav__item--mobile">
      <button
        type="button"
        aria-label="Toggle navigation"
        className="nav__toggler"
        onClick={() => toggleMenu()}
      >
        {isMenuOpen ? (
          <X className="nav__icon" />
        ) : (
          <Menu className="nav__icon" />
        )}
      </button>
    </li>
  );
}

export default NavToggler;
