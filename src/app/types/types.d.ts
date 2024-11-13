export interface NavLinkProps {
    name: string;
    url: string;
}

export type Theme = "light" | "dark";

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
    children: ReactNode;
}