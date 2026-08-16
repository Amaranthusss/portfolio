import { DisplayDateRange } from '@/components/display-date-range/display-date-range';
import { DisplaySkills } from '@/components/display-skills/display-skills';
import { ListModule } from '@/components/list-module/list-module';
import { Card } from '@/components/card/card';

import { createAuthorFormatter } from '@/utils/createAuthorFormatter';
import { getPublications } from '@/services/getPublications';
import { getLocale } from 'next-intl/server';

import type { PublicationDTO } from '@/models/publicationDto';
import type { Locale } from '@/i18n/locale';

import styles from './page.module.scss';

export default async function Publications(): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();
  const publications: PublicationDTO[] = await getPublications(locale);
  const { authorToString } = await createAuthorFormatter();

  return (
    <ListModule>
      <h1>Publications</h1>

      <div className={styles.cards_layout}>
        {publications
          .sort((p) => p.publishDate.getTime())
          .map((p) => (
            <Card key={p.id} slug={p.slug} className={styles.card}>
              <div className={styles.caption}>
                <strong>{p.title}</strong>{' '}
								
                <DisplayDateRange
                  endDate={p.publishDate}
                  className={styles.issue_date}
                />
              </div>

              <div className={styles.info}>
                <span className={styles.publisher}>{p.publisher}</span>
                <span className={styles.description}>{p.description}</span>
                <span className={styles.authors}>
                  Authors: {p.authors.map(authorToString).join(' | ')}
                </span>
                <span className={styles.keywords}>
                  Keywords: {p.keywords.join(' | ')}
                </span>

                <DisplaySkills skills={p.skills} />
              </div>
            </Card>
          ))}
      </div>
    </ListModule>
  );
}
