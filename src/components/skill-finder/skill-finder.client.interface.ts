import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';

export interface SkillFinderClientProps {
  skills: SkillDTO[];
  profiles: ProfileDTO[];
}
