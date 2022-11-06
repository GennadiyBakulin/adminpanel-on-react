import React from 'react';
import styles from './FiltersOrderAmount.module.css';
import { Input } from '../../../../shared/components';

const noop = () => {};
export const FiltersOrderAmount = () => {
  return (
    <div className={styles._}>
      <Input title='Сумма заказа' placeholder='Введите' prefixText='от' value='5000' onChange={noop} />
      <Input placeholder='Введите' prefixText='до' onChange={noop} />
    </div>
  );
};
