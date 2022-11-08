import React, { useContext } from 'react';
import styles from './FiltersOrderAmount.module.css';
import { Input } from '../../../../shared/components';
import { FiltersContext } from '../../../../contexts/FiltersContext';

export const FiltersOrderAmount = () => {
  const {
    filterSumFromValue,
    handleChangeFilterSumFromValue,
    handleResetFilterSumFromValue,
    filterSumToValue,
    handleChangeFilterSumToValue,
    handleResetFilterSumToValue
  } = useContext(FiltersContext);
  return (
    <div className={styles._}>
      <Input
        title='Сумма заказа'
        placeholder='Введите'
        prefixText='от'
        value={filterSumFromValue}
        onChange={handleChangeFilterSumFromValue}
        onReset={handleResetFilterSumFromValue}
      />
      <Input
        placeholder='Введите'
        prefixText='до'
        value={filterSumToValue}
        onChange={handleChangeFilterSumToValue}
        onReset={handleResetFilterSumToValue}
      />
    </div>
  );
};
