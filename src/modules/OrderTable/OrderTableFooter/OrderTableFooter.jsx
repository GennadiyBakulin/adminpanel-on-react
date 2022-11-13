import React from 'react';
import { Pagination } from './Pagination/Pagination';
import { OrderTableChangeRecordsBlock } from './OrderTableChangeRecordsBlock/OrderTableChangeRecordsBlock';
import { TableFooter } from '../../../shared/components/Table/TableFooter/TableFooter';

export const OrderTableFooter = () => {
  return (
    <TableFooter>
      <OrderTableChangeRecordsBlock />
      <Pagination />
    </TableFooter>
  );
};
