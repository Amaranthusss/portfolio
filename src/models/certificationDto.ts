import type { MediaDTO } from './mediaDto';
import type { SkillDTO } from './skillDto';

export interface CertificationDTO {
  id: number;
  slug: string;
  credentialID?: string;
  issueDate: Date;
  image: MediaDTO;
  imageDarkTheme?: MediaDTO;
  url?: string;
  title: string;
  description: string;
  provider: string;
  skills: SkillDTO[];
}
