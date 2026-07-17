import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';

export interface AdvancedSearchClientProps {
  skills: SkillDTO[];
  profiles: ProfileDTO[];
}
