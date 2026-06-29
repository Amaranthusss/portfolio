import { defineRouting } from 'next-intl/routing';
import { defaultLocale } from './locale';
import { locales } from './locale';

export const routing = defineRouting({
	locales,
	defaultLocale: defaultLocale
});