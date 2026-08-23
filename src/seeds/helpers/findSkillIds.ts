import type { PaginatedDocs, Payload } from 'payload';
import type { Skill } from '../../../payload-types';

export async function findSkillIds(
  payload: Payload,
  keys: Skill['key'][]
): Promise<Skill['id'][]> {
  const ids: Skill['id'][] = [];

  for (const key of keys) {
    const result: PaginatedDocs<Skill> = await payload.find({
      collection: 'skills',
      where: { key: { equals: key } },
      depth: 0,
      limit: 1,
    });

    const skill: Skill | undefined = result.docs[0];

    if (skill == null) {
      throw new Error(`Could not find skill with key "${key}".`);
    }

    ids.push(skill.id);
  }

  return ids;
}
