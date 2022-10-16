import "../../../css/checkbox/checkbox.css";
import { Icon } from "../Icon/Icon";
import React from "react";

export const Checkbox = () => {
  return (
    <div>
      <label className="checkbox">
        <input className="checkbox__area" type="checkbox" name="checkbox-button" />
        <Icon className="checkbox__icon" name="checkmark" />
      </label>
      <label className="checkbox">
        <input className="checkbox__area" type="checkbox" name="checkbox-button" />
        <Icon className="checkbox__icon" name="checkmark" />
      </label>
    </div>
  );
};