import { getPayload } from 'payload';
import { seedLinks } from './helpers/seedLinks';

import type { BasePayload } from 'payload';

import config from '../../payload.config';

process.env.PAYLOAD_SEED = 'true';

export async function runSeedLinks(): Promise<void> {
  console.log('== Starting seed only Links... ==');

  const payload: BasePayload = await getPayload({ config });

  await seedLinks(payload);
}

await runSeedLinks();
