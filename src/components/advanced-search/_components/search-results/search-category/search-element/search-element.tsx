'use client';
import { Button } from '@/components/button/button';
import { Link } from '@/i18n/navigation';

import { useEffect, useRef } from 'react';

import type { SearchElementProps } from './search-element.interface';

import { CustomEventName } from '@/constants/CustomEventName';

import styles from './search-element.module.scss';

export function SearchElement({
  slug,
  text,
  route,
  onNavigate,
}: SearchElementProps): React.ReactNode {
  const href: string = route + '#' + slug;
  const navigateToTimeout = 8000;

  const resolveHighlightCardFinished = useRef<
    ((value: boolean) => void) | null
  >(null);

  const triggerElementHighlight = async (): Promise<void> => {
    const highlightPromise = new Promise<boolean>((resolve, reject) => {
      const timeout = setTimeout((): void => {
        resolveHighlightCardFinished.current = null;
        reject(false);
      }, navigateToTimeout);

      resolveHighlightCardFinished.current = (value: boolean): void => {
        clearTimeout(timeout);
        resolve(value);
      };
    });

    window.dispatchEvent(
      new CustomEvent(CustomEventName.HighlightCard, { detail: slug })
    );

    const isSuccess: boolean = await highlightPromise;

    if (isSuccess) onNavigate();
  };

  const handleHighlightFinished = (event: Event): void => {
    const customEvent: CustomEvent<string> = event as CustomEvent<string>;

    if (customEvent.detail !== slug) return;

    resolveHighlightCardFinished.current?.(true);
    resolveHighlightCardFinished.current = null;
  };

  useEffect((): (() => void) => {
    window.addEventListener(
      CustomEventName.HighlightCardFinished,
      handleHighlightFinished
    );

    return (): void =>
      window.removeEventListener(
        CustomEventName.HighlightCardFinished,
        handleHighlightFinished
      );
  }, []);

  return (
    <li className={styles.list_element}>
      <Button mode={'text'} aria-label={slug} className={styles.button}>
        <Link
          href={href}
          onClick={triggerElementHighlight}
          className={styles.link}
        >
          {text}
        </Link>
      </Button>
    </li>
  );
}
