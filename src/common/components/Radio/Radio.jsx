import React from "react";
import classnames from "classnames";
import styles from "./Radio.module.css";

export const Radio = function Radio({
  className,
  name,
  text,
  checked,
  ...props
}) {
  const blockClass = classnames(styles._, {
    className: className ? className : "",
  });

  return (
    <label className={blockClass}>
      <input
        className={styles.area}
        type="radio"
        name={name}
        checked={checked}
        {...props}
      />
      {text ? <span className={styles.text}>{text}</span> : ""}
    </label>
  );
};
