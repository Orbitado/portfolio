export interface NavLinkProps {
  name: string;
  url: string;
}

export type Theme = "light" | "dark";

export interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ExpandableTextProps {
  text: string;
  maxLength?: number;
}
