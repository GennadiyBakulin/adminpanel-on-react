import React from "react";
import {
  Buttons,
  Inputs,
  Searchbar,
  Checkbox,
  Radio,
  Dropdowns,
} from "./common/components";
import "./css/style.css";

export default function App() {
  return (
    <div>
      <div className="text-day-night">
        Input
        <div className="input-wrapper">
          <Inputs />
        </div>
      </div>
      <div className="text-day-night">
        Searchbar
        <div className="searchbar-wrapper">
          <Searchbar placeholder="Номер заказа или ФИО" />
          <Searchbar filled placeholder="Номер заказа или ФИО" />
        </div>
      </div>
      <div className="text-day-night">Checkbox и Radio</div>
      <div className="checkbox-radio-wrapper">
        <Checkbox name="checkbox-button" checked />
        <Checkbox name="checkbox-button" />
        <Radio name="radio-button" />
        <Radio name="radio-button" checked />
      </div>
      <div className="text-day-night">
        Buttons
        <div className="buttons-wrapper">
          <Buttons />
        </div>
      </div>
      <div className="text-day-night">
        Dropdowns
        <Dropdowns />
      </div>
    </div>
  );
}
