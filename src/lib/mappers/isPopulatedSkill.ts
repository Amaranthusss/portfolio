import type { Skill } from '../../../payload-types';

export function isPopulatedSkill(
  skill: number | Skill | null | undefined
): skill is Skill {
  return typeof skill !== 'number' && skill !== null && skill !== undefined;
}
