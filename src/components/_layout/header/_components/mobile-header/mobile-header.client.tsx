'use client';
import { AppSettings } from '@/components/app-settings/app-settings';
import { NavButton } from '../nav-button/nav-button';
import { Divider } from '@/components/divider/divider';
import { Button } from '@/components/button/button';
import { Modal } from '@/components/modal/modal';
import { Logo } from '@/components/logo/logo';
import { Icon } from '@/components/icon/icon';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useClassName } from '@/hooks/useClassName';

import type { MobileHeaderClientProps } from './mobile-header.interface';
import type { ModalHandle } from '@/components/modal/modal.interface';

import styles from './mobile-header.module.scss';

export function MobileHeaderClient({
  advancedSearch,
  menuItems,
  className,
}: MobileHeaderClientProps): React.ReactNode {
  const t = useTranslations('layout.header');
  const { cn } = useClassName();

  const headerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<ModalHandle>(null);

  const showMenu = (): void => modalRef.current?.open();
  const onNavigate = (): void => modalRef.current?.close();

  useEffect((): (() => void) => {
    const header: HTMLElement | null = headerRef.current;

    if (header == null) return () => {};

    const resizeObserver: ResizeObserver = new ResizeObserver((): void => {
      if (header.clientWidth === 0) modalRef.current?.close();
    });

    resizeObserver.observe(header);

    return (): void => resizeObserver.disconnect();
  }, []);

  return (
    <header ref={headerRef} className={cn(styles.header, className)}>
      <Logo className={styles.logo} />

      <Button
        square
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
        className={styles.menu_modal}
        bodyClassName={styles.menu_modal_body}
      >
        {menuItems.map((menuItem): React.ReactNode => (
          <NavButton
            key={menuItem.text}
            menuItem={menuItem}
            className={styles.nav_button}
            onNavigate={onNavigate}
          />
        ))}

        <Divider />

        {advancedSearch}
        <AppSettings iconOnly={false} />
      </Modal>
    </header>
  );
}
