import { useId } from 'react';

import type { SelectOption, SelectProps } from './select.interface';
import type { ValueExtension } from './select.interface';
import type { Key } from 'react';

import styles from './select.module.scss';

export function Select<TValue extends ValueExtension = string>({
  value,
  label,
  options = [],
  onChange,
}: SelectProps<TValue>): React.ReactNode {
  const isDuplicatedValue: boolean =
    options.length !== new Set(options.map((o) => o.value)).size;
  const id: string = useId();

  if (isDuplicatedValue)
    console.error('Met a duplicated value, please check options list');

  const getOptionKey = (value: TValue, index: number): Key => {
    return value != null ? value.toString() : index;
  };

  return (
    <>
      {label && <label htmlFor={id}>{label}:</label>}

      <select
        id={id}
        name={label}
        value={value}
        className={styles.select}
        onChange={(e) => onChange?.(e.target.value as TValue)}
      >
        {options.map(
          (
            { value, label }: SelectOption<TValue>,
            i: number
          ): React.ReactNode => {
            const key: Key = getOptionKey(value, i);

            return (
              <option key={key} value={value}>
                {label}
              </option>
            );
          }
        )}
      </select>
    </>
  );
}
