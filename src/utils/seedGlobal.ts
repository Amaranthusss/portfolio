import type { BasePayload } from 'payload';
import type { Config } from '../../payload-types';
import type { Locale } from '@/i18n/locale';

import { locales } from '@/i18n/locale';

export async function seedGlobal<DTO extends object>(
  payload: BasePayload,
  slug: keyof Config['globals'],
  datasource: { [locale in Locale]: DTO }
): Promise<void> {
  const name: string = slug.replace(/\-/g, ' ').toLowerCase();
  let i: number = 1;

  console.log(`== Seeding ${name} ==`);

  for (const locale of locales) {
    const data: DTO = datasource[locale];

    await payload.updateGlobal({ slug, locale, data });

    console.log(`[${i++}] ✓ Updated ${name} for ${locale} locale`);
  }

  console.log(`[${i++}] Seeding ${name} completed`);
}
