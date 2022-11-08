import React from 'react';
import styles from './FilterSelectorsPanel.module.css';
import { Button } from '../../../shared/components';
import { FiltersDateRegistration } from './FiltersDateRegistration/FiltersDateRegistration';
import { FilterOrderStatus } from './FilterOrderStatus/FilterOrderStatus';
import { FiltersOrderAmount } from './FiltersOrderAmount/FiltersOrderAmount';

export const FilterSelectorsPanel = () => {
  return (
    <div className={styles._}>
      <FiltersDateRegistration />
      <FilterOrderStatus />
      <FiltersOrderAmount />
      <Button theme='blueTransparent' size='medium'>
        Применить
      </Button>
    </div>
  );
};
