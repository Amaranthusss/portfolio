import type { MediaDto } from './mediaDto';
import type { SkillDTO } from './skillDto';

export interface CertificationDTO {
  id: number;
  slug: string;
  credentialID?: string;
  issueDate: Date;
  image: MediaDto;
  url?: string;
  title: string;
  description: string;
  provider: string;
  skills: SkillDTO[];
}
