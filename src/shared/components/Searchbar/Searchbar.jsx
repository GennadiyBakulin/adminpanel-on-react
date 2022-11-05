import React from 'react';
import classnames from 'classnames';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import styles from './Searchbar.module.css';

export const Searchbar = ({ className, placeholder, filled, value = '', onChange }) => {
  const blockClass = classnames(styles._, className);

  return (
    <div className={blockClass}>
      <Icon className={styles.search} name='search' />
      <input className={styles.text} type='text' placeholder={placeholder} value={value} onChange={onChange} />
      {filled && <Button className={styles.button} size='small' icon='x_medium' />}
    </div>
  );
};
