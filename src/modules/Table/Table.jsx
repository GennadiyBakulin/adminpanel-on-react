import React from 'react';
import styles from './Table.module.css';
import { TableHeader } from './TableHeader/TableHeader';
import { TableBody } from './TableBody/TableBody';
import { TableFooter } from './TableFooter/TableFooter';

export const Table = () => {
	return (
		<div className={styles._}>
			<TableHeader />
			<TableBody />
			<TableFooter />
		</div>
	);
};
