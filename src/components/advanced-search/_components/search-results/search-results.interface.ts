import type { useFindBySkills as UseFindBySkills } from '../../_hooks/useFindBySkills';

export interface SearchResultsProps {
  className: string;
  results: ReturnType<typeof UseFindBySkills>['results'];
}
