import type { PaginatedDocs, Payload } from 'payload';
import type { LinkKey } from '../constants/linkKey';
import type { Link } from '../../../payload-types';

export async function findLinkIds(
  payload: Payload,
  keys: LinkKey[]
): Promise<Link['id'][]> {
  const ids: Link['id'][] = [];

  for (const key of keys) {
    const result: PaginatedDocs<Link> = await payload.find({
      collection: 'links',
      where: { key: { equals: key } },
      depth: 0,
      limit: 1,
    });

    const link: Link | undefined = result.docs[0];

    if (link == null) {
      throw new Error(`Could not find link with key "${key}".`);
    }

    ids.push(link.id);
  }

  return ids;
}
