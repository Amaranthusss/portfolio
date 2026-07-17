import { useLayoutEffect } from 'react';

import { gsap } from '@/lib/gsap';

import type { RefObject, Dispatch, SetStateAction } from 'react';

export const useOpenAnimations = (
  isOpen: boolean,
  isVisible: boolean,
  modalRef: RefObject<HTMLDivElement | null>,
  setIsVisible: Dispatch<SetStateAction<boolean>>
): void => {
  useLayoutEffect(() => {
    if (modalRef.current == null) return;

    const ctx: gsap.Context = gsap.context((): void => {
      if (isOpen) {
        gsap.fromTo(
          modalRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.3, ease: 'power3.out' }
        );
      } else if (isVisible) {
        gsap.to(modalRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.25,
          ease: 'power3.in',
          onComplete: (): void => setIsVisible(false)
        });
      }
    }, modalRef);

    return (): void => ctx.revert();
  }, [modalRef, isOpen, isVisible, setIsVisible]);
};
