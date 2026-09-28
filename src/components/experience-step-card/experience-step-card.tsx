import { DisplayDateRange } from '../display-date-range/display-date-range';
import { SkillTagList } from '../skill-tag-list/skill-tag-list';
import { Divider } from '../divider/divider';
import { Card } from '../card/card';
import Image from 'next/image';

import { employmentTypeToString } from '@/utils/employmentTypeToString';
import { locationTypeToString } from '@/utils/locationTypeToString';
import { getTranslations } from 'next-intl/server';

import type { ExperienceStepCardProps } from './experience-step-card.interface';
import type { ExperienceStepDTO } from '@/models/experienceStepDto';

import styles from './experience-step-card.module.scss';

export async function ExperienceStepCard({
  experienceStep,
}: ExperienceStepCardProps): Promise<React.ReactNode> {
  const t = await getTranslations('experience-and-education');

  const locationType: string = await locationTypeToString(
    experienceStep.locationType
  );

  const employmentType: string = await employmentTypeToString(
    experienceStep.employmentType
  );

  const getImageAlt = (e: ExperienceStepDTO): string => {
    const parts: string[] = [e.company, e.position].filter(
      (p): p is string => p != null && p.length > 0
    );

    if (parts.length === 0) return e.slug;
    return parts.join(' - ');
  };

  return (
    <Card slug={experienceStep.slug} className={styles.card}>
      <Image
        src={experienceStep.image.url}
        alt={getImageAlt(experienceStep)}
        width={64}
        height={64}
        className={styles.icon}
      />

      <div className={styles.header}>
        <h1 className={styles.position}>{experienceStep.position}</h1>

        <div className={styles.additional_info}>
          <div className={styles.location}>
            {experienceStep.company && (
              <span className={styles.company}>
                {experienceStep.company}
                &nbsp;
              </span>
            )}

            {experienceStep.location && (
              <span className={styles.address}>{experienceStep.location}</span>
            )}
          </div>

          <DisplayDateRange
            startDate={experienceStep.startDate}
            endDate={experienceStep.endDate}
            isCurrent={experienceStep.isCurrent}
            className={styles.date_range}
          />

          <span className={styles.types}>
            {employmentType.length > 0 && employmentType}
            {locationType.length > 0 && <>, {locationType}</>}
          </span>
        </div>
      </div>

      <div className={styles.content}>
        {experienceStep.description && (
          <div className={styles.description}>{experienceStep.description}</div>
        )}

        {experienceStep.duties && experienceStep.duties.length > 0 && (
          <div className={styles.duty_list}>
            <span>{t('duties')}:</span>

            <ul>
              {experienceStep.duties.map((duty: string): React.ReactNode => (
                <li key={duty} className={styles.duty}>
                  {duty}
                </li>
              ))}
            </ul>
          </div>
        )}

        <SkillTagList
          className={styles.skill_list}
          skills={experienceStep.skills}
        />
      </div>
    </Card>
  );
}
