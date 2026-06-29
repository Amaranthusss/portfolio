import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

import { Select } from "../select/select";

import type { SelectOption } from "../select/select.interface";
import type { Locale } from "@/i18n/locale";

export function LanguageSelector(): React.ReactNode {
	const locale: Locale = useLocale();
	const pathname: string = usePathname();
	const router = useRouter();

	const options: SelectOption<Locale>[] = [
		{ label: 'Polski (PL)', value: 'pl' },
		{ label: 'English (GB)', value: 'en' },
	];

	const onChange = (locale: Locale): void => {
		router.replace(pathname, { locale });
	}

	return (
		<Select<Locale>
			value={locale}
			options={options}
			onChange={onChange}
		/>
	);
}