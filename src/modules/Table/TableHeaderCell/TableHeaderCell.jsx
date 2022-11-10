import React from 'react';
import classnames from 'classnames';
import styles from './TableHeaderCell.module.css';

export const TableHeaderCell = ({ className, name, click, children, onClick }) => {
  const blockClass = classnames(styles._, className, {
    [styles.hovering]: click
  });
  return (
    <div className={blockClass} id={name} onClick={onClick}>
      {children}
    </div>
  );
};
