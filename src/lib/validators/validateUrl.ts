export function validateUrl(value: string | null | undefined): true | string {
  if (value == null) return true;

  try {
    const url: URL = new URL(value);

    if (!['http:', 'https:'].includes(url.protocol)) {
      return 'URL must use HTTP or HTTPS.';
    }
  } catch {
    return 'Must be a valid URL.';
  }

  return true;
}
