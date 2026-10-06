import { useClassName } from '@/hooks/useClassName';
import { useId } from 'react';

import type { CSSProperties, ReactNode } from 'react';
import type { CircularProgressBarProps } from './circular-progress-bar.interface';

import styles from './circular-progress-bar.module.scss';

const radius = 44;
const circumference = 2 * Math.PI * radius;

export function CircularProgressBar({
  size,
  value,
  title,
  color,
  bgColor,
  maxValue = 100,
  ariaLabel,
  trackColor,
  renderValue,
  valueClassName,
  titleClassName,
}: CircularProgressBarProps): ReactNode {
  const titleId: string = useId();
  const { cn } = useClassName();

  if (!Number.isFinite(maxValue) || maxValue <= 0) {
    throw new RangeError('maxValue must be a finite number greater than 0.');
  }

  if (!Number.isFinite(value)) {
    throw new RangeError('value must be a finite number.');
  }

  const normalizedValue: number = Math.min(maxValue, Math.max(0, value));
  const percentage: number = normalizedValue / maxValue;
  const dashOffset: number = circumference * (1 - percentage);

  const displayedValue: string =
    renderValue?.(value, maxValue) ?? String(value);

  const progressColor: CSSProperties['color'] =
    color ??
    (percentage >= 0.9
      ? 'var(--success-color)'
      : percentage >= 0.5
        ? 'var(--warning-color)'
        : 'var(--error-color)');

  const gaugeStyle: CSSProperties | undefined = size
    ? { width: size, height: size }
    : undefined;

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.gauge}
        style={gaugeStyle}
        role={'meter'}
        aria-label={ariaLabel ?? (title ? undefined : 'Progress')}
        aria-labelledby={title ? titleId : undefined}
        aria-valuemin={0}
        aria-valuemax={maxValue}
        aria-valuenow={normalizedValue}
        aria-valuetext={displayedValue}
      >
        <svg
          aria-hidden={'true'}
          className={styles.svg}
          viewBox={'0 0 100 100'}
          style={{ backgroundColor: bgColor }}
        >
          <circle
            className={styles.track}
            cx={'50'}
            cy={'50'}
            r={radius}
            fill={'none'}
            stroke={trackColor}
            strokeWidth={'8'}
          />

          <circle
            className={styles.progress}
            cx={'50'}
            cy={'50'}
            r={radius}
            fill={'none'}
            stroke={progressColor}
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            strokeWidth={'8'}
            transform={'rotate(-90 50 50)'}
          />

          <text
            x={'50'}
            y={'50'}
            textAnchor={'middle'}
            className={cn(styles.value, valueClassName)}
          >
            {displayedValue}
          </text>
        </svg>
      </div>

      {title && (
        <div className={cn(styles.title, titleClassName)} id={titleId}>
          {title}
        </div>
      )}
    </div>
  );
}
