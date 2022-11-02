import React from 'react';
import styles from './Pagination.module.css';
import { Button } from '../../shared/components';

export const Pagination = () => {
	return (
		<div className={styles._}>
			<div className={styles.selectPage}>
				<Button theme='blue' size='small' value='1' />
				<Button theme='blueTransparent' size='small' value='2' />
				<Button theme='blueTransparent' size='small' value='3' />
				...
				<Button theme='blueTransparent' size='small' value='18' />
			</div>
			<div className={styles.currentPage}>
				<Button theme='blueTransparent' size='small' value='#' />
			</div>
		</div>
	);
};
