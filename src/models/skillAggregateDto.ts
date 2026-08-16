import type { ExperienceStepDTO } from './experienceStepDto';
import type { CertificationDTO } from './certificationDto';
import type { EducationStepDTO } from './educationStepDto';
import type { PublicationDTO } from './publicationDto';
import type { ProjectDTO } from './projectDto';

export type SkillAggregateDTO = {
  projects: ProjectDTO[];
  certifications: CertificationDTO[];
  education: EducationStepDTO[];
  experience: ExperienceStepDTO[];
  publications: PublicationDTO[];
};
