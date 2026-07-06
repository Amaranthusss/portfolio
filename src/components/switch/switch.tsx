import { useClassName } from '@/hooks/useClassName';

import type { SwitchProps } from './switch.interface';

import styles from './switch.module.scss';

export function Switch({
  label,
  slider,
  ...inputProps
}: SwitchProps): React.ReactNode {
  const { cn } = useClassName();

  return (
    <label {...label} className={cn(styles.switch, label?.className)}>
      <input {...inputProps} type={'checkbox'} />
      <span {...slider} className={cn(styles.slider, slider?.className)} />
    </label>
  );
}
