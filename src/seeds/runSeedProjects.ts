import { seedProjects } from './helpers/seedProjects';
import { getPayload } from 'payload';

import type { BasePayload } from 'payload';

import config from '../../payload.config';

process.env.PAYLOAD_SEED = 'true';

export async function runSeedProjects(): Promise<void> {
  console.log('== Starting seed only Projects... ==');

  const payload: BasePayload = await getPayload({ config });

  await seedProjects(payload);
}

await runSeedProjects();
