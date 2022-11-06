import React, { useContext } from 'react';
import styles from './FilterSearchPanel.module.css';
import { Button, Searchbar } from '../../../shared/components';
import { FiltersContext } from '../../../contexts/FiltersContext';

export const FilterSearchPanel = ({ showFilters, handlerClickShowFilters }) => {
  const { searchbarValue, handleChangeSearchbar, handleResetSearchbar, handleResetAllFilters } =
    useContext(FiltersContext);
  return (
    <div className={styles._}>
      <div className={styles.searchContainer}>
        <Searchbar
          className={styles.searchbar}
          placeholder='Номер заказа или ФИО'
          value={searchbarValue}
          onChange={handleChangeSearchbar}
          onReset={handleResetSearchbar}
        />
        <Button
          theme={showFilters ? 'blue' : 'blueTransparent'}
          size='medium'
          icon='filter'
          onClick={handlerClickShowFilters}
        >
          Фильтры
        </Button>
        <Button theme='blueTransparent' size='medium' onClick={handleResetAllFilters}>
          Сбросить фильтры
        </Button>
      </div>
      <Button theme='blueTransparent' size='small' icon='refresh'>
        Загрузка
      </Button>
    </div>
  );
};
