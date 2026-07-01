import type { TitleProps } from './title.interface';

import styles from './title.module.scss';

export function Title({
  children,
  size = 'xl',
  level = 1,
}: TitleProps): React.ReactNode {
  const className: string = [styles[size]].join(' ');
  const props = { className };

  switch (level) {
    case 1:
      return <h1 {...props}>{children}</h1>;
    case 2:
      return <h2 {...props}>{children}</h2>;
    case 3:
      return <h3 {...props}>{children}</h3>;
  }
}
