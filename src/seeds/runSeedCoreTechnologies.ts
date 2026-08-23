import { seedCoreTechnologies } from './helpers/seedCoreTechnologies';
import { getPayload } from 'payload';

import type { BasePayload } from 'payload';

import config from '../../payload.config';

process.env.PAYLOAD_SEED = 'true';

export async function runSeedCoreTechnologies(): Promise<void> {
  console.log('== Starting seed only Core Technologies... ==');

  const payload: BasePayload = await getPayload({ config });

  await seedCoreTechnologies(payload);
}

await runSeedCoreTechnologies();
