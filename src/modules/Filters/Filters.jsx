import React from 'react';
import styles from './Filters.module.css';
import { Button, Checkbox, Dropdown, Icon, Input } from '../../shared/components';

export const Filters = () => {
  const noop = () => {};
  return (
    <div className={styles._}>
      <div className={styles.registration}>
        <Input title='Дата оформления' placeholder='Введите' prefixText='с' value='20.01.2021' onChange={noop} />
        <Input placeholder='Введите' prefixText='по' onChange={noop} />
      </div>
      <Dropdown
        className={styles.multipleStatus}
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
      <div className={styles.amount}>
        <Input title='Сумма заказа' placeholder='Введите' prefixText='от' value='5000' onChange={noop} />
        <Input placeholder='Введите' prefixText='до' onChange={noop} />
      </div>
      <Button theme='blueTransparent' size='medium'>
        Применить
      </Button>
    </div>
  );
};
