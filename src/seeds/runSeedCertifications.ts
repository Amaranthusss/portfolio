import { seedCertifications } from './helpers/seedCertifications';
import { getPayload } from 'payload';

import type { BasePayload } from 'payload';

import config from '../../payload.config';

process.env.PAYLOAD_SEED = 'true';

export async function runSeedCertifications(): Promise<void> {
  console.log('== Starting seed only Certifications... ==');

  const payload: BasePayload = await getPayload({ config });

  await seedCertifications(payload);
}

await runSeedCertifications();
