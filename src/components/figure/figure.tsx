import Image from "next/image";
import type { FigureProps } from "./figure.interface";

import styles from "./figure.module.scss";

export function Figure({
	src,
	width,
	height,
	alt,
	caption,
	priority = false
}: FigureProps): React.ReactNode {
	return (
		<figure className={styles.figure}>
			<Image
				src={src}
				width={width}
				height={height}
				alt={alt}
				priority={priority}
				loading={'eager'}
				sizes={`(max-width: ${width}px) 100vw, {width}px`}
			/>

			{caption && <figcaption>{caption}</figcaption>}
		</figure>
	);
}