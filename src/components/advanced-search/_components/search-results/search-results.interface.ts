import type { useModalAutoClose as UseModalAutoClose } from '../../_hooks/useModalAutoClose';
import type { useFindBySkills as UseFindBySkills } from '../../_hooks/useFindBySkills';

export interface SearchResultsProps {
  onNavigate: ReturnType<typeof UseModalAutoClose>['onNavigate'];
  results: ReturnType<typeof UseFindBySkills>['results'];
}
