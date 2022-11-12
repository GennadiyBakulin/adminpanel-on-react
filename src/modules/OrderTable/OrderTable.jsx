import React from 'react';
import styles from './OrderTable.module.css';
import { OrderTableHeader } from './OrderTableHeader/OrderTableHeader';
import { OrderTableBody } from './OrderTableBody/OrderTableBody';
import { OrderTableFooter } from './OrderTableFooter/OrderTableFooter';
import { SortedProvider } from '../../providers/SortedProvider';

export const OrderTable = () => {
  return (
    <SortedProvider>
      <div className={styles._}>
        <OrderTableHeader />
        <OrderTableBody />
        <OrderTableFooter />
      </div>
    </SortedProvider>
  );
};
