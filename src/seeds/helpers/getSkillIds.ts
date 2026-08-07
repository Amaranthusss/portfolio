import type { PaginatedDocs, Payload } from 'payload';
import type { Skill } from '../../../payload-types';

export async function getSkillIds(
  payload: Payload,
  keys: Skill['key'][]
): Promise<Skill['id'][]> {
  if (keys.length === 0) return [];

  const result: PaginatedDocs<Skill> = await payload.find({
    collection: 'skills',
    where: { key: { in: keys } },
    limit: keys.length,
    depth: 0,
  });

  const foundKeys: Set<Skill['key']> = new Set(
    result.docs.map((skill) => skill.key)
  );

  const missingKeys: Skill['key'][] = keys.filter((key) => !foundKeys.has(key));

  if (missingKeys.length > 0) {
    throw new Error(`Skills not found: ${missingKeys.join(', ')}`);
  }

  return keys.map((key) => {
    const skill: Skill | undefined = result.docs.find(
      (item: Skill): boolean => item.key === key
    );

    if (skill == null) throw new Error(`Skill "${key}" not found.`);

    return skill.id;
  });
}
