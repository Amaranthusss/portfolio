import { DisplayDateRange } from '../display-date-range/display-date-range';
import { NavToProject } from './_components/nav-to-project/nav-to-project';
import { SkillTagList } from './_components/skill-tag-list/skill-tag-list';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';
import { Card } from '../card/card';
import Image from 'next/image';

import type { ProjectCardProps } from './project-card.interface';
import type { LinkDTO } from '@/models/linkDto';

import styles from './project-card.module.scss';

export async function ProjectCard({
  project,
}: ProjectCardProps): Promise<React.ReactNode> {
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
          <Button key={link.label}>
            {link.label}
            {link.icon && <Icon icon={link.icon} />}
          </Button>
        ))}

        <NavToProject project={project} />
      </div>
    </Card>
  );
}
