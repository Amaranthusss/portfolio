import { TextArea } from './_components/text-area/text-area';

import type { InputProps } from './input.interface';

import styles from './input.module.scss';

export const Input = ({
  id,
  label,
  error,
  required,
  className,
  ...inputProps
}: InputProps): React.ReactNode => {
  const inputId: string | undefined = id ?? inputProps.name;

  return (
    <div className={styles.input_wrapper}>
      {label != null && (
        <label className={styles.label} htmlFor={inputId}>
          {label}

          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <input
        {...inputProps}
        id={inputId}
        aria-invalid={error != null}
        aria-describedby={error != null ? `${inputId}-error` : undefined}
        className={`${styles.input} ${error != null ? styles.error : ''} ${className ?? ''}`}
      />

      {error != null && (
        <span id={`${inputId}-error`} className={styles.error_message}>
          {error}
        </span>
      )}
    </div>
  );
};

Input.TextArea = TextArea;
