import React from 'react';
import styles from './FilterSearchPanel.module.css';
import { Button, Searchbar } from '../../../shared/components';

export const FilterSearchPanel = ({ showFilters, handlerClickShowFilters }) => {
  return (
    <div className={styles._}>
      <div className={styles.searchContainer}>
        <Searchbar className={styles.searchbar} placeholder='Номер заказа или ФИО' filled onChange={() => {}} />
        <Button
          theme={showFilters ? 'blue' : 'blueTransparent'}
          size='medium'
          icon='filter'
          onClick={handlerClickShowFilters}
        >
          Фильтры
        </Button>
        <Button theme='blueTransparent' size='medium'>
          Сбросить фильтры
        </Button>
      </div>
      <Button theme='blueTransparent' size='small' icon='refresh'>
        Загрузка
      </Button>
    </div>
  );
};
