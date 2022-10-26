import React from "react";
import styles from "./ThemeSwitcher.module.css";
import { Button } from "../../shared/components";

export const ThemeSwitcher = () => {
  return (
    <div className={styles._}>
      <Button
        theme="blueTransparent"
        size="small"
        icon="sun"
        text="Светлая тема"
      />
    </div>
  );
};
