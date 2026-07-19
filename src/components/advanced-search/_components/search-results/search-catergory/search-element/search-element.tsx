import { Button } from '@/components/button/button';
import { Link } from '@/i18n/navigation';

import type { SearchElementProps } from './search-element.interface';

import { CustomEventName } from '@/constants/CustomEventName';

import styles from './search-element.module.scss';

export function SearchElement({
  slug,
  text,
  route
}: SearchElementProps): React.ReactNode {
  const href: string = route + '#' + slug;

  const triggerElementHighlight = (): void => {
    window.dispatchEvent(
      new CustomEvent(CustomEventName.HighlightCard, { detail: slug })
    );
  };

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
