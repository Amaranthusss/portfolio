import { DisplayDateRange } from '@/components/display-date-range/display-date-range';
import { DisplaySkills } from '@/components/display-skills/display-skills';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';
import { Card } from '@/components/card/card';
import Image from 'next/image';

import { getLocale, getTranslations } from 'next-intl/server';
import { getCertifications } from '@/services/getCertifications';
import { sortByDate } from '@/utils/sortByDate';

import type { CertificationDTO } from '@/models/certificationDto';
import type { Locale } from '@/i18n/locale';

import styles from './page.module.scss';

export default async function CoursesAndCertifications(): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();
  const certifications: CertificationDTO[] = await getCertifications(locale);
  const t = await getTranslations('courses-and-certifications');

  return (
    <ListModule>
      <Title>{t('header')}</Title>

      <div className={styles.cards_layout}>
        {certifications
          .sort((c1, c2) => sortByDate('issueDate', c1, c2))
          .map((c) => (
            <Card key={c.id} slug={c.slug} className={styles.card}>
              <Image
                src={c.image.url}
                alt={c.title}
                width={64}
                height={64}
                className={styles.icon}
              />

              <div className={styles.caption}>
                <strong>{c.title}</strong>{' '}
                <DisplayDateRange
                  endDate={c.issueDate}
                  className={styles.issue_date}
                />
              </div>

              <div className={styles.info}>
                <span className={styles.provider}>{c.provider}</span>
                <span className={styles.description}>{c.description}</span>
                {c.credentialID && (
                  <span className={styles.credential_id}>
                    {t('credential-id')}: {c.credentialID}
                  </span>
                )}

                <DisplaySkills skills={c.skills} />
              </div>
            </Card>
          ))}
      </div>
    </ListModule>
  );
}
