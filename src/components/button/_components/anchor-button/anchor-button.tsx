import { Tooltip } from '@/components/tooltip/tooltip';

import { useButtonDefaultAriaLabel } from '../../_hooks/useButtonDefaultAriaLabel';
import { useButtonClassNames } from '../../_hooks/useButtonClassNames';

import type { ButtonProps } from './anchor-button.interface';

import styles from '../../button.module.scss';

export const AnchorButton = ({
  active,
  square,
  tooltip,
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

  const { ariaLabel } = useButtonDefaultAriaLabel(
    anchorButtonProps['aria-label'],
    tooltip
  );

  return (
    <a {...anchorButtonProps} aria-label={ariaLabel} className={classNames}>
      <Tooltip
        title={tooltip}
        style={contentStyle}
        className={styles.button_content}
      >
        {children ?? ''}
      </Tooltip>
    </a>
  );
};
