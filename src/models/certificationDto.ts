import type { MediaDTO } from './mediaDTO';
import type { SkillDTO } from './skillDto';

export interface CertificationDTO {
  id: number;
  slug: string;
  credentialID?: string;
  issueDate: Date;
  image: MediaDTO;
  url?: string;
  title: string;
  description: string;
  provider: string;
  skills: SkillDTO[];
}
