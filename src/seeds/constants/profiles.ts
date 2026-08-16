import type { ProfileSeedData } from '../interfaces/profileSeed';
import type { Skill } from '../../../payload-types';

import { ProfileSlug } from './profileSlug';

const react: Skill['key'][] = [
  'ReactJS',
  'Redux',
  'Zustand',
  'CRA',
  'Vite',
  'NextJS',
  'AntDReact',
  'MaterialUI',
  'DevExtremeReact',
];

const angular: Skill['key'][] = ['Angular', 'Bootstrap', 'DevExtremeAngular'];

const frontendJS: Skill['key'][] = [
  ...react,
  ...angular,
  'Leaflet',
  'PdfMake',
  'Sanity',
  'ThreeJS',
  'YukaJS',
  'TS',
  'Documentation',
];

const backendJS: Skill['key'][] = [
  'NodeJS',
  'ExpressJS',
  'NestJS',
  'NextJS',
  'MongoDB',
  'PostgreSQL',
  'SQLite',
  'GraphQL',
  'GRPC',
  'Microservices',
  'TS',
  'Documentation',
];

const backendCSharp: Skill['key'][] = [
  'DotNet',
  'CSharp',
  'PostgreSQL',
  'MongoDB',
  'SQLite',
  'Microservices',
  'Documentation',
];

const csharpFullstack: Skill['key'][] = [
  ...backendCSharp,
  'Blazor',
  'AntDBlazor',
  'Bootstrap',
  'TS',
  'Leaflet',
];

const fullstackJS: Skill['key'][] = [...frontendJS, ...backendJS];

const deploy: Skill['key'][] = ['Docker', 'Linux', 'AWS', 'GCP', 'VPS'];

const plcProgrammer: Skill['key'][] = [
  'TiaPortal',
  'PLCProgramming',
  'FactoryIO',
  'CommunicationTCPIP',
  'ModbusProtocol',
  'SCL',
  'STL',
  'LAD',
];

const mechatronics: Skill['key'][] = [
  ...plcProgrammer,
  'J5',
  'IQRF',
  'Eagle',
  'Fusion360',
  'CADCAM',
  'AGV',
  'Fanuc',
  'Kuka',
  'Print3D',
  'Documentation',
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
    skills: deploy,
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
