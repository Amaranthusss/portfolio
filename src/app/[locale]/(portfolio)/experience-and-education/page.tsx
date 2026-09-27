import { ExperienceStepCard } from '@/components/experience-step-card/experience-step-card';
import { EducationStepCard } from '@/components/education-step-card/education-step-card';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';

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
          .map((e: EducationStepDTO): React.ReactNode => (
            <EducationStepCard key={e.slug} educationStep={e} />
          ))}
      </div>
    </ListModule>
  );
}
