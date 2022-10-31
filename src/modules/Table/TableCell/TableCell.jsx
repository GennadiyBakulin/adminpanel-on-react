import React from "react";
import styles from "./TableCell.module.css";
import classnames from "classnames";

export const TableCell = ({className, name, children}) => {
  const blockClass = classnames(styles._, className);

  return (
    <div className={blockClass} id={name}>
      {children}
    </div>
  );
};
