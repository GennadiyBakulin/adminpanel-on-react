import React, { useContext } from 'react';
import styles from './Filter.module.css';
import { FilterSelectorsPanel } from './FilterSelectorsPanel/FilterSelectorsPanel';
import { FiltersContext } from '../../contexts/FiltersContext';
import { FilterSearchPanel } from './FilterSearchPanel/FilterSearchPanel';

export const Filter = () => {
  const { showFilters, handlerClickShowFilters } = useContext(FiltersContext);
  return (
    <div className={styles._}>
      <FilterSearchPanel showFilters={showFilters} handlerClickShowFilters={handlerClickShowFilters} />
      {showFilters && <FilterSelectorsPanel />}
    </div>
  );
};
