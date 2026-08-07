import { RichTextContent } from '@/components/rich-text-content/rich-text-content';
import { Article } from '@/components/article/article';

import { getProject } from '@/services/getProject';
import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import type { ReactPromise } from 'react';
import type { ProjectDTO } from '@/models/projectDto';
import type { Locale } from '@/i18n/locale';

export default async function ProjectPage({
  params,
}: {
  params: ReactPromise<{ slug: string }>;
}): Promise<React.ReactNode> {
  const slug: string = (await params).slug;
  const locale: Locale = await getLocale();
  const project: ProjectDTO | null = await getProject(slug, locale);

  if (project == null) return notFound();

  return (
    <Article title={project.name}>
      <RichTextContent content={project.content} />
    </Article>
  );
}
