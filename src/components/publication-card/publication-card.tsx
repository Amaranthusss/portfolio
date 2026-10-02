import { DisplayDateRange } from '../display-date-range/display-date-range';
import { SkillTagList } from '../skill-tag-list/skill-tag-list';
import { CardLayout } from '../card-layout/card-layout';
import { Card } from '../card/card';

import type { PublicationCardProps } from './publication-card.interface';

import styles from './publication-card.module.scss';

export function PublicationCard({
  t,
  publication,
  authorToString,
}: PublicationCardProps): React.ReactNode {
  return (
    <Card slug={publication.slug}>
      <CardLayout disableIcon>
        <CardLayout.Header>
          <h1>{publication.title}</h1>

          <span className={styles.publisher}>
            {t('publisher')}: {publication.publisher}
          </span>

          <DisplayDateRange
            endDate={publication.publishDate}
            className={styles.issue_date}
          />
        </CardLayout.Header>

        <CardLayout.Content>
          <span>{publication.description}</span>

          <span className={styles.authors}>
            {t('authors')}:{' '}
            {publication.authors.map(authorToString).join(' | ')}
          </span>

          <span className={styles.keywords}>
            {t('keywords')}: {publication.keywords.join(' | ')}
          </span>
        </CardLayout.Content>

        <CardLayout.Skills>
          <SkillTagList skills={publication.skills} />
        </CardLayout.Skills>
      </CardLayout>
    </Card>
  );
}
