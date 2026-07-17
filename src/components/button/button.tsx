import { useClassName } from '@/hooks/useClassName';

import type { ButtonProps } from './button.interface';

import styles from './button.module.scss';

export const Button = ({
  active,
  square,
  animated,
  children,
  centerContent,
  className,
  centerVertical,
  mode = 'default',
  ...buttonProps
}: ButtonProps): React.ReactNode => {
  const { cn, boolToClass } = useClassName();

  const classNames: string = cn(
    className,
    styles[mode],
    styles.button,
    boolToClass(active, styles.active),
    boolToClass(square, styles.square),
    boolToClass(animated, styles.animated),
    boolToClass(centerContent, styles.center_content),
    boolToClass(centerVertical, styles.center_vertical)
  );

  return (
    <button {...buttonProps} className={classNames}>
      <span className={styles.button_content}>{children ?? ''}</span>
    </button>
  );
};
