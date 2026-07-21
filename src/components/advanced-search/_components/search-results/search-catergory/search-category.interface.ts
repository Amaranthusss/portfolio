import type { useModalAutoClose as UseModalAutoClose } from '../../../_hooks/useModalAutoClose';
import type { Route } from '@/constants/Route';
import type { Key } from 'react';

export interface SearchCategoryProps<DtoItem extends object> {
  data: DtoItem[];
  route: Route;
  title: string;
  keyExpr: (item: DtoItem) => Key;
  textExpr: (item: DtoItem) => string;
  slugExpr: (item: DtoItem) => string;
  onNavigate: ReturnType<typeof UseModalAutoClose>['onNavigate'];
}
