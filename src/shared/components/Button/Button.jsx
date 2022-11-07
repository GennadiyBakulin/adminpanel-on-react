import React from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon/Icon';
import styles from './Button.module.css';

const ThemeTypes = {
  blue: 'blue',
  red: 'red',
  blueTransparent: 'blueTransparent',
  blackTransparent: 'blackTransparent'
};

const SizeTypes = {
  medium: 'medium',
  small: 'small',
  large: 'large'
};

export const Button = ({ className, theme, size, children, icon, type = 'button', ...props }) => {
  const blockClass = classnames(styles._, className, {
    [styles.blue]: theme === ThemeTypes.blue,
    [styles.red]: theme === ThemeTypes.red,
    [styles.blueTransparent]: theme === ThemeTypes.blueTransparent,
    [styles.blackTransparent]: theme === ThemeTypes.blackTransparent,
    [styles.medium]: size === SizeTypes.medium,
    [styles.small]: size === SizeTypes.small,
    [styles.large]: size === SizeTypes.large,
    [styles.iconOnly]: !children
  });

  return (
    <button type={type} className={blockClass} onClick={props.onClick}>
      {icon && <Icon className={styles.icon} name={icon} />}
      {children}
    </button>
  );
};
