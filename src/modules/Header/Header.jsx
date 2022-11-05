import React from 'react';
import styles from './Header.module.css';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export const Header = () => {
  return (
    <header className={styles._}>
      <h1 className={styles.title}>Список заказов</h1>
      <ThemeSwitcher />
    </header>
  );
};
