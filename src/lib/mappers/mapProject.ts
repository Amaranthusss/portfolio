import { parsePortableContent } from '../parsePortableContent';
import { mapSkill } from './mapSkill';

import type { ProjectWithRelations } from '@/models/projectWithRelations';
import type { ProjectDTO } from '@/models/projectDto';

export function mapProject(project: ProjectWithRelations): ProjectDTO {
  const translation = project.translations[0] ?? { name: project.slug };

  return {
    id: project.id,
    slug: project.slug,
    content: parsePortableContent(translation.content),
    category: project.category,
    startDate: project.startDate ?? undefined,
    endDate: project.endDate ?? undefined,
    isCurrent: project.isCurrent,
    name: translation.name,
    subname: translation.subname ?? undefined,
    description: translation.description ?? undefined,
    skills: project.skills.map((ps) => mapSkill(ps.skill)),
  };
}
