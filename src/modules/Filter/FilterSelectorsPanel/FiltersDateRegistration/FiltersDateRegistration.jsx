import React, { useContext } from 'react';
import styles from './FiltersDateRegistration.module.css';
import { Input } from '../../../../shared/components';
import { FiltersContext } from '../../../../contexts/FiltersContext';

export const FiltersDateRegistration = () => {
  const {
    filterDateFromValue,
    handleChangeFilterDateFromValue,
    handleResetFilterDateFromValue,
    filterDateToValue,
    handleChangeFilterDateToValue,
    handleResetFilterDateToValue
  } = useContext(FiltersContext);
  return (
    <div className={styles._}>
      <Input
        title='Дата оформления'
        placeholder='Введите'
        prefixText='с'
        value={filterDateFromValue}
        onChange={handleChangeFilterDateFromValue}
        onReset={handleResetFilterDateFromValue}
      />
      <Input
        placeholder='Введите'
        prefixText='по'
        value={filterDateToValue}
        onChange={handleChangeFilterDateToValue}
        onReset={handleResetFilterDateToValue}
      />
    </div>
  );
};
