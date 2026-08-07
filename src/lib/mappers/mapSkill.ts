import type { SkillDTO } from '@/models/skillDto';
import type { Skill } from '../../../payload-types';

export function mapSkill(skill: Skill): SkillDTO {
  return {
    id: skill.id,
    key: skill.key,
    name: skill.name,
    shortName: skill.shortName ?? undefined,
  };
}
