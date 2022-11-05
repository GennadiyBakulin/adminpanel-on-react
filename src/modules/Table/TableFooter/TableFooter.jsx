import React from 'react';
import styles from './TableFooter.module.css';
import { Pagination } from '../../Pagination/Pagination';
import { TableChangeRecordsBlock } from '../TableChangeRecordsBlock/TableChangeRecordsBlock';

export const TableFooter = () => {
	return (
		<div className={styles._}>
			<TableChangeRecordsBlock />
			<Pagination />
		</div>
	);
};
