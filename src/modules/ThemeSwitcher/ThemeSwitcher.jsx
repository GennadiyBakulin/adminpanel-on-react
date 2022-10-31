import React from "react";
import {ThemeContext, themes} from "../../contexts/ThemeContext";
import styles from "./ThemeSwitcher.module.css";
import {Button} from "../../shared/components";

export const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {({theme, setTheme}) => (
        <div className={styles._}>
          <Button
            theme="blueTransparent"
            size="small"
            icon="sun"
            text="Светлая тема"
            onClick={() => {
              if (theme === themes.light) setTheme(themes.night);
              if (theme === themes.night) setTheme(themes.light);
            }}
            value={theme === themes.night}
          />
        </div>
      )}
    </ThemeContext.Consumer>
  );
};
