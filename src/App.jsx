import { Buttons } from "./shared/Button/Button";
import { Inputs } from "./shared/Input/Input";
import "./css/style.css";
import { Searchbar } from "./shared/Searchbar/Searchbar";
import { Checkbox } from "./shared/Checkbox/Checkbox";
import { Radio } from "./shared/Radio/Radio";
import { Dropdowns } from "./shared/Dropdown/Dropdown";

export default function App() {
  return (
                   <div>
      <div className="text-day-night">
        Input
            <Inputs />
      </div>
      <div className="text-day-night">
        Searchbar
        <Searchbar />
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
        <Buttons />
      </div>
    </div>
  );
}
