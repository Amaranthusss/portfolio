import type { TextAreaProps } from './text-area.interface';

import styles from '../../input.module.scss';

export const TextArea = ({
  id,
  label,
  error,
  required,
  className,
  ...textAreaProps
}: TextAreaProps): React.ReactNode => {
  const textAreaId: string | undefined = id ?? textAreaProps.name;

  return (
    <div className={styles.input_wrapper}>
      {label != null && (
        <label className={styles.label} htmlFor={textAreaId}>
          {label}

          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <textarea
        {...textAreaProps}
        id={textAreaId}
        aria-invalid={error != null}
        aria-describedby={error != null ? `${textAreaId}-error` : undefined}
        className={`${styles.text_area} ${error != null ? styles.error : ''} ${className ?? ''}`}
      />

      {error != null && (
        <span id={`${textAreaId}-error`} className={styles.error_message}>
          {error}
        </span>
      )}
    </div>
  );
};
