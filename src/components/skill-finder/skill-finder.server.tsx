import { SkillFinderClient } from './skill-finder.client';

import { getProfiles } from '@/services/getProfiles';
import { getSkills } from '@/services/getSkills';

import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';

export async function SkillFinder(): Promise<React.ReactNode> {
  const [profiles, skills]: [ProfileDTO[], SkillDTO[]] = await Promise.all([
    getProfiles(),
    getSkills(),
  ]);

  return <SkillFinderClient skills={skills} profiles={profiles} />;
}
