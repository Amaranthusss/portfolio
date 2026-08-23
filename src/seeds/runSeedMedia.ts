import { getPayload } from 'payload';
import { seedMedia } from './helpers/seedMedia';

import type { BasePayload } from 'payload';

import config from '../../payload.config';

process.env.PAYLOAD_SEED = 'true';

export async function runSeedMedia(): Promise<void> {
  console.log('== Starting seed only Media files... ==');

  const payload: BasePayload = await getPayload({ config });

  await seedMedia(payload);
}

await runSeedMedia();
