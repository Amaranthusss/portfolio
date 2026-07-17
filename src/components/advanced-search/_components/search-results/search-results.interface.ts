import type { useFindBySkills as UseFindBySkills } from '../../_hooks/useFindBySkills';

export interface SearchResultsProps {
  results: ReturnType<typeof UseFindBySkills>['results'];
}
