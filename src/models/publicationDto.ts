import type { PersonDTO } from './personDto';
import type { SkillDTO } from './skillDto';

export interface PublicationDTO {
  id: number;
  slug: string;
  publishDate: Date;
  url: string;
  title: string;
  description: string;
  publisher: string;
  keywords: string[];
  authors: PersonDTO[];
  skills: SkillDTO[];
}
