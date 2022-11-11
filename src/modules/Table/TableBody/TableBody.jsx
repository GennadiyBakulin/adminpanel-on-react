import React, { useContext } from 'react';
import styles from './TableBody.module.css';
import { Checkbox } from '../../../shared/components';
import { TableCell } from '../TableCell/TableCell';
import { TableRow } from '../TableRow/TableRow';
import { StatusOrder } from '../StatusOrder/StatusOrder';
import { ordersMock } from '../../mocks/ordersMock100Records';
import { SortedContext } from '../../../contexts/SortedContext';
import { FiltersContext } from '../../../contexts/FiltersContext';

let srt = ordersMock.concat();
export const TableBody = () => {
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
    <div className={styles._}>
      {srt.map((order) => (
        <TableRow className={styles.row} key={order.id} id={order.id}>
          <TableCell className={styles.checkboxCell}>
            <Checkbox />
          </TableCell>
          <TableCell className={styles.idCell}>{order.orderNumber}</TableCell>
          <TableCell className={styles.dateCell}>{order.date}</TableCell>
          <TableCell className={styles.statusCell}>
            <StatusOrder status={order.status} />
          </TableCell>
          <TableCell className={styles.positionCell}>{order.positionCount}</TableCell>
          <TableCell className={styles.amountCell}>{order.amount}</TableCell>
          <TableCell className={styles.nameCell}>{order.name}</TableCell>
        </TableRow>
      ))}
    </div>
  );
};
