'use client';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

import { MoreButton } from '../more-button/more-button';
import { FlexGroup } from '@/components/flex-group/flex-group';
import { NavButton } from '../../../nav-button/nav-button';

import { useAppFontSizeListener } from '@/hooks/useAppFontSizeListener';
import { usePathname } from '@/i18n/navigation';

import type { DesktopNavButtonsProps } from './desktop-nav-buttons.interface';
import type { FlexGroupHandle } from '@/components/flex-group/flex-group.interface';
import type { HeaderMenuItem } from '@/components/_layout/header/header.interface';

import { AppFontSize } from '@/constants/AppFontSize';

import buttonStyles from '@/components/button/button.module.scss';
import styles from './desktop-nav-buttons.module.scss';

export function DesktopNavButtons({
  menuItems,
}: DesktopNavButtonsProps): React.ReactNode {
  const pathname: string = usePathname();
  const t = useTranslations('layout.header');
  const { appFontSize } = useAppFontSizeListener();

  const lastPathname = useRef<string>(pathname);
  const flexGroupRef = useRef<FlexGroupHandle>(null);

  const moreText: string = t('show-more-pages');

  const moreMinWidth =
    appFontSize === AppFontSize.ExtraLarge
      ? 326
      : appFontSize === AppFontSize.Large
        ? 300
        : 209;

  const getActiveElement = (container: HTMLDivElement): HTMLElement | null => {
    return container.querySelector(`.${buttonStyles.active}`);
  };

  useEffect((): void => {
    if (lastPathname.current === pathname) return;

    lastPathname.current = pathname;
    flexGroupRef.current?.updateActiveIndicator();
  }, [pathname]);

  return (
    <FlexGroup
      ref={flexGroupRef}
      more={<MoreButton text={moreText} />}
      moreMinWidth={moreMinWidth}
      getActiveElement={getActiveElement}
      dropdownTopMargin={24}
      dropdownClassName={styles.dropdown}
      className={styles.menu_items}
      itemClassName={styles.menu_item}
      moreButtonClassName={styles.more}
      containerBgColor={'var(--layout-bg-color)'}
      updateDropdownOnScroll={false}
    >
      {menuItems.map((menuItem: HeaderMenuItem): React.ReactNode => (
        <NavButton
          key={menuItem.text}
          menuItem={menuItem}
          className={styles.nav_button}
        />
      ))}
    </FlexGroup>
  );
}
