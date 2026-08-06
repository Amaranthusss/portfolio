import { seedCertifications } from './helpers/seedCertifications';
import { getPayload } from 'payload';
import { seedSkills } from './helpers/seedSkills';
import { seedMedia } from './helpers/seedMedia';

import config from '../../payload.config';

export type SeedMode = 'fast' | 'diagnostics';

const mode: SeedMode =
  process.argv
    .find((argument) => argument.startsWith('--mode='))
    ?.split('=')[1] === 'diagnostics'
    ? 'diagnostics'
    : 'fast';

async function seed(): Promise<void> {
  let i: number = 1;

  console.log(`[${i++}] Starting skills seed (${mode})...`);

  const payload = await getPayload({ config });

  await seedSkills(payload, mode);
  await seedMedia(payload);
  await seedCertifications(payload);

  console.log(`[${i++}] Payload initialized`);
}

await seed();
