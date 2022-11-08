import React from 'react';
import classnames from 'classnames';
import styles from './Checkbox.module.css';
import { Icon } from '../Icon/Icon';

export const Checkbox = ({ className, name, text, value, checked, onChange, ...props }) => {
  const blockClass = classnames(styles._, className);

  return (
    <label className={blockClass}>
      <div className={styles.wrapper}>
        <input
          className={styles.area}
          type='checkbox'
          name={name}
          checked={checked}
          value={value}
          onChange={onChange}
        />
        <Icon className={styles.icon} name='checkmark' {...props} />
        {text && <span className={styles.text}>{text}</span>}
      </div>
    </label>
  );
};
