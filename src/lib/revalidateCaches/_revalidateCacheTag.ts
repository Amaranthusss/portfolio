import { revalidateTag } from 'next/cache';

export function revalidateCacheTag(tag: string): void {
  console.log('Revalidate Tag: ' + tag);
  revalidateTag(tag, 'max');
}
