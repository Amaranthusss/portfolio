'use client';
import { useEffect, useRef } from 'react';
import { useClassName } from '@/hooks/useClassName';

import type { CardProps } from './card.interface';

import { CustomEventName } from '@/constants/CustomEventName';

import styles from './card.module.scss';

export function Card({
  slug,
  children,
  className,
  ...divProps
}: CardProps): React.ReactNode {
  const { cn } = useClassName();

  const isTarget = useRef<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const classNames: string = cn(className, styles.card);
  const highlightTime = 2000;

  const scrollToCard = (): void => {
    cardRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const highlight = (): void => {
    const element = cardRef.current;

    if (element == null) return;

    element.classList.remove(styles.highlight);
    void element.offsetWidth;
    element.classList.add(styles.highlight);
    if (isTarget.current) scrollToCard();
    isTarget.current = true;

    window.setTimeout((): void => {
      element.classList.remove(styles.highlight);
    }, highlightTime);

    window.dispatchEvent(
      new CustomEvent(CustomEventName.HighlightCardFinished, { detail: slug })
    );
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

    return (): void =>
      window.removeEventListener(
        CustomEventName.HighlightCard,
        handleHighlight
      );
  }, [slug, initHighlight, handleHighlight]);

  return (
    <div {...divProps} ref={cardRef} id={slug} className={classNames}>
      {children}
    </div>
  );
}
