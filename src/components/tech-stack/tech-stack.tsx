'use client';
import type { TechStackProps } from './tech-stack.interface';

import { TechStackRelations } from './_components/tech-stack-relations/tech-stack-relations';

import styles from './tech-stack.module.scss';

export function TechStack({ groups }: TechStackProps): React.ReactNode {
  return (
    <section className={styles.techStack} aria-label="Technology stack">
      <TechStackRelations groups={groups} />
    </section>
  );
}
