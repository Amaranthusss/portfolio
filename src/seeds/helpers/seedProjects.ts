import { findSkillIds } from './findSkillIds';
import { findLinkIds } from './findLinkIds';
import { findMediaId } from './findMediaId';

import type { ProjectTranslationSeedData } from '../interfaces/projectSeedData';
import type { BasePayload, PaginatedDocs, Payload } from 'payload';
import type { Link, Media, Project, Skill } from '../../../payload-types';
import type { ProjectSeedData } from '../interfaces/projectSeedData';
import type { Locale } from '@/i18n/locale';

import { projects } from '../constants/projects';

export async function seedProjects(payload: BasePayload): Promise<void> {
  console.log('== Seeding projects ==');

  for (const project of projects) {
    await seedProject(payload, project);
  }

  console.log('== Projects seeded successfully ==');
}

async function seedProject(
  payload: Payload,
  project: ProjectSeedData
): Promise<void> {
  const skillIds: Skill['id'][] = await findSkillIds(payload, project.skills);

  const coreSkillIds: Skill['id'][] = await findSkillIds(
    payload,
    project.coreSkills
  );

  const linkIds: Link['id'][] = await findLinkIds(payload, project.links ?? []);

  const thumbnailId: Media['id'] | undefined =
    project.thumbnail != null
      ? await findMediaId(payload, project.thumbnail)
      : undefined;

  const result: PaginatedDocs<Project> = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: project.slug,
      },
    },
    depth: 0,
    limit: 1,
  });

  const existingProject: Project | undefined = result.docs[0];

  let projectId: Project['id'];

  if (existingProject == null) {
    console.log(`Creating project: ${project.slug}`);

    const createdProject: Project = await payload.create({
      collection: 'projects',
      locale: 'en',
      data: {
        slug: project.slug,
        category: project.category,
        startDate: project.startDate,
        endDate: project.endDate,
        isCurrent: project.isCurrent,
        ...(thumbnailId != null && { thumbnail: thumbnailId }),
        skills: skillIds,
        coreSkills: coreSkillIds,
        links: linkIds,
        name: project.translations.en.name,
        subname: project.translations.en.subname,
        description: project.translations.en.description,
        content: project.translations.en.content,
      },
    });

    projectId = createdProject.id;
  } else {
    console.log(`Updating project: ${project.slug}`);

    projectId = existingProject.id;

    await payload.update({
      collection: 'projects',
      id: projectId,
      locale: 'en',
      data: {
        category: project.category,
        startDate: project.startDate,
        endDate: project.endDate,
        isCurrent: project.isCurrent,
        ...(thumbnailId != null && { thumbnail: thumbnailId }),
        skills: skillIds,
        coreSkills: coreSkillIds,
        links: linkIds,
        name: project.translations.en.name,
        subname: project.translations.en.subname,
        description: project.translations.en.description,
        content: project.translations.en.content,
      },
    });
  }

  for (const locale of ['pl'] satisfies Locale[]) {
    const translation: ProjectTranslationSeedData =
      project.translations[locale];

    await payload.update({
      collection: 'projects',
      id: projectId,
      locale,
      data: {
        name: translation.name,
        subname: translation.subname,
        description: translation.description,
        content: translation.content,
      },
    });
  }
}
