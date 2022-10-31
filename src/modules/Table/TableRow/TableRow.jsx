import React from "react";
import styles from "./TableRow.module.css";
import classnames from "classnames";

export const TableRow = ({className, children}) => {
  const blockClass = classnames(styles._, className);

  return <div className={blockClass}>{children}</div>;
};
