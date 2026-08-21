import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';

export interface AdvancedSearchProps {
  iconOnly?: boolean;
}

export interface AdvancedSearchClientProps extends AdvancedSearchProps {
  skills: SkillDTO[];
  profiles: ProfileDTO[];
}
