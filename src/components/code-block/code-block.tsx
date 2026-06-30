import type { CodeBlockProps } from './code-block.interface';

import styles from './code-block.module.scss';

export function CodeBlock({
  language,
  children,
}: CodeBlockProps): React.ReactNode {
  return <div className={styles.code_block}>{children}</div>;
}
