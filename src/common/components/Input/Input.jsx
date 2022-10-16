import React from "react";
import "../../../css/input/input.css";
import { Icon } from "../Icon/Icon";

export const Inputs = () => {
  return (
    <div>
      <div className="input-wrapper">
        <div className="input">
          <label className="input__title">
            Дата и время заказа
            <span className="input__field">
              <input
                className="input__field-text"
                type="text" placeholder="Введите" />
              <button className="button button_size_small button_icon-only">
                <Icon className="icon" name="x_medium" />
              </button>
              <Icon className="icon" name="locked" />
              </span>
          </label>
        </div>
        <div className="input input_incorrect">
          <label className="input__title">Дата и время заказа
            <span className="input__field">
                <input
                  className="input__field-text"
                  type="text"
                  placeholder="Введите"
                  value="06.12.2021" />
                <button className="button button_size_small button_icon-only">
                  <Icon className="icon" name="x_medium" />
                </button>
              <Icon className="icon" name="locked" />
              </span>
          </label>
        </div>
        <div className="input input_disabled">
          <label className="input__title"
          >Дата и время заказа
            <span className="input__field">
                <input
                  className="input__field-text"
                  type="text"
                  placeholder="Введите"
                  value="06.12.2021"
                  disabled />
                <button className="button button_size_small button_icon-only">
                  <Icon className="icon" name="x_medium" />
                </button>
              <Icon className="icon" name="locked" />
              </span>
          </label>
        </div>
      </div>
    </div>
  );
};