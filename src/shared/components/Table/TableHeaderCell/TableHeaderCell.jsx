import React from 'react';
import classnames from 'classnames';
import styles from './TableHeaderCell.module.css';
import { Icon } from '../../Icon/Icon';

export const TableHeaderCell = ({ className, active, direction, children, onClick }) => {
  const blockClass = classnames(styles._, className, {
    [styles.active]: active,
    [styles.clickable]: onClick
  });
  const iconClassNames = classnames(styles.icon, {
    [styles.direction]: direction === true
  });

  return (
    <div className={blockClass} onClick={onClick}>
      {children}
      {onClick && <Icon className={iconClassNames} name='v_arrow' />}
    </div>
  );
};
