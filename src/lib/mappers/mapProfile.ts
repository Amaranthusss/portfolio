import { isPopulatedSkill } from './isPopulatedSkill';
import { mapSkill } from './mapSkill';

import type { ProfileDTO } from '@/models/profileDto';
import type { Profile } from '../../../payload-types';

export function mapProfile(profile: Profile): ProfileDTO {
  return {
    id: profile.id,
    slug: profile.slug,
    name: profile.name,
    orderNumber: profile.orderNumber,
    skills: profile.skills?.filter(isPopulatedSkill).map(mapSkill) ?? [],
  };
}
