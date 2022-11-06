import React from 'react';
import styles from './FiltersDateRegistration.module.css';
import { Input } from '../../../../shared/components';

export const FiltersDateRegistration = () => {
  return (
    <div className={styles._}>
      <Input title='Дата оформления' placeholder='Введите' prefixText='с' value='20.01.2021' onChange={() => {}} />
      <Input placeholder='Введите' prefixText='по' onChange={() => {}} />
    </div>
  );
};
