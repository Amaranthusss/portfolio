'use client';
import { useEffect, useRef } from 'react';

import type { CardProps } from './card.interface';

import { CustomEventName } from '@/constants/CustomEventName';

import styles from './card.module.scss';

export function Card({ slug, children }: CardProps): React.ReactNode {
  const isTarget = useRef<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const highlightTime = 2000;

  const scrollToCard = (): void => {
    cardRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const highlight = (): void => {
    const element: HTMLDivElement | null = cardRef.current;

    if (element == null) return;

    element.classList.remove(styles.highlight);
    void element.offsetWidth;
    element.classList.add(styles.highlight);

    if (isTarget.current) scrollToCard();
    isTarget.current = true;

    window.setTimeout((): void => {
      element.classList.remove(styles.highlight);
    }, highlightTime);
  };

  const initHighlight = (): void => {
    if (window.location.hash.slice(1) !== slug) return;
    scrollToCard();
    highlight();
  };

  const handleHighlight = (event: Event): void => {
    const customEvent = event as CustomEvent<string>;

    isTarget.current = false;
    if (customEvent.detail !== slug) return;
    highlight();
  };

  useEffect((): (() => void) => {
    initHighlight();
    window.addEventListener(CustomEventName.HighlightCard, handleHighlight);

    return () =>
      window.removeEventListener(
        CustomEventName.HighlightCard,
        handleHighlight
      );
  }, [slug, initHighlight, handleHighlight]);

  return (
    <div ref={cardRef} id={slug} className={styles.card}>
      {children}
    </div>
  );
}
