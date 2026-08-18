import { createEmptyEditorState } from '@/utils/createEmptyEditorState';
import { isPopulatedSkill } from './isPopulatedSkill';
import { mapSkill } from './mapSkill';

import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import type { ProjectDTO } from '@/models/projectDto';
import type { Project } from '../../../payload-types';

export function mapProject(project: Project): ProjectDTO {
  return {
    id: project.id,
    slug: project.slug,
    category: project.category,
    startDate:
      project.startDate != null ? new Date(project.startDate) : undefined,
    endDate: project.endDate != null ? new Date(project.endDate) : undefined,
    isCurrent: project.isCurrent ?? false,
    name: project.name,
    subname: project.subname ?? undefined,
    description: project.description ?? undefined,
    content: parseLexicalContent(project.content),
    skills: project.skills?.filter(isPopulatedSkill).map(mapSkill) ?? [],
  };
}

function parseLexicalContent(
  content: Project['content']
): DefaultTypedEditorState {
  if (!content || typeof content !== 'object' || Array.isArray(content)) {
    return createEmptyEditorState();
  }

  if (
    !('root' in content) ||
    !content.root ||
    typeof content.root !== 'object'
  ) {
    return createEmptyEditorState();
  }

  return content as DefaultTypedEditorState;
}
