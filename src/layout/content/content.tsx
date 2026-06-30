import type { PropsWithChildren } from "react";

import styles from './content.module.scss';

export const Content = ({ children }: PropsWithChildren): React.ReactNode => {
	return <section className={styles.content}>
		{children ?? <></>}
	</section>;
};