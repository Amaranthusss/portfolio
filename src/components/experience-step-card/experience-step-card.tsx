import { DisplayDateRange } from '../display-date-range/display-date-range';
import { SkillTagList } from '../skill-tag-list/skill-tag-list';
import { Image } from '../image/image';
import { Card } from '../card/card';

import { employmentTypeToString } from '@/utils/employmentTypeToString';
import { locationTypeToString } from '@/utils/locationTypeToString';
import { getTranslations } from 'next-intl/server';

import type { ExperienceStepCardProps } from './experience-step-card.interface';
import type { ExperienceStepDTO } from '@/models/experienceStepDto';

import styles from './experience-step-card.module.scss';
import { CardLayout } from '../card-layout/card-layout';

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
      <CardLayout>
        <CardLayout.Icon>
          <Image
            src={experienceStep.image.url}
            alt={getImageAlt(experienceStep)}
            width={64}
            height={64}
            className={styles.icon}
          />
        </CardLayout.Icon>

        <CardLayout.Header>
          <h1>{experienceStep.position}</h1>

          <span className={styles.location}>
            {experienceStep.company && (
              <>
                {experienceStep.company}
                &nbsp;
              </>
            )}

            {experienceStep.location && <>{experienceStep.location}</>}
          </span>

          <DisplayDateRange
            startDate={experienceStep.startDate}
            endDate={experienceStep.endDate}
            isCurrent={experienceStep.isCurrent}
            className={styles.date_range}
          />

          <span>
            {employmentType.length > 0 && employmentType}
            {locationType.length > 0 && <>, {locationType}</>}
          </span>
        </CardLayout.Header>

        <CardLayout.Content>
          {experienceStep.description && (
            <div className={styles.description}>
              {experienceStep.description}
            </div>
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
        </CardLayout.Content>

        <CardLayout.Skills>
          <SkillTagList
            className={styles.skill_list}
            skills={experienceStep.skills}
          />
        </CardLayout.Skills>
      </CardLayout>
    </Card>
  );
}
