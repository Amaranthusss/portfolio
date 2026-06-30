import { DisplayDateRange } from '@/components/display-date-range/display-date-range';
import { DisplaySkills } from '@/components/display-skills/display-skills';

import { createAuthorFormatter } from '@/utils/createAuthorFormatter';
import { getPublications } from '@/services/getPublications';

import type { PublicationDTO } from '@/models/publicationDto';

import styles from './page.module.scss';

export default async function HireMe(): Promise<React.ReactNode> {
  const publications: PublicationDTO[] = await getPublications();
  const { authorToString } = await createAuthorFormatter();

  return (
    <main>
      <h1>Publications</h1>

      <div className={styles.cards_layout}>
        {publications
          .sort((p) => p.publishDate.getMilliseconds())
          .map((c) => (
            <div key={c.id} className={styles.card}>
              <div className={styles.caption}>
                <strong>{c.title}</strong>{' '}
                <DisplayDateRange
                  endDate={c.publishDate}
                  className={styles.issue_date}
                />
              </div>

              <div className={styles.info}>
                <span className={styles.publisher}>{c.publisher}</span>
                <span className={styles.description}>{c.description}</span>
                <span className={styles.authors}>
                  Authors: {c.authors.map(authorToString).join(' | ')}
                </span>
                <span className={styles.keywords}>
                  Keywords: {c.keywords.join(' | ')}
                </span>

                <DisplaySkills skills={c.skills} />
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
