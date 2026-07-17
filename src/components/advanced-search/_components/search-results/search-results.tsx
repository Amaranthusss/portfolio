'use client';
import { Title } from '@/components/title/title';

import { useTranslations } from 'next-intl';

import type { SearchResultsProps } from './search-results.interface';

export function SearchResults({
  results
}: SearchResultsProps): React.ReactNode {
  const t = useTranslations('common.advanced-search');

  if (results == null) return;

  return (
    <div>
      {results.certifications.length > 0 && (
        <>
          <Title>{t('courses-and-certifications')}:</Title>
          {results.certifications.map((c) => (
            <div key={c.slug}>{c.title}</div>
          ))}
        </>
      )}

      {results.education.length > 0 && (
        <>
          <Title>{t('education')}:</Title>
          {results.education.map((c) => (
            <div key={c.slug}>{c.degree}</div>
          ))}
        </>
      )}

      {results.experience.length > 0 && (
        <>
          <Title>{t('experience')}:</Title>
          {results.experience.map((c) => (
            <div key={c.slug}>{c.position ?? '-'}</div>
          ))}
        </>
      )}

      {results.projects.length > 0 && (
        <>
          <Title>{t('projects-and-realisations')}:</Title>
          {results.projects.map((c) => (
            <div key={c.slug}>{c.name}</div>
          ))}
        </>
      )}
      {results.publications.length > 0 && (
        <>
          <Title>{t('publications')}:</Title>
          {results.publications.map((c) => (
            <div key={c.slug}>{c.title}</div>
          ))}
        </>
      )}
    </div>
  );
}
