import React from "react";
import "../../../css/searchbar/searchbar.css";
import { Icon } from "../Icon/Icon";

export const Searchbar = function Searchbar() {
  return (
    <div>
      <div className="searchbar-wrapper">
        <div className="searchbar">
          <Icon className="searchbar__icon-search" name="search" />
          <input
            className="searchbar__text"
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
        <div className="searchbar searchbar_filled">
          <Icon className="searchbar__icon-search" name="search" />
          <input
            className="searchbar__text"
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
      </div>
    </div>
  );
};
