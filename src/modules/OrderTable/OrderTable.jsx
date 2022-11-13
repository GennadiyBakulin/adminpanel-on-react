import React from 'react';
import { OrderTableHeader } from './OrderTableHeader/OrderTableHeader';
import { OrderTableBody } from './OrderTableBody/OrderTableBody';
import { OrderTableFooter } from './OrderTableFooter/OrderTableFooter';
import { SortedProvider } from '../../providers/SortedProvider';
import { Table } from '../../shared/components/Table/Table';

export const OrderTable = () => {
  return (
    <SortedProvider>
      <Table>
        <OrderTableHeader />
        <OrderTableBody />
        <OrderTableFooter />
      </Table>
    </SortedProvider>
  );
};
