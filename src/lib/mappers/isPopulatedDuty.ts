import type { ExperienceStep } from '../../../payload-types';

export function isPopulatedDuty(
  duty: NonNullable<ExperienceStep['duties']>[number]
): duty is { value: string } {
  return duty != null;
}
