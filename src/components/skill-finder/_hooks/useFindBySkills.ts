import { useState } from 'react';

import { startTransition } from 'react';
import { findBySkills } from '@/services/findBySkills';

import type { SkillAggregateDto } from '@/models/skillGraphDto';
import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';
import type { SkillKey } from '@/generated/prisma';

export function useFindBySkills() {
  const [selectedSkillKeys, setSelectedSkillKeys] = useState<Set<SkillKey>>(
    new Set()
  );
  const [results, setResults] = useState<SkillAggregateDto | null>(null);

  const onToggleSkill = (skill: SkillDTO): void => {
    setSelectedSkillKeys((prev) => {
      const next: Set<SkillKey> = new Set(prev);

      if (next.has(skill.key)) next.delete(skill.key);
      else next.add(skill.key);

      return next;
    });
  };

  const isActiveProfile = (profile: ProfileDTO): boolean => {
    const profileSkillKeys: SkillKey[] = profile.skills.map((s) => s.key);

    return profileSkillKeys.every((key) => selectedSkillKeys.has(key));
  };

  const onToggleProfile = (profile: ProfileDTO): void => {
    const profileSkillKeys: SkillKey[] = profile.skills.map((s) => s.key);
    const isSomeMissing: boolean = !isActiveProfile(profile);

    setSelectedSkillKeys((prev) => {
      const next: Set<SkillKey> = new Set(prev);

      for (const skillKey of profileSkillKeys) {
        if (isSomeMissing) next.add(skillKey);
        else next.delete(skillKey);
      }

      return next;
    });
  };

  const search = () => {
    startTransition(async (): Promise<void> => {
      const data: SkillAggregateDto = await findBySkills(
        selectedSkillKeys.values().toArray()
      );

      setResults(data);
    });
  };

  return {
    search,
    results,
    onToggleSkill,
    onToggleProfile,
    isActiveProfile,
    selectedSkillKeys
  };
}
