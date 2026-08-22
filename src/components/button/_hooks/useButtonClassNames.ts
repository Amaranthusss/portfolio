import { useClassName } from '@/hooks/useClassName';

import type { ButtonProps } from '../button.interface';

import styles from '../button.module.scss';

export function useButtonClassNames(
  mode: NonNullable<ButtonProps['mode']>,
  active: ButtonProps['active'],
  square: ButtonProps['square'],
  animated: ButtonProps['animated'],
  className: ButtonProps['className'],
  centerVertical: ButtonProps['centerVertical']
) {
  const { cn, boolToClass } = useClassName();

  const classNames: string = cn(
    className,
    styles[mode],
    styles.button,
    boolToClass(active, styles.active),
    boolToClass(square, styles.square),
    boolToClass(animated, styles.animated),
    boolToClass(centerVertical, styles.center_vertical)
  );

  return { classNames };
}
