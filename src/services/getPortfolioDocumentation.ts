import { createEmptyEditorState } from '@/utils/createEmptyEditorState';
import { unstable_cache } from 'next/cache';
import { getPayload } from 'payload';

import type { PortfolioDocumentationDTO } from '@/models/portfolioDocumentationDto';
import type { PortfolioDocumentation } from '../../payload-types';
import type { BasePayload } from 'payload';
import type { Locale } from '@/i18n/locale';

import { defaultLocale } from '@/i18n/locale';
import { CacheName } from '@/constants/CacheName';
import config from '@payload-config';

export async function getPortfolioDocumentation(
  locale: Locale
): Promise<PortfolioDocumentationDTO> {
  const portfolioDocumentation: PortfolioDocumentation = await unstable_cache(
    async () => {
      const payload: BasePayload = await getPayload({ config });

      return await payload.findGlobal({
        slug: 'portfolio-documentation',
        locale,
        fallbackLocale: defaultLocale,
      });
    },
    [CacheName.PortfolioDocumentation, locale],
    {
      revalidate: false,
      tags: [CacheName.PortfolioDocumentation],
    }
  )();

  return {
    title: portfolioDocumentation.title,
    description: portfolioDocumentation.description ?? createEmptyEditorState(),
  };
}
