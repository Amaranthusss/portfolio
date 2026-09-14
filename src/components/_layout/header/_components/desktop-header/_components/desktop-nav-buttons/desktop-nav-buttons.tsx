'use client';
import { FlexGroup } from '@/components/flex-group/flex-group';
import { NavButton } from '../../../nav-button/nav-button';

import { useRef } from 'react';

import type { DesktopNavButtonsProps } from './desktop-nav-buttons.interface';
import type { FlexGroupHandle } from '@/components/flex-group/flex-group.interface';
import type { HeaderMenuItem } from '@/components/_layout/header/header.interface';

import navButtonStyles from '@/components/button/button.module.scss';
import styles from './desktop-nav-buttons.module.scss';

export function DesktopNavButtons({
  menuItems,
}: DesktopNavButtonsProps): React.ReactNode {
  const flexGroupRef = useRef<FlexGroupHandle>(null);

  const getActiveElement = (container: HTMLDivElement): HTMLElement | null => {
    return container.querySelector(`.${navButtonStyles.active}`);
  };

  const onNavigate = (_menuItem: HeaderMenuItem): void => {
    flexGroupRef.current?.updateActiveIndicator();
    // ToDo Naprawic zaznaczenie w popover od FlexGroup i Modal dla MobileHeader
  };

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
          onNavigated={onNavigate}
        />
      ))}
    </FlexGroup>
  );
}
