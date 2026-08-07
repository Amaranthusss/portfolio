import { seedCertifications } from './helpers/seedCertifications';
import { getPayload } from 'payload';
import { seedSkills } from './helpers/seedSkills';
import { seedMedia } from './helpers/seedMedia';

import config from '../../payload.config';

async function seed(): Promise<void> {
  console.log('== Starting skills seed... ==');

  const payload = await getPayload({ config });

  await seedSkills(payload);
  await seedMedia(payload);
  await seedCertifications(payload);

  console.log('== Payload initialized ==');
}

await seed();
