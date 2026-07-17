import { useCallback, useLayoutEffect, useRef } from 'react';

import { Draggable } from '@/lib/gsap';

import type { RefObject } from 'react';

export const useDragAndDrop = (
  isVisible: boolean,
  modalRef: RefObject<HTMLDivElement | null>,
  toolbarRef: RefObject<HTMLDivElement | null>
): void => {
  const draggable = useRef<Draggable | null>(null);

  const onWindowResize = useCallback(() => {
    draggable.current?.update();
  }, []);

  useLayoutEffect((): (() => void) => {
    if (isVisible) {
      draggable.current = Draggable.create(modalRef.current, {
        type: 'x,y',
        trigger: toolbarRef.current,
        inertia: true,
        bounds: window
      })?.[0];

      window.addEventListener('resize', onWindowResize);
    }

    return (): void => {
      window.removeEventListener('resize', onWindowResize);
      draggable.current?.kill();
    };
  }, [isVisible, modalRef, toolbarRef, onWindowResize]);
};
