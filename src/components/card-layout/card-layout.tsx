import { Children, isValidElement } from 'react';

import { useClassName } from '@/hooks/useClassName';

import type { CardLayoutSectionProps } from './card-layout.interface';
import type { CardLayoutProps } from './card-layout.interface';
import type { CardLayoutComponent } from './card-layout.interface';

import styles from './card-layout.module.scss';

export const CardLayout: CardLayoutComponent = ({
  children,
  disableIcon,
}: CardLayoutProps) => {
  const { cn, boolToClass } = useClassName();

  let icon: React.ReactNode = null;
  let header: React.ReactNode = null;
  let skills: React.ReactNode = null;
  let content: React.ReactNode = null;

  Children.forEach(children, (child) => {
    if (!isValidElement<CardLayoutSectionProps>(child)) return;
    if (child.type === CardLayout.Icon) icon = child.props.children;
    else if (child.type === CardLayout.Header) header = child.props.children;
    else if (child.type === CardLayout.Skills) skills = child.props.children;
    else if (child.type === CardLayout.Content) content = child.props.children;
  });

  return (
    <div
      className={cn(
        styles.card_layout,
        boolToClass(disableIcon, styles.disabled_icon)
      )}
    >
      {!disableIcon && <div className={styles.icon}>{icon}</div>}
      <div className={styles.header}>{header}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.skills}>{skills}</div>
    </div>
  );
};

CardLayout.Icon = ({ children }) => <>{children}</>;
CardLayout.Header = ({ children }) => <>{children}</>;
CardLayout.Skills = ({ children }) => <>{children}</>;
CardLayout.Content = ({ children }) => <>{children}</>;
