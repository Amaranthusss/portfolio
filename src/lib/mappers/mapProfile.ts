import { mapSkill } from './mapSkill';

import type { ProfileWithRelations } from '@/models/profileWithRelations';
import type { ProfileDTO } from '@/models/profileDto';

export function mapProfile(profile: ProfileWithRelations): ProfileDTO {
  const translation = profile.translations[0] ?? { name: profile.slug };

  return {
    id: profile.id,
    slug: profile.slug,
    name: translation.name,
    orderNumber: profile.orderNumber,
    skills: profile.skills.map((ps) => mapSkill(ps.skill)),
  };
}
