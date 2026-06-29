import type { DividerProps } from "./divider.interface";

import styles from './divider.module.scss';

export function Divider({ children, orientation }: DividerProps): React.ReactNode {
	const className: string = [styles.divider, styles[orientation ?? 'horizontal']].join(' ');

	return (
		<div className={className}>
			{children && children}
		</div>
	);
}