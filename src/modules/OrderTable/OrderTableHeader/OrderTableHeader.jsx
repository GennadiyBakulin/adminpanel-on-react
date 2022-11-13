import React, { useContext } from 'react';
import styles from '../OrderTable.module.css';
import { Checkbox } from '../../../shared/components';
import { TableHeaderCell } from '../../../shared/components/Table/TableHeaderCell/TableHeaderCell';
import { SortedContext } from '../../../contexts/SortedContext';
import { TableHeader } from '../../../shared/components/Table/TableHeader/TableHeader';

const tableHead = {
  checkField: { name: 'checkField' },
  idField: {
    name: 'id',
    text: '#'
  },
  dateField: {
    name: 'date',
    text: 'Дата'
  },
  statusField: {
    name: 'status',
    text: 'Статус'
  },
  positionField: {
    name: 'positionCount',
    text: 'Позиций'
  },
  amountField: {
    name: 'amount',
    text: 'Сумма'
  },
  personNameField: {
    name: 'name',
    text: 'ФИО покупателя'
  }
};
export const OrderTableHeader = () => {
  const { handleClickSort, columnSorted, directionSorted } = useContext(SortedContext);
  return (
    <TableHeader>
      <TableHeaderCell className={styles.checkboxCell}>
        <Checkbox />
      </TableHeaderCell>
      <TableHeaderCell className={styles.idCell}>{tableHead.idField.text}</TableHeaderCell>
      <TableHeaderCell
        className={styles.dateCell}
        onClick={() => handleClickSort(tableHead.dateField.name)}
        active={columnSorted === tableHead.dateField.name}
        direction={tableHead.dateField.name === columnSorted && directionSorted}
      >
        {tableHead.dateField.text}
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.statusCell}
        onClick={() => handleClickSort(tableHead.statusField.name)}
        active={columnSorted === tableHead.statusField.name}
        direction={tableHead.statusField.name === columnSorted && directionSorted}
      >
        {tableHead.statusField.text}
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.positionCell}
        onClick={() => handleClickSort(tableHead.positionField.name)}
        active={columnSorted === tableHead.positionField.name}
        direction={tableHead.positionField.name === columnSorted && directionSorted}
      >
        {tableHead.positionField.text}
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.amountCell}
        onClick={() => handleClickSort(tableHead.amountField.name)}
        active={columnSorted === tableHead.amountField.name}
        direction={tableHead.amountField.name === columnSorted && directionSorted}
      >
        {tableHead.amountField.text}
      </TableHeaderCell>
      <TableHeaderCell className={styles.nameCell}>{tableHead.personNameField.text}</TableHeaderCell>
    </TableHeader>
  );
};
