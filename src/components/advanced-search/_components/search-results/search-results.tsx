'use client';
import { SearchCategory } from './search-catergory/search-category';
import { Divider } from '@/components/divider/divider';

import { useTranslations } from 'next-intl';
import { useClassName } from '@/hooks/useClassName';

import type { SearchResultsProps } from './search-results.interface';
import type { ExperienceStepDTO } from '@/models/experienceStepDto';
import type { CertificationDTO } from '@/models/certificationDto';
import type { EducationStepDTO } from '@/models/educationStepDto';
import type { PublicationDTO } from '@/models/publicationDto';
import type { ProjectDTO } from '@/models/projectDto';

import { Route } from '@/constants/Route';

import styles from './search-results.module.scss';

export function SearchResults({
  results,
  onNavigate,
}: SearchResultsProps): React.ReactNode {
  const t = useTranslations('common.advanced-search');
  const { cn } = useClassName();

  const joinAndHandleEmpty = (elements: string[]): string => {
    return elements.length === 0 ? '' : elements.join(', ');
  };

  const renderEducationStep = (e: EducationStepDTO): string => {
    const elements: string[] = [];

    if (e.degree) elements.push(e.degree);
    else if (e.projectTitle) elements.push(e.projectTitle);

    if (e.institution) elements.push(e.institution);

    return joinAndHandleEmpty(elements);
  };

  const renderExperienceStep = (e: ExperienceStepDTO): string => {
    const elements: string[] = [];

    if (e.position) elements.push(e.position);
    if (e.company) elements.push(e.company);

    return joinAndHandleEmpty(elements);
  };

  if (results == null)
    return (
      <div className={styles.empty_results}>
        <Divider />

        {t('empty-results')}
      </div>
    );

  return (
    <div className={cn(styles.search_results)}>
      <Divider />

      <div className={styles.results_content}>
        <SearchCategory<CertificationDTO>
          data={results.certifications}
          textExpr={(c) => c.title}
          keyExpr={(c) => c.slug}
          slugExpr={(c) => c.slug}
          title={t('courses-and-certifications')}
          route={Route.CoursesAndCertifications}
          onNavigate={onNavigate}
        />

        <SearchCategory<EducationStepDTO>
          data={results.education}
          textExpr={renderEducationStep}
          keyExpr={(e) => e.slug}
          slugExpr={(e) => e.slug}
          title={t('education')}
          route={Route.ExperienceAndEducation}
          onNavigate={onNavigate}
        />

        <SearchCategory<ExperienceStepDTO>
          data={results.experience}
          textExpr={renderExperienceStep}
          keyExpr={(e) => e.slug}
          slugExpr={(e) => e.slug}
          title={t('experience')}
          route={Route.ExperienceAndEducation}
          onNavigate={onNavigate}
        />

        <SearchCategory<ProjectDTO>
          data={results.projects}
          textExpr={(p) => p.name}
          keyExpr={(p) => p.slug}
          slugExpr={(p) => p.slug}
          title={t('projects-and-realisations')}
          route={Route.ProjectsAndRealisations}
          onNavigate={onNavigate}
        />

        <SearchCategory<PublicationDTO>
          data={results.publications}
          textExpr={(p) => p.title}
          keyExpr={(p) => p.slug}
          slugExpr={(p) => p.slug}
          title={t('publications')}
          route={Route.Publications}
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
}
