'use client';
import { useLocale } from 'next-intl';
import { useRef, useState } from 'react';

import { startTransition } from 'react';
import { findBySkills } from '@/services/findBySkills';

import type { SkillAggregateDto } from '@/models/skillAggregateDto';
import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';
import type { SkillKey } from '@/models/skillKey';
import type { Locale } from '@/i18n/locale';

export function useFindBySkills() {
  const [results, setResults] = useState<SkillAggregateDto | null>(null);
  const [selectedSkillKeys, setSelectedSkillKeys] = useState<Set<SkillKey>>(
    new Set()
  );

  const activeProfile = useRef<ProfileDTO>(null);

  const locale: Locale = useLocale();

  const search = (): void => {
    startTransition(async (): Promise<void> => {
      const data: SkillAggregateDto = await findBySkills(
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
