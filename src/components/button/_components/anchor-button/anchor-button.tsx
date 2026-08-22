import { useButtonClassNames } from '../../_hooks/useButtonClassNames';

import type { ButtonProps } from './anchor-button.interface';

import styles from '../../button.module.scss';

export const AnchorButton = ({
  active,
  square,
  animated,
  children,
  className,
  contentStyle,
  centerVertical,
  mode = 'default',
  ...anchorButtonProps
}: ButtonProps): React.ReactNode => {
  const { classNames } = useButtonClassNames(
    mode,
    active,
    square,
    animated,
    className,
    centerVertical
  );

  return (
    <a {...anchorButtonProps} className={classNames}>
      <span style={contentStyle} className={styles.button_content}>
        {children ?? ''}
      </span>
    </a>
  );
};
