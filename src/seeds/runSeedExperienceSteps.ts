import { seedExperienceSteps } from './helpers/seedExperienceSteps';
import { getPayload } from 'payload';

import type { BasePayload } from 'payload';

import config from '../../payload.config';

process.env.PAYLOAD_SEED = 'true';

export async function runSeedExperienceSteps(): Promise<void> {
  console.log('== Starting seed only Experience Steps... ==');

  const payload: BasePayload = await getPayload({ config });

  await seedExperienceSteps(payload);
}

await runSeedExperienceSteps();
