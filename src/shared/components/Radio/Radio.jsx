import React from 'react';
import classnames from 'classnames';
import styles from './Radio.module.css';

export const Radio = function Radio({ className, name, value, text, checked }) {
  const blockClass = classnames(styles._, className);

  return (
    <label className={blockClass}>
      <input className={styles.area} type='radio' name={name} value={value} checked={checked} />
      {text && <span className={styles.text}>{text}</span>}
    </label>
  );
};
