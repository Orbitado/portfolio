import { Moon, Sun } from "lucide-react";

function ThemeSwitcher() {
  return (
    <li className="nav__item--theme-toggle">
      <div className="nav__theme-toggle">
        <Moon className="nav__icon nav__item" />
        <Sun className="nav__icon nav__item" />
      </div>
    </li>
  );
}

export default ThemeSwitcher;
