import React from 'react';
import styles from './OrderTableFooter.module.css';
import { Pagination } from './Pagination/Pagination';
import { OrderTableChangeRecordsBlock } from './OrderTableChangeRecordsBlock/OrderTableChangeRecordsBlock';
import { TableFooter } from '../../../shared/components/Table/TableFooter/TableFooter';

export const OrderTableFooter = () => {
  return (
    <TableFooter className={styles._}>
      <OrderTableChangeRecordsBlock />
      <Pagination />
    </TableFooter>
  );
};
