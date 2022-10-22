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
        <Inputs />
      </div>
      <div className="text-day-night">
        Searchbar
        <div className="searchbar-wrapper">
          <Searchbar />
        </div>
      </div>
      <div className="text-day-night">Checkbox и Radio</div>
      <div className="checkbox-radio-wrapper">
        <Checkbox name="checkbox-button" />
        <Checkbox name="checkbox-button" />
        <Radio name="radio-button" />
        <Radio name="radio-button" />
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
