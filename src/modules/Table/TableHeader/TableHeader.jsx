import React, { useContext } from 'react';
import styles from './TableHeader.module.css';
import { Checkbox, Icon } from '../../../shared/components';
import { TableHeaderCell } from '../TableHeaderCell/TableHeaderCell';
import { SortedContext } from '../../../contexts/SortedContext';

const tableHead = {
  checkField: { id: 'checkField' },
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
export const TableHeader = () => {
  const { handlerClickSortedOnColumns } = useContext(SortedContext);

  return (
    <div className={styles._}>
      <TableHeaderCell className={styles.checkboxCell} name={tableHead.checkField.name}>
        <Checkbox />
      </TableHeaderCell>
      <TableHeaderCell className={styles.idCell} name={tableHead.idField.name}>
        {tableHead.idField.text}
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.dateCell}
        name={tableHead.dateField.name}
        onClick={handlerClickSortedOnColumns}
      >
        {tableHead.dateField.text}
        <Icon className={styles.icon} name='v_arrow' />
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.statusCell}
        name={tableHead.statusField.name}
        onClick={handlerClickSortedOnColumns}
      >
        {tableHead.statusField.text}
        <Icon className={styles.icon} name='v_arrow' />
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.positionCell}
        name={tableHead.positionField.name}
        onClick={handlerClickSortedOnColumns}
      >
        {tableHead.positionField.text}
        <Icon className={styles.icon} name='v_arrow' />
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.amountCell}
        name={tableHead.amountField.name}
        onClick={handlerClickSortedOnColumns}
      >
        {tableHead.amountField.text}
        <Icon className={styles.icon} name='v_arrow' />
      </TableHeaderCell>
      <TableHeaderCell className={styles.nameCell} name={tableHead.personNameField.name}>
        {tableHead.personNameField.text}
      </TableHeaderCell>
    </div>
  );
};
