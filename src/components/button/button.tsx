import { useClassName } from '@/hooks/useClassName';

import type { ButtonProps } from './button.interface';

import styles from './button.module.scss';

export const Button = ({
  rootRef,
  style,
  active,
  animated,
  children,
  rootStyle,
  className,
  rootClassName,
  type = 'default',
  onClick
}: ButtonProps): React.ReactNode => {
  const { cn } = useClassName();

  const classNames: string = cn(
    className,
    rootClassName,
    styles.button,
    type != null ? styles[type] : null,
    active != null ? styles.active : null,
    animated != null ? styles.animated : null
  );

  return (
    <button
      ref={rootRef}
      style={{ ...rootStyle, ...style }}
      className={classNames}
      onClick={onClick}
    >
      {children ?? ''}
    </button>
  );
};
