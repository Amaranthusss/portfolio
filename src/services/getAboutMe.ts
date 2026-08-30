import { createEmptyEditorState } from '@/utils/createEmptyEditorState';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import type { BasePayload } from 'payload';
import type { AboutMeDTO } from '@/models/aboutMeDto';
import type { AboutMe } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export async function getAboutMe(locale: Locale): Promise<AboutMeDTO> {
  const aboutMe: AboutMe = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      return await payload.findGlobal({
        slug: 'about-me',
        locale,
        fallbackLocale: defaultLocale,
      });
    },
    [CacheName.AboutMe, locale],
    {
      revalidate: false,
      tags: [CacheName.AboutMe],
    }
  )();

  return {
    title: aboutMe.title,
    email: aboutMe.email,
    mobile: aboutMe.mobile,
    linkedin: aboutMe.linkedin,
    welcome: aboutMe.welcome ?? createEmptyEditorState(),
    content: aboutMe.content ?? createEmptyEditorState(),
  };
}
