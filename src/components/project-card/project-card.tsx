'use client';

import { DisplayDateRange } from '../display-date-range/display-date-range';
import { DisplaySkills } from '../display-skills/display-skills';
import { Button } from '../button/button';

import { useRouter } from 'next/navigation';

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { ProjectCardProps } from './project-card.interface';

import { Route } from '@/constants/Route';

import styles from './project-card.module.scss';

export function ProjectCard({ project }: ProjectCardProps): React.ReactNode {
  const router: AppRouterInstance = useRouter();

  return (
    <div key={project.id} className={styles.card}>
      <strong>{project.name}</strong>
      <span className={styles.category}>Category: {project.category}</span>

      <DisplayDateRange
        startDate={project.startDate}
        endDate={project.endDate}
        isCurrent={project.isCurrent}
        className={styles.date_range}
      />

      {project.description && (
        <span className={styles.description}>{project.description}</span>
      )}
      <DisplaySkills skills={project.skills} />

      <Button
        className={styles.read_more}
        onClick={() =>
          router.push(Route.ProjectsAndRealisations + '/' + project.slug)
        }
      >
        Read more
      </Button>
    </div>
  );
}
