import "../../../css/set-dropdowns/delete-records/delete-records.css";
import "../../../css/set-dropdowns/go-to-page/go-to-page.css";
import "../../../css/set-dropdowns/multiple-status/multiple-status.css";
import "../../../css/set-dropdowns/single-status/single-status.css";
import "../../../css/set-dropdowns/theme-switcher/theme-switcher.css";
import { Icon } from "../Icon/Icon";
import React from "react";

export const Dropdowns = () => {
  return (
    <div className="dropdowns-wrapper">
      <div className="go-to-page">
        <div className="input">
          <label className="input__title">
            Номер страницы
            <span className="input__field">
                  <input
                    className="input__field-text"
                    type="text"
                    placeholder="Введите" />
                  <button className="button button_size_small button_icon-only">
                    <Icon className="icon" name="x_medium" />
                  </button>
                <Icon className="icon" name="locked" />
                </span>
          </label>
        </div>
      </div>
      <div className="delete-records">
        Удалить n записей?
        <button className="button button_theme-blue-transparent button_size_small">
          Удалить
        </button>
        <button className="button button_theme-blue button_size_small">
          Отмена
        </button>
      </div>
      <div className="theme-switcher">
        Выберите тему
        <button className="button button_theme-blue-transparent button_size_small">
          <Icon className="icon" name="sun" />
          Светлая
        </button>
        <button className="button button_theme-blue button_size_small">
          <Icon className="icon" name="moon" />
          Тёмная
        </button>
      </div>
      <div className="multiple-status">
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          <Icon className="checkbox__icon" name="checkmark" />
          <span className="checkbox__text">Новый</span>
        </label>
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          <Icon className="checkbox__icon" name="checkmark" />
          <span className="checkbox__text">Расчет</span>
        </label>
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          <Icon className="checkbox__icon" name="checkmark" />
          <span className="checkbox__text">Подтвержден</span>
        </label>
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          <Icon className="checkbox__icon" name="checkmark" />
          <span className="checkbox__text">Отложен</span>
        </label>
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          <Icon className="checkbox__icon" name="checkmark" />
          <span className="checkbox__text">Выполнен</span>
        </label>
        <label className="checkbox">
          <input className="checkbox__area" type="checkbox" />
          <Icon className="checkbox__icon" name="checkmark" />
          <span className="checkbox__text">Отменен</span>
        </label>
      </div>
      <div className="single-status">
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text">Новый</span>
        </label>
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text">Расчёт</span>
        </label>
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text"
        >Подтверждён</span>
        </label>
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text">Отложен</span>
        </label>
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text">Выполнен</span>
        </label>
        <label className="radio">
          <input className="radio__area" type="radio" name="radio-button" /><span
          className="radio__text">Отменён</span>
        </label>
      </div>
    </div>
  );
};