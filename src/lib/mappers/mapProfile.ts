import { mapSkill } from './mapSkill';

import type { Profile, Skill } from '../../../payload-types';
import type { ProfileDTO } from '@/models/profileDto';

export function mapProfile(profile: Profile): ProfileDTO {
  return {
    id: profile.id,
    slug: profile.slug,
    name: profile.name,
    orderNumber: profile.orderNumber,
    skills: profile.skills?.filter(isPopulatedSkill).map(mapSkill) ?? [],
  };
}

function isPopulatedSkill(
  skill: number | Skill | null | undefined
): skill is Skill {
  return typeof skill !== 'number' && skill !== null && skill !== undefined;
}
