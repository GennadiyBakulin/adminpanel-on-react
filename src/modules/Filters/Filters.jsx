import React from "react";
import styles from "./Filters.module.css";
import {
  Buttons,
  Inputs,
  Searchbar,
  Checkbox,
  Radio,
  Dropdowns,
} from "./shared/components";

export const Filters = () => {
  return (
    <div className={styles._}>
      <div className="filters__date-registration">
        <div className="input">
          <label className="input__title">
            Дата оформления
            <span className="input__field">
              с
              <input
                className="input__field-text"
                type="text"
                placeholder="Введите"
                value="20.01.2021"
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
              <svg
                className="icon icon_color-theme-black"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                  stroke="none"
                />
                <path
                  d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                  stroke="none"
                />
              </svg>
            </span>
          </label>
        </div>
        <div className="input">
          <label className="input__title">
            <span className="input__field">
              по
              <input
                className="input__field-text"
                type="text"
                placeholder="Введите"
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
              <svg
                className="icon icon_color-theme-black"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                  stroke="none"
                />
                <path
                  d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                  stroke="none"
                />
              </svg>
            </span>
          </label>
        </div>
      </div>
      <div className="filters__order-status">
        <div className="input input_status-order">
          <label className="input__title">
            Статус заказа
            <span className="input__field">
              Новый
              <svg
                className="icon icon_color-theme-light-blue"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z" stroke="none" />
              </svg>
            </span>
          </label>
        </div>
        <div className="multiple-status">
          <label className="checkbox">
            <input className="checkbox__area" type="checkbox" />
            <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span className="checkbox__text">Новый</span>
          </label>
          <label className="checkbox">
            <input className="checkbox__area" type="checkbox" />
            <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span className="checkbox__text">Расчет</span>
          </label>
          <label className="checkbox">
            <input className="checkbox__area" type="checkbox" />
            <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span className="checkbox__text">Подтвержден</span>
          </label>
          <label className="checkbox">
            <input className="checkbox__area" type="checkbox" />
            <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span className="checkbox__text">Отложен</span>
          </label>
          <label className="checkbox">
            <input className="checkbox__area" type="checkbox" />
            <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span className="checkbox__text">Выполнен</span>
          </label>
          <label className="checkbox">
            <input className="checkbox__area" type="checkbox" />
            <svg
              className="checkbox__icon"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span className="checkbox__text">Отменен</span>
          </label>
        </div>
      </div>
      <div className="filters__order-amount">
        <div className="input">
          <label className="input__title">
            Сумма заказа
            <span className="input__field">
              от
              <input
                className="input__field-text"
                type="text"
                placeholder="Введите"
                value="5000"
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
              <svg
                className="icon icon_color-theme-black"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                  stroke="none"
                />
                <path
                  d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                  stroke="none"
                />
              </svg>
            </span>
          </label>
        </div>
        <div className="input">
          <label className="input__title">
            <span className="input__field">
              до
              <input
                className="input__field-text"
                type="text"
                placeholder="Введите"
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
              <svg
                className="icon icon_color-theme-black"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                  stroke="none"
                />
                <path
                  d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                  stroke="none"
                />
              </svg>
            </span>
          </label>
        </div>
      </div>
      <div className="filters__button-apply">
        <button className="button button_theme-blue-transparent button_size_medium">
          Применить
        </button>
      </div>
    </div>
  );
};
