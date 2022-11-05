import React, { useState } from 'react';
import styles from './Search.module.css';
import { Button, Searchbar } from '../../shared/components';
import { Filters } from '../Filters/Filters';

const p = () => {};

export const Search = () => {
  const [showFilters, setShowFilters] = useState(false);

  const handlerShowFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={styles._}>
      <div className={styles.topPanel}>
        <div className={styles.searchContainer}>
          <Searchbar className={styles.searchbar} placeholder='Номер заказа или ФИО' filled onChange={p} />
          <Button
            theme={showFilters ? 'blue' : 'blueTransparent'}
            size='medium'
            icon='filter'
            onClick={handlerShowFilters}
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
      {showFilters && <Filters />}
    </div>
  );
};
