import React, { cloneElement, useState } from 'react';
import classnames from 'classnames';
import styles from './Dropdown.module.css';

export const Dropdown = ({ className, trigger, overlay }) => {
  const [isOpen, setIsOpen] = useState(false);

  const newTrigger = cloneElement(trigger, { onClick: () => setIsOpen(!isOpen) });

  return (
    <div className={styles._}>
      {newTrigger}
      {isOpen && <div className={classnames(styles.overlay, className)}>{overlay}</div>}
    </div>
  );
};
