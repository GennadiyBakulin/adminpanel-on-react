import React from 'react';
import styles from './TableChangeRecordsBlock.module.css';
import { RecordsDelete } from '../../RecordsDelete/RecordsDelete';
import { StatusChange } from '../../StatusChange/StatusChange';

export const TableChangeRecordsBlock = () => {
  return (
    <div className={styles._}>
      <div className={styles.selectionRecords}>Выбрано записей: 5</div>
      <StatusChange />
      <RecordsDelete />
    </div>
  );
};
