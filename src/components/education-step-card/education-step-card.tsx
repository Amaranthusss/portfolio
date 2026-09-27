import { DisplayDateRange } from '../display-date-range/display-date-range';
import { SkillTagList } from '../skill-tag-list/skill-tag-list';
import { Card } from '../card/card';
import Image from 'next/image';

import { getTranslations } from 'next-intl/server';

import type { ExperienceStepCardProps } from './education-step-card.interface';
import type { EducationStepDTO } from '@/models/educationStepDto';

import styles from './education-step-card.module.scss';

export async function EducationStepCard({
  educationStep,
}: ExperienceStepCardProps): Promise<React.ReactNode> {
  const t = await getTranslations('experience-and-education');

  const getImageAlt = (educationStep: EducationStepDTO): string => {
    const parts: string[] = [
      educationStep.institution,
      educationStep.degree,
    ].filter((p): p is string => p != null && p.length > 0);

    if (parts.length === 0) return educationStep.slug;
    return parts.join(' - ');
  };

  return (
    <Card slug={educationStep.slug} className={styles.card}>
      <Image
        src={educationStep.image.url}
        alt={getImageAlt(educationStep)}
        width={64}
        height={64}
        className={styles.icon}
      />

      <div className={styles.header}>
        <h1 className={styles.title}>
          {educationStep.degree ?? educationStep.projectTitle}
        </h1>

        <div className={styles.additional_info}>
          {educationStep.institution && (
            <span className={styles.institution}>
              {educationStep.institution}
            </span>
          )}

          {educationStep.grade && (
            <span className={styles.description}>
              {t('grade')}: {educationStep.grade}
              {educationStep.withHonors && t('diploma-with-distinction')}
            </span>
          )}

          <DisplayDateRange
            startDate={educationStep.startDate}
            endDate={educationStep.endDate}
            isCurrent={educationStep.isCurrent}
            className={styles.date_range}
          />
        </div>
      </div>

      <div className={styles.content}>
        {educationStep.degree != null && educationStep.projectTitle && (
          <span className={styles.projectTitle}>
            {t('thesis')}: {educationStep.projectTitle}
          </span>
        )}

        {educationStep.description && (
          <span className={styles.description}>
            {educationStep.description}
          </span>
        )}

        <SkillTagList
          className={styles.skill_list}
          skills={educationStep.skills}
        />
      </div>
    </Card>
  );
}
