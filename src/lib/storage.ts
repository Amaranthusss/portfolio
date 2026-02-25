export function getPublicImageUrlFromStorageKey(storageKey: string) {
  const baseRaw = process.env.NEXT_PUBLIC_STORAGE_URL || "";
  const base = baseRaw.replace(/\/$/, "");
  let key = storageKey.replace(/^\//, "");

  if (base.endsWith("/images") && key.startsWith("images/")) {
    key = key.replace(/^images\//, "");
  }

  return `${base}/${key}`;
}