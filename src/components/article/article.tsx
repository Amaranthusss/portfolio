import type { ArticleProps } from "./article.interface";

import styles from './article.module.scss'

export function Article({ title, children }: ArticleProps): React.ReactNode {
	return (
		<main className={styles.article}>
			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>
				{children}
			</div>
		</main>
	);
};