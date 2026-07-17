'use client';
import { Title } from '@/components/title/title';

import type { SearchResultsProps } from './search-results.interface';

export function SearchResults({
  results,
}: SearchResultsProps): React.ReactNode {
  if (results == null) return;

  return (
    <div>
      <Title>Certifications:</Title>
      {results.certifications.map((c) => (
        <div key={c.slug}>{c.title}</div>
      ))}

      <Title>Education:</Title>
      {results.education.map((e) => (
        <div key={e.slug}>{e.degree ?? '-'}</div>
      ))}

      <Title>Experience:</Title>
      {results.experience.map((e) => (
        <div key={e.slug}>{e.position ?? '-'}</div>
      ))}

      <Title>Projects:</Title>
      {results.projects.map((p) => (
        <div key={p.slug}>{p.name}</div>
      ))}

      <Title>Publications:</Title>
      {results.publications.map((p) => (
        <div key={p.slug}>{p.title}</div>
      ))}
    </div>
  );
}
