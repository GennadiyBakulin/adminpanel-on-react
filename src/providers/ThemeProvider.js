import React, {useState} from "react";
import {ThemeContext, themes} from "../contexts/ThemeContext";

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themes.night);

  document.documentElement.dataset.theme = theme;

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
