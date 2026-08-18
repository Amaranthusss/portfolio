import type { CoreTechnologiesGroupSeedData } from '../interfaces/coreTechnologiesSeedData';
import type { CoreTechnology, Media, Skill } from '../../../payload-types';
import type { CoreTechnologiesNodeSeedData } from '../interfaces/coreTechnologiesSeedData';
import type { BasePayload, PaginatedDocs } from 'payload';
import type { CoreTechnologiesSeedData } from '../interfaces/coreTechnologiesSeedData';
import type { SkillKey } from '@/models/skillKey';

import { coreTechnologies } from '../constants/coreTechnologies';
import { locales } from '@/i18n/locale';

export async function seedCoreTechnologies(
  payload: BasePayload
): Promise<void> {
  console.log('== Seeding core technologies ==');

  for (const locale of locales) {
    const seedData: CoreTechnologiesSeedData = coreTechnologies[locale];

    const uniqueIconFilenames: string[] = [
      ...new Set(
        seedData.groups.flatMap(
          (group: CoreTechnologiesGroupSeedData): string[] => {
            return group.nodes.map(
              (node: CoreTechnologiesNodeSeedData): string => node.iconFilename
            );
          }
        )
      ),
    ];

    const uniqueSkillKeys: SkillKey[] = [
      ...new Set(
        seedData.groups.flatMap((group: CoreTechnologiesGroupSeedData) =>
          group.nodes.flatMap(
            (node: CoreTechnologiesNodeSeedData) => node.skills ?? []
          )
        )
      ),
    ];

    const mediaResult: PaginatedDocs<Media> = await payload.find({
      collection: 'media',
      where: { filename: { in: uniqueIconFilenames } },
      limit: uniqueIconFilenames.length,
      depth: 0,
      locale: 'all',
    });

    const mediaMap: Map<Media['filename'], Media['id']> = new Map<
      Media['filename'],
      Media['id']
    >(mediaResult.docs.map((media: Media) => [media.filename, media.id]));

    const skillsResult: PaginatedDocs<Skill> = await payload.find({
      collection: 'skills',
      where: { key: { in: uniqueSkillKeys } },
      limit: uniqueSkillKeys.length,
      depth: 0,
      locale: 'all',
    });

    const skillMap: Map<Skill['key'], Skill['id']> = new Map<
      Skill['key'],
      Skill['id']
    >(skillsResult.docs.map((skill: Skill) => [skill.key, skill.id]));

    const groups: CoreTechnology['groups'] = seedData.groups.map(
      (
        group: CoreTechnologiesGroupSeedData
      ): CoreTechnology['groups'][number] => ({
        slug: group.slug,
        title: group.title,
        references: group.references,

        nodes: group.nodes.map((node: CoreTechnologiesNodeSeedData) => {
          const mediaId: Media['id'] | undefined = mediaMap.get(
            node.iconFilename
          );

          if (mediaId == null) {
            throw new Error(
              `Media "${node.iconFilename}" required by core technology "${node.title}" was not found.`
            );
          }

          const skillIds: Skill['id'][] | undefined =
            node.skills != null
              ? node.skills.map((skillKey: SkillKey) => {
                  const skillId: Skill['id'] | undefined =
                    skillMap.get(skillKey);

                  if (skillId == null) {
                    throw new Error(
                      `Skill "${skillKey}" required by core technology "${node.title}" was not found.`
                    );
                  }

                  return skillId;
                })
              : undefined;

          return {
            title: node.title,
            icon: mediaId,
            skills: skillIds,
          };
        }),
      })
    );

    await payload.updateGlobal({
      slug: 'core-technologies',
      locale,
      data: {
        title: seedData.title,
        content: seedData.content,
        groups,
      },
    });

    console.log(`✓ Updated core technologies for ${locale} locale`);
  }

  console.log('Seeding core technologies completed');
}
