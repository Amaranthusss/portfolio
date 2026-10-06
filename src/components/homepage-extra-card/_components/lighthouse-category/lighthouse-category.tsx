import { CircularProgressBar } from '@/components/circular-progress-bar/circular-progress-bar';

import type { LighthouseCategoryProps } from './lighthouse-category.interface';

import styles from './lighthouse-category.module.scss';

export function LighthouseCategory({
  title,
}: LighthouseCategoryProps): React.ReactNode {
  return (
    <CircularProgressBar
      value={100}
      title={title}
      color={'var(--success-color)'}
      bgColor={'var(--success-shadow-color)'}
      valueClassName={styles.meter_value}
      renderValue={(v) => `${v}%`}
    />
  );
}
