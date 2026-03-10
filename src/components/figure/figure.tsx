import Image from "next/image";

import type { FigureProps } from "./figure.interface";

import styles from './figure.module.scss';

export function Figure({ src, width, height, alt, caption }: FigureProps): React.ReactNode {
	return (
		<div className={styles.figure_container}>
			<Image
				src={src}
				width={width}
				height={height}
				alt={alt}
			/>

			{caption && caption.length > 0 && <div className={styles.caption}>{caption}</div>}
		</div>
	);
};