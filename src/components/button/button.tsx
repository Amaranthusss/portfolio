import { Tooltip } from '../tooltip/tooltip';
import { AnchorButton } from './_components/anchor-button/anchor-button';

import { useButtonClassNames } from './_hooks/useButtonClassNames';

import type { ButtonProps } from './button.interface';

import styles from './button.module.scss';

export const Button = ({
  active,
  square,
  tooltip,
  animated,
  children,
  className,
  contentStyle,
  centerVertical,
  mode = 'default',
  ...buttonProps
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
    <button {...buttonProps} className={classNames}>
      <Tooltip
        title={tooltip}
        style={contentStyle}
        className={styles.button_content}
      >
        {children ?? ''}
      </Tooltip>
    </button>
  );
};

Button.AnchorButton = AnchorButton;
