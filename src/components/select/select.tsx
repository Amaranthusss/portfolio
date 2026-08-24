import { useClassName } from '@/hooks/useClassName';
import { useId } from 'react';

import type { SelectOption, SelectProps } from './select.interface';
import type { ChangeEvent, Key } from 'react';
import type { ValueExtension } from './select.interface';

import styles from './select.module.scss';

export function Select<TValue extends ValueExtension = string>({
  value,
  label,
  error,
  className,
  options = [],
  onChange,
  ...selectProps
}: SelectProps<TValue>): React.ReactNode {
  const { cn, boolToClass } = useClassName();

  const isDuplicatedValue: boolean =
    options.length !== new Set(options.map((o) => o.value)).size;

  const id: string = useId();

  if (isDuplicatedValue) {
    console.error('Met a duplicated value, please check options list');
  }

  const getOptionKey = (value: TValue, index: number): Key => {
    return value != null ? value.toString() : index;
  };

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {selectProps.required && <span className={styles.required}>*</span>}
        </label>
      )}

      <div className={styles.select_wrapper}>
        <select
          {...selectProps}
          id={id}
          name={label}
          value={value}
          className={cn(
            className,
            styles.select,
            boolToClass(error != null, styles.select_error)
          )}
          aria-invalid={error != null}
          aria-describedby={error != null ? `${id}-error` : undefined}
          onChange={(
            event: ChangeEvent<HTMLSelectElement, HTMLSelectElement>
          ): void => {
            const selectedValue: string = event.target.value;

            onChange?.(selectedValue as TValue);
          }}
        >
          {options.map(
            (
              { value, label }: SelectOption<TValue>,
              index: number
            ): React.ReactNode => {
              const key: Key = getOptionKey(value, index);

              return (
                <option key={key} value={value} className={styles.option}>
                  {label}
                </option>
              );
            }
          )}
        </select>

        <span className={styles.arrow} aria-hidden="true" />
      </div>

      {error != null && (
        <span id={`${id}-error`} className={styles.error_message}>
          {error}
        </span>
      )}
    </div>
  );
}
