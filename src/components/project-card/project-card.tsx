import { DisplayDateRange } from '../display-date-range/display-date-range';
import { SkillTagList } from './_components/skill-tag-list/skill-tag-list';
import { AnchorButton } from '../button/_components/anchor-button/anchor-button';
import { Tooltip } from '../tooltip/tooltip';
import { Icon } from '../icon/icon';
import { Card } from '../card/card';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

import type { ProjectCardProps } from './project-card.interface';
import type { Messages } from '../../../i18n';
import type { LinkDTO } from '@/models/linkDto';

import { IconName } from '../icon/icon.config';
import { Route } from '@/constants/Route';

import styles from './project-card.module.scss';

export async function ProjectCard({
  project,
}: ProjectCardProps): Promise<React.ReactNode> {
  const t = useTranslations('projects-and-realisations');

  const categoryData: {
    icon: IconName;
    title: keyof Messages['projects-and-realisations'];
  } =
    project.category === 'IT'
      ? {
          icon: IconName.It,
          title: 'it',
        }
      : project.category === 'Mechatronics'
        ? {
            icon: IconName.Mechatronics,
            title: 'mechatronics',
          }
      : project.category === 'Education'
        ? {
            icon: IconName.Education,
            title: 'education',
          }
        : project.category === 'Hobby'
          ? {
              icon: IconName.Hobby,
              title: 'hobby',
            }
          : {
              icon: IconName.Project,
              title: 'project',
            };

  return (
    <Card key={project.id} slug={project.slug} className={styles.card}>
      <div className={styles.header}>
        <Tooltip title={t(categoryData.title)} className={styles.icon}>
          <Icon icon={categoryData.icon} height={'var(--font-size-xxl)'} />
        </Tooltip>

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
            {link.icon && (
              <Icon icon={link.icon} height={'var(--font-size-xl)'} />
            )}
          </AnchorButton>
        ))}

        <AnchorButton
          href={Route.ProjectsAndRealisations + '/' + project.slug}
          aria-label={`read-details-about-project-${project.slug}`}
        >
          {t('read-details')}
          <Icon icon={IconName.Read} height={'var(--font-size-xl)'} />
        </AnchorButton>
      </div>
    </Card>
  );
}
