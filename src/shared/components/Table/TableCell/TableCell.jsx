import React from 'react';
import classnames from 'classnames';
import styles from './TableCell.module.css';

export const TableCell = ({ className, id, children }) => {
  const blockClass = classnames(styles._, className);

  return (
    <div className={blockClass} id={id}>
      {children}
    </div>
  );
};
