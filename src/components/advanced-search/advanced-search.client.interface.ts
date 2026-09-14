import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';

export interface AdvancedSearchProps {
  iconOnly?: boolean;
  mobile?: boolean;
  onNavigate?: (closeOnNavigate: boolean) => void;
}

export interface AdvancedSearchClientProps extends AdvancedSearchProps {
  skills: SkillDTO[];
  profiles: ProfileDTO[];
}
