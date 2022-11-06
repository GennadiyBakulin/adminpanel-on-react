import React from 'react';
import classnames from 'classnames';
import styles from './Input.module.css';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';

const noop = () => {};
export const Input = ({
  className,
  incorrect,
  disabled,
  title,
  placeholder,
  prefixText,
  postfix,
  value = '',
  onChange = noop,
  onReset = noop
}) => {
  const blockClass = classnames(styles._, className, {
    [styles.incorrect]: incorrect,
    [styles.blocked]: disabled && !postfix
  });

  return (
    <label className={blockClass}>
      {title}
      <span className={styles.field}>
        {prefixText}
        <input
          className={styles.fieldText}
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {value.length > 0 && !postfix && (
          <Button className={styles.button} size='small' icon='x_medium' onClick={onReset} />
        )}
        {disabled && !postfix && <Icon className={styles.icon} name='locked' />}
        {postfix && <div className={styles.postfix}>{postfix}</div>}
      </span>
    </label>
  );
};
