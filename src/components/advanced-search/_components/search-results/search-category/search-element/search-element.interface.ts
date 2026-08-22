import type { useModalAutoClose as UseModalAutoClose } from '../../../../_hooks/useModalAutoClose';
import type { Route } from '@/constants/Route';

export interface SearchElementProps {
  text: string;
  route: Route;
  slug: string;
  onNavigate: ReturnType<typeof UseModalAutoClose>['onNavigate'];
}
