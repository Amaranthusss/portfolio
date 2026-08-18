import type { TechStackGroupProps } from './tech-stack-group.interface';

import { TechStackNode } from '../tech-stack-node/tech-stack-node';

import styles from './tech-stack-group.module.scss';

export function TechStackGroup({
  group,
}: TechStackGroupProps): React.ReactNode {
  return (
    <section
      className={styles.group}
      data-tech-stack-group={group.slug}
      aria-labelledby={`tech-stack-group-${group.slug}`}
    >
      <header
        className={styles.group__header}
        id={`tech-stack-group-${group.slug}`}
      >
        <span className={styles.group__title}>{group.title}</span>
      </header>

      <div className={styles.group__body}>
        <ul className={styles.group__nodes}>
          {group.nodes.map((node) => (
            <li
              className={styles.group__node}
              key={`${group.slug}-${node.title}`}
            >
              <TechStackNode node={node} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
