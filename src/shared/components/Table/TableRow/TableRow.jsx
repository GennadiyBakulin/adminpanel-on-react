import React from 'react';
import classnames from 'classnames';
import styles from './TableRow.module.css';

export const TableRow = ({ className, children }) => {
  const blockClass = classnames(styles._, className);

  return <div className={blockClass}>{children}</div>;
};
