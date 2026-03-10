import { useMemo } from "react";

import type { ButtonProps } from "./button.interface";

import styles from './button.module.scss';

export const Button = ({ type, animated, style, className, children, onClick }: ButtonProps): React.ReactNode => {
	const classNames = useMemo((): string => {
		const classes: string[] = [styles.button];

		if (type == null || type === 'default') classes.push(styles.default);
		if (type === 'primary') classes.push(styles.primary);
		if (type === 'text') classes.push(styles.text);
		if (className && className.length > 0) classes.push(className);
		if (animated) classes.push(styles.animated);

		return classes.join(' ');
	}, [type, className, animated]);

	return (
		<button
			style={style}
			className={classNames}
			onClick={onClick}
		>
			{children ?? ''}
		</button>
	);
};