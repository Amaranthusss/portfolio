import type { InputJsonValue } from '../../../src/generated/prisma/runtime/client';

import { productionSystemUtilizingAGV } from '../projects/productionSystemUtilizingAgv';
import { curriculumVitaeGenerator } from '../projects/curriculumVitaeGenerator';

import { ProjectSlug } from '../slugs/projectSlug';
import { Locale } from '../../../src/generated/prisma';

const projectContents = new Map<
  ProjectSlug,
  { [key in Locale]: InputJsonValue }
>();

export function getProjectContent(
  slug: ProjectSlug,
  locale: Locale
): InputJsonValue {
  return projectContents.get(slug)?.[locale] ?? [];
}

projectContents.set(
  ProjectSlug.ProductionSystemUtilizingAGV,
  productionSystemUtilizingAGV
);

projectContents.set(
  ProjectSlug.CurriculumVitaeGenerator,
  curriculumVitaeGenerator
);
