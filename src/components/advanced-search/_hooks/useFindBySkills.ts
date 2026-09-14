'use client';
import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';

import { startTransition } from 'react';
import { findBySkills } from '@/services/findBySkills';

import type { SkillAggregateDTO } from '@/models/skillAggregateDto';
import type { ModalHandle } from '@/components/modal/modal.interface';
import type { ProfileDTO } from '@/models/profileDto';
import type { RefObject } from 'react';
import type { SkillDTO } from '@/models/skillDto';
import type { SkillKey } from '@/models/skillKey';
import type { Locale } from '@/i18n/locale';

import { searchResultsId } from '../advanced-search.config';

export function useFindBySkills(
  modalRef: RefObject<ModalHandle | null>,
  defaultSelectedProfile: ProfileDTO | undefined
) {
  const [results, setResults] = useState<SkillAggregateDTO | null>(null);

  const [selectedSkillKeys, setSelectedSkillKeys] = useState<Set<SkillKey>>(
    new Set(
      defaultSelectedProfile?.skills.map(
        (skill: SkillDTO): SkillKey => skill.key
      )
    )
  );

  console.log(Array.from(selectedSkillKeys))

  const activeProfile = useRef<ProfileDTO>(null);

  const locale: Locale = useLocale();

  const search = (): void => {
    startTransition(async (): Promise<void> => {
      const data: SkillAggregateDTO = await findBySkills(
        selectedSkillKeys.values().toArray(),
        locale
      );

      setResults(data);
    });
  };

  const isActiveProfile = (
    profile: ProfileDTO,
    skillKeys?: Set<SkillKey>
  ): boolean => {
    const profileSkillKeys: SkillKey[] = profile.skills.map((s) => s.key);
    const skillKeySet: Set<SkillKey> = skillKeys ?? selectedSkillKeys;

    return profileSkillKeys.every((key) => skillKeySet.has(key));
  };

  const isActiveExactProfile = (profile: ProfileDTO): boolean => {
    const profileSkillKeys: SkillKey[] = profile.skills.map((s) => s.key);

    if (profileSkillKeys.length !== selectedSkillKeys.size) return false;
    return profileSkillKeys.every((key) => selectedSkillKeys.has(key));
  };

  const onToggleSkill = (skill: SkillDTO): void => {
    setSelectedSkillKeys((prev) => {
      const next: Set<SkillKey> = new Set(prev);

      if (next.has(skill.key)) next.delete(skill.key);
      else next.add(skill.key);

      const shouldClearActiveProfile: boolean =
        activeProfile.current != null &&
        !isActiveProfile(activeProfile.current, next);

      if (shouldClearActiveProfile) activeProfile.current = null;

      return next;
    });
  };

  const onToggleProfile = (profile: ProfileDTO): void => {
    const isClearProfile: boolean = activeProfile.current?.id === profile.id;

    if (isClearProfile) {
      activeProfile.current = null;
      setSelectedSkillKeys(new Set());

      return;
    }

    const profileSkillKeys: SkillKey[] = profile.skills.map((s) => s.key);

    activeProfile.current = profile;
    setSelectedSkillKeys(new Set(profileSkillKeys));
  };

  useEffect((): void => {
    if (results == null) return;

    modalRef.current?.bodyRef.current
      ?.querySelector(`[id="${searchResultsId}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [results, modalRef]);

  return {
    search,
    results,
    isActiveProfile,
    selectedSkillKeys,
    isActiveExactProfile,
    onToggleSkill,
    onToggleProfile,
  };
}
