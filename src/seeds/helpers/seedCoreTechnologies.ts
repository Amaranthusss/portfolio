import { seedGlobal } from '@/utils/seedGlobal';

import type { CoreTechnologiesDTO } from '@/models/coreTechnologiesDto';
import type { BasePayload } from 'payload';

import { coreTechnologies } from '../constants/coreTechnologies';

export async function seedCoreTechnologies(
  payload: BasePayload
): Promise<void> {
  await seedGlobal<CoreTechnologiesDTO>(
    payload,
    'core-technologies',
    coreTechnologies
  );
}
