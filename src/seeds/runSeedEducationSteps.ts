import { seedEducationSteps } from './helpers/seedEducationSteps';
import { getPayload } from 'payload';

import type { BasePayload } from 'payload';

import config from '../../payload.config';

process.env.PAYLOAD_SEED = 'true';

export async function runSeedEducationSteps(): Promise<void> {
  console.log('== Starting seed only Education Steps... ==');

  const payload: BasePayload = await getPayload({ config });

  await seedEducationSteps(payload);
}

await runSeedEducationSteps();
