import { CertificationCard } from '@/components/certification-card/certification-card';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';

import { getLocale, getTranslations } from 'next-intl/server';
import { getCertifications } from '@/services/getCertifications';
import { sortByDate } from '@/utils/sortByDate';
import { getTheme } from '@/utils/getTheme';

import type { CertificationDTO } from '@/models/certificationDto';
import type { Locale } from '@/i18n/locale';

import { Theme } from '@/constants/Theme';

import styles from './page.module.scss';

export default async function CoursesAndCertifications(): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();
  const certifications: CertificationDTO[] = await getCertifications(locale);
  const theme: Theme = await getTheme();
  const t = await getTranslations('courses-and-certifications');

  return (
    <ListModule>
      <Title>{t('header')}</Title>

      <div className={styles.cards_layout}>
        {certifications
          .sort((c1, c2) => sortByDate('issueDate', c1, c2))
          .map((c) => (
            <CertificationCard
              t={t}
              key={c.slug}
              theme={theme}
              certification={c}
            />
          ))}
      </div>
    </ListModule>
  );
}
