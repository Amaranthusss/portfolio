import { useClassName } from '@/hooks/useClassName';

import type { ButtonProps } from './button.interface';

import styles from './button.module.scss';

export const Button = ({
  rootRef,
  style,
  name,
  active,
  animated,
  children,
  rootStyle,
  className,
  centerContent,
  rootClassName,
  type = 'default',
  onClick
}: ButtonProps): React.ReactNode => {
  const { cn } = useClassName();

  const boolToClass = (
    flag: boolean | undefined,
    className: string
  ): string | null => {
    if (flag == null) return null;
    return flag ? className : null;
  };

  const classNames: string = cn(
    className,
    rootClassName,
    styles.button,
    type != null ? styles[type] : null,
    boolToClass(active, styles.active),
    boolToClass(animated, styles.animated),
    boolToClass(centerContent, styles.center_content)
  );

  return (
    <button
      ref={rootRef}
      aria-label={name}
      style={{ ...rootStyle, ...style }}
      className={classNames}
      onClick={onClick}
    >
      {children ?? ''}
    </button>
  );
};
