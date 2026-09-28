import { DisplayDateRange } from '@/components/display-date-range/display-date-range';
import { SkillTagList } from '@/components/skill-tag-list/skill-tag-list';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';
import { Card } from '@/components/card/card';

import { getLocale, getTranslations } from 'next-intl/server';
import { createAuthorFormatter } from '@/utils/createAuthorFormatter';
import { getPublications } from '@/services/getPublications';
import { sortByDate } from '@/utils/sortByDate';

import type { PublicationDTO } from '@/models/publicationDto';
import type { Locale } from '@/i18n/locale';

import styles from './page.module.scss';

export default async function Publications(): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();
  const publications: PublicationDTO[] = await getPublications(locale);
  const { authorToString } = await createAuthorFormatter();
  const t = await getTranslations('publications');

  return (
    <ListModule>
      <Title>{t('header')}</Title>

      <div className={styles.cards_layout}>
        {publications
          .sort((p1, p2) => sortByDate('publishDate', p1, p2))
          .map((p) => (
            <Card key={p.id} slug={p.slug} className={styles.card}>
              <div className={styles.header}>
                <h1 className={styles.title}>{p.title}</h1>
                <span className={styles.separator}>{', '}</span>
                <DisplayDateRange
                  endDate={p.publishDate}
                  className={styles.issue_date}
                />
              </div>

              <span className={styles.publisher}>
                {t('publisher')}: {p.publisher}
              </span>

              <div className={styles.content}>
                <span className={styles.description}>{p.description}</span>

                <span className={styles.authors}>
                  {t('authors')}: {p.authors.map(authorToString).join(' | ')}
                </span>

                <span className={styles.keywords}>
                  {t('keywords')}: {p.keywords.join(' | ')}
                </span>

                <SkillTagList skills={p.skills} />
              </div>
            </Card>
          ))}
      </div>
    </ListModule>
  );
}
