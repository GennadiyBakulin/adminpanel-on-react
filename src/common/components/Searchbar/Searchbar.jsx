import React from "react";
import style from "./Searchbar.module.css";
import { Icon } from "../Icon/Icon";

export const Searchbar = function Searchbar() {
  return (
    <>
        <div className={ style.searchbar }>
          <Icon className={ style['searchbar__icon-search'] } name="search" />
          <input
            className={style.searchbar__text}
            type="text"
            placeholder="Номер заказа или ФИО"
          />
          <button
            className="button button_size_small button_icon-only"
            type="submit"
          >
            <Icon className="icon" name="x_medium" />
          </button>
        </div>
        <div className={`${style.searchbar} ${style.searchbar_filled}`}>
          <Icon className={ style['searchbar__icon-search'] } name="search" />
          <input
            className={style.searchbar__text}
            type="text"
            placeholder="Номер заказа или ФИО"
            value="50744"
          />
          <button
            className="button button_size_small button_icon-only"
            type="submit"
          >
            <Icon className="icon" name="x_medium" />
          </button>
        </div>
    </>
  );
};
