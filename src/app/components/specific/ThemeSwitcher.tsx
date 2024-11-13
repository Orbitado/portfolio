"use client";
import { useTheme } from "@/app/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <li className="nav__item--theme-toggle">
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="nav__item nav__theme-toggle"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </button>
    </li>
  );
}

export default ThemeSwitcher;
