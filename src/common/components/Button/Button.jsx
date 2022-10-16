import React from "react";
import "../../../css/button/button.css";
import { Icon } from "../Icon/Icon";

export const Buttons = () => {
  return (
    <div className="buttons-wrapper">
      <button className="button button_theme-blue button_size_medium">
        <Icon className="icon" name="x_medium" />
        Text here
      </button>
      <button className="button button_theme-blue-transparent button_size_medium">
        <Icon className="icon" name="x_medium" />
        Text here
      </button>
      <button className="button button_theme-black-transparent button_size_medium">
        <Icon className="icon" name="x_medium" />
        Text here
      </button>

      <button className="button button_theme-blue button_size_medium">
        Text here
      </button>
      <button className="button button_theme-blue-transparent button_size_medium">
        Text here
      </button>
      <button className="button button_theme-black-transparent button_size_medium">
        Text here
      </button>

      <button className="button button_theme-blue button_size_medium button_icon-only">
        <Icon className="icon" name="x_medium" />
      </button>
      <button className="button button_theme-blue-transparent button_size_medium button_icon-only">
        <Icon className="icon" name="x_medium" />
      </button>
      <button className="button button_theme-black-transparent button_size_medium button_icon-only">
        <Icon className="icon" name="x_medium" />
      </button>
      <button className="button button_theme-blue button_size_small">
        <Icon className="icon" name="x_medium" />
        Text here
      </button>
      <button className="button button_theme-blue-transparent button_size_small">
        <Icon className="icon" name="x_medium" />
        Text here
      </button>

      <button className="button button_theme-blue button_size_small">
        Text here
      </button>
      <button className="button button_theme-blue-transparent button_size_small">
        Text here
      </button>

      <button className="button button_theme-blue button_size_small button_icon-only">
        <Icon className="icon" name="x_medium" />
      </button>
      <button className="button button_theme-blue-transparent button_size_small button_icon-only">
        <Icon className="icon" name="x_medium" />
      </button>
    </div>
  );
};
