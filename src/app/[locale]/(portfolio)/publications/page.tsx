import { PublicationCard } from '@/components/publication-card/publication-card';
import { ListModule } from '@/components/list-module/list-module';
import { Title } from '@/components/title/title';

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
          .map((p: PublicationDTO): React.ReactNode => (
            <PublicationCard
              t={t}
              key={p.slug}
              publication={p}
              authorToString={authorToString}
            />
          ))}
      </div>
    </ListModule>
  );
}
