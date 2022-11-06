import React from 'react';
import styles from './AdminPage.module.css';
import { Header } from '../modules/Header/Header';
import { Filter } from '../modules/Filter/Filter';
import { FiltersProvider } from '../providers/FiltersProvider';

export const AdminPage = () => {
  return (
    <FiltersProvider>
      <div className={styles._}>
        <Header />
        <Filter />
      </div>
    </FiltersProvider>
  );
};
