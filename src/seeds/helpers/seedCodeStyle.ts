import { seedGlobal } from '@/utils/seedGlobal';

import type { CodeStyleDTO } from '@/models/codeStyleDto';
import type { BasePayload } from 'payload';

import { codeStyle } from '../constants/codeStyle';

export async function seedCodeStyle(payload: BasePayload): Promise<void> {
  await seedGlobal<CodeStyleDTO>(payload, 'code-style', codeStyle);
}
