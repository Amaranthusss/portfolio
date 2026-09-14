'use client';
import { ProfileButtons } from './_components/profile-buttons/profile-buttons';
import { SearchResults } from './_components/search-results/search-results';
import { SkillsList } from './_components/skills-list/skills-list';
import { Button } from '../button/button';
import { Modal } from '../modal/modal';
import { Icon } from '../icon/icon';

import { useModalAutoClose } from './_hooks/useModalAutoClose';
import { useFindBySkills } from './_hooks/useFindBySkills';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import type { AdvancedSearchClientProps } from './advanced-search.client.interface';
import type { ModalHandle, ModalProps } from '../modal/modal.interface';

import styles from './advanced-search.client.module.scss';

export function AdvancedSearchClient({
  skills,
  profiles,
  mobile = false,
  iconOnly = true,
  onNavigate: onNavigateHandler,
}: AdvancedSearchClientProps): React.ReactNode {
  const t = useTranslations('common.advanced-search');
  const modalRef = useRef<ModalHandle>(null);

  const {
    search,
    results,
    onToggleSkill,
    onToggleProfile,
    isActiveProfile,
    selectedSkillKeys,
    isActiveExactProfile,
  } = useFindBySkills(modalRef);

  const { closeOnNavigate, onNavigate, onToggleCloseOnNavigate } =
    useModalAutoClose(modalRef, onNavigateHandler);

  const open = (): void => modalRef.current?.open();

  const toggleCloseOnNavigateTooltip = t(
    closeOnNavigate
      ? 'hold-modal-open-when-navigating'
      : 'close-modal-when-navigating'
  );

  const closeButtonProps: ModalProps['closeButtonProps'] = {
    tooltip: t('close-modal'),
    mobile,
  };

  const toolbar: React.ReactNode = !mobile && (
    <Button
      mode={'text'}
      mobile={mobile}
      tooltip={toggleCloseOnNavigateTooltip}
      onClick={onToggleCloseOnNavigate}
    >
      {closeOnNavigate ? (
        <Icon icon={Icon.All.Unlock} />
      ) : (
        <Icon icon={Icon.All.Lock} />
      )}
    </Button>
  );

  const footer: React.ReactNode = (
    <Button
      mobile={mobile}
      mode={'primary'}
      className={styles.footer}
      disabled={selectedSkillKeys.size === 0}
      tooltip={t('search-data-for-selected-skills')}
      onClick={search}
    >
      {t('search')}
    </Button>
  );

  return (
    <>
      <Button
        square
        mobile={mobile}
        tooltip={t('open-advanced-search')}
        onClick={open}
      >
        {iconOnly ? (
          <Icon icon={Icon.All.Search} />
        ) : (
          <span className={styles.full_advanced_search_button}>
            <Icon icon={Icon.All.Search} />
            {t('menu-title')}
          </span>
        )}
      </Button>

      <Modal
        ref={modalRef}
        title={t('title')}
        footer={footer}
        toolbar={toolbar}
        closeButtonProps={closeButtonProps}
        className={styles.advanced_search_modal}
        bodyClassName={styles.advanced_search_modal_body}
        footerClassName={styles.advanced_search_modal_footer}
      >
        <div className={styles.configuration}>
          <ProfileButtons
            profiles={profiles}
            className={styles.profile_buttons}
            profileButtonListClassName={styles.profile_button_list}
            isActiveProfile={isActiveProfile}
            isActiveExactProfile={isActiveExactProfile}
            onToggleProfile={onToggleProfile}
          />

          <SkillsList
            skills={skills}
            className={styles.skills_list}
            selectedSkillKeys={selectedSkillKeys}
            onToggleSkill={onToggleSkill}
          />
        </div>

        <SearchResults results={results} onNavigate={onNavigate} />
      </Modal>
    </>
  );
}
