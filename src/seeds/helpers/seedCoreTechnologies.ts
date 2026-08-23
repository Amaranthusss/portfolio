import { parseMediaFilePath } from './parseMediaPath';
import { getMediaFilePath } from './getMediaFilePath';

import type { CoreTechnologiesGroupSeedData } from '../interfaces/coreTechnologiesSeedData';
import type { CoreTechnologiesNodeSeedData } from '../interfaces/coreTechnologiesSeedData';
import type { CoreTechnology, Media, Skill } from '../../../payload-types';
import type { BasePayload, PaginatedDocs } from 'payload';
import type { CoreTechnologiesSeedData } from '../interfaces/coreTechnologiesSeedData';
import type { MediaFilePath } from '@/models/mediaFilePath';
import type { MediaFile } from '../interfaces/mediaFile';
import type { SkillKey } from '@/models/skillKey';

import { coreTechnologies } from '../constants/coreTechnologies';
import { locales } from '@/i18n/locale';

export async function seedCoreTechnologies(
  payload: BasePayload
): Promise<void> {
  console.log('== Seeding core technologies ==');

  for (const locale of locales) {
    const seedData: CoreTechnologiesSeedData = coreTechnologies[locale];

    const uniqueIconPaths: string[] = [
      ...new Set(
        seedData.groups.flatMap(
          (group: CoreTechnologiesGroupSeedData): string[] =>
            group.nodes.map(
              (node: CoreTechnologiesNodeSeedData): string => node.iconFilename
            )
        )
      ),
    ];

    const mediaFiles: MediaFile[] = uniqueIconPaths.map(
      (iconPath: string): MediaFile => parseMediaFilePath(iconPath)
    );

    const uniqueMediaFilenames: string[] = [
      ...new Set(
        mediaFiles.map((mediaFile: MediaFile): string => mediaFile.filename)
      ),
    ];

    const mediaResult: PaginatedDocs<Media> = await payload.find({
      collection: 'media',
      where: { filename: { in: uniqueMediaFilenames } },
      limit: uniqueMediaFilenames.length,
      depth: 0,
      locale: 'all',
    });

    const mediaMap: Map<MediaFilePath, Media['id']> = new Map();

    for (const media of mediaResult.docs) {
      const mediaPath: MediaFilePath | undefined = getMediaFilePath(media);

      if (mediaPath != null) {
        mediaMap.set(mediaPath, media.id);
      }
    }

    const uniqueSkillKeys: SkillKey[] = [
      ...new Set(
        seedData.groups.flatMap(
          (group: CoreTechnologiesGroupSeedData): SkillKey[] =>
            group.nodes.flatMap(
              (node: CoreTechnologiesNodeSeedData): SkillKey[] =>
                node.skills ?? []
            )
        )
      ),
    ];

    const skillsResult: PaginatedDocs<Skill> = await payload.find({
      collection: 'skills',
      where: { key: { in: uniqueSkillKeys } },
      limit: uniqueSkillKeys.length,
      depth: 0,
      locale: 'all',
    });

    const skillMap: Map<Skill['key'], Skill['id']> = new Map(
      skillsResult.docs.map((skill: Skill): [Skill['key'], Skill['id']] => [
        skill.key,
        skill.id,
      ])
    );

    const groups: CoreTechnology['groups'] = seedData.groups.map(
      (
        group: CoreTechnologiesGroupSeedData
      ): CoreTechnology['groups'][number] => ({
        slug: group.slug,
        title: group.title,
        references: group.references,

        nodes: group.nodes.map(
          (
            node: CoreTechnologiesNodeSeedData
          ): CoreTechnology['groups'][number]['nodes'][number] => {
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
                ? node.skills.map((skillKey: SkillKey): Skill['id'] => {
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
          }
        ),
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
