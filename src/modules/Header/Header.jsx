import React from "react";
import styles from "./Header.module.css";
import {
  Buttons,
  Inputs,
  Searchbar,
  Checkbox,
  Radio,
  Dropdowns,
} from "./shared/components";
import { ThemeSwitcher } from "../../modules";

export const Header = () => {
  return (
    <>
      <header className={styles._}>
        <h1 className="header__title headline-font">Список заказов</h1>
        <ThemeSwitcher />
      </header>
    </>
  );
};
