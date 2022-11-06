import React from 'react';
import styles from './FilterOrderStatus.module.css';
import { Checkbox, Dropdown, Icon, Input } from '../../../../shared/components';

const noop = () => {};

export const FilterOrderStatus = () => {
  return (
    <Dropdown
      className={styles._}
      trigger={
        <div>
          <Input
            title='Статус заказа'
            value='Новый'
            postfix={<Icon className={styles.multiple} name='v_arrow' />}
            onChange={noop}
            disabled
          />
        </div>
      }
      overlay={
        <>
          <Checkbox className={styles.checkbox} text='Новый' name='filtersOrder' />
          <Checkbox className={styles.checkbox} text='Расчет' name='filtersOrder' />
          <Checkbox className={styles.checkbox} text='Подтвержден' name='filtersOrder' />
          <Checkbox className={styles.checkbox} text='Отложен' name='filtersOrder' />
          <Checkbox className={styles.checkbox} text='Выполнен' name='filtersOrder' />
          <Checkbox className={styles.checkbox} text='Отменен' name='filtersOrder' />
        </>
      }
    />
  );
};
