import { tryRevalidateDeploy } from './helpers/tryRevalidateDeploy';
import { seedCertifications } from './helpers/seedCertifications';
import { seedEducationSteps } from './helpers/seedEducationSteps';
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

  await seedSkills(payload);
  await seedProfiles(payload);
  await seedMedia(payload);
  await seedCertifications(payload);
  await seedEducationSteps(payload);

  console.log('== Payload initialized ==');

  await tryRevalidateDeploy();
}

await seed();
