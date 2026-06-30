export function getPublicImageUrlFromStorageKey(storageKey: string) {
  const baseRaw: string = process.env.NEXT_PUBLIC_STORAGE_URL || '';
  const base: string = baseRaw.replace(/\/$/, '');
  let key: string = storageKey.replace(/^\//, '');

  if (base.endsWith('/images') && key.startsWith('images/')) {
    key = key.replace(/^images\//, '');
  }

  return `${base}/${key}`;
}
