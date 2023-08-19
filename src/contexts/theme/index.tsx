import { createContext, useContext, useState } from "react";
import { ThemeContextProps } from "./types.js";
import { darkTheme } from "../../stitches.config.js";

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

function ThemeProvider({ children }: { children: React.ReactNode }) {

  const [theme, setTheme] = useState(localStorage.getItem('@cardapiosadmin:theme') || 'dark');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme
      }}
    >
      <div className={theme == 'dark' ? darkTheme : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme, ThemeContext };