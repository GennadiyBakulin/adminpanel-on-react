import React from "react";
import classnames from "classnames";
import styles from "./Checkbox.module.css";
import { Icon } from "../Icon/Icon";

export const Checkbox = ({ className, name, text, ...props }) => {
  const blockClass = classnames(styles._, {
    className: className ? className : "",
  });

  return (
    <label className={blockClass}>
      <input className={styles.area} type="checkbox" name={name} {...props} />
      <Icon className={styles.icon} name="checkmark" />
      {text ? <span className={styles.text}>{text}</span> : ""}
    </label>
  );
};
