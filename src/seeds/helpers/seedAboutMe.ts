import { seedGlobal } from '@/utils/seedGlobal';

import type { BasePayload } from 'payload';
import type { AboutMeDTO } from '@/models/aboutMeDto';

import { aboutMe } from '../constants/aboutMe';

export async function seedAboutMe(payload: BasePayload): Promise<void> {
  await seedGlobal<AboutMeDTO>(payload, 'about-me', aboutMe);
}
