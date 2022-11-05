import React from 'react';
import classnames from 'classnames';
import styles from './Input.module.css';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';

const INPUT_STATES = {
	incorrect: 'incorrect',
	disabled: 'disabled',
	multiple: 'multiple'
};

export const Input = ({ className, inputStates, title, placeholder, value = '', onChange, prevText }) => {
	const blockClass = classnames(styles._, className, {
		[styles.incorrect]: inputStates === INPUT_STATES.incorrect,
		[styles.disabled]: inputStates === INPUT_STATES.disabled,
		[styles.multiple]: inputStates === INPUT_STATES.multiple
	});

	return (
		<label className={blockClass}>
			{title}
			<span className={styles.field}>
				{prevText}
				<input
					className={styles.fieldText}
					type='text'
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					disabled={inputStates === INPUT_STATES.disabled || inputStates === INPUT_STATES.multiple}
				/>
				{inputStates === INPUT_STATES.incorrect && <Button className={styles.button} size='small' icon='x_medium' />}
				{inputStates === INPUT_STATES.multiple && <Icon className={styles.icon} name='v_arrow' />}
				{inputStates === INPUT_STATES.disabled && <Icon className={styles.icon} name='locked' />}
			</span>
		</label>
	);
};
