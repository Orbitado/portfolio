"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <li className="nav__theme-switcher">
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="nav__toggler"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Moon className="nav__icon" />
        ) : (
          <Sun className="nav__icon" />
        )}
      </button>
    </li>
  );
}

export default ThemeSwitcher;
