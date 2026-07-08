import { ProjectCard } from '@/components/project-card/project-card';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';

import { getTranslations } from 'next-intl/server';
import { getProjects } from '@/services/getProjects';

import type { ProjectDTO } from '@/models/projectDto';

import styles from './page.module.scss';

export default async function ProjectsAndRealisations(): Promise<React.ReactNode> {
  const projects: ProjectDTO[] = await getProjects();
  const t = await getTranslations('courses-and-certifications');

  return (
    <ListModule>
      <Title>{t('header')}</Title>

      <div className={styles.cards_layout}>
        {projects
          .sort(
            (p) => p.endDate?.getMilliseconds() ?? new Date().getMilliseconds()
          )
          .map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
      </div>
    </ListModule>
  );
}
