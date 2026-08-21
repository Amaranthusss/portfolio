import { AdvancedSearchClient } from './advanced-search.client';

import { getProfiles } from '@/services/getProfiles';
import { getSkills } from '@/services/getSkills';
import { getLocale } from 'next-intl/server';

import type { AdvancedSearchProps } from './advanced-search.client.interface';
import type { ProfileDTO } from '@/models/profileDto';
import type { SkillDTO } from '@/models/skillDto';
import type { Locale } from '@/i18n/locale';

export async function AdvancedSearch({
  style,
  iconOnly,
}: AdvancedSearchProps): Promise<React.ReactNode> {
  const locale: Locale = await getLocale();

  const [profiles, skills]: [ProfileDTO[], SkillDTO[]] = await Promise.all([
    getProfiles(locale),
    getSkills(locale),
  ]);

  return (
    <AdvancedSearchClient
      skills={skills}
      profiles={profiles}
      style={style}
      iconOnly={iconOnly}
    />
  );
}
