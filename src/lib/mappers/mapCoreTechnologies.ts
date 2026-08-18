import { createEmptyEditorState } from '@/utils/createEmptyEditorState';
import { isPopulatedSkill } from './isPopulatedSkill';
import { mapMedia } from './mapMedia';
import { mapSkill } from './mapSkill';

import type { CoreTechnologiesGroupDTO } from '@/models/coreTechnologiesGroupDto';
import type { CoreTechnologiesNodeDTO } from '@/models/coreTechnologiesNodeDto';
import type { CoreTechnologiesDTO } from '@/models/coreTechnologiesDto';
import type { CoreTechnology } from '../../../payload-types';
import type { MediaDTO } from '@/models/mediaDto';
import type { SkillDTO } from '@/models/skillDto';

function mapCoreTechnologiesNode(
  node: CoreTechnology['groups'][number]['nodes'][number]
): CoreTechnologiesNodeDTO {
  const icon: MediaDTO = mapMedia(node.icon);

  const skills: SkillDTO[] | undefined = node.skills
    ?.filter(isPopulatedSkill)
    .map(mapSkill);

  return { title: node.title, icon, skills };
}

export function mapCoreTechnologies(
  coreTechnology: CoreTechnology
): CoreTechnologiesDTO {
  const groups: CoreTechnologiesGroupDTO[] = coreTechnology.groups.map(
    (c): CoreTechnologiesGroupDTO => {
      return {
        slug: c.slug,
        title: c.title,
        references: c.references ?? [],
        nodes: c.nodes.map((n): CoreTechnologiesNodeDTO => {
          return mapCoreTechnologiesNode(n);
        }),
      };
    }
  );

  return {
    groups: groups,
    title: coreTechnology.title,
    content: coreTechnology.content ?? createEmptyEditorState(),
  };
}
