import React from 'react';
import classnames from 'classnames';
import styles from './TableHeaderCell.module.css';

export const TableHeaderCell = ({ className, name, children, onClick }) => {
  const blockClass = classnames(styles._, className);

  return (
    <div className={blockClass} id={name} onClick={onClick}>
      {children}
    </div>
  );
};
