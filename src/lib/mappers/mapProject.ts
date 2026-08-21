import { parseLexicalContent } from './parseLexicalContent';
import { isPopulatedSkill } from './isPopulatedSkill';
import { isPopulatedMedia } from './isPopulatedMedia';
import { isPopulatedLink } from './isPopulatedLink';
import { mapSkill } from './mapSkill';
import { mapMedia } from './mapMedia';
import { mapLink } from './mapLink';

import type { ProjectDTO } from '@/models/projectDto';
import type { MediaDTO } from '@/models/mediaDto';
import type { Project } from '../../../payload-types';

export function mapProject(project: Project): ProjectDTO {
  const startDate: Date | undefined =
    project.startDate != null ? new Date(project.startDate) : undefined;

  const endDate: Date | undefined =
    project.endDate != null ? new Date(project.endDate) : undefined;

  const thumbnail: MediaDTO | undefined = isPopulatedMedia(project.thumbnail)
    ? mapMedia(project.thumbnail)
    : undefined;

  return {
    id: project.id,
    slug: project.slug,
    category: project.category,
    startDate,
    endDate,
    isCurrent: project.isCurrent ?? false,
    thumbnail,
    name: project.name,
    subname: project.subname ?? undefined,
    description: project.description ?? undefined,
    content: parseLexicalContent(project.content),
    links: project.links?.filter(isPopulatedLink).map(mapLink) ?? [],
    skills: project.skills?.filter(isPopulatedSkill).map(mapSkill) ?? [],
  };
}
