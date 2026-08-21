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
import type { ModalHandle } from '../modal/modal.interface';

import styles from './advanced-search.client.module.scss';

export function AdvancedSearchClient({
  skills,
  profiles,
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
  } = useFindBySkills();

  const { closeOnNavigate, onNavigate, onToggleCloseOnNavigate } =
    useModalAutoClose(modalRef);

  const open = (): void => modalRef.current?.open();

  const toolbar: React.ReactNode = (
    <Button
      mode={'text'}
      onClick={onToggleCloseOnNavigate}
      aria-label={'toggle-close-modal-on-navigate'}
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
      mode={'primary'}
      onClick={search}
      className={styles.footer}
      disabled={selectedSkillKeys.size === 0}
      aria-label={'search-data-for-selected-skills'}
    >
      {t('search')}
    </Button>
  );

  return (
    <>
      <Button square aria-label={'open-advanced-search'} onClick={open}>
        <Icon icon={Icon.All.Search} />
      </Button>

      <Modal
        ref={modalRef}
        title={t('title')}
        footer={footer}
        toolbar={toolbar}
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
