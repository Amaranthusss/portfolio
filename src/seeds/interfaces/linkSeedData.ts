import type { IconName } from '@/components/icon/icon.config';
import type { LinkKey } from '../constants/linkKey';
import type { Locale } from '@/i18n/locale';
import type { Link } from '../../../payload-types';

export interface LinkTranslationSeedData {
  label: string;
}

export interface LinkLocalizedTranslationSeedData extends LinkTranslationSeedData {
  url: string;
}

interface LinkSeedDataBase {
  key: LinkKey;
  icon?: Extract<IconName, Link['icon']>;
  isExternal: boolean;
}

interface LinkLocalized extends LinkSeedDataBase {
  sharedUrl: string;
  translations: { [locale in Locale]: LinkTranslationSeedData };
}

interface LinkNonLocalized extends LinkSeedDataBase {
  sharedUrl?: never;
  translations: { [locale in Locale]: LinkLocalizedTranslationSeedData };
}

export type LinkSeedData = LinkLocalized | LinkNonLocalized;
