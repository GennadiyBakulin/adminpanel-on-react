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
            value='Фильтры'
            onClick={handlerShowFilters}
          />
          <Button theme='blueTransparent' size='medium' value='Сбросить фильтры' />
        </div>
        <Button theme='blueTransparent' size='small' icon='refresh' value='Загрузка' />
      </div>
      {showFilters && <Filters />}
    </div>
  );
};
