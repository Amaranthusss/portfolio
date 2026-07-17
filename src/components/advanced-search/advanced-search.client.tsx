'use client';
import { ProfileButtons } from './_components/profile-buttons/profile-buttons';
import { SearchResults } from './_components/search-results/search-results';
import { SkillsList } from './_components/skills-list/skills-list';
import { Divider } from '../divider/divider';
import { Button } from '../button/button';
import { Modal } from '../modal/modal';
import { Icon } from '../icon/icon';

import { useFindBySkills } from './_hooks/useFindBySkills';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

import type { AdvancedSearchClientProps } from './advanced-search.client.interface';
import type { ModalHandle } from '../modal/modal.interface';

export function AdvancedSearchClient({
  skills,
  profiles
}: AdvancedSearchClientProps): React.ReactNode {
  const t = useTranslations('common.advanced-search');
  const modalRef = useRef<ModalHandle>(null);

  const {
    search,
    results,
    onToggleSkill,
    onToggleProfile,
    isActiveProfile,
    selectedSkillKeys
  } = useFindBySkills();

  const open = (): void => modalRef.current?.open();

  return (
    <>
      <Button
        square
        centerContent
        aria-label={'open-advanced-search'}
        onClick={open}
      >
        <Icon icon={Icon.All.Search} />
      </Button>

      <Modal ref={modalRef} title={t('title')}>
        <ProfileButtons
          profiles={profiles}
          isActiveProfile={isActiveProfile}
          onToggleProfile={onToggleProfile}
        />

        <Divider />

        <SkillsList
          skills={skills}
          selectedSkillKeys={selectedSkillKeys}
          onToggleSkill={onToggleSkill}
        />

        <Divider />

        <Button
          mode={'primary'}
          onClick={search}
          style={{ width: '100%' }}
          disabled={selectedSkillKeys.size === 0}
          aria-label={'search-data-for-selected-skills'}
        >
          {t('search')}
        </Button>

        <Divider />

        <SearchResults results={results} />
      </Modal>
    </>
  );
}
