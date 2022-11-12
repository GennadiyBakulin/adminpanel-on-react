import React, { useContext } from 'react';
import styles from './OrderTableBody.module.css';
import { Checkbox } from '../../../shared/components';
import { TableCell } from '../../../shared/components/Table/TableCell/TableCell';
import { TableRow } from '../../../shared/components/Table/TableRow/TableRow';
import { OrderStatus } from './OrderStatus/OrderStatus';
import { ordersMock } from '../../mocks/ordersMock100Records';
import { SortedContext } from '../../../contexts/SortedContext';
import { FiltersContext } from '../../../contexts/FiltersContext';
import { TableBody } from '../../../shared/components/Table/TableBody/TableBody';

let srt = ordersMock.concat();
export const OrderTableBody = () => {
  const { STATUSES_NAMES_TRANSLATION } = useContext(FiltersContext);
  const { columnSorted, directionSorted } = useContext(SortedContext);
  if (directionSorted) {
    srt = srt.sort((a, b) => {
      if (columnSorted === 'status') {
        return STATUSES_NAMES_TRANSLATION[a[columnSorted]] > STATUSES_NAMES_TRANSLATION[b[columnSorted]] ? 1 : -1;
      }
      return a[columnSorted] > b[columnSorted] ? 1 : -1;
    });
  } else {
    srt = srt.sort((a, b) => {
      if (columnSorted === 'status') {
        return STATUSES_NAMES_TRANSLATION[a[columnSorted]] < STATUSES_NAMES_TRANSLATION[b[columnSorted]] ? 1 : -1;
      }
      return a[columnSorted] < b[columnSorted] ? 1 : -1;
    });
  }
  return (
    <TableBody className={styles._}>
      {srt.map((order) => (
        <TableRow className={styles.row} key={order.id} id={order.id}>
          <TableCell className={styles.checkboxCell}>
            <Checkbox />
          </TableCell>
          <TableCell className={styles.idCell}>{order.orderNumber}</TableCell>
          <TableCell className={styles.dateCell}>{order.date}</TableCell>
          <TableCell className={styles.statusCell}>
            <OrderStatus status={order.status} />
          </TableCell>
          <TableCell className={styles.positionCell}>{order.positionCount}</TableCell>
          <TableCell className={styles.amountCell}>{order.amount}</TableCell>
          <TableCell className={styles.nameCell}>{order.name}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};
