import React, { useContext } from 'react';
import styles from './OrderTableHeader.module.css';
import { Checkbox, Icon } from '../../../shared/components';
import { TableHeaderCell } from '../../../shared/components/Table/TableHeaderCell/TableHeaderCell';
import { SortedContext } from '../../../contexts/SortedContext';
import { TableHeader } from '../../../shared/components/Table/TableHeader/TableHeader';

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
export const OrderTableHeader = () => {
  const { handlerClickSortedOnColumns, columnSorted, directionSorted } = useContext(SortedContext);

  return (
    <TableHeader className={styles._}>
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
        click={columnSorted === tableHead.dateField.name}
      >
        {tableHead.dateField.text}
        <Icon
          className={directionSorted && columnSorted === tableHead.dateField.name ? styles.iconReverse : styles.icon}
          name='v_arrow'
        />
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.statusCell}
        name={tableHead.statusField.name}
        onClick={handlerClickSortedOnColumns}
        click={columnSorted === tableHead.statusField.name}
      >
        {tableHead.statusField.text}
        <Icon
          className={directionSorted && columnSorted === tableHead.statusField.name ? styles.iconReverse : styles.icon}
          name='v_arrow'
        />
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.positionCell}
        name={tableHead.positionField.name}
        onClick={handlerClickSortedOnColumns}
        click={columnSorted === tableHead.positionField.name}
      >
        {tableHead.positionField.text}
        <Icon
          className={
            directionSorted && columnSorted === tableHead.positionField.name ? styles.iconReverse : styles.icon
          }
          name='v_arrow'
        />
      </TableHeaderCell>
      <TableHeaderCell
        className={styles.amountCell}
        name={tableHead.amountField.name}
        onClick={handlerClickSortedOnColumns}
        click={columnSorted === tableHead.amountField.name}
      >
        {tableHead.amountField.text}
        <Icon
          className={directionSorted && columnSorted === tableHead.amountField.name ? styles.iconReverse : styles.icon}
          name='v_arrow'
        />
      </TableHeaderCell>
      <TableHeaderCell className={styles.nameCell} name={tableHead.personNameField.name}>
        {tableHead.personNameField.text}
      </TableHeaderCell>
    </TableHeader>
  );
};
