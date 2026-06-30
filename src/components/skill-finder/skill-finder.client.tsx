'use client';
import { ProfileButtons } from './_components/profile-buttons/profile-buttons';
import { SearchResults } from './_components/search-results/search-results';
import { SkillsList } from './_components/skills-list/skills-list';
import { Divider } from '../divider/divider';
import { Button } from '../button/button';
import { Modal } from '../modal/modal';

import { useFindBySkills } from './_hooks/useFindBySkills';
import { useRef } from 'react';

import type { SkillFinderClientProps } from './skill-finder.client.interface';
import type { ModalHandle } from '../modal/modal.interface';

export function SkillFinderClient({
  skills,
  profiles,
}: SkillFinderClientProps): React.ReactNode {
  const modalRef = useRef<ModalHandle>(null);

  const {
    search,
    results,
    onToggleSkill,
    onToggleProfile,
    isActiveProfile,
    selectedSkillKeys,
  } = useFindBySkills();

  return (
    <>
      <Button onClick={() => modalRef.current?.open()}>Open</Button>

      <Modal ref={modalRef} title={'Skill finder'}>
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

        <Button type={'primary'} style={{ width: '100%' }} onClick={search}>
          Search
        </Button>

        <Divider />

        <SearchResults results={results} />
      </Modal>
    </>
  );
}
