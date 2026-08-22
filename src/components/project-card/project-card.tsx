import { DisplayDateRange } from '../display-date-range/display-date-range';
import { SkillTagList } from './_components/skill-tag-list/skill-tag-list';
import { AnchorButton } from '../button/_components/anchor-button/anchor-button';
import { Icon } from '../icon/icon';
import { Card } from '../card/card';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

import type { ProjectCardProps } from './project-card.interface';
import type { LinkDTO } from '@/models/linkDto';

import { IconName } from '../icon/icon.config';
import { Route } from '@/constants/Route';

import styles from './project-card.module.scss';

export async function ProjectCard({
  project,
}: ProjectCardProps): Promise<React.ReactNode> {
  const t = useTranslations('common');

  return (
    <Card key={project.id} slug={project.slug} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <Icon icon={Icon.All.Project} />
        </div>

        <div className={styles.titles}>
          <h1 className={styles.project_name}>{project.name}</h1>

          <div className={styles.additional_info}>
            {project.subname && project.subname.length > 0 && (
              <>
                <span>{project.subname}</span>
                &nbsp;
              </>
            )}

            <DisplayDateRange
              startDate={project.startDate}
              endDate={project.endDate}
              isCurrent={project.isCurrent}
              className={styles.date_range}
            />
          </div>
        </div>
      </div>

      <div className={styles.preview}>
        {project.thumbnail && (
          <Image
            src={project.thumbnail.url}
            alt={project.name}
            loading={'eager'}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            sizes={'(max-width: 768px) 100vw, 50vw'}
            className={styles.preview_image}
          />
        )}
      </div>

      <div className={styles.description}>
        {project.description && project.description}
      </div>

      <SkillTagList
        skills={project.skills}
        coreSkills={project.coreSkills}
        className={styles.skills}
      />

      <div className={styles.toolbar}>
        {project.links.map((link: LinkDTO): React.ReactNode => (
          <AnchorButton
            key={link.key}
            href={link.url}
            target={link.isExternal ? '_blank' : undefined}
          >
            {link.label}
            {link.icon && <Icon icon={link.icon} />}
          </AnchorButton>
        ))}

        <AnchorButton
          href={Route.ProjectsAndRealisations + '/' + project.slug}
          aria-label={`read-more-about-project-${project.slug}`}
        >
          {t('read-more')}
          <Icon icon={IconName.Read} />
        </AnchorButton>
      </div>
    </Card>
  );
}
