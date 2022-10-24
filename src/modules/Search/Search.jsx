import React from "react";
import styles from "./Search.module.css";
import {
  Buttons,
  Inputs,
  Searchbar,
  Checkbox,
  Radio,
  Dropdowns,
} from "./shared/components";

export const Search = () => {
  return (
    <div className="search">
      <div className="search__top-panel">
        <div className="search__search-wrapper">
          <div className="searchbar">
            <svg
              className="searchbar__icon-search"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"
                fill="none"
              />
            </svg>
            <input
              className="searchbar__text"
              type="text"
              placeholder="Номер заказа или ФИО"
            />
            <button className="button button_size_small button_icon-only">
              <svg
                className="icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
              </svg>
            </button>
          </div>
          <div className="search__button-open-filter">
            <button className="button button_theme-blue button_size_medium">
              <svg
                className="icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4H4V5.5L7 8.5V12L9 13V8.5L12 5.5V4Z"
                  stroke="none"
                />
              </svg>
              Фильтры
            </button>
          </div>
          <div className="search__button-reset-filter">
            <button className="button button_theme-blue-transparent button_size_medium">
              Сбросить фильтры
            </button>
          </div>
        </div>
        <div className="loader">
          <button className="button button_theme-blue-transparent button_size_small">
            <svg
              className="icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.50251 7.5V8.5C2.50251 10.75 4.75251 13.5 8.00251 13.5C10 13.5 11.6187 12.5 12.6 11"
                fill="none"
              />
              <path
                d="M13.5 8.5V7.5C13.5 5.25 11.25 2.5 7.99997 2.5C6 2.5 4.38135 3.5 3.4 5"
                fill="none"
              />
              <path d="M4.5 9.5L2.50254 7.5L0.752533 9.75" fill="none" />
              <path d="M11.5 6.5L13.5 8.5L15.25 6.25" fill="none" />
            </svg>
            Загрузка
          </button>
        </div>
      </div>
      <div className="search__hidden-panel"></div>
    </div>
  );
};
