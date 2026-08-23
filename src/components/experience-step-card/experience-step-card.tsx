import { DisplayDateRange } from '../display-date-range/display-date-range';
import { DisplaySkills } from '../display-skills/display-skills';
import { Divider } from '../divider/divider';
import { Icon } from '../icon/icon';
import { Card } from '../card/card';

import { employmentTypeToString } from '@/utils/employmentTypeToString';
import { locationTypeToString } from '@/utils/locationTypeToString';
import { getTranslations } from 'next-intl/server';

import type { ExperienceStepCardProps } from './experience-step-card.interface';

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

  return (
    <Card slug={experienceStep.slug} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <Icon
            icon={experienceStep.icon ?? Icon.All.WorkStation}
            height={'var(--font-size-xxl)'}
          />
        </div>

        <div className={styles.titles}>
          <h1 className={styles.position}>{experienceStep.position}</h1>

          <div className={styles.additional_info}>
            <div>
              {experienceStep.company && (
                <span className={styles.company}>
                  {experienceStep.company}
                  &nbsp;
                </span>
              )}

              {experienceStep.location && (
                <span className={styles.location}>
                  {experienceStep.location}
                </span>
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
      </div>

      <Divider />

      {experienceStep.description && (
        <span className={styles.description}>{experienceStep.description}</span>
      )}

      {experienceStep.duties && experienceStep.duties.length > 0 && (
        <ul className={styles.duty_list}>
          {t('duties')}:
          {experienceStep.duties.map((d: string): React.ReactNode => (
            <li key={d} className={styles.duty}>
              {d}
            </li>
          ))}
        </ul>
      )}

      <DisplaySkills skills={experienceStep.skills} />
    </Card>
  );
}
