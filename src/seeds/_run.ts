import { tryRevalidateDeploy } from './helpers/tryRevalidateDeploy';
import { seedExperienceSteps } from './helpers/seedExperienceSteps';
import { seedCertifications } from './helpers/seedCertifications';
import { seedEducationSteps } from './helpers/seedEducationSteps';
import { seedPublications } from './helpers/seedPublications';
import { seedProfiles } from './helpers/seedProfiles';
import { getPayload } from 'payload';
import { seedSkills } from './helpers/seedSkills';
import { seedMedia } from './helpers/seedMedia';

import type { BasePayload } from 'payload';

import config from '../../payload.config';

process.env.PAYLOAD_SEED = 'true';

async function seed(): Promise<void> {
  console.log('== Starting seed... ==');

  const payload: BasePayload = await getPayload({ config });

  try {
    await seedSkills(payload);
    await seedMedia(payload);
    await seedProfiles(payload);
    await seedCertifications(payload);
    await seedEducationSteps(payload);
    await seedExperienceSteps(payload);
    await seedPublications(payload);

    console.log('== Payload initialized ==');

    await tryRevalidateDeploy();
  } finally {
    await payload.destroy();
  }
}

await seed();
