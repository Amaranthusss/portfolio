import { ExperienceStepCard } from '@/components/experience-step-card/experience-step-card';
import { DisplayDateRange } from '@/components/display-date-range/display-date-range';
import { SkillTagList } from '@/components/skill-tag-list/skill-tag-list';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';
import { Card } from '@/components/card/card';

import { getLocale, getTranslations } from 'next-intl/server';
import { getExperienceSteps } from '@/services/getExperienceSteps';
import { getEducationSteps } from '@/services/getEducationSteps';
import { sortByDate } from '@/utils/sortByDate';

import type { ExperienceStepDTO } from '@/models/experienceStepDto';
import type { EducationStepDTO } from '@/models/educationStepDto';
import type { Locale } from '@/i18n/locale';

import styles from './page.module.scss';

export default async function ExperienceAndEducation(): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();
  const experienceSteps: ExperienceStepDTO[] = await getExperienceSteps(locale);
  const educationSteps: EducationStepDTO[] = await getEducationSteps(locale);
  const t = await getTranslations('experience-and-education');

  return (
    <ListModule>
      <Title>{t('experience')}</Title>

      <div className={styles.cards_layout}>
        {experienceSteps
          .sort((e1, e2) => sortByDate('endDate', e1, e2))
          .map((e: ExperienceStepDTO): React.ReactNode => (
            <ExperienceStepCard key={e.slug} experienceStep={e} />
          ))}
      </div>

      <Title>{t('education')}</Title>

      <div className={styles.cards_layout}>
        {educationSteps
          .sort((e1, e2) => sortByDate('endDate', e1, e2))
          .map((e) => (
            <Card key={e.id} slug={e.slug} className={styles.card}>
              <strong className={styles.title}>
                {e.degree ?? e.projectTitle}
              </strong>

              {e.institution && (
                <span className={styles.institution}>{e.institution}</span>
              )}

              <DisplayDateRange
                startDate={e.startDate}
                endDate={e.endDate}
                isCurrent={e.isCurrent}
                className={styles.date_range}
              />

              {e.grade && (
                <span className={styles.description}>
                  {t('grade')}: {e.grade}
                  {e.withHonors && t('diploma-with-distinction')}
                </span>
              )}
              {e.projectTitle && (
                <span className={styles.projectTitle}>
                  {t('thesis')}: {e.projectTitle}
                </span>
              )}
              {e.description && (
                <span className={styles.description}>{e.description}</span>
              )}

              <SkillTagList skills={e.skills} />
            </Card>
          ))}
      </div>
    </ListModule>
  );
}
