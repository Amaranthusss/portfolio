'use client';
import { FlexGroup } from '@/components/flex-group/flex-group';
import { NavButton } from '../../../nav-button/nav-button';

import { useEffect, useRef } from 'react';
import { usePathname } from '@/i18n/navigation';

import type { DesktopNavButtonsProps } from './desktop-nav-buttons.interface';
import type { FlexGroupHandle } from '@/components/flex-group/flex-group.interface';

import navButtonStyles from '@/components/button/button.module.scss';
import styles from './desktop-nav-buttons.module.scss';

export function DesktopNavButtons({
  menuItems,
}: DesktopNavButtonsProps): React.ReactNode {
  const pathname: string = usePathname();
  const lastPathname = useRef<string>(pathname);
  const flexGroupRef = useRef<FlexGroupHandle>(null);

  const getActiveElement = (container: HTMLDivElement): HTMLElement | null => {
    return container.querySelector(`.${navButtonStyles.active}`);
  };

  useEffect((): void => {
    if (lastPathname.current === pathname) return;

    lastPathname.current = pathname;
    flexGroupRef.current?.updateActiveIndicator();
  }, [pathname]);

  return (
    <FlexGroup
      ref={flexGroupRef}
      getActiveElement={getActiveElement}
      dropdownTopMargin={24}
      dropdownClassName={styles.dropdown}
      className={styles.menu_items}
      containerBgColor={'var(--layout-bg-color)'}
      updateDropdownOnScroll={false}
    >
      {menuItems.map((menuItem): React.ReactNode => (
        <NavButton
          key={menuItem.text}
          menuItem={menuItem}
          className={styles.nav_button}
        />
      ))}
    </FlexGroup>
  );
}
