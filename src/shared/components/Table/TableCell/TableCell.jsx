import React from 'react';
import classnames from 'classnames';
import styles from './TableCell.module.css';

export const TableCell = ({ className, children }) => {
  const blockClass = classnames(styles._, className);

  return <div className={blockClass}>{children}</div>;
};
