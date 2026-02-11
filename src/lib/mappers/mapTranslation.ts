export function mapTranslation<T extends { name?: string; shortName?: string | null }>(
	translations: T[] | undefined,
	defaultName: string
): { name: string; shortName?: string } {
	const t = translations?.[0];
	return {
		name: t?.name ?? defaultName,
		shortName: t?.shortName ?? undefined,
	};
};