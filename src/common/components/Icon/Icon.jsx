import React from "react";
import { icons } from "../../icons/index";

export const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent {...props} />;
};
