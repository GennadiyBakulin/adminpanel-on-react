import React from "react";
import { Buttons } from "./common/components/Button/Button";
import { Inputs } from "./common/components/Input/Input";
import "./css/style.css";
import { Searchbar } from "./common/components/Searchbar/Searchbar";
import { Checkbox } from "./common/components/Checkbox/Checkbox";
import { Radio } from "./common/components/Radio/Radio";
import { Dropdowns } from "./common/components/Dropdown/Dropdown";

export default function App() {
  return (
    <div>
      <div className="text-day-night">
        Input
        <Inputs />
      </div>
      <div className="text-day-night">
        Searchbar
        <div className='searchbar-wrapper'>
        <Searchbar />
          </div>
      </div>
      <div className="text-day-night">Checkbox и Radio</div>
      <div className="checkbox-radio-wrapper">
        <Checkbox />
        <Radio />
      </div>
      <div className="text-day-night">
        Dropdowns
        <Dropdowns />
      </div>
      <div className="text-day-night">
        Buttons
        <div className="buttons-wrapper">
        <Buttons />
        </div>
      </div>
    </div>
  );
}
