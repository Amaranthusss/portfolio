import { useState } from 'react';

import type { AdvancedSearchProps } from '../advanced-search.client.interface';
import type { ModalHandle } from '@/components/modal/modal.interface';
import type { RefObject } from 'react';

export function useModalAutoClose(
  modalRef: RefObject<ModalHandle | null>,
  onNavigateHandler: AdvancedSearchProps['onNavigate']
) {
  const [closeOnNavigate, setCloseOnNavigate] = useState<boolean>(true);

  const onNavigate = (): void => {
    if (closeOnNavigate) modalRef.current?.close();
    onNavigateHandler?.(closeOnNavigate);
  };

  const onToggleCloseOnNavigate = (): void => {
    setCloseOnNavigate((v) => !v);
  };

  return { closeOnNavigate, onNavigate, onToggleCloseOnNavigate };
}
