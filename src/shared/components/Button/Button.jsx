import React from "react";
import classnames from "classnames";
import { Icon } from "../Icon/Icon";
import styles from "./Button.module.css";

const ThemeTypes = {
  blue: "blue",
  red: "red",
  blueTransparent: "blueTransparent",
  blackTransparent: "blackTransparent",
};

const SizeTypes = {
  medium: "medium",
  small: "small",
  large: "large",
};

export const Button = ({ className, theme, size, text, icon, ...props }) => {
  const blockClass = classnames(styles._, className, {
    [styles.blue]: theme === ThemeTypes.blue,
    [styles.red]: theme === ThemeTypes.red,
    [styles.blueTransparent]: theme === ThemeTypes.blueTransparent,
    [styles.blackTransparent]: theme === ThemeTypes.blackTransparent,
    [styles.medium]: size === SizeTypes.medium,
    [styles.small]: size === SizeTypes.small,
    [styles.large]: size === SizeTypes.large,
    [styles.iconOnly]: !text,
  });

  return (
    <button className={blockClass}>
      {icon && <Icon className={styles.icon} name={icon} {...props} />}
      {text && text}
    </button>
  );
};

export const Buttons = () => {
  return (
    <>
      <Button theme="blue" size="medium" icon="x_medium" text="Text here" />
      <Button
        theme="blueTransparent"
        size="medium"
        icon="x_medium"
        text="Text here"
      />
      <Button
        theme="blackTransparent"
        size="medium"
        icon="x_medium"
        text="Text here"
      />

      <Button theme="blue" size="medium" text="Text here" />
      <Button theme="blueTransparent" size="medium" text="Text here" />
      <Button theme="blackTransparent" size="medium" text="Text here" />

      <Button theme="blue" size="medium" icon="x_medium" />
      <Button theme="blueTransparent" size="medium" icon="x_medium" />
      <Button theme="blackTransparent" size="medium" icon="x_medium" />

      <Button theme="blue" size="small" icon="x_medium" text="Text here" />
      <Button
        theme="blueTransparent"
        size="small"
        icon="x_medium"
        text="Text here"
      />

      <Button theme="blue" size="small" text="Text here" />
      <Button theme="blueTransparent" size="small" text="Text here" />

      <Button theme="blue" size="small" icon="x_medium" />
      <Button theme="blueTransparent" size="small" icon="x_medium" />
    </>
  );
};
