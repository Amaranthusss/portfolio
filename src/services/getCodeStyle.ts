import { createEmptyEditorState } from '@/utils/createEmptyEditorState';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import type { CodeStyleDTO } from '@/models/codeStyleDto';
import type { BasePayload } from 'payload';
import type { CodeStyle } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export async function getCodeStyle(locale: Locale): Promise<CodeStyleDTO> {
  const codeStyle: CodeStyle = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      return await payload.findGlobal({
        slug: 'code-style',
        locale,
        fallbackLocale: defaultLocale,
      });
    },
    [CacheName.CodeStyle, locale],
    {
      revalidate: false,
      tags: [CacheName.CodeStyle],
    }
  )();

  return {
    title: codeStyle.title,
    content: codeStyle.content ?? createEmptyEditorState(),
  };
}
