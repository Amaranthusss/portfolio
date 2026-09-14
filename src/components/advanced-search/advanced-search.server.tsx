import { AdvancedSearchClient } from './advanced-search.client';

import { getProfiles } from '@/services/getProfiles';
import { getSkills } from '@/services/getSkills';
import { getLocale } from 'next-intl/server';

import type { AdvancedSearchProps } from './advanced-search.client.interface';
import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';
import type { SkillKey } from '@/models/skillKey';
import type { Locale } from '@/i18n/locale';

import { ProfileSlug } from '@/seeds/constants/profileSlug';

export async function AdvancedSearch({
  iconOnly,
  onNavigate,
}: AdvancedSearchProps): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();

  const [profiles, skills]: [ProfileDTO[], SkillDTO[]] = await Promise.all([
    getProfiles(locale),
    getSkills(locale),
  ]);

  const defaultSkillKeys: SkillKey[] =
    profiles
      .find(
        (profile: ProfileDTO): boolean =>
          profile.slug === ProfileSlug.FullstackJS
      )
      ?.skills?.map((skill: SkillDTO): SkillKey => skill.key) ?? [];

  return (
    <AdvancedSearchClient
      skills={skills}
      profiles={profiles}
      iconOnly={iconOnly}
      defaultSkillKeys={defaultSkillKeys}
      onNavigate={onNavigate}
    />
  );
}
