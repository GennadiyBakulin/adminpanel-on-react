import React from 'react';
import styles from './Filters.module.css';
import { Button, Checkbox, Dropdown, Input } from '../../shared/components';

export const Filters = () => {
	const p = () => {};
	return (
		<div className={styles._}>
			<div className={styles.registration}>
				<Input title='Дата оформления' placeholder='Введите' prevText='с' value='20.01.2021' onChange={p} />
				<Input placeholder='Введите' prevText='по' onChange={p} />
			</div>
			<Dropdown
				className={styles.multipleStatus}
				trigger={
					<div>
						<Input title='Статус заказа' value='Новый' inputStates='multiple' onChange={p} />
					</div>
				}
				overlay={
					<>
						<Checkbox className={styles.checkbox} text='Новый' name='filtersOrder' />
						<Checkbox className={styles.checkbox} text='Расчет' name='filtersOrder' />
						<Checkbox className={styles.checkbox} text='Подтвержден' name='filtersOrder' />
						<Checkbox className={styles.checkbox} text='Отложен' name='filtersOrder' />
						<Checkbox className={styles.checkbox} text='Выполнен' name='filtersOrder' />
						<Checkbox className={styles.checkbox} text='Отменен' name='filtersOrder' />
					</>
				}
			/>
			<div className={styles.amount}>
				<Input title='Сумма заказа' placeholder='Введите' prevText='от' value='5000' onChange={p} />
				<Input placeholder='Введите' prevText='до' onChange={p} />
			</div>
			<Button theme='blueTransparent' size='medium' value='Применить' />
		</div>
	);
};
