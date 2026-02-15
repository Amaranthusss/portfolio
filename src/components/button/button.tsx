import { useMemo } from "react";

import type { ButtonProps } from "./button.interface";

import styles from './button.module.scss';

export const Button = ({ type, children, onClick }: ButtonProps): React.ReactNode => {
	const classNames = useMemo((): string => {
		const classes: string[] = [styles.button];

		if (type == null || type === 'default') classes.push(styles.default);
		if (type === 'primary') classes.push(styles.primary);
		if (type === 'text') classes.push(styles.text);

		return classes.join(' ');
	}, [type]);

	return (
		<button
			className={classNames}
			onClick={onClick}
		>
			{children ?? ''}
		</button>
	);
};