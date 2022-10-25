import React from "react";
import styles from "./ThemeSwitcher.module.css";
import { Button } from "../../shared/components";

export const ThemeSwitcher = () => {
  return (
    <>
      <Button
        theme="blueTransparent"
        size="medium"
        icon="sun"
        text="Светлая тема"
      />

      {/*<div className="theme-switcher">*/}
      {/*  Выберите тему*/}
      {/*  <button className="button button_theme-blue-transparent button_size_small">*/}
      {/*    <svg*/}
      {/*      className="icon"*/}
      {/*      viewBox="0 0 16 16"*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*    >*/}
      {/*      <circle cx="8" cy="8" r="4" stroke="none" />*/}
      {/*      <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />*/}
      {/*      <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />*/}
      {/*      <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />*/}
      {/*      <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />*/}
      {/*      <path*/}
      {/*        d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"*/}
      {/*        stroke="none"*/}
      {/*      />*/}
      {/*      <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />*/}
      {/*      <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />*/}
      {/*      <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />*/}
      {/*    </svg>*/}
      {/*    Светлая*/}
      {/*  </button>*/}
      {/*  <button className="button button_theme-blue button_size_small">*/}
      {/*    <svg*/}
      {/*      className="icon"*/}
      {/*      viewBox="0 0 16 16"*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*    >*/}
      {/*      <path*/}
      {/*        d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"*/}
      {/*        stroke="none"*/}
      {/*      />*/}
      {/*    </svg>*/}
      {/*    Тёмная*/}
      {/*  </button>*/}
      {/*</div>*/}
    </>
  );
};
