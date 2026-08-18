import { TechStackNode } from '../tech-stack-node/tech-stack-node';

import type { GroupNodeProps } from './group-node.interface';

import styles from './group-node.module.scss';

export function GroupNode({ group }: GroupNodeProps): React.ReactNode {
  const captionSpan = Math.max(
    1,
    Math.min(3, Math.ceil(group.nodes.length / 2))
  );

  return (
    <section
      className={styles.group}
      data-group-slug={group.slug}
      style={
        {
          '--caption-span': captionSpan,
        } as React.CSSProperties
      }
    >
      <div className={styles.captionRow}>
        <div className={styles.caption}>
          <div className={styles.captionInner}>{group.title}</div>
        </div>
      </div>

      <div className={styles.nodes}>
        {group.nodes.map((node, index) => (
          <TechStackNode
            key={`${group.slug}-${node.title}-${index}`}
            node={node}
          />
        ))}
      </div>
    </section>
  );
}
