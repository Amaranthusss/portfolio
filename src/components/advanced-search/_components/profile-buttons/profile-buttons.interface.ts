import type { useFindBySkills as UseFindBySkills } from '../../_hooks/useFindBySkills';
import type { ProfileDTO } from '@/models/profileDto';

export interface ProfileButtonsProps {
  profiles: ProfileDTO[];
  className?: string;
  profileButtonListClassName?: string;
  isActiveProfile: ReturnType<typeof UseFindBySkills>['isActiveProfile'];
  isActiveExactProfile: ReturnType<
    typeof UseFindBySkills
  >['isActiveExactProfile'];
  onToggleProfile: ReturnType<typeof UseFindBySkills>['onToggleProfile'];
}
