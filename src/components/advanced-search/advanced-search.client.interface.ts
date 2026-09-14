import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';
import type { SkillKey } from '@/models/skillKey';

export interface AdvancedSearchProps {
  iconOnly?: boolean;
  mobile?: boolean;
  getInitialSkillKeys?: () => SkillKey[];
  onNavigate?: (closeOnNavigate: boolean) => void;
  onSelectedSkillKeysChange?: (skillKeys: SkillKey[]) => void;
}

export interface AdvancedSearchClientProps extends AdvancedSearchProps {
  skills: SkillDTO[];
  profiles: ProfileDTO[];
  defaultSkillKeys: SkillKey[];
}
