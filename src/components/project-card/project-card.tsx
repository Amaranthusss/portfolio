import { getTranslations } from 'next-intl/server';
import { DisplayDateRange } from '../display-date-range/display-date-range';
import { DisplaySkills } from '../display-skills/display-skills';
import { NavToProject } from './_components/nav-to-project/nav-to-project';

import type { ProjectCardProps } from './project-card.interface';

import styles from './project-card.module.scss';

export async function ProjectCard({
  project
}: ProjectCardProps): Promise<React.ReactNode> {
  const t = await getTranslations('common');

  return (
    <div key={project.id} className={styles.card}>
      <strong>{project.name}</strong>
			
      <span className={styles.category}>
        {t('category')}: {project.category}
      </span>

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
      <NavToProject project={project} />
    </div>
  );
}
