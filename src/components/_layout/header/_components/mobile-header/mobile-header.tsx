'use client';
import { AdvancedSearchClient } from '@/components/advanced-search/advanced-search.client';
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

import type { MobileHeaderProps } from './mobile-header.interface';
import type { ModalHandle } from '@/components/modal/modal.interface';
import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';
import type { SkillKey } from '@/models/skillKey';

import { ProfileSlug } from '@/seeds/constants/profileSlug';

import styles from './mobile-header.module.scss';

export function MobileHeader({
  skills,
  profiles,
  menuItems,
  className,
}: MobileHeaderProps): React.ReactNode {
  const t = useTranslations('layout.header');
  const { cn } = useClassName();

  const selectedSkillKeys = useRef<SkillKey[] | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<ModalHandle>(null);

  const defaultSelectedProfile: ProfileDTO | undefined = profiles.find(
    (profile: ProfileDTO): boolean => profile.slug === ProfileSlug.FullstackJS
  );

  const defaultSkillKeys: SkillKey[] =
    defaultSelectedProfile?.skills.map(
      (skill: SkillDTO): SkillKey => skill.key
    ) ?? [];

  const getDefaultSkillKeys = (): SkillKey[] =>
    selectedSkillKeys.current ?? defaultSkillKeys;

  const showMenu = (): void => modalRef.current?.open();
  const onNavigate = (): void => modalRef.current?.close();

  const onSelectedSkillKeysChange = (skillKeys: SkillKey[]): void => {
    selectedSkillKeys.current = skillKeys;
  };

  useEffect((): (() => void) | void => {
    const header: HTMLElement | null = headerRef.current;

    if (header == null) return;

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
        mobile
        mode={'text'}
        tooltip={t('menu-title')}
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

        <AdvancedSearchClient
          mobile
          iconOnly={false}
          skills={skills}
          profiles={profiles}
          defaultSkillKeys={defaultSkillKeys}
          getInitialSkillKeys={getDefaultSkillKeys}
          onNavigate={onNavigate}
          onSelectedSkillKeysChange={onSelectedSkillKeysChange}
        />

        <AppSettings mobile iconOnly={false} />
      </Modal>
    </header>
  );
}
