import { seedGlobal } from '@/utils/seedGlobal';

import type { PortfolioDocumentationDTO } from '@/models/portfolioDocumentationDto';
import type { BasePayload } from 'payload';

import { portfolioDocumentation } from '../constants/portfolioDocumentation';

export async function seedPortfolioDocumentation(
  payload: BasePayload
): Promise<void> {
  await seedGlobal<PortfolioDocumentationDTO>(
    payload,
    'portfolio-documentation',
    portfolioDocumentation
  );
}
