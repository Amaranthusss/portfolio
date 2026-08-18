import type { ProfileSeedData } from '../interfaces/profileSeed';
import type { SkillKey } from '@/models/skillKey';

import { ProfileSlug } from './profileSlug';

const _generalIt: SkillKey[] = ['Documentation', 'Microservices', 'Git'];

const _databases: SkillKey[] = [
  'DB',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'SQLite',

  'ORM',
  'TypeORM',
  'Drizzle',
  'Prisma',

  'GraphQL',
];

const _jsFrontendLibraries: SkillKey[] = [
  'Redux',
  'Zustand',

  'Leaflet',
  'ThreeJS',
  'PdfMake',
  'YukaJS',
];

const _jsBackendFrameworks: SkillKey[] = [
  'NodeJS',
  'ExpressJS',
  'NestJS',
  'NextJS',
];

const _cms: SkillKey[] = ['SanityCMS', 'PayloadCMS'];

const _cloudServices: SkillKey[] = ['GRPC', 'AWS', 'GCP'];

const react: SkillKey[] = [
  'ReactJS',
  'CRA',
  'Vite',
  'NextJS',
  'AntDReact',
  'MaterialUI',
  'DevExtremeReact',
];

const angular: SkillKey[] = ['Angular', 'DevExtremeAngular'];

const frontendJS: SkillKey[] = [
  'JS',
  'TS',
  ...react,
  ...angular,
  ..._cms,
  ..._jsFrontendLibraries,
  ..._generalIt,
];

const backendJS: SkillKey[] = [
  'JS',
  'TS',
  ..._databases,
  ..._generalIt,
  ..._jsBackendFrameworks,
];

const backendCSharp: SkillKey[] = [
  'DotNet',
  'CSharp',
  ..._databases,
  ..._generalIt,
];

const deployment: SkillKey[] = ['Docker', 'Linux', 'VPS', ..._cloudServices];

const fullstackJS: SkillKey[] = [...frontendJS, ...backendJS, ...deployment];

const csharpFullstack: SkillKey[] = [
  ...backendCSharp,
  ...deployment,
  'Blazor',
  'AntDBlazor',
  'Leaflet',
  'TS',
];

const plcProgrammer: SkillKey[] = [
  'TiaPortal',
  'PLCProgramming',
  'FactoryIO',
  'CommunicationTCPIP',
  'ModbusProtocol',
  'SCL',
  'STL',
  'LAD',
];

const mechatronics: SkillKey[] = [
  ...plcProgrammer,
  ..._generalIt,
  'J5',
  'IQRF',
  'Eagle',
  'Fusion360',
  'CADCAM',
  'AGV',
  'Fanuc',
  'Kuka',
  'Print3D',
];

export const profileSkills: ProfileSeedData[] = [
  {
    slug: ProfileSlug.FullstackJS,
    orderNumber: 0,
    skills: fullstackJS,
    translations: {
      pl: 'Full-stack JavaScript',
      en: 'Full-stack JavaScript',
    },
  },
  {
    slug: ProfileSlug.React,
    orderNumber: 1,
    skills: react,
    translations: {
      pl: 'React Developer',
      en: 'React Developer',
    },
  },
  {
    slug: ProfileSlug.FrontendJS,
    orderNumber: 2,
    skills: frontendJS,
    translations: {
      pl: 'Front-end JavaScript',
      en: 'Front-end JavaScript',
    },
  },
  {
    slug: ProfileSlug.BackendJS,
    orderNumber: 3,
    skills: backendJS,
    translations: {
      pl: 'Backend JavaScript',
      en: 'Backend JavaScript',
    },
  },
  {
    slug: ProfileSlug.Angular,
    orderNumber: 4,
    skills: angular,
    translations: {
      pl: 'Angular Developer',
      en: 'Angular Developer',
    },
  },
  {
    slug: ProfileSlug.Deploy,
    orderNumber: 5,
    skills: deployment,
    translations: {
      pl: 'DevOps / Deployment',
      en: 'DevOps / Deployment',
    },
  },
  {
    slug: ProfileSlug.BackendCSharp,
    orderNumber: 6,
    skills: backendCSharp,
    translations: {
      pl: 'Back-end .NET / C#',
      en: 'Back-end .NET / C#',
    },
  },
  {
    slug: ProfileSlug.CSharpFullstack,
    orderNumber: 7,
    skills: csharpFullstack,
    translations: {
      pl: 'Full-stack .NET',
      en: 'Full-stack .NET',
    },
  },
  {
    slug: ProfileSlug.PLCProgramming,
    orderNumber: 8,
    skills: plcProgrammer,
    translations: {
      pl: 'Programista PLC',
      en: 'PLC Programmer',
    },
  },
  {
    slug: ProfileSlug.Mechatronics,
    orderNumber: 9,
    skills: mechatronics,
    translations: {
      pl: 'Mechatronika / Automatyka',
      en: 'Mechatronics / Automation',
    },
  },
];
