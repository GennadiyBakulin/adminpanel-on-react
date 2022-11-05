import React from 'react';
import styles from './TableBody.module.css';
import { Checkbox } from '../../../shared/components';
import { TableCell } from '../TableCell/TableCell';
import { TableRow } from '../TableRow/TableRow';
import { StatusOrder } from '../StatusOrder/StatusOrder';
import { ordersMock } from '../mocks/ordersMock100Records';

export const TableBody = () => {
	return (
		<div className={styles._}>
			{ordersMock.map((order) => (
				<TableRow className={styles.row} key={order.id}>
					<TableCell className={styles.checkboxCell}>
						<Checkbox />
					</TableCell>
					<TableCell className={styles.idCell}>{order.id}</TableCell>
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
