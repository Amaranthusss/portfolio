import Image from 'next/image';

import type { TechStackNodeProps } from './tech-stack-node.interface';

import styles from './tech-stack-node.module.scss';

export function TechStackNode({ node }: TechStackNodeProps): React.ReactNode {
  const isInteractive = Array.isArray(node.skills) && node.skills.length > 0;

  const content = (
    <>
      <span className={styles.node__iconWrapper}>
        <Image
          className={styles.node__icon}
          src={node.icon.url}
          alt=""
          width={48}
          height={48}
        />
      </span>

      <span className={styles.node__title}>{node.title}</span>
    </>
  );

  if (!isInteractive) {
    return <div className={styles.node}>{content}</div>;
  }

  return (
    <button
      className={styles.node}
      type="button"
      aria-label={`${node.title}. ${node.skills?.join(', ')}`}
    >
      {content}
    </button>
  );
}
