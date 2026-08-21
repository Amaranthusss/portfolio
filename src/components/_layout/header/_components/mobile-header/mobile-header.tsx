'use client';
import { AppSettings } from '@/components/app-settings/app-settings';
import { NavButton } from '../nav-button/nav-button';
import { Divider } from '@/components/divider/divider';
import { Button } from '@/components/button/button';
import { Modal } from '@/components/modal/modal';
import { Logo } from '@/components/logo/logo';
import { Icon } from '@/components/icon/icon';

import { useTranslations } from 'next-intl';
import { useClassName } from '@/hooks/useClassName';
import { useRef } from 'react';

import type { MobileHeaderProps } from './mobile-header.interface';
import type { ModalHandle } from '@/components/modal/modal.interface';

import styles from './mobile-header.module.scss';

export function MobileHeader({
  menuItems,
  className,
}: MobileHeaderProps): React.ReactNode {
  const t = useTranslations('layout.header');
  const { cn } = useClassName();

  const modalRef = useRef<ModalHandle>(null);

  const showMenu = (): void => modalRef.current?.open();

  return (
    <header className={cn(styles.header, className)}>
      <Logo className={styles.logo} />

      <Button
        square
        centerContent
        mode={'text'}
        title={t('menu-title')}
        aria-label={t('menu-title')}
        className={styles.menu_button}
        onClick={showMenu}
      >
        <Icon icon={Icon.All.Hamburger} />
      </Button>

      <Modal
        ref={modalRef}
        title={t('menu-title')}
        bodyClassName={styles.menu_modal}
      >
        {menuItems.map((menuItem): React.ReactNode => (
          <NavButton
            key={menuItem.text}
            menuItem={menuItem}
            className={styles.nav_button}
          />
        ))}

        <Divider />

        <AppSettings iconOnly={false} />
      </Modal>
    </header>
  );
}
