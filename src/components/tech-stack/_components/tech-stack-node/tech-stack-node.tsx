import Image from 'next/image';

import type { TechStackNodeProps } from './tech-stack-node.interface';

import styles from './tech-stack-node.module.scss';

export function TechStackNode({ node }: TechStackNodeProps): React.ReactNode {
  return (
    <div className={styles.node}>
      <div className={styles.inner}>
        <Image
          src={node.icon.url}
          alt={node.title}
          className={styles.icon}
          width={32}
          height={32}
          loading="lazy"
        />

        <span className={styles.title}>{node.title}</span>
      </div>
    </div>
  );
}
